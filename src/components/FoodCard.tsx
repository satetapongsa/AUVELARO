import React from 'react';
import { MenuItem } from '../types';
import { useStore } from '../context/StoreContext';
import { Clock, Heart, Eye } from 'lucide-react';

interface FoodCardProps {
  dish: MenuItem;
  onSelectDish: (dish: MenuItem) => void;
  featured?: boolean;
}

export const FoodCard: React.FC<FoodCardProps> = ({ dish, onSelectDish, featured = false }) => {
  const { favorites, toggleFavorite } = useStore();
  const isFav = favorites.includes(dish.id);

  return (
    <div 
      onClick={() => onSelectDish(dish)}
      className={`group bg-white rounded-3xl border border-[#E6E3DD] overflow-hidden hover:border-[#722F37]/30 hover:shadow-xl transition-all duration-500 flex flex-col cursor-pointer relative ${
        featured ? 'md:col-span-2 md:grid md:grid-cols-12 md:items-center' : ''
      }`}
    >
      {/* Image Container */}
      <div className={`relative w-full bg-[#EFECE6] overflow-hidden ${
        featured ? 'md:col-span-7 aspect-4/3 md:aspect-square' : 'aspect-4/3'
      }`}>
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80';
          }}
        />
        
        {/* Subtle Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(dish.id);
          }}
          className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-transform active:scale-90 ${
            isFav 
              ? 'bg-white text-[#722F37] shadow-xs' 
              : 'bg-black/30 text-white hover:bg-black/50'
          }`}
          title={isFav ? 'เลิกชอบ' : 'บันทึกในรายการสนใจ'}
        >
          <Heart className={`w-4 h-4 ${isFav ? 'fill-[#722F37]' : ''}`} />
        </button>

        {/* Badges Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white font-medium">
          <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px]">
            <Clock className="w-3.5 h-3.5 text-[#E6E3DD]" />
            <span>{dish.preparationTimeMinutes} นาที</span>
          </div>

          {dish.dietaryLabels && dish.dietaryLabels.length > 0 && (
            <span className="bg-[#722F37]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-semibold">
              {dish.dietaryLabels[0]}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 flex-1 flex flex-col justify-between ${
        featured ? 'md:col-span-5 md:p-8' : ''
      }`}>
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-2">
            <span className="text-[10px] uppercase tracking-widest text-[#722F37] font-semibold">
              AUVELARO SELECTION
            </span>
            <span className="text-xl font-bold font-serif text-[#722F37]">
              ฿{dish.basePrice.toLocaleString()}
            </span>
          </div>

          <h3 className="font-serif font-bold text-[#252422] text-xl group-hover:text-[#722F37] transition-colors leading-snug mb-2">
            {dish.name}
          </h3>

          <p className="text-xs text-[#706B65] line-clamp-3 leading-relaxed mb-4 font-light">
            {dish.description}
          </p>
        </div>

        <div>
          {/* Recipe Info snippet */}
          <div className="flex items-center gap-2 text-[11px] text-[#A09A92] mb-5 pb-3 border-b border-[#EFECE6]">
            <span>{dish.ingredients.length} วัตถุดิบหลัก</span>
            <span>•</span>
            <span>{dish.portionSize}</span>
          </div>

          {/* Action */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs text-[#A09A92] font-serif italic">
              View Ingredients & Recipe
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectDish(dish);
              }}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-2 bg-[#722F37] hover:bg-[#542229] text-white active:scale-95 transition-all shadow-2xs"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>รายละเอียด</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


