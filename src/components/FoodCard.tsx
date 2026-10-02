import React from 'react';
import { MenuItem } from '../types';
import { useStore } from '../context/StoreContext';
import { Clock, Heart, Eye, ArrowRight } from 'lucide-react';

interface FoodCardProps {
  dish: MenuItem;
  onSelectDish: (dish: MenuItem) => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({ dish, onSelectDish }) => {
  const { favorites, toggleFavorite } = useStore();
  const isFav = favorites.includes(dish.id);

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
          title={isFav ? 'เลิกชอบ' : 'บันทึกในรายการสนใจ'}
        >
          <Heart className={`w-4 h-4 ${isFav ? 'fill-[#722F37]' : ''}`} />
        </button>

        {/* Badges Overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-medium">
          <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px]">
            <Clock className="w-3 h-3 text-[#E6E3DD]" />
            <span>เวลาปรุงประมาณ {dish.preparationTimeMinutes} นาที</span>
          </div>

          {dish.dietaryLabels && dish.dietaryLabels.length > 0 && (
            <span className="bg-[#722F37]/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px]">
              {dish.dietaryLabels[0]}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif font-bold text-[#252422] text-lg group-hover:text-[#722F37] transition-colors line-clamp-1">
            {dish.name}
          </h3>

          <p className="text-xs text-[#706B65] line-clamp-2 leading-relaxed mb-4 mt-1.5 font-light">
            {dish.description}
          </p>
        </div>

        <div>
          {/* Recipe Info snippet */}
          <div className="flex items-center gap-2 text-[11px] text-[#A09A92] mb-4 pb-3 border-b border-[#EFECE6]">
            <span>{dish.ingredients.length} วัตถุดิบ</span>
            <span>•</span>
            <span>{dish.portionSize}</span>
          </div>

          {/* Action */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs text-[#706B65] font-serif italic">
              รายละเอียดและขั้นตอนปรุง
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectDish(dish);
              }}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 bg-[#722F37] hover:bg-[#542229] text-white active:scale-95 transition-all shadow-2xs"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>ดูข้อมูลจาน</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

