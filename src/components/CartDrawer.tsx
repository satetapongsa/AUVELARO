import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  X, ShoppingBag, Trash2, Plus, Minus, Tag, Truck, Store, 
  Utensils, ArrowRight, ShieldCheck
} from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, onProceedToCheckout }) => {
  const { 
    cart, updateCartItemQuantity, removeFromCart, clearCart, cartSubtotal,
    fulfillmentType, setFulfillmentType, deliveryFee, cartTotal,
    promoCode, promoError, applyPromoCode, removePromoCode, discountAmount,
    settings
  } = useStore();

  const [inputCode, setInputCode] = useState('');

  if (!isOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    applyPromoCode(inputCode.trim());
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F7F5F0] shadow-2xl flex flex-col border-l border-[#E6E3DD]">
          
          {/* Header */}
          <div className="p-4 sm:p-6 bg-white border-b border-[#E6E3DD] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#722F37] text-white flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-base text-[#252422]">ตะกร้าอาหารของคุณ</h2>
                <span className="text-xs text-[#706B65]">
                  {cart.length} รายการ ({cart.reduce((s, i) => s + i.quantity, 0)} ชิ้น)
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[#706B65] hover:bg-[#EFECE6] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Fulfillment Type Selector */}
          <div className="p-4 bg-[#EFECE6] border-b border-[#E6E3DD]">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#252422] block mb-2">
              รูปแบบการรับอาหาร:
            </span>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setFulfillmentType('delivery')}
                className={`py-2 px-2 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 transition-all ${
                  fulfillmentType === 'delivery'
                    ? 'bg-[#722F37] text-white shadow-2xs'
                    : 'bg-white text-[#706B65] border border-[#E6E3DD] hover:bg-[#F7F5F0]'
                }`}
              >
                <Truck className="w-4 h-4" />
                <span>จัดส่งถึงบ้าน</span>
              </button>

              <button
                onClick={() => setFulfillmentType('pickup')}
                className={`py-2 px-2 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 transition-all ${
                  fulfillmentType === 'pickup'
                    ? 'bg-[#722F37] text-white shadow-2xs'
                    : 'bg-white text-[#706B65] border border-[#E6E3DD] hover:bg-[#F7F5F0]'
                }`}
              >
                <Store className="w-4 h-4" />
                <span>รับที่ร้าน</span>
              </button>

              <button
                onClick={() => setFulfillmentType('dinein')}
                className={`py-2 px-2 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 transition-all ${
                  fulfillmentType === 'dinein'
                    ? 'bg-[#722F37] text-white shadow-2xs'
                    : 'bg-white text-[#706B65] border border-[#E6E3DD] hover:bg-[#F7F5F0]'
                }`}
              >
                <Utensils className="w-4 h-4" />
                <span>ทานที่ร้าน</span>
              </button>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#A09A92] space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border border-[#E6E3DD]">
                  <ShoppingBag className="w-8 h-8 text-[#A09A92]" />
                </div>
                <h3 className="text-base font-serif font-bold text-[#252422]">ตะกร้ายังว่างอยู่</h3>
                <p className="text-xs text-[#706B65] max-w-xs font-light">
                  เลือกชมเมนูอาหารอิตาเลียนจานโปรดของคุณ แล้วเพิ่มลงในตะกร้าเพื่อเริ่มสั่งซื้อ
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <div 
                  key={item.cartItemId}
                  className="bg-white p-3.5 rounded-2xl border border-[#E6E3DD] flex gap-3 shadow-2xs"
                >
                  <img
                    src={item.menuItem.image}
                    alt={item.menuItem.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0 bg-[#EFECE6]"
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-serif font-bold text-xs text-[#252422] truncate">
                          {item.menuItem.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-[#A09A92] hover:text-[#722F37] p-0.5"
                          title="ลบรายการนี้"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {item.selectedOptions && item.selectedOptions.length > 0 && (
                        <div className="text-[11px] text-[#706B65] mt-0.5 space-y-0.5 font-light">
                          {item.selectedOptions.map((opt, idx) => (
                            <span key={idx} className="block truncate">
                              • {opt.groupName}: {opt.optionName} (+฿{opt.additionalPrice})
                            </span>
                          ))}
                        </div>
                      )}

                      {item.specialInstructions && (
                        <span className="block text-[11px] text-[#722F37] italic mt-0.5 font-medium">
                          หมายเหตุ: {item.specialInstructions}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2 mt-2 border-t border-[#EFECE6]">
                      <span className="font-bold text-xs text-[#722F37]">
                        ฿{item.totalPrice}
                      </span>

                      <div className="flex items-center border border-[#E6E3DD] rounded-lg overflow-hidden bg-[#F7F5F0]">
                        <button
                          onClick={() => updateCartItemQuantity(item.cartItemId, item.quantity - 1)}
                          className="p-1 text-[#706B65] hover:bg-[#EFECE6]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-[#252422]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartItemQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-1 text-[#706B65] hover:bg-[#EFECE6]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Checkout & Summary Footer */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-6 bg-white border-t border-[#E6E3DD] space-y-3">
              
              {promoCode ? (
                <div className="flex items-center justify-between p-2.5 bg-[#F7EFF1] rounded-xl text-xs text-[#722F37] border border-[#722F37]/20 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" />
                    <span>ส่วนลด ({promoCode.code}): -฿{discountAmount}</span>
                  </div>
                  <button
                    onClick={removePromoCode}
                    className="text-xs underline text-[#722F37] font-semibold"
                  >
                    ยกเลิก
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="รหัสส่วนลด (เช่น HEARTH10)"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value.toUpperCase())}
                    className="flex-1 px-3 py-1.5 text-xs border border-[#E6E3DD] rounded-xl bg-[#F7F5F0] text-[#252422]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-[#722F37] text-white rounded-xl text-xs font-semibold hover:bg-[#542229]"
                  >
                    ใช้รหัส
                  </button>
                </form>
              )}

              {promoError && (
                <span className="text-[11px] text-[#722F37] block font-medium">
                  {promoError}
                </span>
              )}

              <div className="space-y-1.5 text-xs text-[#706B65] pt-2 border-t border-[#E6E3DD]">
                <div className="flex justify-between">
                  <span>ราคารวมอาหาร</span>
                  <span className="font-semibold text-[#252422]">฿{cartSubtotal}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#722F37]">
                    <span>ส่วนลดพิเศษ</span>
                    <span className="font-semibold">-฿{discountAmount}</span>
                  </div>
                )}

                {fulfillmentType === 'delivery' && (
                  <div className="flex justify-between">
                    <span>ค่าบริการจัดส่ง</span>
                    <span className="font-semibold text-[#252422]">
                      {deliveryFee === 0 ? 'ส่งฟรี' : `฿${deliveryFee}`}
                    </span>
                  </div>
                )}

                <div className="flex justify-between pt-2 border-t border-[#E6E3DD] text-base font-bold text-[#252422]">
                  <span>ยอดชำระสุทธิ</span>
                  <span className="text-[#722F37]">฿{cartTotal}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout();
                }}
                className="w-full py-3.5 bg-[#722F37] hover:bg-[#542229] text-white rounded-xl font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-2xs transition-all active:scale-98"
              >
                <span>ชำระเงินและยืนยันออเดอร์</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
