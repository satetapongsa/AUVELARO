import React from 'react';
import { useStore } from '../context/StoreContext';
import { Order, MenuItem } from '../types';
import { FoodCard } from '../components/FoodCard';
import { 
  User, ShoppingBag, Heart, RefreshCw, ChevronRight, 
  MapPin, Phone, ShieldCheck, Clock, CheckCircle2 
} from 'lucide-react';

interface AccountPageProps {
  onSelectOrder: (orderId: string) => void;
}

export const AccountPage: React.FC<AccountPageProps> = ({ onSelectOrder }) => {
  const { 
    orders, favorites, menuItems, addToCart, 
    setActiveTab, setSelectedDish 
  } = useStore();

  const favoriteDishes = menuItems.filter(m => favorites.includes(m.id));

  const handleReorder = (order: Order) => {
    let readdedCount = 0;
    order.items.forEach(item => {
      const liveDish = menuItems.find(m => m.id === item.menuItemId);
      if (liveDish && liveDish.isAvailable) {
        addToCart(liveDish, item.quantity, item.selectedOptions, item.specialInstructions);
        readdedCount++;
      }
    });

    if (readdedCount > 0) {
      alert(`เพิ่ม ${readdedCount} รายการลงในตะกร้าของคุณเรียบร้อยแล้วด้วยราคาปัจจุบัน`);
    } else {
      alert('ขออภัย เมนูในคำสั่งซื้อเดิมไม่พร้อมจำหน่ายในขณะนี้');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Account Profile Header */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E7E2D9] shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-16 h-16 rounded-2xl bg-[#2D4F36] text-white flex items-center justify-center text-2xl font-bold font-serif shadow-sm">
            AH
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1C1917] font-serif">คุณสมชาย ใจดี</h1>
            <p className="text-xs text-[#666059] mt-0.5">สมาชิก Artisanal Hearth Club • somchai@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs text-[#666059] bg-[#FAF7F2] p-3 rounded-2xl border border-[#E7E2D9]">
          <div>
            <span className="font-bold text-sm text-[#1C1917] block">{orders.length}</span>
            <span>ออเดอร์ทั้งหมด</span>
          </div>
          <span className="text-[#E7E2D9]">|</span>
          <div>
            <span className="font-bold text-sm text-[#1C1917] block">{favorites.length}</span>
            <span>รายการโปรด</span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="space-y-8">
        
        {/* Order History */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#1C1917] font-serif flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#2D4F36]" />
              <span>ประวัติการสั่งซื้ออาหาร (Order History)</span>
            </h2>
          </div>

          {orders.length === 0 ? (
            <div className="bg-white p-8 rounded-3xl border border-[#E7E2D9] text-center text-xs text-[#666059]">
              ยังไม่มีประวัติการสั่งซื้อในระบบ
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((ord) => (
                <div key={ord.id} className="bg-white p-5 rounded-2xl border border-[#E7E2D9] shadow-2xs space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-[#F4EFE6]">
                    <div>
                      <span className="font-bold text-sm text-[#1C1917]">{ord.orderNumber}</span>
                      <span className="text-xs text-[#666059] block">
                        วันที่สั่ง: {new Date(ord.createdAt).toLocaleDateString('th-TH')}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EBF2ED] text-[#2D4F36]">
                        {ord.orderStatus === 'completed' ? 'ส่งมอบเรียบร้อย' : 'กำลังดำเนินการ'}
                      </span>
                      <span className="text-sm font-bold text-[#1C1917]">฿{ord.total}</span>
                    </div>
                  </div>

                  {/* Items list snippet */}
                  <div className="text-xs text-[#666059] space-y-1">
                    {ord.items.map((it, i) => (
                      <div key={i} className="flex justify-between">
                        <span>• {it.itemName} (x{it.quantity})</span>
                        <span>฿{it.lineTotal}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-[#F4EFE6] flex items-center justify-between">
                    <button
                      onClick={() => onSelectOrder(ord.orderNumber)}
                      className="text-xs font-semibold text-[#2D4F36] hover:underline flex items-center gap-1"
                    >
                      <span>ดูรายละเอียด / ติดตามสถานะ</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => handleReorder(ord)}
                      className="px-3 py-1.5 bg-[#2D4F36] hover:bg-[#1E3725] text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-2xs"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>สั่งซ้ำอีกครั้ง (Reorder)</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Favorite Dishes */}
        <div className="space-y-4 pt-4 border-t border-[#E7E2D9]">
          <h2 className="text-xl font-bold text-[#1C1917] font-serif flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#C85A32]" />
            <span>รายการเมนูอาหารที่ชอบ (Favorite Dishes)</span>
          </h2>

          {favoriteDishes.length === 0 ? (
            <div className="bg-white p-8 rounded-3xl border border-[#E7E2D9] text-center text-xs text-[#666059]">
              คุณยังไม่ได้กดหัวใจบันทึกเมนูโปรด กดที่ไอคอนหัวใจบนการ์ดอาหารเพื่อบันทึกไว้ดูภายหลัง
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteDishes.map((dish) => (
                <FoodCard
                  key={dish.id}
                  dish={dish}
                  onSelectDish={(d: MenuItem) => setSelectedDish(d)}
                />
              ))}
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
