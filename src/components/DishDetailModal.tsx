import React from 'react';
import { MenuItem } from '../types';
import { useStore } from '../context/StoreContext';
import { 
  X, Clock, ChefHat, AlertTriangle, ShieldCheck, Heart, 
  Utensils, BookOpen, Layers, ArrowRight
} from 'lucide-react';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ dish, onClose }) => {
  const { favorites, toggleFavorite, menuItems, setSelectedDish } = useStore();

  if (!dish) return null;

  const isFav = favorites.includes(dish.id);

  const relatedDishes = menuItems
    .filter(m => m.categoryId === dish.categoryId && m.id !== dish.id)
    .slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-[#E6E3DD] max-h-[92vh] flex flex-col my-auto text-[#252422]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E6E3DD] bg-[#F7F5F0]">
          <div className="flex items-center gap-2">
            <Utensils className="w-4 h-4 text-[#722F37]" />
            <span className="font-semibold text-xs text-[#252422] uppercase tracking-wider">รายละเอียดอาหารและกระบวนการคัดสรรวัตถุดิบ</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleFavorite(dish.id)}
              className="p-2 rounded-full hover:bg-[#E6E3DD] text-[#706B65] transition-colors"
              title="บันทึกในรายการสนใจ"
            >
              <Heart className={`w-5 h-5 ${isFav ? 'fill-[#722F37] text-[#722F37]' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#E6E3DD] text-[#706B65] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-8 flex-1">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Dish Image */}
            <div className="md:col-span-5 relative rounded-2xl overflow-hidden bg-[#EFECE6] aspect-4/3 md:aspect-square shadow-md">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80';
                }}
              />
            </div>

            {/* Dish Info */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F7EFF1] text-[#722F37]">
                    ปริมาณเสิร์ฟ: {dish.portionSize}
                  </span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#EFECE6] text-[#706B65] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>ใช้เวลาปรุงประมาณ {dish.preparationTimeMinutes} นาที</span>
                  </span>
                </div>

                <h1 className="text-3xl font-bold text-[#252422] font-serif mb-2">
                  {dish.name}
                </h1>
                
                <p className="text-xs sm:text-sm text-[#706B65] leading-relaxed font-light">
                  {dish.description}
                </p>
              </div>

              {/* Dietary & Allergens */}
              <div className="space-y-2 pt-2 border-t border-[#EFECE6]">
                {dish.dietaryLabels && dish.dietaryLabels.length > 0 && (
                  <div className="flex items-center gap-2 text-xs text-[#722F37]">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>การรับรอง: {dish.dietaryLabels.join(', ')}</span>
                  </div>
                )}
                {dish.allergenInformation && dish.allergenInformation.length > 0 && (
                  <div className="flex items-center gap-2 text-xs text-[#722F37]">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>ข้อมูลภูมิแพ้: {dish.allergenInformation.join(', ')}</span>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Section 1: Ingredients Breakdown */}
          <div className="space-y-4 pt-4 border-t border-[#E6E3DD]">
            <div className="flex items-center gap-2 text-[#722F37] font-semibold text-xs uppercase tracking-wider">
              <ChefHat className="w-4 h-4" />
              <span>ส่วนประกอบและวัตถุดิบหลัก (Ingredients & Quantities)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              {dish.ingredients.map((ing) => (
                <div key={ing.id} className="bg-[#F7F5F0] p-3 rounded-xl border border-[#E6E3DD] flex items-center justify-between">
                  <div>
                    <span className="font-medium text-[#252422] block">{ing.name}</span>
                    {ing.notes && <span className="text-[10px] text-[#A09A92]">{ing.notes}</span>}
                  </div>
                  <span className="font-semibold text-[#722F37] shrink-0 bg-white px-2 py-1 rounded border border-[#E6E3DD]">
                    {ing.quantity} {ing.unit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Culinary Preparation Steps */}
          <div className="space-y-4 pt-4 border-t border-[#E6E3DD]">
            <div className="flex items-center gap-2 text-[#252422] font-semibold text-xs uppercase tracking-wider">
              <Layers className="w-4 h-4 text-[#722F37]" />
              <span>กรรมวิธีและขั้นตอนปรุงอาหาร (Preparation Method)</span>
            </div>

            <div className="space-y-2.5 text-xs">
              {dish.preparationSteps.map((step) => (
                <div key={step.stepNumber} className="flex items-start gap-3 bg-[#F7F5F0] p-3.5 rounded-xl border border-[#E6E3DD]">
                  <span className="w-6 h-6 rounded-full bg-[#722F37] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    {step.stepNumber}
                  </span>
                  <p className="text-[#706B65] leading-relaxed pt-0.5 font-light">
                    {step.instruction}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Related Dishes Discovery */}
          {relatedDishes.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-[#E6E3DD]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#722F37] uppercase tracking-wider">
                  เมนูในหมวดเดียวกันที่น่าสนใจ
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedDishes.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      setSelectedDish(rel);
                    }}
                    className="bg-[#F7F5F0] p-3 rounded-2xl border border-[#E6E3DD] hover:border-[#722F37] transition-all cursor-pointer flex items-center gap-3 group"
                  >
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-stone-200 shrink-0">
                      <img src={rel.image} alt={rel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="text-xs font-bold text-[#252422] group-hover:text-[#722F37] truncate font-serif">
                        {rel.name}
                      </h4>
                      <span className="text-[10px] text-[#706B65] block truncate font-light">
                        {rel.portionSize}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#F7F5F0] border-t border-[#E6E3DD] flex items-center justify-between">
          <span className="text-xs text-[#706B65] italic font-serif">
            AUVELARO — A MODERN EUROPEAN TABLE
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#722F37] hover:bg-[#542229] text-white font-semibold rounded-xl text-xs uppercase tracking-wider transition-colors"
          >
            ปิดหน้าต่าง
          </button>
        </div>

      </div>
    </div>
  );
};

