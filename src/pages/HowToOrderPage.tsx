import React from 'react';
import { useStore } from '../context/StoreContext';
import { ShoppingBag, Truck, Store, QrCode, ClipboardList, HelpCircle, Utensils, ArrowRight } from 'lucide-react';

export const HowToOrderPage: React.FC = () => {
  const { setActiveTab } = useStore();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 bg-[#EBF2ED] text-[#2D4F36] px-3.5 py-1.5 rounded-full text-xs font-semibold">
          <HelpCircle className="w-4 h-4" />
          <span>คำแนะนำการใช้งานระบบสั่งอาหาร</span>
        </div>

        <h1 className="text-3xl font-bold text-[#1C1917] font-serif">
          ขั้นตอนการสั่งซื้ออาหารออนไลน์
        </h1>

        <p className="text-xs text-[#666059]">
          เรียนรู้วิธีการเลือกอาหาร ปรับแต่งรสชาติ เลือกรูปแบบจัดส่ง และชำระเงินอย่างสะดวกสบาย
        </p>
      </div>

      {/* Workflow Steps */}
      <div className="space-y-6">
        
        <div className="bg-white p-6 rounded-3xl border border-[#E7E2D9] flex items-start gap-4 shadow-2xs">
          <div className="w-10 h-10 rounded-2xl bg-[#2D4F36] text-white flex items-center justify-center font-bold text-sm shrink-0">
            1
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-sm text-[#1C1917]">เลือกอาหารและดูรายละเอียดสูตร</h3>
            <p className="text-xs text-[#666059] leading-relaxed">
              ไปที่หน้า "เมนูอาหาร" ค้นหาจานโปรดของคุณ กดที่รูปหรือปุ่มดูรายละเอียดเพื่ออ่านส่วนประกอบ วัตถุดิบจริง และขั้นตอนการปรุง
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-[#E7E2D9] flex items-start gap-4 shadow-2xs">
          <div className="w-10 h-10 rounded-2xl bg-[#2D4F36] text-white flex items-center justify-center font-bold text-sm shrink-0">
            2
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-sm text-[#1C1917]">ปรับแต่งความเผ็ดและเพิ่มท็อปปิ้ง</h3>
            <p className="text-xs text-[#666059] leading-relaxed">
              เลือกระดับความเผ็ด เช่น เผ็ดน้อย หรือเผ็ดจัดจ้าน เพิ่มไข่ดาวกรอบ ไข่เจียวทรงเครื่อง หรือเนื้อสัตว์เพิ่มเติมได้ตามใจ
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-[#E7E2D9] flex items-start gap-4 shadow-2xs">
          <div className="w-10 h-10 rounded-2xl bg-[#2D4F36] text-white flex items-center justify-center font-bold text-sm shrink-0">
            3
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-sm text-[#1C1917]">เลือกวิธีการรับอาหาร (Fulfillment)</h3>
            <p className="text-xs text-[#666059] leading-relaxed">
              เลือก "จัดส่งถึงบ้าน" (Delivery) หรือ "รับที่ร้าน" (Pickup) หรือ "ทานที่ร้าน" (Dine-in) กรอกที่อยู่และเบอร์ติดต่อ
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-[#E7E2D9] flex items-start gap-4 shadow-2xs">
          <div className="w-10 h-10 rounded-2xl bg-[#2D4F36] text-white flex items-center justify-center font-bold text-sm shrink-0">
            4
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-sm text-[#1C1917]">ชำระเงินและสแกน PromptPay QR Code</h3>
            <p className="text-xs text-[#666059] leading-relaxed">
              สแกน QR Code ด้วยแอปธนาคารไทย เพื่อชำระเงินได้รวดเร็ว ปลอดภัย ยอดเงินจะคำนวณส่วนลดและค่าจัดส่งอัตโนมัติ
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-[#E7E2D9] flex items-start gap-4 shadow-2xs">
          <div className="w-10 h-10 rounded-2xl bg-[#2D4F36] text-white flex items-center justify-center font-bold text-sm shrink-0">
            5
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-sm text-[#1C1917]">ติดตามสถานะการปรุงและรับอาหาร</h3>
            <p className="text-xs text-[#666059] leading-relaxed">
              ไปที่หน้า "ติดตามคำสั่งซื้อ" เพื่อดูสถานะเรียลไทม์ ตั้งแต่ร้านรับออเดอร์ ครัวเริ่มทำ จนกระทั่งส่งมอบเรียบร้อย
            </p>
          </div>
        </div>

      </div>

      <div className="text-center pt-4">
        <button
          onClick={() => setActiveTab('menu')}
          className="px-8 py-3.5 bg-[#2D4F36] text-white font-bold rounded-2xl text-xs hover:bg-[#1E3725] transition-all inline-flex items-center gap-2"
        >
          <span>ลองสั่งอาหารเลย</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
