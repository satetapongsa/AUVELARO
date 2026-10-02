import React from 'react';
import { useStore } from '../context/StoreContext';
import { FoodCard } from '../components/FoodCard';
import { MenuItem } from '../types';
import { 
  Utensils, ArrowRight, Wine, Sparkles, 
  MapPin, Phone, ChefHat, Calendar, Flame
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { 
    menuItems, categories, settings, setActiveTab, 
    setSelectedCategory, setSelectedDish 
  } = useStore();

  const signatureDishes = menuItems.filter(m => m.isFeatured && m.isPublished).slice(0, 4);

  return (
    <div className="space-y-20 pb-20 bg-[#F7F5F0]">
      
      {/* Section A — Hero Section */}
      <section className="relative bg-[#EFECE6] border-b border-[#E6E3DD] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#F7EFF1] text-[#722F37] px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase">
                <ChefHat className="w-4 h-4" />
                <span>A MODERN EUROPEAN TABLE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#252422] font-serif leading-tight">
                The Art of <br />
                <span className="italic font-normal text-[#722F37]">European Dining.</span>
              </h1>

              <p className="text-sm sm:text-base text-[#706B65] max-w-xl leading-relaxed mx-auto lg:mx-0 font-light">
                สัมผัสเสน่ห์ของอาหารยุโรปร่วมสมัย จากแรงบันดาลใจของอิตาลีและฝรั่งเศส พร้อมทำความรู้จักวัตถุดิบและรายละเอียดเบื้องหลังแต่ละจานอย่างลึกซึ้ง
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={() => setActiveTab('menu')}
                  className="w-full sm:w-auto px-8 py-4 bg-[#722F37] hover:bg-[#542229] text-white font-semibold rounded-xl text-xs uppercase tracking-widest shadow-sm flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Utensils className="w-4 h-4" />
                  <span>Explore the Menu</span>
                </button>

                <button
                  onClick={() => setActiveTab('reservations')}
                  className="w-full sm:w-auto px-8 py-4 bg-white border border-[#E6E3DD] hover:bg-[#F7F5F0] text-[#252422] font-semibold rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#722F37]" />
                  <span>Reserve a Table</span>
                </button>
              </div>

              {/* Trust Specs */}
              <div className="pt-8 border-t border-[#E6E3DD] grid grid-cols-3 gap-4 text-center lg:text-left text-xs text-[#706B65]">
                <div>
                  <span className="font-bold text-lg text-[#252422] block font-serif">Puglia & Parma</span>
                  <span>วัตถุดิบคัดสรรนำเข้า</span>
                </div>
                <div>
                  <span className="font-bold text-lg text-[#252422] block font-serif">Fatta a Mano</span>
                  <span>พาสต้าเส้นสดนวดมือ</span>
                </div>
                <div>
                  <span className="font-bold text-lg text-[#252422] block font-serif">Contemporary</span>
                  <span>สไตล์อิตาเลียน-ฝรั่งเศส</span>
                </div>
              </div>
            </div>

            {/* Right Editorial Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
                  alt="AUVELARO European Fine Dining"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-white/60 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#722F37] text-white flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#706B65] font-semibold block">Signature Dish Showcase</span>
                    <span className="text-sm font-serif font-bold text-[#252422]">Grilled Ribeye & Pasta Fatta a Mano</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section B — Signature Selection Bento Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4 border-b border-[#E6E3DD] pb-6">
          <div>
            <div className="flex items-center gap-2 text-[#722F37] text-xs font-semibold uppercase tracking-widest mb-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Plati di Firma — Culinary Collection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#252422] font-serif">เมนูอาหารยุโรปร่วมสมัยแนะนำประจำฤดูกาล</h2>
          </div>

          <button
            onClick={() => setActiveTab('menu')}
            className="text-xs font-semibold text-[#722F37] hover:underline flex items-center gap-1 uppercase tracking-wider"
          >
            <span>สำรวจรายการเมนูทั้งหมด</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Asymmetric Bento Grid Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureDishes.map((dish, idx) => (
            <FoodCard
              key={dish.id}
              dish={dish}
              featured={idx === 0}
              onSelectDish={(d: MenuItem) => setSelectedDish(d)}
            />
          ))}
        </div>
      </section>


      {/* Section C — Our Philosophy */}
      <section className="bg-[#EFECE6] border-y border-[#E6E3DD] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#722F37] bg-[#F7EFF1] px-3.5 py-1 rounded-full">
                ปรัชญาความพิถีพิถัน (Culinary Craftsmanship)
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#252422] font-serif leading-tight">
                พาสต้าเส้นสดนวดมือ <br />
                และสเต๊กเนื้อคัดสรรพิเศษ
              </h2>

              <p className="text-xs sm:text-sm text-[#706B65] leading-relaxed font-light">
                ทีมเชฟของ AUVELARO มุ่งมั่นผสมผสานวัฒนธรรมการรับประทานอาหารของอิตาลีและฝรั่งเศสเข้าด้วยกัน
                เราเลือกใช้น้ำมันมะกอกเอ็กซ์ตร้าเวอร์จินสกัดเย็น ชีสพาร์มิกิอาโน่บ่ม 24 เดือน เนยสดฝรั่งเศส และพาสต้าเส้นสดนวดมือด้วยความใส่ใจ
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-semibold text-[#252422]">
                <div className="flex items-center gap-2 bg-white p-3.5 rounded-xl border border-[#E6E3DD]">
                  <Utensils className="w-4 h-4 text-[#722F37]" />
                  <span>พาสต้าเส้นสด Fatta a Mano</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3.5 rounded-xl border border-[#E6E3DD]">
                  <Flame className="w-4 h-4 text-[#722F37]" />
                  <span>เทคนิคปรุงอาหารยุโรป</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="aspect-3/4 rounded-2xl overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1621996346565-e3d5d6288307?auto=format&fit=crop&w=600&q=80"
                  alt="Fresh Italian Pasta Preparation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-3/4 rounded-2xl overflow-hidden shadow-md mt-8">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
                  alt="Steak and European Cuisine"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section D — Explore Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#722F37]">
            Il Nostro Menu
          </span>
          <h2 className="text-3xl font-bold text-[#252422] font-serif">หมวดหมู่อาหารและเครื่องดื่ม</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setActiveTab('menu');
              }}
              className="group bg-white p-5 rounded-2xl border border-[#E6E3DD] hover:border-[#722F37] hover:shadow-md transition-all cursor-pointer text-center space-y-3"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#EFECE6] overflow-hidden group-hover:scale-105 transition-transform">
                <img
                  src={cat.image || 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a81?auto=format&fit=crop&w=300&q=80'}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xs font-semibold text-[#252422] group-hover:text-[#722F37] transition-colors line-clamp-1">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Section E — Adult-Only Wine Information Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#252422] text-[#B8AA98] rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl border border-[#383633]">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B8AA98] bg-[#383633] px-3.5 py-1 rounded-full w-fit">
              <Wine className="w-4 h-4 text-[#722F37]" />
              <span>Carta dei Vini — ข้อมูลรายการไวน์สำหรับทานที่ร้าน (เฉพาะผู้ใหญ่ 20+)</span>
            </div>

            <h2 className="text-3xl font-bold font-serif text-white">
              คัดสรรไวน์อิตาลีและฝรั่งเศสสำหรับจับคู่มื้ออาหาร
            </h2>

            <p className="text-xs text-[#A09A92] leading-relaxed max-w-xl">
              AUVELARO รวบรวมฉลากไวน์บ่มพรีเมียม สำหรับจับคู่มื้ออาหารค่ำในบรรยากาศร้าน
              <span className="block text-[11px] text-[#722F37] mt-1 font-semibold">
                *หมายเหตุ: ข้อมูลรายการไวน์จัดทำขึ้นเพื่อเป็นข้อมูลประกอบการทานอาหารที่ร้านเท่านั้น ไม่มีการจำหน่ายออนไลน์
              </span>
            </p>
          </div>

          <div className="lg:col-span-4 text-center lg:text-right">
            <button
              onClick={() => setActiveTab('reservations')}
              className="px-8 py-4 bg-[#722F37] hover:bg-[#542229] text-white font-semibold rounded-xl text-xs uppercase tracking-widest shadow-sm transition-all active:scale-95"
            >
              สำรองโต๊ะสำหรับมื้อค่ำ
            </button>
          </div>

        </div>
      </section>

      {/* Section F — Operating Hours & Location */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E6E3DD] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs">
          
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-2xl font-bold font-serif text-[#252422]">
              เปิดให้บริการมื้อค่ำบรรยากาศพรีเมียม
            </h2>
            <p className="text-xs text-[#706B65] leading-relaxed">
              สัมผัสประสบการณ์มื้อค่ำสุดพิเศษสไตล์ยุโรปท่ามกลางบรรยากาศการต้อนรับที่อบอุ่น
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-[#252422] font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#722F37]" />
                <span>{settings.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#722F37]" />
                <span>{settings.phone}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 text-center lg:text-right">
            <button
              onClick={() => setActiveTab('reservations')}
              className="w-full sm:w-auto px-8 py-4 bg-[#722F37] hover:bg-[#542229] text-white font-semibold rounded-xl text-xs uppercase tracking-widest shadow-sm transition-all"
            >
              สำรองโต๊ะมื้อค่ำ
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

