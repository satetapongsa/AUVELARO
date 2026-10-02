import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  ShoppingBag, Search, Utensils, Home, Info, HelpCircle, 
  User, Heart, ClipboardList, Menu, X, Calendar
} from 'lucide-react';

interface HeaderProps {
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCart }) => {
  const { settings, cart, favorites, activeTab, setActiveTab, searchQuery, setSearchQuery } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  const navItems = [
    { id: 'home', label: 'หน้าหลัก', icon: Home },
    { id: 'menu', label: 'เมนูอาหาร', icon: Utensils },
    { id: 'about', label: 'เรื่องราวของร้าน', icon: Info },
    { id: 'reservations', label: 'สำรองโต๊ะ', icon: Calendar },
    { id: 'tracking', label: 'ติดตามออเดอร์', icon: ClipboardList }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#E6E3DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-22">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-10 h-10 rounded-full bg-[#722F37] text-[#FAF7F2] flex items-center justify-center font-serif font-bold text-lg tracking-widest shadow-sm">
              AH
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#252422] block font-serif leading-none">
                ARTISANAL HEARTH
              </span>
              <span className="text-[10px] text-[#706B65] uppercase tracking-widest block mt-1 font-medium">
                Modern Italian & European Dining
              </span>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xs mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="ค้นหาเมนูอิตาเลียน..."
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
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium transition-colors ${
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

          {/* Actions */}
          <div className="flex items-center gap-2">
            
            {/* Favorites Button */}
            <button
              onClick={() => setActiveTab('account')}
              className="p-2.5 rounded-lg text-[#706B65] hover:text-[#722F37] hover:bg-[#EFECE6] transition-colors relative"
              title="รายการที่ชอบ"
            >
              <Heart className="w-4 h-4" />
              {favorites.length > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#722F37]"></span>
              )}
            </button>

            {/* User Account */}
            <button
              onClick={() => setActiveTab('account')}
              className={`p-2.5 rounded-lg transition-colors text-[#706B65] hover:bg-[#EFECE6] ${
                activeTab === 'account' ? 'text-[#722F37]' : ''
              }`}
              title="บัญชีผู้ใช้ / ประวัติคำสั่งซื้อ"
            >
              <User className="w-4 h-4" />
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2 bg-[#722F37] hover:bg-[#542229] text-white px-4 py-2.5 rounded-xl font-medium text-xs transition-transform active:scale-95 shadow-2xs"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-[#722F37] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#722F37]">
                    {cartItemCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-semibold">ตะกร้า</span>
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

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F5F0] border-b border-[#E6E3DD] px-4 pt-3 pb-6 space-y-3">
          <div className="relative mb-2">
            <input
              type="text"
              placeholder="ค้นหาเมนูอาหารอิตาเลียน..."
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
                  className={`flex items-center gap-2 p-3 rounded-lg text-xs font-medium transition-colors ${
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
