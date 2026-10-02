import React from 'react';
import { useStore } from '../context/StoreContext';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Wine, Utensils, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  const { settings, setActiveTab } = useStore();

  return (
    <footer className="bg-[#252422] text-[#B8AA98] pt-16 pb-12 border-t border-[#383633]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Value Statements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-[#383633]">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#722F37] text-white flex items-center justify-center shrink-0">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-serif font-bold mb-1 text-base">Pasta Fatta a Mano</h4>
              <p className="text-xs text-[#A09A92] leading-relaxed">
                พาสต้าเส้นสดนวดมือด้วยความพิถีพิถันสไตล์อิตาเลียนดั้งเดิม ปรุงเสิร์ฟสดใหม่จานต่อจาน
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#722F37] text-white flex items-center justify-center shrink-0">
              <Wine className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-serif font-bold mb-1 text-base">Selezione di Vini</h4>
              <p className="text-xs text-[#A09A92] leading-relaxed">
                คัดสรรไวน์อิตาลีและฝรั่งเศสพรีเมียม เสิร์ฟคู่กับมื้ออาหารค่ำอย่างสมบูรณ์แบบ
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#722F37] text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-serif font-bold mb-1 text-base">Eccellenza มาตรฐาน</h4>
              <p className="text-xs text-[#A09A92] leading-relaxed">
                คัดสรรวัตถุดิบคุณภาพสูงนำเข้า ชีสพาร์เมซานบ่ม 24 เดือน เนยสดฝรั่งเศส และน้ำมันมะกอกสกัดเย็น
              </p>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#722F37] text-white flex items-center justify-center font-serif font-bold text-base">
                A
              </div>
              <div>
                <span className="text-xl font-bold text-white font-serif tracking-wide block leading-none">AUVELARO</span>
                <span className="text-[8px] text-[#A09A92] uppercase tracking-[0.2em] block mt-1">A MODERN EUROPEAN TABLE</span>
              </div>
            </div>
            <p className="text-xs text-[#A09A92] leading-relaxed font-light">
              ประสบการณ์อาหารยุโรปร่วมสมัย แรงบันดาลใจจากอิตาลีและฝรั่งเศส สำหรับมื้อค่ำและโอกาสพิเศษ
            </p>
          </div>

          {/* Customer Links */}
          <div>
            <h4 className="text-white font-serif font-bold text-sm mb-4 tracking-wider uppercase text-xs">เมนูและข้อมูล</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => setActiveTab('menu')} className="hover:text-white transition-colors">
                  รายการเมนูอาหารทั้งหมด
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('about')} className="hover:text-white transition-colors">
                  เรื่องราวและปรัชญาของร้าน
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('reservations')} className="hover:text-white transition-colors">
                  สำรองโต๊ะมื้อค่ำ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-serif font-bold text-sm mb-4 tracking-wider uppercase text-xs">ติดต่อและสำรองที่นั่ง</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#722F37] shrink-0 mt-0.5" />
                <span>{settings.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#722F37] shrink-0" />
                <span>{settings.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#722F37] shrink-0" />
                <span>{settings.email}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#722F37] shrink-0" />
                <span>{settings.openingHours}</span>
              </li>
            </ul>
          </div>

          {/* Protected Staff Links */}
          <div>
            <h4 className="text-white font-serif font-bold text-sm mb-4 tracking-wider uppercase text-xs">สำหรับพนักงานร้าน (Staff Portal)</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => setActiveTab('kitchen')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#722F37]" />
                  <span>ระบบจอครัว (Kitchen Board)</span>
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('admin')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#722F37]" />
                  <span>จัดการข้อมูลเมนู (Admin Dashboard)</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#383633] text-center text-xs text-[#A09A92] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 AUVELARO — A MODERN EUROPEAN TABLE (โอ-เว-ลา-โร). All rights reserved.</p>
          <div className="flex items-center gap-2 text-[11px]">
            <span>Contemporary European Cuisine</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

