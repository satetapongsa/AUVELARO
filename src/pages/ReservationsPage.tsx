import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Calendar, Clock, Users, MapPin, CheckCircle2, ShieldCheck, Phone, Mail, Utensils } from 'lucide-react';

export const ReservationsPage: React.FC = () => {
  const { settings, setActiveTab } = useStore();

  const [date, setDate] = useState('2026-10-04');
  const [time, setTime] = useState('19:00');
  const [guests, setGuests] = useState('2');
  const [seatingArea, setSeatingArea] = useState('indoor');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [specialNote, setSpecialNote] = useState('');

  const [reservationConfirmed, setReservationConfirmed] = useState(false);
  const [resCode, setResCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('กรุณากรอกชื่อและเบอร์โทรศัพท์สำหรับยืนยันการสำรองโต๊ะ');
      return;
    }

    const randomCode = `RES-AH-${Math.floor(1000 + Math.random() * 9000)}`;
    setResCode(randomCode);
    setReservationConfirmed(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 bg-[#F7F5F0]">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 bg-[#F7EFF1] text-[#722F37] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest">
          <Calendar className="w-4 h-4" />
          <span>Prenotazione Tavoli — สำรองโต๊ะอาหารมื้อค่ำ</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#252422] font-serif">
          สำรองที่นั่ง ณ Artisanal Hearth
        </h1>

        <p className="text-xs text-[#706B65] max-w-xl mx-auto font-light">
          สัมผัสประสบการณ์มื้ออาหารค่ำสุดพิเศษในบรรยากาศอบอุ่นเป็นกันเอง เหมาะสำหรับโอกาสพิเศษ ดินเนอร์คู่รัก และสังสรรค์ครอบครัว
        </p>
      </div>

      {reservationConfirmed ? (
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E6E3DD] text-center space-y-4 shadow-sm max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#F7EFF1] text-[#722F37] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-[#252422] font-serif">ยืนยันการสำรองโต๊ะเรียบร้อยแล้ว</h2>
          <span className="inline-block text-xs font-mono font-bold text-[#722F37] bg-[#F7EFF1] px-4 py-1.5 rounded-full">
            หมายเลขการจอง: {resCode}
          </span>
          <p className="text-xs text-[#706B65] leading-relaxed">
            ขอบคุณ {name} ร้านได้รับการสำรองที่นั่งจำนวน {guests} ท่าน วันที่ {date} เวลา {time} น. เรียบร้อยแล้ว ทีมงานจะส่งข้อความ SMS ยืนยันไปยังเบอร์ {phone}
          </p>

          <div className="pt-4 border-t border-[#E6E3DD] flex justify-center gap-3">
            <button
              onClick={() => setActiveTab('menu')}
              className="px-6 py-3 bg-[#722F37] text-white font-semibold text-xs uppercase tracking-widest rounded-xl hover:bg-[#542229]"
            >
              ดูเมนูอาหารสั่งล่วงหน้า
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10 rounded-3xl border border-[#E6E3DD] shadow-2xs space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#252422] flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#722F37]" />
                <span>วันที่ต้องการใช้บริการ *</span>
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-3 text-xs bg-[#F7F5F0] border border-[#E6E3DD] rounded-xl text-[#252422] font-medium"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#252422] flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#722F37]" />
                <span>รอบเวลา (Time Slot) *</span>
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-3 text-xs bg-[#F7F5F0] border border-[#E6E3DD] rounded-xl text-[#252422] font-medium"
              >
                <option value="17:00">17:00 น. (มื้อค่ำรอบแรก)</option>
                <option value="18:00">18:00 น.</option>
                <option value="19:00">19:00 น. (มื้อค่ำยอดนิยม)</option>
                <option value="20:00">20:00 น.</option>
                <option value="21:00">21:00 น. (รอบสุดท้าย)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#252422] flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#722F37]" />
                <span>จำนวนผู้ใช้บริการ *</span>
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full p-3 text-xs bg-[#F7F5F0] border border-[#E6E3DD] rounded-xl text-[#252422] font-medium"
              >
                <option value="1">1 ท่าน (Solo Dining)</option>
                <option value="2">2 ท่าน (Couple / Date Night)</option>
                <option value="4">3-4 ท่าน (Family / Friends)</option>
                <option value="6">5-6 ท่าน</option>
                <option value="8">7-10 ท่าน (กลุ่มใหญ่ / โต๊ะวีไอพี)</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-[#252422]">เลือกโซนที่นั่งโปรด (Seating Preference)</label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setSeatingArea('indoor')}
                className={`p-3 rounded-xl border text-xs font-medium transition-all ${
                  seatingArea === 'indoor'
                    ? 'border-[#722F37] bg-[#F7EFF1] text-[#722F37] font-bold'
                    : 'border-[#E6E3DD] bg-[#F7F5F0] text-[#706B65]'
                }`}
              >
                ห้องอาหารหลัก (Main Dining)
              </button>

              <button
                type="button"
                onClick={() => setSeatingArea('garden')}
                className={`p-3 rounded-xl border text-xs font-medium transition-all ${
                  seatingArea === 'garden'
                    ? 'border-[#722F37] bg-[#F7EFF1] text-[#722F37] font-bold'
                    : 'border-[#E6E3DD] bg-[#F7F5F0] text-[#706B65]'
                }`}
              >
                โซนสวนรมณีย์ (Garden Terrace)
              </button>

              <button
                type="button"
                onClick={() => setSeatingArea('counter')}
                className={`p-3 rounded-xl border text-xs font-medium transition-all ${
                  seatingArea === 'counter'
                    ? 'border-[#722F37] bg-[#F7EFF1] text-[#722F37] font-bold'
                    : 'border-[#E6E3DD] bg-[#F7F5F0] text-[#706B65]'
                }`}
              >
                เคาน์เตอร์ครัวเชฟ (Chef's Counter)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#252422]">ชื่อ-นามสกุล ผู้สำรองที่นั่ง *</label>
              <input
                type="text"
                required
                placeholder="เช่น คุณสมชาย ใจดี"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 text-xs bg-[#F7F5F0] border border-[#E6E3DD] rounded-xl text-[#252422]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#252422]">เบอร์โทรศัพท์สำหรับยืนยัน *</label>
              <input
                type="tel"
                required
                placeholder="เช่น 081-234-5678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 text-xs bg-[#F7F5F0] border border-[#E6E3DD] rounded-xl text-[#252422]"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#252422]">ข้อความพิเศษ / วันครบรอบ (ถ้ามี)</label>
            <textarea
              rows={2}
              placeholder="เช่น ฉลองวันเกิด, ขอเค้กพร้อมเทียน, แพ้อาหาร..."
              value={specialNote}
              onChange={(e) => setSpecialNote(e.target.value)}
              className="w-full p-3 text-xs bg-[#F7F5F0] border border-[#E6E3DD] rounded-xl text-[#252422]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#722F37] hover:bg-[#542229] text-white font-semibold rounded-xl text-xs uppercase tracking-widest shadow-sm transition-all active:scale-98"
          >
            ยืนยันการสำรองโต๊ะอาหาร
          </button>
        </form>
      )}

    </div>
  );
};
