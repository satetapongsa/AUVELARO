import React, { useState } from 'react';
import { MenuItem, SelectedOptionSnapshot } from '../types';
import { useStore } from '../context/StoreContext';
import { 
  X, Clock, ChefHat, AlertTriangle, ShieldCheck, Heart, Plus, Minus, 
  ShoppingBag, Check, Utensils, BookOpen, Layers 
} from 'lucide-react';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ dish, onClose }) => {
  const { addToCart, favorites, toggleFavorite, menuItems, setSelectedDish } = useStore();
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [activeTab, setActiveTab] = useState<'details' | 'recipe'>('details');

  if (!dish) return null;

  const isFav = favorites.includes(dish.id);

  const handleOptionSelect = (groupId: string, optionId: string) => {
    setSelectedOptions(prev => ({ ...prev, [groupId]: optionId }));
  };

  let optionsExtra = 0;
  const optionSnapshots: SelectedOptionSnapshot[] = [];

  dish.optionGroups?.forEach(group => {
    const selectedOptId = selectedOptions[group.id];
    if (selectedOptId) {
      const opt = group.options.find(o => o.id === selectedOptId);
      if (opt) {
        optionsExtra += opt.additionalPrice;
        optionSnapshots.push({
          groupName: group.name,
          optionName: opt.name,
          additionalPrice: opt.additionalPrice
        });
      }
    }
  });

  const unitPrice = dish.basePrice + optionsExtra;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    for (const group of dish.optionGroups || []) {
      if (group.isRequired && !selectedOptions[group.id]) {
        alert(`กรุณาเลือก "${group.name}" ก่อนเพิ่มลงตะกร้า`);
        return;
      }
    }

    addToCart(dish, quantity, optionSnapshots, specialInstructions);
    onClose();
  };

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
            <span className="font-semibold text-xs text-[#252422] uppercase tracking-wider">รายละเอียดอาหารและสูตรปรุง</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleFavorite(dish.id)}
              className="p-2 rounded-full hover:bg-[#E6E3DD] text-[#706B65] transition-colors"
              title="เพิ่มในรายการโปรด"
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
        <div className="overflow-y-auto p-6 space-y-6 flex-1">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Dish Image */}
            <div className="md:col-span-5 relative rounded-2xl overflow-hidden bg-[#EFECE6] aspect-4/3 md:aspect-square">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80';
                }}
              />
              
              {!dish.isAvailable && (
                <div className="absolute inset-0 bg-black/75 flex items-center justify-center text-white text-center p-4">
                  <span className="bg-[#722F37] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    สินค้าหมดชั่วคราว
                  </span>
                </div>
              )}
            </div>

            {/* Dish Info */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F7EFF1] text-[#722F37]">
                    {dish.portionSize}
                  </span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#EFECE6] text-[#706B65] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>ใช้เวลาปรุง {dish.preparationTimeMinutes} นาที</span>
                  </span>
                </div>

                <h1 className="text-2xl font-bold text-[#252422] font-serif mb-2">
                  {dish.name}
                </h1>
                
                <p className="text-xs text-[#706B65] leading-relaxed font-light">
                  {dish.description}
                </p>
              </div>

              {/* Price Tag */}
              <div className="flex items-baseline gap-3 p-3.5 bg-[#F7F5F0] rounded-xl border border-[#E6E3DD]">
                <span className="text-xs text-[#706B65]">ราคาเริ่มต้น</span>
                <span className="text-2xl font-bold text-[#722F37]">฿{dish.basePrice}</span>
                <span className="text-[11px] text-[#A09A92]">(รวมภาษีมูลค่าเพิ่มแล้ว)</span>
              </div>

              {/* Dietary & Allergens */}
              <div className="space-y-2 pt-1">
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

          {/* Navigation Tabs */}
          <div className="border-b border-[#E6E3DD] flex gap-4 pt-2">
            <button
              onClick={() => setActiveTab('details')}
              className={`pb-3 text-xs font-semibold uppercase tracking-wider border-b-2 flex items-center gap-2 transition-colors ${
                activeTab === 'details'
                  ? 'border-[#722F37] text-[#722F37]'
                  : 'border-transparent text-[#706B65] hover:text-[#252422]'
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>ปรับแต่งเมนูและตัวเลือก</span>
            </button>

            <button
              onClick={() => setActiveTab('recipe')}
              className={`pb-3 text-xs font-semibold uppercase tracking-wider border-b-2 flex items-center gap-2 transition-colors ${
                activeTab === 'recipe'
                  ? 'border-[#722F37] text-[#722F37]'
                  : 'border-transparent text-[#706B65] hover:text-[#252422]'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>สูตรอาหารและวัตถุดิบ</span>
            </button>
          </div>

          {/* Tab 1: Customizations */}
          {activeTab === 'details' && (
            <div className="space-y-6">
              
              {dish.optionGroups && dish.optionGroups.length > 0 ? (
                dish.optionGroups.map((group) => (
                  <div key={group.id} className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold text-[#252422]">
                        {group.name}
                      </label>
                      {group.isRequired ? (
                        <span className="text-[10px] font-bold text-[#722F37] bg-[#F7EFF1] px-2 py-0.5 rounded">
                          จำเป็นต้องเลือก
                        </span>
                      ) : (
                        <span className="text-[10px] text-[#A09A92]">เลือกได้ตามชอบ</span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {group.options.map((opt) => {
                        const isSelected = selectedOptions[group.id] === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => handleOptionSelect(group.id, opt.id)}
                            className={`p-3 rounded-xl border text-left text-xs flex items-center justify-between transition-all ${
                              isSelected
                                ? 'border-[#722F37] bg-[#F7EFF1] text-[#252422] font-semibold'
                                : 'border-[#E6E3DD] hover:bg-[#F7F5F0] text-[#706B65]'
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                isSelected ? 'border-[#722F37] bg-[#722F37] text-white' : 'border-[#D8D3C9]'
                              }`}>
                                {isSelected && <Check className="w-3 h-3" />}
                              </span>
                              <span>{opt.name}</span>
                            </span>

                            {opt.additionalPrice > 0 && (
                              <span className="font-semibold text-[#722F37]">
                                +฿{opt.additionalPrice}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-xs text-[#A09A92] italic">
                  เมนูนี้นำเสนอสูตรอิตาเลียนดั้งเดิม ปรุงสดกลมกล่อมลงตัวพร้อมเสิร์ฟ
                </p>
              )}

              {/* Special Instructions */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#252422]">
                  คำขอพิเศษถึงเชฟ (Special Instructions)
                </label>
                <textarea
                  rows={2}
                  placeholder="เช่น ขอไม่ใส่ชีส, แยกน้ำซอส หรือคำขออื่นๆ..."
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  className="w-full p-3 text-xs bg-[#F7F5F0] border border-[#E6E3DD] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#722F37] text-[#252422]"
                />
              </div>

            </div>
          )}

          {/* Tab 2: Recipe Breakdown */}
          {activeTab === 'recipe' && (
            <div className="space-y-6">
              
              <div className="bg-[#F7F5F0] p-4 rounded-2xl border border-[#E6E3DD] space-y-3">
                <div className="flex items-center gap-2 text-[#722F37] font-semibold text-xs uppercase tracking-wider">
                  <ChefHat className="w-4 h-4" />
                  <span>ส่วนประกอบและวัตถุดิบจริงตามสูตร</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {dish.ingredients.map((ing) => (
                    <div key={ing.id} className="bg-white p-2.5 rounded-xl border border-[#E6E3DD] flex items-center justify-between">
                      <div>
                        <span className="font-medium text-[#252422]">{ing.name}</span>
                        {ing.notes && <span className="block text-[10px] text-[#A09A92]">{ing.notes}</span>}
                      </div>
                      <span className="font-semibold text-[#722F37] shrink-0">
                        {ing.quantity} {ing.unit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#252422] font-semibold text-xs uppercase tracking-wider">
                  <Layers className="w-4 h-4 text-[#722F37]" />
                  <span>ขั้นตอนการปรุงอาหารของร้าน (Preparation Method)</span>
                </div>

                <div className="space-y-2 text-xs">
                  {dish.preparationSteps.map((step) => (
                    <div key={step.stepNumber} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-[#E6E3DD]">
                      <span className="w-5 h-5 rounded-full bg-[#722F37] text-white flex items-center justify-center font-bold text-[11px] shrink-0">
                        {step.stepNumber}
                      </span>
                      <p className="text-[#706B65] leading-relaxed pt-0.5 font-light">
                        {step.instruction}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Sticky Bottom Checkout Bar */}
        <div className="p-4 bg-[#F7F5F0] border-t border-[#E6E3DD] flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-[#706B65]">จำนวน:</span>
            <div className="flex items-center bg-white border border-[#E6E3DD] rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 text-[#706B65] hover:bg-[#EFECE6] transition-colors"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>

              <span className="px-4 font-bold text-xs text-[#252422]">
                {quantity}
              </span>

              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 text-[#706B65] hover:bg-[#EFECE6] transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!dish.isAvailable}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-2xs transition-all ${
              dish.isAvailable
                ? 'bg-[#722F37] hover:bg-[#542229] text-white active:scale-95'
                : 'bg-stone-300 text-stone-500 cursor-not-allowed'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>เพิ่มลงตะกร้า • ฿{totalPrice}</span>
          </button>

        </div>

      </div>
    </div>
  );
};
