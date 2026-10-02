import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { MenuItem, MenuCategory, Order, OrderStatus, RestaurantSettings } from '../types';
import { 
  LayoutDashboard, Utensils, ClipboardList, Settings as SettingsIcon, 
  Plus, Edit, Trash2, CheckCircle2, XCircle, Clock, DollarSign, 
  Lock, Unlock, ShieldAlert, Sparkles, ChefHat, Save, RefreshCw, Search
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { 
    menuItems, addMenuItem, updateMenuItem, deleteMenuItem, toggleDishAvailability,
    categories, addCategory, updateCategory, deleteCategory,
    orders, updateOrderStatus, settings, updateSettings 
  } = useStore();

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(true);
  const [adminPin, setAdminPin] = useState('');
  const [pinError, setPinError] = useState(false);

  const [activeTab, setActiveTab] = useState<'metrics' | 'orders' | 'menu' | 'categories' | 'settings'>('metrics');
  const [orderFilterStatus, setOrderFilterStatus] = useState<string>('all');
  const [orderSearch, setOrderSearch] = useState<string>('');

  // Dish Editor Modal State
  const [editingDish, setEditingDish] = useState<MenuItem | null>(null);
  const [isNewDish, setIsNewDish] = useState(false);

  // Pin verification
  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPin === '1234' || adminPin.trim() === 'admin') {
      setIsAdminAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  // Operational metrics calculations
  const totalOrdersCount = orders.length;
  const pendingOrdersCount = orders.filter(o => o.orderStatus === 'pending_confirmation').length;
  const preparingOrdersCount = orders.filter(o => o.orderStatus === 'preparing' || o.orderStatus === 'confirmed').length;
  const deliveringOrdersCount = orders.filter(o => o.orderStatus === 'delivering' || o.orderStatus === 'ready').length;
  const completedOrdersCount = orders.filter(o => o.orderStatus === 'completed').length;
  
  const totalRevenue = orders
    .filter(o => o.paymentStatus === 'paid' || o.orderStatus === 'completed')
    .reduce((sum, o) => sum + o.total, 0);

  const pendingRevenue = orders
    .filter(o => o.paymentStatus !== 'paid' && o.orderStatus !== 'completed' && o.orderStatus !== 'cancelled')
    .reduce((sum, o) => sum + o.total, 0);

  // Dish Edit Handler
  const handleOpenNewDish = () => {
    const newDishItem: MenuItem = {
      id: `dish-${Date.now()}`,
      name: '',
      slug: `dish-${Date.now()}`,
      description: '',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
      categoryId: categories[0]?.id || 'cat-single',
      basePrice: 150,
      currency: 'THB',
      portionSize: '1 จาน (300 กรัม)',
      preparationTimeMinutes: 15,
      isAvailable: true,
      isPublished: true,
      isFeatured: false,
      displayOrder: menuItems.length + 1,
      dietaryLabels: ['ปรุงสด'],
      allergenInformation: [],
      ingredients: [
        { id: `ing-${Date.now()}-1`, name: 'วัตถุดิบหลัก', quantity: '150', unit: 'กรัม', notes: 'คัดสดใหม่' }
      ],
      preparationSteps: [
        { stepNumber: 1, instruction: 'ตั้งกระทะให้ร้อน แล้วปรุงอาหารตามสูตร' }
      ],
      optionGroups: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setEditingDish(newDishItem);
    setIsNewDish(true);
  };

  const handleSaveDish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingDish) return;
    if (isNewDish) {
      addMenuItem(editingDish);
    } else {
      updateMenuItem(editingDish);
    }
    setEditingDish(null);
  };

  // Filtered orders list
  const filteredOrders = orders.filter(o => {
    if (orderFilterStatus !== 'all' && o.orderStatus !== orderFilterStatus) return false;
    if (orderSearch.trim()) {
      const q = orderSearch.toLowerCase();
      return o.orderNumber.toLowerCase().includes(q) || o.customerName.toLowerCase().includes(q);
    }
    return true;
  });

  if (!isAdminAuthenticated) {
    return (
      <div className="max-w-md mx-auto my-16 bg-white p-8 rounded-3xl border border-[#E7E2D9] text-center space-y-4 shadow-md">
        <div className="w-16 h-16 rounded-2xl bg-[#FAF0EC] text-[#C85A32] flex items-center justify-center mx-auto">
          <Lock className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-[#1C1917] font-serif">ยืนยันสิทธิ์ผู้ดูแลระบบ (Admin Authorization)</h2>
        <p className="text-xs text-[#666059]">กรุณากรอกรหัสผ่านเพื่อเข้าสู่ระบบจัดการร้านอาหาร</p>

        <form onSubmit={handlePinSubmit} className="space-y-3">
          <input
            type="password"
            placeholder="กรอก PIN (รหัสสาธิต: 1234)"
            value={adminPin}
            onChange={(e) => setAdminPin(e.target.value)}
            className="w-full p-3 text-center text-sm bg-[#FAF7F2] border border-[#E7E2D9] rounded-xl font-mono"
          />
          {pinError && <span className="text-xs text-[#C85A32] block">รหัสผ่านไม่ถูกต้อง (ลองใส่: 1234)</span>}
          <button
            type="submit"
            className="w-full py-3 bg-[#2D4F36] text-white font-bold rounded-xl text-xs hover:bg-[#1E3725]"
          >
            เข้าสู่ระบบผู้ดูแล
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Admin Header */}
      <div className="bg-[#2D4F36] text-white p-6 sm:p-8 rounded-3xl shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
            <LayoutDashboard className="w-4 h-4" />
            <span>Artisanal Hearth Restaurant Management</span>
          </div>
          <h1 className="text-2xl font-bold font-serif">แผงควบคุมระบบจัดการร้านอาหาร</h1>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 bg-black/20 p-1.5 rounded-2xl">
          <button
            onClick={() => setActiveTab('metrics')}
            className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              activeTab === 'metrics' ? 'bg-white text-[#2D4F36]' : 'text-white/80 hover:text-white'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>ภาพรวม</span>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors relative ${
              activeTab === 'orders' ? 'bg-white text-[#2D4F36]' : 'text-white/80 hover:text-white'
            }`}
          >
            <ClipboardList className="w-4 h-4" />
            <span>ออเดอร์</span>
            {pendingOrdersCount > 0 && (
              <span className="w-2 h-2 rounded-full bg-[#C85A32]"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('menu')}
            className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              activeTab === 'menu' ? 'bg-white text-[#2D4F36]' : 'text-white/80 hover:text-white'
            }`}
          >
            <Utensils className="w-4 h-4" />
            <span>จัดการเมนู</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              activeTab === 'settings' ? 'bg-white text-[#2D4F36]' : 'text-white/80 hover:text-white'
            }`}
          >
            <SettingsIcon className="w-4 h-4" />
            <span>ตั้งค่าร้าน</span>
          </button>
        </div>
      </div>

      {/* TAB 1: Metrics Overview */}
      {activeTab === 'metrics' && (
        <div className="space-y-8">
          
          {/* Top KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-3xl border border-[#E7E2D9] shadow-2xs space-y-2">
              <span className="text-xs font-medium text-[#666059]">รายได้รวมที่รับชำระแล้ว</span>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-bold text-[#2D4F36]">฿{totalRevenue.toLocaleString()}</span>
                <DollarSign className="w-6 h-6 text-[#2D4F36]" />
              </div>
              <span className="text-[11px] text-[#999288] block">รอยืนยันชำระ: ฿{pendingRevenue.toLocaleString()}</span>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#E7E2D9] shadow-2xs space-y-2">
              <span className="text-xs font-medium text-[#666059]">คำสั่งซื้อทั้งหมด</span>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-bold text-[#1C1917]">{totalOrdersCount}</span>
                <ClipboardList className="w-6 h-6 text-[#1C1917]" />
              </div>
              <span className="text-[11px] text-[#2D4F36] block">สำเร็จแล้ว {completedOrdersCount} ออเดอร์</span>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#E7E2D9] shadow-2xs space-y-2">
              <span className="text-xs font-medium text-[#666059]">รอร้านยืนยัน (Pending)</span>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-bold text-[#C85A32]">{pendingOrdersCount}</span>
                <Clock className="w-6 h-6 text-[#C85A32]" />
              </div>
              <span className="text-[11px] text-[#C85A32] block">ต้องรีบกดยืนยันเพื่อเริ่มทำ</span>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#E7E2D9] shadow-2xs space-y-2">
              <span className="text-xs font-medium text-[#666059]">กำลังปรุงและจัดส่ง</span>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-bold text-[#2D4F36]">{preparingOrdersCount + deliveringOrdersCount}</span>
                <ChefHat className="w-6 h-6 text-[#2D4F36]" />
              </div>
              <span className="text-[11px] text-[#666059] block">ในครัว {preparingOrdersCount} • บนทาง {deliveringOrdersCount}</span>
            </div>

          </div>

          {/* Quick Actions & Menu Status */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Sold out items summary */}
            <div className="lg:col-span-6 bg-white p-6 rounded-3xl border border-[#E7E2D9] space-y-4">
              <h3 className="font-bold text-sm text-[#1C1917] flex items-center justify-between">
                <span>สถานะสินค้าวัตถุดิบหมด (Sold Out)</span>
                <span className="text-xs font-normal text-[#666059]">
                  หมด {menuItems.filter(m => !m.isAvailable).length} เมนู
                </span>
              </h3>

              <div className="space-y-2">
                {menuItems.filter(m => !m.isAvailable).length === 0 ? (
                  <p className="text-xs text-[#999288] py-4 text-center">สินค้าทุกรายการพร้อมขายตามปกติ</p>
                ) : (
                  menuItems.filter(m => !m.isAvailable).map(dish => (
                    <div key={dish.id} className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E7E2D9] flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <img src={dish.image} alt="" className="w-8 h-8 rounded-lg object-cover" />
                        <span className="font-semibold text-[#1C1917]">{dish.name}</span>
                      </div>
                      <button
                        onClick={() => toggleDishAvailability(dish.id)}
                        className="px-3 py-1 bg-[#2D4F36] text-white text-[11px] font-semibold rounded-lg hover:bg-[#1E3725]"
                      >
                        เปลี่ยนเป็นพร้อมขาย
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Recent Orders List */}
            <div className="lg:col-span-6 bg-white p-6 rounded-3xl border border-[#E7E2D9] space-y-4">
              <h3 className="font-bold text-sm text-[#1C1917] flex items-center justify-between">
                <span>คำสั่งซื้อล่าสุด</span>
                <button onClick={() => setActiveTab('orders')} className="text-xs font-semibold text-[#2D4F36] hover:underline">
                  ดูทั้งหมด
                </button>
              </h3>

              <div className="space-y-2 text-xs">
                {orders.slice(0, 4).map(ord => (
                  <div key={ord.id} className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E7E2D9] flex items-center justify-between">
                    <div>
                      <span className="font-bold text-[#1C1917] block">{ord.orderNumber}</span>
                      <span className="text-[#666059]">{ord.customerName} • {ord.items.length} รายการ</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-[#2D4F36] block">฿{ord.total}</span>
                      <span className="text-[10px] text-[#C85A32] font-semibold">{ord.orderStatus}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      )}

      {/* TAB 2: Orders Management */}
      {activeTab === 'orders' && (
        <div className="space-y-6">
          
          {/* Controls Bar */}
          <div className="bg-white p-4 rounded-2xl border border-[#E7E2D9] flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Filter Status Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 w-full md:w-auto">
              {['all', 'pending_confirmation', 'confirmed', 'preparing', 'delivering', 'completed', 'cancelled'].map(st => (
                <button
                  key={st}
                  onClick={() => setOrderFilterStatus(st)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize shrink-0 ${
                    orderFilterStatus === st ? 'bg-[#2D4F36] text-white' : 'bg-[#FAF7F2] text-[#666059] border border-[#E7E2D9]'
                  }`}
                >
                  {st === 'all' ? 'ทั้งหมด' : st}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="ค้นหาเลขที่ หรือชื่อลูกค้า..."
                value={orderSearch}
                onChange={(e) => setOrderSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-[#FAF7F2] border border-[#E7E2D9] rounded-xl"
              />
              <Search className="w-4 h-4 text-[#999288] absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

          </div>

          {/* Orders Table */}
          <div className="bg-white rounded-3xl border border-[#E7E2D9] overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#FAF7F2] border-b border-[#E7E2D9] text-[#1C1917] font-semibold">
                    <th className="p-4">หมายเลขออเดอร์</th>
                    <th className="p-4">ลูกค้า & เบอร์ติดต่อ</th>
                    <th className="p-4">รูปแบบ</th>
                    <th className="p-4">รายการอาหาร</th>
                    <th className="p-4">ยอดรวม</th>
                    <th className="p-4">สถานะปัจจุบัน</th>
                    <th className="p-4 text-right">ปรับสถานะออเดอร์</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F4EFE6]">
                  {filteredOrders.map(ord => (
                    <tr key={ord.id} className="hover:bg-[#FAF7F2]/50">
                      <td className="p-4 font-bold text-[#1C1917] font-mono">
                        {ord.orderNumber}
                        <span className="block text-[10px] text-[#999288] font-normal">
                          {new Date(ord.createdAt).toLocaleTimeString('th-TH')}
                        </span>
                      </td>

                      <td className="p-4">
                        <span className="font-semibold text-[#1C1917] block">{ord.customerName}</span>
                        <span className="text-[#666059] block">{ord.customerPhone}</span>
                      </td>

                      <td className="p-4">
                        <span className="capitalize px-2 py-0.5 rounded bg-[#F4EFE6] text-[#666059] font-medium">
                          {ord.fulfillmentType}
                        </span>
                      </td>

                      <td className="p-4 max-w-xs">
                        <div className="space-y-0.5 truncate">
                          {ord.items.map((it, i) => (
                            <span key={i} className="block truncate">
                              • {it.itemName} (x{it.quantity})
                            </span>
                          ))}
                        </div>
                      </td>

                      <td className="p-4 font-bold text-[#2D4F36]">
                        ฿{ord.total}
                        <span className="block text-[10px] text-[#666059] font-normal">{ord.paymentMethod}</span>
                      </td>

                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full font-bold text-[11px] ${
                          ord.orderStatus === 'completed' ? 'bg-[#EBF2ED] text-[#2D4F36]' :
                          ord.orderStatus === 'pending_confirmation' ? 'bg-[#FAF0EC] text-[#C85A32]' :
                          'bg-[#F4EFE6] text-[#1C1917]'
                        }`}>
                          {ord.orderStatus}
                        </span>
                      </td>

                      <td className="p-4 text-right space-x-1">
                        {ord.orderStatus === 'pending_confirmation' && (
                          <button
                            onClick={() => updateOrderStatus(ord.id, 'confirmed', 'ร้านยืนยันรับออเดอร์แล้ว')}
                            className="px-2.5 py-1.5 bg-[#2D4F36] text-white rounded-lg font-semibold hover:bg-[#1E3725]"
                          >
                            รับออเดอร์
                          </button>
                        )}
                        {ord.orderStatus === 'confirmed' && (
                          <button
                            onClick={() => updateOrderStatus(ord.id, 'preparing', 'เริ่มปรุงอาหารในครัว')}
                            className="px-2.5 py-1.5 bg-[#2D4F36] text-white rounded-lg font-semibold hover:bg-[#1E3725]"
                          >
                            เริ่มปรุง
                          </button>
                        )}
                        {ord.orderStatus === 'preparing' && (
                          <button
                            onClick={() => updateOrderStatus(ord.id, 'delivering', 'อาหารพร้อมจัดส่ง')}
                            className="px-2.5 py-1.5 bg-[#C85A32] text-white rounded-lg font-semibold hover:bg-[#A64420]"
                          >
                            พร้อมเสิร์ฟ/ส่ง
                          </button>
                        )}
                        {ord.orderStatus === 'delivering' && (
                          <button
                            onClick={() => updateOrderStatus(ord.id, 'completed', 'เสร็จสิ้นการส่งมอบ')}
                            className="px-2.5 py-1.5 bg-[#2D4F36] text-white rounded-lg font-semibold hover:bg-[#1E3725]"
                          >
                            จบออเดอร์
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* TAB 3: Menu Management */}
      {activeTab === 'menu' && (
        <div className="space-y-6">
          
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#1C1917] font-serif">
              จัดการรายการเมนูอาหาร ({menuItems.length} เมนู)
            </h2>

            <button
              onClick={handleOpenNewDish}
              className="px-4 py-2.5 bg-[#2D4F36] hover:bg-[#1E3725] text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>เพิ่มเมนูใหม่</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((dish) => (
              <div key={dish.id} className="bg-white rounded-2xl border border-[#E7E2D9] p-4 space-y-3 shadow-2xs flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="relative aspect-16/9 rounded-xl overflow-hidden bg-[#F4EFE6]">
                    <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
                    <button
                      onClick={() => toggleDishAvailability(dish.id)}
                      className={`absolute top-2 right-2 px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        dish.isAvailable ? 'bg-[#2D4F36] text-white' : 'bg-[#C85A32] text-white'
                      }`}
                    >
                      {dish.isAvailable ? 'พร้อมขาย' : 'สินค้าหมด'}
                    </button>
                  </div>

                  <div>
                    <h3 className="font-bold text-sm text-[#1C1917]">{dish.name}</h3>
                    <p className="text-xs text-[#666059] line-clamp-2 mt-0.5">{dish.description}</p>
                    <span className="text-sm font-bold text-[#2D4F36] block mt-1">฿{dish.basePrice}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F4EFE6] flex items-center justify-between text-xs">
                  <button
                    onClick={() => {
                      setEditingDish(dish);
                      setIsNewDish(false);
                    }}
                    className="px-3 py-1.5 bg-[#FAF7F2] border border-[#E7E2D9] rounded-lg text-[#1C1917] font-semibold flex items-center gap-1"
                  >
                    <Edit className="w-3.5 h-3.5 text-[#2D4F36]" />
                    <span>แก้ไข</span>
                  </button>

                  <button
                    onClick={() => deleteMenuItem(dish.id)}
                    className="p-1.5 text-[#999288] hover:text-[#C85A32]"
                    title="ลบเมนูนี้"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* TAB 4: Restaurant Settings */}
      {activeTab === 'settings' && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E7E2D9] space-y-6 max-w-3xl mx-auto shadow-2xs">
          <h2 className="text-xl font-bold text-[#1C1917] font-serif flex items-center gap-2">
            <SettingsIcon className="w-5 h-5 text-[#2D4F36]" />
            <span>การตั้งค่าข้อมูลร้านและระบบจัดส่ง</span>
          </h2>

          <div className="space-y-4 text-xs">
            <div className="space-y-1">
              <label className="font-semibold text-[#1C1917]">ชื่อร้านอาหาร</label>
              <input
                type="text"
                value={settings.name}
                onChange={(e) => updateSettings({ ...settings, name: e.target.value })}
                className="w-full p-3 bg-[#FAF7F2] border border-[#E7E2D9] rounded-xl text-[#1C1917]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-semibold text-[#1C1917]">เบอร์โทรศัพท์ร้าน</label>
                <input
                  type="text"
                  value={settings.phone}
                  onChange={(e) => updateSettings({ ...settings, phone: e.target.value })}
                  className="w-full p-3 bg-[#FAF7F2] border border-[#E7E2D9] rounded-xl text-[#1C1917]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-[#1C1917]">เวลาเปิด-ปิดบริการ</label>
                <input
                  type="text"
                  value={settings.openingHours}
                  onChange={(e) => updateSettings({ ...settings, openingHours: e.target.value })}
                  className="w-full p-3 bg-[#FAF7F2] border border-[#E7E2D9] rounded-xl text-[#1C1917]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-[#1C1917]">ที่อยู่ร้าน</label>
              <textarea
                rows={2}
                value={settings.address}
                onChange={(e) => updateSettings({ ...settings, address: e.target.value })}
                className="w-full p-3 bg-[#FAF7F2] border border-[#E7E2D9] rounded-xl text-[#1C1917]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="space-y-1">
                <label className="font-semibold text-[#1C1917]">ค่าบริการจัดส่งมาตรฐาน (฿)</label>
                <input
                  type="number"
                  value={settings.deliveryFee}
                  onChange={(e) => updateSettings({ ...settings, deliveryFee: Number(e.target.value) })}
                  className="w-full p-3 bg-[#FAF7F2] border border-[#E7E2D9] rounded-xl text-[#1C1917]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-[#1C1917]">ยอดซื้อขั้นต่ำส่งฟรี (฿)</label>
                <input
                  type="number"
                  value={settings.freeDeliveryThreshold}
                  onChange={(e) => updateSettings({ ...settings, freeDeliveryThreshold: Number(e.target.value) })}
                  className="w-full p-3 bg-[#FAF7F2] border border-[#E7E2D9] rounded-xl text-[#1C1917]"
                />
              </div>
            </div>

            <div className="space-y-1 pt-2">
              <label className="font-semibold text-[#1C1917]">เบอร์ / ID พร้อมเพย์สำหรับรับเงิน</label>
              <input
                type="text"
                value={settings.promptpayId}
                onChange={(e) => updateSettings({ ...settings, promptpayId: e.target.value })}
                className="w-full p-3 bg-[#FAF7F2] border border-[#E7E2D9] rounded-xl text-[#1C1917]"
              />
            </div>
          </div>
        </div>
      )}

      {/* Edit Dish Modal */}
      {editingDish && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <form onSubmit={handleSaveDish} className="bg-white max-w-2xl w-full rounded-3xl p-6 space-y-4 my-auto border border-[#E7E2D9]">
            <div className="flex justify-between items-center pb-3 border-b border-[#E7E2D9]">
              <h3 className="font-bold text-base text-[#1C1917]">
                {isNewDish ? 'สร้างเมนูอาหารใหม่' : 'แก้ไขเมนูอาหาร'}
              </h3>
              <button type="button" onClick={() => setEditingDish(null)} className="text-[#666059]">
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs max-h-[70vh] overflow-y-auto pr-1">
              <div className="space-y-1">
                <label className="font-semibold text-[#1C1917]">ชื่อเมนูอาหาร (ภาษาไทย)</label>
                <input
                  type="text"
                  required
                  value={editingDish.name}
                  onChange={(e) => setEditingDish({ ...editingDish, name: e.target.value })}
                  className="w-full p-2.5 bg-[#FAF7F2] border border-[#E7E2D9] rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-[#1C1917]">ราคาขายมาตรฐาน (฿)</label>
                  <input
                    type="number"
                    required
                    value={editingDish.basePrice}
                    onChange={(e) => setEditingDish({ ...editingDish, basePrice: Number(e.target.value) })}
                    className="w-full p-2.5 bg-[#FAF7F2] border border-[#E7E2D9] rounded-xl"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-[#1C1917]">หมวดหมู่อาหาร</label>
                  <select
                    value={editingDish.categoryId}
                    onChange={(e) => setEditingDish({ ...editingDish, categoryId: e.target.value })}
                    className="w-full p-2.5 bg-[#FAF7F2] border border-[#E7E2D9] rounded-xl font-medium"
                  >
                    {categories.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-[#1C1917]">URL รูปภาพอาหาร</label>
                <input
                  type="url"
                  value={editingDish.image}
                  onChange={(e) => setEditingDish({ ...editingDish, image: e.target.value })}
                  className="w-full p-2.5 bg-[#FAF7F2] border border-[#E7E2D9] rounded-xl"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-[#1C1917]">คำอธิบายเมนูอาหาร</label>
                <textarea
                  rows={3}
                  value={editingDish.description}
                  onChange={(e) => setEditingDish({ ...editingDish, description: e.target.value })}
                  className="w-full p-2.5 bg-[#FAF7F2] border border-[#E7E2D9] rounded-xl"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-[#E7E2D9] flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setEditingDish(null)}
                className="px-4 py-2 bg-[#FAF7F2] border border-[#E7E2D9] rounded-xl font-semibold text-xs"
              >
                ยกเลิก
              </button>

              <button
                type="submit"
                className="px-5 py-2 bg-[#2D4F36] text-white font-bold rounded-xl text-xs hover:bg-[#1E3725]"
              >
                บันทึกเมนู
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
};
