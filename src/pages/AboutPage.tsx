import React from 'react';
import { useStore } from '../context/StoreContext';
import { ChefHat, Award, ShieldCheck, Heart, MapPin, Phone, Clock, Utensils, Wine } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { settings, setActiveTab } = useStore();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14 bg-[#F7F5F0]">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 bg-[#F7EFF1] text-[#722F37] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest">
          <ChefHat className="w-4 h-4" />
          <span>La Nostra Storia — เรื่องราวของ Artisanal Hearth</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-[#252422] font-serif">
          จิตวิญญาณแห่งอาหารอิตาเลียนร่วมสมัย
        </h1>

        <p className="text-xs sm:text-sm text-[#706B65] leading-relaxed font-light">
          Artisanal Hearth ถือกำเนิดขึ้นจากความหลงใหลในศิลปะการปรุงอาหารอิตาเลียนตำรับแท้ ถ่ายทอดความพิถีพิถันจากรุ่นสู่รุ่น ผสานบรรยากาศร่วมสมัยอันอบอุ่น
        </p>
      </div>

      {/* Story Banner Image */}
      <div className="relative aspect-21/9 rounded-3xl overflow-hidden shadow-xl border border-[#E6E3DD] bg-[#EFECE6]">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
          alt="Artisanal Hearth Italian Kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
            ปรัชญาการเลือกสรรวัตถุดิบ
          </span>
          <p className="text-base sm:text-xl font-serif font-bold italic">
            "Ingредиเอนต์สดใหม่จากอิตาลี คือจุดเริ่มต้นของความอร่อยแท้จริง"
          </p>
        </div>
      </div>

      {/* Core Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-3xl border border-[#E6E3DD] space-y-3">
          <div className="w-10 h-10 rounded-full bg-[#F7EFF1] text-[#722F37] flex items-center justify-center">
            <Utensils className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[#252422] font-serif">Pasta Fatta a Mano</h3>
          <p className="text-xs text-[#706B65] leading-relaxed font-light">
            นวดแป้งพาสต้าสดด้วยมือและไข่อินทรีย์วันต่อวัน เพื่อให้ได้เส้นหนึบนุ่มอุ้มซอสได้สมบูรณ์แบบ
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-[#E6E3DD] space-y-3">
          <div className="w-10 h-10 rounded-full bg-[#F7EFF1] text-[#722F37] flex items-center justify-center">
            <Wine className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[#252422] font-serif">วัตถุดิบนำเข้าพรีเมียม</h3>
          <p className="text-xs text-[#706B65] leading-relaxed font-light">
            ชีสบุรราต้าจากปูลยา พาร์มาแฮมบ่ม 24 เดือน น้ำมันมะกอกเอ็กซ์ตร้าเวอร์จิน และมะเขือเทศซานมารซาโน่
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-[#E6E3DD] space-y-3">
          <div className="w-10 h-10 rounded-full bg-[#F7EFF1] text-[#722F37] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[#252422] font-serif">ความใส่ใจมื้อค่ำ</h3>
          <p className="text-xs text-[#706B65] leading-relaxed font-light">
            ดูแลความอบอุ่นในทุกรายละเอียด บรรจุภัณฑ์เก็บความร้อนพิเศษ พร้อมบริการเดลิเวอรีเสิร์ฟร้อนถึงบ้าน
          </p>
        </div>

      </div>

      {/* Store Location Info */}
      <div className="bg-white p-8 rounded-3xl border border-[#E6E3DD] grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-2xs">
        <div className="space-y-4 text-xs">
          <h2 className="text-2xl font-bold text-[#252422] font-serif">ติดต่อและเยี่ยมชมร้าน Artisanal Hearth</h2>
          <p className="text-[#706B65] leading-relaxed">
            ยินดีต้อนรับสำหรับการสอบถามข้อมูล สำรองโต๊ะมื้อค่ำ หรือติดต่อบริการจัดเลี้ยงพิเศษ
          </p>

          <div className="space-y-2.5 pt-2">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#722F37]" />
              <span className="text-[#252422]">{settings.address}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#722F37]" />
              <span className="text-[#252422]">{settings.phone}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#722F37]" />
              <span className="text-[#252422]">{settings.openingHours}</span>
            </div>
          </div>
        </div>

        <div className="text-center md:text-right">
          <button
            onClick={() => setActiveTab('menu')}
            className="px-8 py-4 bg-[#722F37] text-white font-semibold rounded-xl text-xs uppercase tracking-widest hover:bg-[#542229] transition-all shadow-sm"
          >
            เริ่มสั่งอาหารออนไลน์
          </button>
        </div>
      </div>

    </div>
  );
};
