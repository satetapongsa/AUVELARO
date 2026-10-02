import React, { useState } from 'react';
import { Order } from '../types';
import { useStore } from '../context/StoreContext';
import { X, QrCode, CheckCircle, Smartphone, Clock } from 'lucide-react';

interface PromptPayModalProps {
  order: Order | null;
  onClose: () => void;
  onPaymentSuccess: () => void;
}

export const PromptPayModal: React.FC<PromptPayModalProps> = ({ order, onClose, onPaymentSuccess }) => {
  const { settings } = useStore();
  const [isProcessing, setIsProcessing] = useState(false);

  if (!order) return null;

  const handleConfirmPaid = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full rounded-3xl overflow-hidden shadow-2xl border border-[#E6E3DD] text-center text-[#252422]">
        
        {/* Header */}
        <div className="bg-[#722F37] text-white p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-2">
            <QrCode className="w-7 h-7 text-white" />
          </div>
          
          <h3 className="text-lg font-bold font-serif">สแกนชำระเงินผ่าน PromptPay</h3>
          <p className="text-xs text-white/80 mt-0.5">
            สแกน QR Code ด้วยแอปพลิเคชันธนาคารไทยได้ทุกธนาคาร
          </p>
        </div>

        {/* QR Code */}
        <div className="p-6 space-y-4 bg-[#F7F5F0]">
          
          <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-[#722F37]/30 inline-block shadow-2xs relative">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=00020101021129370016A00000067701011101130066${settings.promptpayId}5802TH5303764540${order.total}5405${order.orderNumber}`}
              alt="PromptPay QR Code"
              className="w-52 h-52 mx-auto object-contain"
            />
            
            <div className="mt-3 pt-3 border-t border-[#E6E3DD] text-xs text-[#706B65] space-y-0.5 font-light">
              <span className="font-bold text-[#252422] block">{settings.promptpayName}</span>
              <span>พร้อมเพย์: {settings.promptpayId}</span>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-xl border border-[#E6E3DD] text-center">
            <span className="text-xs text-[#706B65] block">จำนวนเงินที่ต้องชำระ</span>
            <span className="text-2xl font-bold text-[#722F37]">฿{order.total}</span>
            <span className="text-[11px] text-[#A09A92] block mt-0.5">
              หมายเลขออเดอร์: {order.orderNumber}
            </span>
          </div>

          <div className="text-left text-xs text-[#706B65] space-y-2 bg-white p-4 rounded-xl border border-[#E6E3DD]">
            <div className="flex items-center gap-2 text-[#252422] font-semibold">
              <Smartphone className="w-4 h-4 text-[#722F37]" />
              <span>ขั้นตอนการชำระเงิน</span>
            </div>
            <ol className="list-decimal list-inside space-y-1 text-[#706B65] pl-1 font-light">
              <li>เปิดแอปธนาคารบนโทรศัพท์มือถือของคุณ</li>
              <li>สแกน QR Code ด้านบนเพื่อโอนเงิน</li>
              <li>ตรวจสอบยอดเงิน ฿{order.total} และกดกดยืนยัน</li>
              <li>กดยืนยันชำระเงินด้านล่างนี้เมื่อสแกนเรียบร้อย</li>
            </ol>
          </div>

          <div className="pt-2 space-y-2">
            <button
              onClick={handleConfirmPaid}
              disabled={isProcessing}
              className="w-full py-3.5 bg-[#722F37] hover:bg-[#542229] text-white font-semibold rounded-xl text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-2xs"
            >
              {isProcessing ? (
                <>
                  <Clock className="w-4 h-4 animate-spin" />
                  <span>กำลังตรวจสอบการชำระเงิน...</span>
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4" />
                  <span>ฉันชำระเงินเรียบร้อยแล้ว</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="text-xs text-[#706B65] hover:underline"
            >
              ชำระด้วยวิธีอื่น
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
