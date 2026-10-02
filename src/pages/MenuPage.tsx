import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { FoodCard } from '../components/FoodCard';
import { MenuItem } from '../types';
import { Search, Utensils, X } from 'lucide-react';

export const MenuPage: React.FC = () => {
  const { 
    menuItems, categories, selectedCategory, setSelectedCategory, 
    searchQuery, setSearchQuery, setSelectedDish 
  } = useStore();

  const filteredDishes = menuItems.filter(dish => {
    if (!dish.isPublished) return false;
    
    if (selectedCategory !== 'all' && dish.categoryId !== selectedCategory) {
      return false;
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = dish.name.toLowerCase().includes(q);
      const matchDesc = dish.description.toLowerCase().includes(q);
      const matchIng = dish.ingredients?.some(i => i.name.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchIng) return false;
    }

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-[#F7F5F0]">
      
      {/* Page Title */}
      <div className="space-y-2 text-center sm:text-left">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#722F37]">
          Il Nostro Menu — European Dining Catalog
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#252422] font-serif">
          รายการเมนูอาหารอิตาเลียน-ฝรั่งเศส
        </h1>
        <p className="text-xs text-[#706B65] max-w-xl font-light">
          เลือกชมพาสต้าเส้นสด สเต๊กเนื้อริบอาย ซุป อาหารจานหลัก ของหวาน และเครื่องดื่ม พร้อมทำความรู้จักวัตถุดิบและกรรมวิธีปรุง
        </p>
      </div>

      {/* Categories Horizontal Navigation Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2.5 rounded-full text-xs font-semibold shrink-0 transition-all ${
            selectedCategory === 'all'
              ? 'bg-[#722F37] text-white shadow-2xs'
              : 'bg-white text-[#706B65] border border-[#E6E3DD] hover:bg-[#EFECE6]'
          }`}
        >
          เมนูทั้งหมด ({menuItems.filter(m => m.isPublished).length})
        </button>

        {categories.filter(c => c.isActive).map((cat) => {
          const count = menuItems.filter(m => m.categoryId === cat.id && m.isPublished).length;
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold shrink-0 transition-all ${
                isSelected
                  ? 'bg-[#722F37] text-white shadow-2xs'
                  : 'bg-white text-[#706B65] border border-[#E6E3DD] hover:bg-[#EFECE6]'
              }`}
            >
              {cat.name} ({count})
            </button>
          );
        })}
      </div>

      {/* Control Tools Bar */}
      <div className="bg-white p-4 rounded-2xl border border-[#E6E3DD] flex items-center justify-between gap-4 shadow-2xs">
        
        {/* Search */}
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="ค้นหาชื่ออาหาร วัตถุดิบ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-8 py-2.5 text-xs bg-[#F7F5F0] border border-[#E6E3DD] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#722F37] text-[#252422]"
          />
          <Search className="w-4 h-4 text-[#A09A92] absolute left-3 top-1/2 -translate-y-1/2" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#A09A92] hover:text-[#252422]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="hidden sm:block text-xs text-[#706B65] font-serif italic">
          คลิกที่รายการอาหารเพื่อชมส่วนประกอบและกรรมวิธีปรุง
        </div>

      </div>

      {/* Grid of Food Cards */}
      {filteredDishes.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-[#E6E3DD] space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-[#EFECE6] flex items-center justify-center mx-auto text-[#A09A92]">
            <Utensils className="w-8 h-8" />
          </div>
          <h3 className="text-base font-serif font-bold text-[#252422]">ไม่พบรายการอาหารตามเงื่อนไข</h3>
          <p className="text-xs text-[#706B65] max-w-sm mx-auto font-light">
            ลองเปลี่ยนคำค้นหา หรือเลือกหมวดหมู่อื่นเพื่อชมรายการอาหารจากร้าน
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-4 py-2 bg-[#722F37] text-white rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#542229]"
          >
            ล้างตัวกรองทั้งหมด
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDishes.map((dish) => (
            <FoodCard
              key={dish.id}
              dish={dish}
              onSelectDish={(d: MenuItem) => setSelectedDish(d)}
            />
          ))}
        </div>
      )}

    </div>
  );
};

