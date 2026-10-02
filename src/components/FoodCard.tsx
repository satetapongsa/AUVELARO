import React from 'react';
import { MenuItem } from '../types';
import { useStore } from '../context/StoreContext';
import { Clock, Heart, Plus, Eye, ShieldCheck, Check } from 'lucide-react';

interface FoodCardProps {
  dish: MenuItem;
  onSelectDish: (dish: MenuItem) => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({ dish, onSelectDish }) => {
  const { addToCart, favorites, toggleFavorite } = useStore();
  const isFav = favorites.includes(dish.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!dish.isAvailable) return;
    
    // If dish has required option groups, open detail modal instead
    const hasRequiredOptions = dish.optionGroups?.some(g => g.isRequired);
    if (hasRequiredOptions) {
      onSelectDish(dish);
      return;
    }

    addToCart(dish, 1, [], '');
  };

  return (
    <div 
      onClick={() => onSelectDish(dish)}
      className="group bg-white rounded-2xl border border-[#E6E3DD] overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer relative"
    >
      {/* Image Container */}
      <div className="relative aspect-4/3 w-full bg-[#EFECE6] overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80';
          }}
        />
        
        {/* Dark Overlay Gradation */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(dish.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-transform active:scale-90 ${
            isFav 
              ? 'bg-white text-[#722F37] shadow-2xs' 
              : 'bg-black/30 text-white hover:bg-black/50'
          }`}
          title={isFav ? 'เลิกชอบ' : 'เพิ่มในรายการโปรด'}
        >
          <Heart className={`w-4 h-4 ${isFav ? 'fill-[#722F37]' : ''}`} />
        </button>

        {/* Badges Overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-medium">
          <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px]">
            <Clock className="w-3 h-3 text-[#E6E3DD]" />
            <span>{dish.preparationTimeMinutes} นาที</span>
          </div>

          {dish.dietaryLabels && dish.dietaryLabels.length > 0 && (
            <span className="bg-[#722F37]/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px]">
              {dish.dietaryLabels[0]}
            </span>
          )}
        </div>

        {/* Sold out Overlay */}
        {!dish.isAvailable && (
          <div className="absolute inset-0 bg-black/75 backdrop-blur-xs flex flex-col items-center justify-center text-white p-4 text-center">
            <span className="bg-[#722F37] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-1">
              สินค้าหมดชั่วคราว
            </span>
            <span className="text-xs text-stone-300">วัตถุดิบหมดสำหรับวันนี้</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif font-bold text-[#252422] text-base group-hover:text-[#722F37] transition-colors line-clamp-1">
            {dish.name}
          </h3>

          <p className="text-xs text-[#706B65] line-clamp-2 leading-relaxed mb-3 mt-1 font-light">
            {dish.description}
          </p>
        </div>

        <div>
          {/* Recipe Info snippet */}
          <div className="flex items-center gap-2 text-[11px] text-[#A09A92] mb-3 pb-3 border-b border-[#EFECE6]">
            <span>สูตรอิตาเลียน</span>
            <span>•</span>
            <span>{dish.ingredients.length} วัตถุดิบ</span>
            <span>•</span>
            <span>{dish.portionSize}</span>
          </div>

          {/* Price & Action */}
          <div className="flex items-center justify-between pt-1">
            <div>
              <span className="text-[10px] text-[#A09A92] uppercase tracking-wider block">ราคา</span>
              <span className="text-lg font-bold text-[#722F37]">
                ฿{dish.basePrice}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectDish(dish);
                }}
                className="p-2 rounded-xl text-[#706B65] bg-[#EFECE6] hover:bg-[#E6E3DD] transition-colors"
                title="ดูรายละเอียดและสูตรอาหาร"
              >
                <Eye className="w-4 h-4" />
              </button>

              <button
                onClick={handleQuickAdd}
                disabled={!dish.isAvailable}
                className={`px-3 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                  dish.isAvailable 
                    ? 'bg-[#722F37] hover:bg-[#542229] text-white active:scale-95 shadow-2xs' 
                    : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                }`}
              >
                <Plus className="w-3.5 h-3.5" />
                <span>สั่งเลย</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
