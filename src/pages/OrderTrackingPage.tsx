import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Order, OrderStatus } from '../types';
import { PrintReceiptModal } from '../components/PrintReceiptModal';
import { 
  ClipboardList, CheckCircle2, Clock, Truck, Store, Utensils, 
  Search, Printer, ShieldCheck, MapPin, Phone, User, AlertCircle, ChevronRight
} from 'lucide-react';

interface OrderTrackingPageProps {
  orderId?: string;
  onBackToMenu: () => void;
}

export const OrderTrackingPage: React.FC<OrderTrackingPageProps> = ({ orderId, onBackToMenu }) => {
  const { orders, getOrderById } = useStore();
  const [searchNum, setSearchNum] = useState(orderId || '');
  const [selectedOrder, setSelectedOrder] = useState<Order | undefined>(() => {
    if (orderId) return getOrderById(orderId);
    return orders[0];
  });

  const [showPrintReceipt, setShowPrintReceipt] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchNum.trim()) return;
    const found = getOrderById(searchNum.trim());
    if (found) {
      setSelectedOrder(found);
    } else {
      alert('ไม่พบหมายเลขออเดอร์นี้ในระบบ');
    }
  };

  const statusSteps: { key: OrderStatus; label: string; desc: string }[] = [
    { key: 'pending_confirmation', label: 'รอร้านยืนยัน', desc: 'ระบบส่งออเดอร์ไปยังห้องครัวแล้ว' },
    { key: 'confirmed', label: 'ร้านรับออเดอร์แล้ว', desc: 'ห้องครัวเริ่มจัดเตรียมวัตถุดิบสด' },
    { key: 'preparing', label: 'กำลังเตรียมอาหาร', desc: 'เชฟกำลังปรุงสดใหม่ด้วยความประณีต' },
    { key: 'delivering', label: 'กำลังจัดส่ง / พร้อมรับ', desc: 'อาหารพร้อมเสิร์ฟ หรือพนักงานกำลังนำไปส่ง' },
    { key: 'completed', label: 'ส่งมอบเรียบร้อย', desc: 'อาหารเสิร์ฟถึงมือคุณแล้ว ขอให้อร่อยกับมื้อนี้' }
  ];

  const getStepIndex = (status: OrderStatus) => {
    if (status === 'pending_confirmation') return 0;
    if (status === 'confirmed') return 1;
    if (status === 'preparing') return 2;
    if (status === 'ready' || status === 'delivering') return 3;
    if (status === 'completed') return 4;
    return 0;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1C1917] font-serif">
            ติดตามสถานะคำสั่งซื้อ (Order Tracking)
          </h1>
          <p className="text-xs text-[#666059]">
            ตรวจสอบสถานะการปรุงอาหารและการจัดส่งแบบเรียลไทม์
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex gap-2 w-full sm:w-auto">
          <input
            type="text"
            placeholder="ใส่หมายเลขออเดอร์ (เช่น AH-20261003-8821)"
            value={searchNum}
            onChange={(e) => setSearchNum(e.target.value)}
            className="px-3 py-2 text-xs bg-white border border-[#E7E2D9] rounded-xl text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#2D4F36]"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[#2D4F36] text-white rounded-xl text-xs font-semibold hover:bg-[#1E3725]"
          >
            ค้นหา
          </button>
        </form>
      </div>

      {!selectedOrder ? (
        <div className="bg-white p-12 rounded-3xl border border-[#E7E2D9] text-center space-y-3">
          <ClipboardList className="w-12 h-12 text-[#999288] mx-auto" />
          <h3 className="text-base font-bold text-[#1C1917]">ไม่พบข้อมูลคำสั่งซื้อ</h3>
          <p className="text-xs text-[#666059]">กรุณากรอกหมายเลขออเดอร์ให้ถูกต้องเพื่อค้นหา</p>
        </div>
      ) : (
        <div className="space-y-6">
          
          {/* Main Status Header Card */}
          <div className="bg-white p-6 rounded-3xl border border-[#E7E2D9] shadow-2xs space-y-6">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#E7E2D9]">
              <div>
                <span className="text-xs text-[#999288] block">หมายเลขคำสั่งซื้อ</span>
                <span className="text-xl font-bold text-[#1C1917] font-serif">
                  {selectedOrder.orderNumber}
                </span>
                <span className="text-[11px] text-[#666059] block mt-0.5">
                  สั่งเมื่อ: {new Date(selectedOrder.createdAt).toLocaleString('th-TH')}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowPrintReceipt(true)}
                  className="px-4 py-2 bg-[#FAF7F2] border border-[#E7E2D9] hover:bg-[#F4EFE6] text-[#1C1917] rounded-xl text-xs font-semibold flex items-center gap-1.5"
                >
                  <Printer className="w-4 h-4 text-[#2D4F36]" />
                  <span>พิมพ์ใบเสร็จ</span>
                </button>
              </div>
            </div>

            {/* Timeline Lifecycle Bar */}
            <div className="py-4">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {statusSteps.map((step, idx) => {
                  const currentIdx = getStepIndex(selectedOrder.orderStatus);
                  const isDone = idx <= currentIdx;
                  const isCurrent = idx === currentIdx;

                  return (
                    <div key={step.key} className="space-y-2 relative">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                          isCurrent
                            ? 'bg-[#C85A32] text-white ring-4 ring-[#FAF0EC]'
                            : isDone
                            ? 'bg-[#2D4F36] text-white'
                            : 'bg-[#F4EFE6] text-[#999288]'
                        }`}>
                          {isDone ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                        </div>
                        <span className={`text-xs font-semibold ${isCurrent ? 'text-[#C85A32]' : isDone ? 'text-[#1C1917]' : 'text-[#999288]'}`}>
                          {step.label}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#666059] pl-10 leading-normal">
                        {step.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Details & Items Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Ordered Items */}
            <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-[#E7E2D9] space-y-4 shadow-2xs">
              <h3 className="font-bold text-sm text-[#1C1917]">
                รายการอาหารที่สั่ง ({selectedOrder.items.length} รายการ)
              </h3>

              <div className="space-y-3">
                {selectedOrder.items.map((item) => (
                  <div key={item.id} className="flex gap-3 p-3 bg-[#FAF7F2] rounded-2xl border border-[#E7E2D9]">
                    <img src={item.itemImage} alt="" className="w-14 h-14 rounded-xl object-cover bg-white" />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-xs text-[#1C1917] truncate">{item.itemName}</h4>
                        <span className="font-bold text-xs text-[#2D4F36]">฿{item.lineTotal}</span>
                      </div>
                      <span className="text-[11px] text-[#666059]">จำนวน: x{item.quantity} • ฿{item.unitPrice}/ชิ้น</span>
                      {item.selectedOptions && item.selectedOptions.length > 0 && (
                        <div className="text-[10px] text-[#999288] mt-0.5">
                          {item.selectedOptions.map(o => `${o.groupName}:${o.optionName}`).join(', ')}
                        </div>
                      )}
                      {item.specialInstructions && (
                        <span className="block text-[10px] text-[#C85A32] italic">
                          คำขอพิเศษ: {item.specialInstructions}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Calculations */}
              <div className="pt-4 border-t border-[#E7E2D9] space-y-1.5 text-xs text-[#666059]">
                <div className="flex justify-between">
                  <span>รวมค่าอาหาร</span>
                  <span>฿{selectedOrder.subtotal}</span>
                </div>
                {selectedOrder.discount > 0 && (
                  <div className="flex justify-between text-[#C85A32]">
                    <span>ส่วนลดพิเศษ</span>
                    <span>-฿{selectedOrder.discount}</span>
                  </div>
                )}
                {selectedOrder.deliveryFee > 0 && (
                  <div className="flex justify-between">
                    <span>ค่าจัดส่ง</span>
                    <span>฿{selectedOrder.deliveryFee}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-bold text-[#1C1917] pt-2 border-t border-[#E7E2D9]">
                  <span>ยอดสุทธิ</span>
                  <span className="text-[#2D4F36]">฿{selectedOrder.total}</span>
                </div>
              </div>
            </div>

            {/* Delivery & Customer Info */}
            <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-[#E7E2D9] space-y-4 shadow-2xs">
              <h3 className="font-bold text-sm text-[#1C1917]">ข้อมูลผู้สั่งและสถานที่จัดส่ง</h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <User className="w-4 h-4 text-[#2D4F36] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#999288] block">ชื่อผู้สั่ง</span>
                    <span className="font-semibold text-[#1C1917]">{selectedOrder.customerName}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#2D4F36] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#999288] block">เบอร์โทรศัพท์</span>
                    <span className="font-semibold text-[#1C1917]">{selectedOrder.customerPhone}</span>
                  </div>
                </div>

                {selectedOrder.deliveryAddress && (
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#999288] block">ที่อยู่จัดส่ง</span>
                      <span className="font-semibold text-[#1C1917]">{selectedOrder.deliveryAddress}</span>
                    </div>
                  </div>
                )}

                <div className="pt-3 border-t border-[#E7E2D9] space-y-1">
                  <span className="text-[#999288] block">สถานะชำระเงิน</span>
                  <span className={`inline-block font-semibold px-2.5 py-1 rounded-full ${
                    selectedOrder.paymentStatus === 'paid'
                      ? 'bg-[#EBF2ED] text-[#2D4F36]'
                      : 'bg-[#FAF0EC] text-[#C85A32]'
                  }`}>
                    {selectedOrder.paymentStatus === 'paid' ? 'ชำระเงินเรียบร้อยแล้ว' : 'รอชำระเงิน'}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* Print Receipt Modal */}
      {showPrintReceipt && (
        <PrintReceiptModal
          order={selectedOrder || null}
          onClose={() => setShowPrintReceipt(false)}
        />
      )}

    </div>
  );
};
