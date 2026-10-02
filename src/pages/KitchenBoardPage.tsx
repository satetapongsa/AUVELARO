import React from 'react';
import { useStore } from '../context/StoreContext';
import { Order, OrderStatus } from '../types';
import { ChefHat, Clock, CheckCircle2, ArrowRight, AlertCircle, RefreshCw, Flame } from 'lucide-react';

export const KitchenBoardPage: React.FC = () => {
  const { orders, updateOrderStatus } = useStore();

  const pendingOrders = orders.filter(o => o.orderStatus === 'pending_confirmation' || o.orderStatus === 'confirmed');
  const preparingOrders = orders.filter(o => o.orderStatus === 'preparing');
  const readyOrders = orders.filter(o => o.orderStatus === 'delivering' || o.orderStatus === 'ready');

  const renderOrderCard = (order: Order, nextStatus?: OrderStatus, nextLabel?: string) => (
    <div 
      key={order.id}
      className="bg-white p-5 rounded-2xl border-2 border-[#E7E2D9] shadow-sm space-y-4 flex flex-col justify-between"
    >
      <div className="space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#F4EFE6]">
          <div>
            <span className="font-mono font-bold text-base text-[#1C1917] block">
              {order.orderNumber}
            </span>
            <span className="text-[11px] text-[#666059] flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#C85A32]" />
              <span>{new Date(order.createdAt).toLocaleTimeString('th-TH')}</span>
            </span>
          </div>

          <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
            order.fulfillmentType === 'delivery'
              ? 'bg-[#EBF2ED] text-[#2D4F36]'
              : 'bg-[#FAF0EC] text-[#C85A32]'
          }`}>
            {order.fulfillmentType === 'delivery' ? 'เดลิเวอรี' : order.fulfillmentType === 'pickup' ? 'รับที่ร้าน' : 'ทานที่ร้าน'}
          </span>
        </div>

        {/* Customer Notes callout */}
        {order.customerNotes && (
          <div className="p-2.5 bg-[#FAF0EC] rounded-xl text-xs text-[#C85A32] font-semibold flex items-start gap-1.5 border border-[#C85A32]/20">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>โน้ตลูกค้า: {order.customerNotes}</span>
          </div>
        )}

        {/* Dishes list */}
        <div className="space-y-2.5">
          {order.items.map((item, idx) => (
            <div key={idx} className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E7E2D9]">
              <div className="flex items-baseline justify-between">
                <span className="font-bold text-sm text-[#1C1917]">{item.itemName}</span>
                <span className="font-extrabold text-base text-[#2D4F36]">x{item.quantity}</span>
              </div>

              {item.selectedOptions && item.selectedOptions.length > 0 && (
                <div className="text-xs font-semibold text-[#C85A32] mt-1 space-y-0.5">
                  {item.selectedOptions.map((opt, i) => (
                    <span key={i} className="block">• {opt.groupName}: {opt.optionName}</span>
                  ))}
                </div>
              )}

              {item.specialInstructions && (
                <span className="block text-xs font-bold text-[#C85A32] mt-1 underline">
                  หมายเหตุ: {item.specialInstructions}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Action to advance status */}
      {nextStatus && (
        <div className="pt-3 border-t border-[#F4EFE6]">
          <button
            onClick={() => updateOrderStatus(order.id, nextStatus, 'ปรับสถานะโดยห้องครัว KDS')}
            className="w-full py-3 bg-[#2D4F36] hover:bg-[#1E3725] text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-xs transition-all active:scale-98"
          >
            <span>{nextLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* KDS Header */}
      <div className="bg-[#1C1917] text-white p-6 rounded-3xl flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#2D4F36] flex items-center justify-center text-white">
            <ChefHat className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-xl font-bold font-serif">ระบบจอแสดงผลออเดอร์ห้องครัว (KDS)</h1>
            <p className="text-xs text-[#999288] mt-0.5">
              หน้าจอสำหรับพ่อครัวและพนักงานจัดเตรียมอาหาร Artisanal Hearth
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <span className="bg-[#2D4F36] text-white px-3 py-1.5 rounded-full font-bold">
            กำลังปรุง {preparingOrders.length} รายการ
          </span>
        </div>
      </div>

      {/* 3 Columns Kanban Board */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Column 1: New / Awaiting Preparation */}
        <div className="space-y-4 bg-[#FAF7F2] p-4 rounded-3xl border border-[#E7E2D9]">
          <div className="flex items-center justify-between pb-2 border-b border-[#E7E2D9]">
            <h2 className="font-bold text-sm text-[#1C1917] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C85A32]" />
              <span>1. ออเดอร์ใหม่ / รอยืนยัน ({pendingOrders.length})</span>
            </h2>
          </div>

          <div className="space-y-4">
            {pendingOrders.length === 0 ? (
              <p className="text-xs text-[#999288] text-center py-8">ไม่มีออเดอร์ใหม่ขณะนี้</p>
            ) : (
              pendingOrders.map(ord => renderOrderCard(ord, 'preparing', 'เริ่มทำอาหาร (Start Cook)'))
            )}
          </div>
        </div>

        {/* Column 2: Currently Cooking */}
        <div className="space-y-4 bg-[#FAF7F2] p-4 rounded-3xl border border-[#E7E2D9]">
          <div className="flex items-center justify-between pb-2 border-b border-[#E7E2D9]">
            <h2 className="font-bold text-sm text-[#1C1917] flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#C85A32]" />
              <span>2. กำลังปรุงในครัว ({preparingOrders.length})</span>
            </h2>
          </div>

          <div className="space-y-4">
            {preparingOrders.length === 0 ? (
              <p className="text-xs text-[#999288] text-center py-8">ไม่มีรายการที่กำลังปรุง</p>
            ) : (
              preparingOrders.map(ord => renderOrderCard(ord, 'delivering', 'ปรุงเสร็จแล้ว (Mark Ready)'))
            )}
          </div>
        </div>

        {/* Column 3: Ready / Delivering */}
        <div className="space-y-4 bg-[#FAF7F2] p-4 rounded-3xl border border-[#E7E2D9]">
          <div className="flex items-center justify-between pb-2 border-b border-[#E7E2D9]">
            <h2 className="font-bold text-sm text-[#1C1917] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2D4F36]" />
              <span>3. ปรุงเสร็จแล้ว / พร้อมส่ง ({readyOrders.length})</span>
            </h2>
          </div>

          <div className="space-y-4">
            {readyOrders.length === 0 ? (
              <p className="text-xs text-[#999288] text-center py-8">ไม่มีรายการรอส่งมอบ</p>
            ) : (
              readyOrders.map(ord => renderOrderCard(ord, 'completed', 'ส่งมอบเสร็จสมบูรณ์ (Complete)'))
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
