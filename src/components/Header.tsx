import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  Search, Utensils, Home, Info, 
  Heart, Menu, X, Calendar
} from 'lucide-react';

interface HeaderProps {
  onOpenCart?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const { favorites, activeTab, setActiveTab, searchQuery, setSearchQuery } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'หน้าหลัก', icon: Home },
    { id: 'menu', label: 'เมนูอาหาร', icon: Utensils },
    { id: 'about', label: 'เรื่องราวของร้าน', icon: Info },
    { id: 'reservations', label: 'สำรองโต๊ะมื้อค่ำ', icon: Calendar }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#E6E3DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Official Wordmark & Tagline */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-10 h-10 rounded-full bg-[#722F37] text-[#FAF7F2] flex items-center justify-center font-serif font-bold text-lg tracking-widest shadow-2xs">
              A
            </div>
            <div>
              <span className="text-2xl font-bold tracking-wider text-[#252422] block font-serif leading-none">
                AUVELARO
              </span>
              <span className="text-[9px] text-[#706B65] uppercase tracking-[0.25em] block mt-1 font-semibold">
                A MODERN EUROPEAN TABLE
              </span>
            </div>
          </div>

          {/* Search Input - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xs mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="ค้นหาเมนูอาหารอิตาเลียน-ฝรั่งเศส..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (activeTab !== 'menu') setActiveTab('menu');
                }}
                className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-[#E6E3DD] rounded-full focus:outline-none focus:ring-1 focus:ring-[#722F37] text-[#252422] placeholder-[#A09A92]"
              />
              <Search className="w-3.5 h-3.5 text-[#A09A92] absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isActive 
                      ? 'bg-[#722F37] text-white shadow-2xs' 
                      : 'text-[#706B65] hover:text-[#252422] hover:bg-[#EFECE6]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Header Action Utilities */}
          <div className="flex items-center gap-2">
            
            {/* Favorites */}
            <button
              onClick={() => setActiveTab('menu')}
              className="p-2.5 rounded-lg text-[#706B65] hover:text-[#722F37] hover:bg-[#EFECE6] transition-colors relative"
              title="รายการเมนูที่สนใจ"
            >
              <Heart className="w-4 h-4" />
              {favorites.length > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#722F37]"></span>
              )}
            </button>

            {/* Primary Action Button - Explore Menu */}
            <button
              onClick={() => setActiveTab('menu')}
              className="flex items-center gap-2 bg-[#722F37] hover:bg-[#542229] text-white px-5 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-transform active:scale-95 shadow-2xs"
            >
              <Utensils className="w-4 h-4" />
              <span className="hidden sm:inline font-semibold">สำรวจเมนู</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#706B65] hover:bg-[#EFECE6] lg:hidden"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F5F0] border-b border-[#E6E3DD] px-4 pt-3 pb-6 space-y-3">
          <div className="relative mb-2">
            <input
              type="text"
              placeholder="ค้นหาเมนูอาหารอิตาเลียน-ฝรั่งเศส..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (activeTab !== 'menu') setActiveTab('menu');
              }}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-[#E6E3DD] rounded-lg focus:outline-none"
            />
            <Search className="w-3.5 h-3.5 text-[#A09A92] absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 p-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isActive ? 'bg-[#722F37] text-white' : 'bg-white text-[#706B65] border border-[#E6E3DD]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

