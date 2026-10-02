import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Order, PaymentMethod } from '../types';
import { PromptPayModal } from '../components/PromptPayModal';
import { 
  ShoppingBag, Truck, Store, Utensils, CreditCard, QrCode, 
  Banknote, Phone, User, ArrowLeft, CheckCircle2, ShieldCheck
} from 'lucide-react';

interface CheckoutPageProps {
  onOrderPlaced: (order: Order) => void;
  onBackToMenu: () => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ onOrderPlaced, onBackToMenu }) => {
  const { 
    cart, cartSubtotal, fulfillmentType, setFulfillmentType, 
    deliveryFee, cartTotal, discountAmount, promoCode, createOrder
  } = useStore();

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryInstructions, setDeliveryInstructions] = useState('');
  const [tableNumber, setTableNumber] = useState('08');
  const [customerNotes, setCustomerNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('promptpay');

  const [createdOrder, setCreatedOrder] = useState<Order | null>(null);
  const [showPromptPayModal, setShowPromptPayModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  if (cart.length === 0 && !createdOrder) {
    return (
      <div className="max-w-md mx-auto my-16 bg-white p-8 rounded-3xl border border-[#E6E3DD] text-center space-y-4 shadow-sm">
        <div className="w-16 h-16 rounded-2xl bg-[#F7F5F0] text-[#A09A92] flex items-center justify-center mx-auto">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold font-serif text-[#252422]">ไม่มีรายการอาหารในตะกร้า</h2>
        <p className="text-xs text-[#706B65]">กรุณาเลือกอาหารจากเมนูก่อนทำรายการชำระเงิน</p>
        <button
          onClick={onBackToMenu}
          className="px-6 py-3 bg-[#722F37] text-white font-semibold rounded-xl text-xs uppercase tracking-widest hover:bg-[#542229]"
        >
          กลับไปเลือกเมนูอาหาร
        </button>
      </div>
    );
  }

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!customerName.trim()) {
      setFormError('กรุณากรอกชื่อผู้สั่งอาหาร');
      return;
    }
    if (!customerPhone.trim()) {
      setFormError('กรุณากรอกเบอร์โทรศัพท์สำหรับติดต่อ');
      return;
    }
    if (fulfillmentType === 'delivery' && !deliveryAddress.trim()) {
      setFormError('กรุณากรอกที่อยู่สำหรับจัดส่งอาหาร');
      return;
    }

    setIsSubmitting(true);

    const itemsSnapshot = cart.map(item => ({
      id: `oi-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      menuItemId: item.menuItem.id,
      itemName: item.menuItem.name,
      itemImage: item.menuItem.image,
      unitPrice: item.unitPrice,
      quantity: item.quantity,
      selectedOptions: item.selectedOptions,
      specialInstructions: item.specialInstructions,
      lineTotal: item.totalPrice
    }));

    const orderData = {
      customerName,
      customerPhone,
      customerEmail,
      fulfillmentType,
      deliveryAddress: fulfillmentType === 'delivery' ? deliveryAddress : undefined,
      deliveryInstructions: fulfillmentType === 'delivery' ? deliveryInstructions : undefined,
      tableNumber: fulfillmentType === 'dinein' ? tableNumber : undefined,
      subtotal: cartSubtotal,
      discount: discountAmount,
      discountCode: promoCode?.code,
      deliveryFee,
      total: cartTotal,
      currency: 'THB',
      paymentMethod,
      paymentStatus: (paymentMethod === 'promptpay' ? 'pending' : paymentMethod === 'card' ? 'paid' : 'pending') as any,
      orderStatus: 'pending_confirmation' as any,
      customerNotes,
      items: itemsSnapshot
    };

    const newOrder = createOrder(orderData);
    setCreatedOrder(newOrder);
    setIsSubmitting(false);

    if (paymentMethod === 'promptpay') {
      setShowPromptPayModal(true);
    } else {
      onOrderPlaced(newOrder);
    }
  };

  const handlePromptPaySuccess = () => {
    setShowPromptPayModal(false);
    if (createdOrder) {
      onOrderPlaced(createdOrder);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-[#F7F5F0]">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackToMenu}
          className="flex items-center gap-1.5 text-xs font-semibold text-[#706B65] hover:text-[#252422]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>กลับไปเลือกเมนูอาหาร</span>
        </button>

        <h1 className="text-2xl font-bold text-[#252422] font-serif">
          ชำระเงินและยืนยันคำสั่งซื้อ (Checkout)
        </h1>
      </div>

      <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* 1. Fulfillment Mode */}
          <div className="bg-white p-6 rounded-3xl border border-[#E6E3DD] space-y-4 shadow-2xs">
            <h2 className="font-serif font-bold text-base text-[#252422] flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#722F37]" />
              <span>1. เลือกวิธีการรับอาหาร</span>
            </h2>

            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setFulfillmentType('delivery')}
                className={`p-4 rounded-2xl border text-center flex flex-col items-center gap-2 transition-all ${
                  fulfillmentType === 'delivery'
                    ? 'border-[#722F37] bg-[#F7EFF1] text-[#722F37] font-semibold shadow-2xs'
                    : 'border-[#E6E3DD] text-[#706B65] hover:bg-[#F7F5F0]'
                }`}
              >
                <Truck className="w-5 h-5" />
                <span className="text-xs">จัดส่งถึงบ้าน</span>
              </button>

              <button
                type="button"
                onClick={() => setFulfillmentType('pickup')}
                className={`p-4 rounded-2xl border text-center flex flex-col items-center gap-2 transition-all ${
                  fulfillmentType === 'pickup'
                    ? 'border-[#722F37] bg-[#F7EFF1] text-[#722F37] font-semibold shadow-2xs'
                    : 'border-[#E6E3DD] text-[#706B65] hover:bg-[#F7F5F0]'
                }`}
              >
                <Store className="w-5 h-5" />
                <span className="text-xs">รับอาหารที่ร้าน</span>
              </button>

              <button
                type="button"
                onClick={() => setFulfillmentType('dinein')}
                className={`p-4 rounded-2xl border text-center flex flex-col items-center gap-2 transition-all ${
                  fulfillmentType === 'dinein'
                    ? 'border-[#722F37] bg-[#F7EFF1] text-[#722F37] font-semibold shadow-2xs'
                    : 'border-[#E6E3DD] text-[#706B65] hover:bg-[#F7F5F0]'
                }`}
              >
                <Utensils className="w-5 h-5" />
                <span className="text-xs">ทานที่ร้าน</span>
              </button>
            </div>
          </div>

          {/* 2. Customer Info */}
          <div className="bg-white p-6 rounded-3xl border border-[#E6E3DD] space-y-4 shadow-2xs">
            <h2 className="font-serif font-bold text-base text-[#252422] flex items-center gap-2">
              <User className="w-4 h-4 text-[#722F37]" />
              <span>2. ข้อมูลติดต่อและสถานที่จัดส่ง</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#252422]">ชื่อ-นามสกุล ผู้สั่ง *</label>
                <input
                  type="text"
                  required
                  placeholder="เช่น คุณสมชาย ใจดี"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full p-3 text-xs bg-[#F7F5F0] border border-[#E6E3DD] rounded-xl text-[#252422] focus:outline-none focus:ring-1 focus:ring-[#722F37]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#252422]">เบอร์โทรศัพท์สำหรับติดต่อ *</label>
                <input
                  type="tel"
                  required
                  placeholder="เช่น 081-234-5678"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full p-3 text-xs bg-[#F7F5F0] border border-[#E6E3DD] rounded-xl text-[#252422] focus:outline-none focus:ring-1 focus:ring-[#722F37]"
                />
              </div>
            </div>

            {fulfillmentType === 'delivery' && (
              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#252422]">ที่อยู่สำหรับจัดส่ง *</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="บ้านเลขที่, คอนโด/อาคาร, ซอย, ถนน, แขวง/เขต, กรุงเทพฯ..."
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    className="w-full p-3 text-xs bg-[#F7F5F0] border border-[#E6E3DD] rounded-xl text-[#252422] focus:outline-none focus:ring-1 focus:ring-[#722F37]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#252422]">คำแนะนำสำหรับคนส่ง (ถ้ามี)</label>
                  <input
                    type="text"
                    placeholder="เช่น ฝากไว้ที่เคาน์เตอร์นิติบุคคล, โทรบอกก่อนส่ง..."
                    value={deliveryInstructions}
                    onChange={(e) => setDeliveryInstructions(e.target.value)}
                    className="w-full p-3 text-xs bg-[#F7F5F0] border border-[#E6E3DD] rounded-xl text-[#252422]"
                  />
                </div>
              </div>
            )}

            {fulfillmentType === 'dinein' && (
              <div className="space-y-1 pt-2">
                <label className="text-xs font-semibold text-[#252422]">หมายเลขโต๊ะอาหาร</label>
                <input
                  type="text"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  className="w-full p-3 text-xs bg-[#F7F5F0] border border-[#E6E3DD] rounded-xl text-[#252422]"
                />
              </div>
            )}
          </div>

          {/* 3. Payment Method */}
          <div className="bg-white p-6 rounded-3xl border border-[#E6E3DD] space-y-4 shadow-2xs">
            <h2 className="font-serif font-bold text-base text-[#252422] flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-[#722F37]" />
              <span>3. ช่องทางการชำระเงิน</span>
            </h2>

            <div className="space-y-2.5">
              <button
                type="button"
                onClick={() => setPaymentMethod('promptpay')}
                className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                  paymentMethod === 'promptpay'
                    ? 'border-[#722F37] bg-[#F7EFF1] text-[#252422] font-semibold'
                    : 'border-[#E6E3DD] hover:bg-[#F7F5F0] text-[#706B65]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <QrCode className="w-5 h-5 text-[#722F37]" />
                  <div>
                    <span className="text-xs block">PromptPay QR Code (แนะนํา)</span>
                    <span className="text-[11px] text-[#706B65]">สแกนผ่านแอปธนาคารไทย ชำระได้ทันที</span>
                  </div>
                </div>
                {paymentMethod === 'promptpay' && <CheckCircle2 className="w-5 h-5 text-[#722F37]" />}
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                  paymentMethod === 'card'
                    ? 'border-[#722F37] bg-[#F7EFF1] text-[#252422] font-semibold'
                    : 'border-[#E6E3DD] hover:bg-[#F7F5F0] text-[#706B65]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-[#722F37]" />
                  <div>
                    <span className="text-xs block">บัตรเครดิต / เดบิต (Visa, Mastercard)</span>
                    <span className="text-[11px] text-[#706B65]">ระบบชำระปลอดภัย มาตรฐาน SSL</span>
                  </div>
                </div>
                {paymentMethod === 'card' && <CheckCircle2 className="w-5 h-5 text-[#722F37]" />}
              </button>

              {fulfillmentType === 'delivery' && (
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    paymentMethod === 'cod'
                      ? 'border-[#722F37] bg-[#F7EFF1] text-[#252422] font-semibold'
                      : 'border-[#E6E3DD] hover:bg-[#F7F5F0] text-[#706B65]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Banknote className="w-5 h-5 text-[#722F37]" />
                    <div>
                      <span className="text-xs block">เก็บเงินปลายทาง (Cash on Delivery)</span>
                      <span className="text-[11px] text-[#706B65]">ชำระเงินสดกับพนักงานส่งเมื่อได้รับอาหาร</span>
                    </div>
                  </div>
                  {paymentMethod === 'cod' && <CheckCircle2 className="w-5 h-5 text-[#722F37]" />}
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Right Order Summary */}
        <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-[#E6E3DD] space-y-6 shadow-sm sticky top-28">
          <h2 className="font-serif font-bold text-lg text-[#252422] pb-3 border-b border-[#E6E3DD]">
            สรุปรายการคำสั่งซื้อ ({cart.reduce((sum, i) => sum + i.quantity, 0)} รายการ)
          </h2>

          <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
            {cart.map((item) => (
              <div key={item.cartItemId} className="flex items-center justify-between text-xs py-1.5 border-b border-[#EFECE6]">
                <div className="flex items-center gap-2 overflow-hidden">
                  <img src={item.menuItem.image} alt="" className="w-10 h-10 rounded-lg object-cover bg-[#EFECE6]" />
                  <div className="truncate">
                    <span className="font-semibold text-[#252422] block truncate">{item.menuItem.name}</span>
                    <span className="text-[11px] text-[#706B65]">x{item.quantity}</span>
                  </div>
                </div>
                <span className="font-bold text-[#252422] shrink-0">฿{item.totalPrice}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2 text-xs text-[#706B65] pt-3 border-t border-[#E6E3DD]">
            <div className="flex justify-between">
              <span>ยอดรวมอาหาร</span>
              <span className="font-semibold text-[#252422]">฿{cartSubtotal}</span>
            </div>

            {discountAmount > 0 && (
              <div className="flex justify-between text-[#722F37]">
                <span>ส่วนลด ({promoCode?.code})</span>
                <span className="font-semibold">-฿{discountAmount}</span>
              </div>
            )}

            {fulfillmentType === 'delivery' && (
              <div className="flex justify-between">
                <span>ค่าจัดส่ง</span>
                <span className="font-semibold text-[#252422]">
                  {deliveryFee === 0 ? 'ส่งฟรี' : `฿${deliveryFee}`}
                </span>
              </div>
            )}

            <div className="flex justify-between text-base font-bold text-[#252422] pt-3 border-t border-[#E6E3DD]">
              <span>ยอดชำระสุทธิ</span>
              <span className="text-[#722F37]">฿{cartTotal}</span>
            </div>
          </div>

          {formError && (
            <div className="p-3 bg-[#F7EFF1] text-[#722F37] text-xs font-semibold rounded-xl border border-[#722F37]/20">
              {formError}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-[#722F37] hover:bg-[#542229] text-white font-semibold rounded-xl text-xs uppercase tracking-widest shadow-sm flex items-center justify-center gap-2 transition-all active:scale-98"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>ยืนยันการสั่งซื้อและชำระเงิน</span>
          </button>
        </div>

      </form>

      {/* PromptPay Modal */}
      {showPromptPayModal && (
        <PromptPayModal
          order={createdOrder}
          onClose={() => setShowPromptPayModal(false)}
          onPaymentSuccess={handlePromptPaySuccess}
        />
      )}

    </div>
  );
};
