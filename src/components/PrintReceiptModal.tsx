import React from 'react';
import { Order } from '../types';
import { useStore } from '../context/StoreContext';
import { Printer, X, Receipt } from 'lucide-react';

interface PrintReceiptModalProps {
  order: Order | null;
  onClose: () => void;
}

export const PrintReceiptModal: React.FC<PrintReceiptModalProps> = ({ order, onClose }) => {
  const { settings } = useStore();

  if (!order) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white max-w-lg w-full rounded-3xl overflow-hidden shadow-2xl border border-[#E7E2D9] flex flex-col">
        
        {/* Action Header */}
        <div className="p-4 bg-[#FAF7F2] border-b border-[#E7E2D9] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Receipt className="w-5 h-5 text-[#2D4F36]" />
            <span className="font-semibold text-sm text-[#1C1917]">ใบเสร็จรับเงิน (Receipt)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-[#2D4F36] hover:bg-[#1E3725] text-white rounded-xl text-xs font-semibold flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>พิมพ์ใบเสร็จ</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#666059] hover:bg-[#E7E2D9] rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Area */}
        <div id="printable-receipt" className="p-8 space-y-6 text-[#1C1917] bg-white font-mono text-xs">
          
          {/* Header Store Details */}
          <div className="text-center space-y-1 pb-4 border-b border-dashed border-[#1C1917]">
            <h2 className="font-bold text-base font-serif text-black">{settings.name}</h2>
            <p className="text-[11px] text-stone-600">{settings.address}</p>
            <p className="text-[11px] text-stone-600">โทร: {settings.phone}</p>
            <p className="text-[11px] text-stone-600">เลขประจำตัวผู้เสียภาษี: 0105566778899</p>
          </div>

          {/* Meta Info */}
          <div className="space-y-1 text-[11px] pb-4 border-b border-dashed border-[#1C1917]">
            <div className="flex justify-between">
              <span>เลขที่ใบเสร็จ:</span>
              <span className="font-bold">{order.orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span>วันที่สั่งซื้อ:</span>
              <span>{new Date(order.createdAt).toLocaleString('th-TH')}</span>
            </div>
            <div className="flex justify-between">
              <span>ชื่อลูกค้า:</span>
              <span>{order.customerName}</span>
            </div>
            <div className="flex justify-between">
              <span>รูปแบบ:</span>
              <span>
                {order.fulfillmentType === 'delivery' ? 'จัดส่งถึงบ้าน' : order.fulfillmentType === 'pickup' ? 'รับที่ร้าน' : 'ทานที่ร้าน'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>การชำระเงิน:</span>
              <span className="uppercase">{order.paymentMethod} ({order.paymentStatus === 'paid' ? 'ชำระแล้ว' : 'ยังไม่ชำระ'})</span>
            </div>
          </div>

          {/* Items Table */}
          <div className="space-y-2 pb-4 border-b border-dashed border-[#1C1917]">
            <div className="grid grid-cols-12 font-bold pb-1 border-b border-stone-300 text-[11px]">
              <span className="col-span-6">รายการอาหาร</span>
              <span className="col-span-2 text-center">จำน</span>
              <span className="col-span-4 text-right">จำนวนเงิน</span>
            </div>

            {order.items.map((item, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="grid grid-cols-12 text-[11px]">
                  <span className="col-span-6 font-medium truncate">{item.itemName}</span>
                  <span className="col-span-2 text-center">{item.quantity}</span>
                  <span className="col-span-4 text-right">฿{item.lineTotal}</span>
                </div>
                {item.selectedOptions && item.selectedOptions.length > 0 && (
                  <div className="text-[10px] text-stone-500 pl-2">
                    {item.selectedOptions.map(o => `${o.groupName}:${o.optionName}`).join(', ')}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Totals Calculation */}
          <div className="space-y-1.5 text-[11px] pt-1">
            <div className="flex justify-between">
              <span>รวมเงินสุทธิ (Subtotal)</span>
              <span>฿{order.subtotal}</span>
            </div>

            {order.discount > 0 && (
              <div className="flex justify-between text-stone-600">
                <span>ส่วนลดพิเศษ</span>
                <span>-฿{order.discount}</span>
              </div>
            )}

            {order.deliveryFee > 0 && (
              <div className="flex justify-between text-stone-600">
                <span>ค่าบริการจัดส่ง</span>
                <span>฿{order.deliveryFee}</span>
              </div>
            )}

            <div className="flex justify-between font-bold text-sm pt-2 border-t border-black">
              <span>ยอดเงินรวมทั้งสิ้น</span>
              <span>฿{order.total}</span>
            </div>
          </div>

          {/* Footer Receipt Note */}
          <div className="text-center pt-4 border-t border-dashed border-[#1C1917] space-y-1 text-[10px] text-stone-500">
            <p>ขอบพระคุณที่ไว้วางใจเลือกทานอาหารจาก Artisanal Hearth</p>
            <p>ราคาทั้งหมดรวมภาษีมูลค่าเพิ่ม 7% เรียบร้อยแล้ว</p>
          </div>

        </div>

      </div>
    </div>
  );
};
