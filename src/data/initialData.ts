import { MenuCategory, MenuItem, RestaurantSettings, PromoCode, Order } from '../types';

export const initialSettings: RestaurantSettings = {
  name: 'AUVELARO',
  brandLine: 'A MODERN EUROPEAN TABLE',
  thaiPronunciation: 'โอ-เว-ลา-โร',
  logoUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=300&q=80',
  heroImageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80',
  phone: '02-890-4455',
  email: 'reservations@auvelaro.com',
  address: '88 สุขุมวิท ซอย 39 แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพมหานคร 10110',
  openingHours: 'เปิดบริการมื้อค่ำทุกวัน 17:00 น. - 23:00 น. (เสาร์-อาทิตย์ มื้อกลางวัน 11:30 - 15:00 น.)',
  isOpen: true,
  minimumOrder: 350,
  deliveryFee: 60,
  freeDeliveryThreshold: 1500,
  supportedFulfillment: ['delivery', 'pickup', 'dinein'],
  supportedPayments: ['promptpay', 'card', 'cod', 'pay_at_store'],
  promptpayId: '0881234567',
  promptpayName: 'บจก. โอเวลาโร (AUVELARO Co., Ltd.)',
  noticeText: 'AUVELARO — A MODERN EUROPEAN TABLE • ประสบการณ์อาหารยุโรปร่วมสมัยคัดสรรวัตถุดิบนำเข้าพรีเมียม'
};

export const initialCategories: MenuCategory[] = [
  {
    id: 'cat-antipasti',
    name: 'Antipasti — อาหารเรียกน้ำย่อย',
    englishName: 'Antipasti',
    slug: 'antipasti',
    description: 'เมนูเรียกน้ำย่อยสไตล์อิตาเลียน-ฝรั่งเศส ชีสบุรราต้าสด เนื้อคาร์ปัชโช และซุปประจำวัน',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a81?auto=format&fit=crop&w=600&q=80',
    isActive: true,
    displayOrder: 1
  },
  {
    id: 'cat-insalate-zuppe',
    name: 'Insalate & Zuppe — สลัดและซุป',
    englishName: 'Salads & Soups',
    slug: 'salads-soups',
    description: 'สลัดผักออร์แกนิก ซุปหัวหอมสไตล์ฝรั่งเศส และซุปฟักทองอบสมุนไพร',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80',
    isActive: true,
    displayOrder: 2
  },
  {
    id: 'cat-pasta',
    name: 'Pasta — พาสต้าเส้นสด',
    englishName: 'Fresh Pasta',
    slug: 'pasta',
    description: 'พาสต้าเส้นสดนวดมือวันต่อวัน คาร์โบนาร่าสูตรโรมแท้ และเรกูเนื้อเคี่ยวไวน์แดง',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6288307?auto=format&fit=crop&w=600&q=80',
    isActive: true,
    displayOrder: 3
  },
  {
    id: 'cat-risotto',
    name: 'Risotto — ริซอตโต้',
    englishName: 'Risotto',
    slug: 'risotto',
    description: 'ข้าวคาร์นาโรลีเคี่ยวซุปเข้มข้นสไตล์อิตาเลียน ทรัฟเฟิลดำและกุ้งแชบ๊วยพรีเมียม',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80',
    isActive: true,
    displayOrder: 4
  },
  {
    id: 'cat-mains',
    name: 'Main Courses — อาหารจานหลัก',
    englishName: 'Main Courses',
    slug: 'main-courses',
    description: 'สเต๊กเนื้อริบอายแบล็กแองกัส แซลมอนนาบกระทะ และเป็ดคอนฟิตสไตล์ฝรั่งเศส',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    isActive: true,
    displayOrder: 5
  },
  {
    id: 'cat-sides',
    name: 'Contorni & Sides — เครื่องเคียง',
    englishName: 'Sides',
    slug: 'sides',
    description: 'เฟรนช์ฟรายส์ซอสทรัฟเฟิลดำ ขนมปังกระเทียม และมันฝรั่งอบโรสแมรี่',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80',
    isActive: true,
    displayOrder: 6
  },
  {
    id: 'cat-dessert',
    name: 'Dolci & Desserts — ของหวาน',
    englishName: 'Desserts',
    slug: 'desserts',
    description: 'ทิรามิสุสูตรเวนิสแท้ พานาคอตต้านมสด บาสก์ชีสเค้ก และช็อกโกแลตฟองดองต์',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80',
    isActive: true,
    displayOrder: 7
  },
  {
    id: 'cat-beverage',
    name: 'Bevande — เครื่องดื่มและกาแฟ',
    englishName: 'Beverages & Coffee',
    slug: 'beverages',
    description: 'น้ำแร่ San Pellegrino กาแฟเอสเพรสโซ่คั่วเข้ม และอิตาเลียนโซดาสดชื่น',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80',
    isActive: true,
    displayOrder: 8
  },
  {
    id: 'cat-wine',
    name: 'Carta dei Vini — รายการไวน์ (ทานที่ร้าน)',
    englishName: 'Wine Selection',
    slug: 'wine-list',
    description: 'รายการไวน์อิตาลีและฝรั่งเศสบ่มพรีเมียม ข้อมูลเฉพาะผู้ใหญ่สำหรับมื้อค่ำที่ร้าน',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80',
    isActive: true,
    displayOrder: 9
  }
];

export const initialMenuItems: MenuItem[] = [
  // CATEGORY A — ANTIPASTI
  {
    id: 'dish-burrata',
    name: 'บุรราต้าสดและมะเขือเทศฮีร์ลูม (Burrata e Pomodoro)',
    englishName: 'Burrata e Pomodoro',
    slug: 'burrata-e-pomodoro',
    description: 'ชีสบุรราต้าสดจากปูลยา ครีมนุ่มละลัก เสิร์ฟพร้อมมะเขือเทศฮีร์ลูมหลากสี ซอสเพสโต้โหระพาอิตาเลียน และน้ำมันมะกอกเอ็กซ์ตร้าเวอร์จิน',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a81?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-antipasti',
    basePrice: 420,
    currency: 'THB',
    portionSize: '1 จาน (250 กรัม)',
    preparationTimeMinutes: 10,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 1,
    dietaryLabels: ['มังสวิรัติ', 'นำเข้าจากอิตาลี'],
    allergenInformation: ['นมสด (ชีส)', 'ถั่วพายน์ (เพสโต้)'],
    ingredients: [
      { id: 'ing-b1', name: 'ชีสบุรราต้าสด Puglia', quantity: '150', unit: 'กรัม', notes: 'ครีมสดเปิดทะลัก' },
      { id: 'ing-b2', name: 'มะเขือเทศฮีร์ลูมหลากสี', quantity: '100', unit: 'กรัม', notes: 'คัดสดฉ่ำหวาน' },
      { id: 'ing-b3', name: 'ซอสเพสโต้โหระพา', quantity: '20', unit: 'มิลลิลิตร', notes: 'โขลกสดพร้อมถั่วพายน์' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'จัดเรียงสไลซ์มะเขือเทศฮีร์ลูมหลากสีบนจานพอร์ซเลนเย็น' },
      { stepNumber: 2, instruction: 'วางชีสบุรราต้าสดอิตาเลียนไว้ตรงกลาง ผ่าเปิดผิวเบาๆ ให้ครีมสดไหลย้อย' },
      { stepNumber: 3, instruction: 'ราดซอสเพสโต้โหระพา น้ำมันมะกอกเอ็กซ์ตร้าเวอร์จิน และดร็อปบัลซามิกบ่ม 12 ปี' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-bruschetta',
    name: 'บรุสเก็ตต้าซอสมะเขือเทศสด (Bruschetta al Pomodoro)',
    englishName: 'Bruschetta al Pomodoro',
    slug: 'bruschetta-al-pomodoro',
    description: 'ขนมปังซาวโดว์ย่างเตาฟืน ทาเนยกระเทียม ท็อปด้วยมะเขือเทศซานมารซาโน่สับ ใบโหระพาอิตาเลียน และบัลซามิกบ่ม 12 ปี',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-antipasti',
    basePrice: 240,
    currency: 'THB',
    portionSize: '3 ชิ้นใหญ่',
    preparationTimeMinutes: 8,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 2,
    dietaryLabels: ['มังสวิรัติ', 'ย่างเตาฟืน'],
    allergenInformation: ['แป้งสาลี'],
    ingredients: [
      { id: 'ing-br1', name: 'ขนมปังซาวโดว์หมักธรรมชาติ', quantity: '3', unit: 'แผ่น', notes: 'ย่างเกรียมหอมควันไม้' },
      { id: 'ing-br2', name: 'มะเขือเทศ San Marzano สับ', quantity: '120', unit: 'กรัม', notes: 'คลุกน้ำมันมะกอกกระเทียม' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'ย่างแผ่นขนมปังซาวโดว์บนเตาฟืนจนกรอบหอม ทากระเทียมสด' },
      { stepNumber: 2, instruction: 'ตักมะเขือเทศสลับคลุกซอสวางท็อป ราดน้ำมันมะกอกและใบโหระพา' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-carpaccio',
    name: 'คาร์ปัชโชเนื้อวัวพรีเมียม (Beef Carpaccio)',
    englishName: 'Classic Beef Carpaccio',
    slug: 'beef-carpaccio',
    description: 'เนื้อวัวสันในแบล็กแองกัสสไลซ์บางพิเศษ เสิร์ฟพร้อมผักร็อกเก็ตป่า ชีสพาร์เมซานสไลซ์ แรดิช และซอสดิฌองมัสตาร์ดเลมอน',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-antipasti',
    basePrice: 480,
    currency: 'THB',
    portionSize: '1 จาน (180 กรัม)',
    preparationTimeMinutes: 12,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 3,
    dietaryLabels: ['คาร์บต่ำ', 'เชฟแนะนำ'],
    allergenInformation: ['นมสด (ชีสพาร์เมซาน)', 'มัสตาร์ด'],
    ingredients: [
      { id: 'ing-c1', name: 'เนื้อวัวสันใน Black Angus', quantity: '120', unit: 'กรัม', notes: 'สไลซ์บางสดเย็น' },
      { id: 'ing-c2', name: 'ผักร็อกเก็ตป่าสด', quantity: '30', unit: 'กรัม', notes: 'รสเผ็ดซ่าฉุนฉาย' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'จัดเรียงสไลซ์เนื้อวัวสันในแบล็กแองกัสเย็นแผ่เต็มจาน' },
      { stepNumber: 2, instruction: 'วางผักร็อกเก็ตป่าไว้ตรงกลาง โรยชีสพาร์มิเจียโน่สไลซ์ และราดซอสมัสตาร์ดเลมอน' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-calamari',
    name: 'ปลาหมึกทอดสไตล์อิตาเลียน (Calamari Fritti)',
    englishName: 'Crispy Fried Calamari',
    slug: 'calamari-fritti',
    description: 'ปลาหมึกกล้วยสดทอดแป้งกรอบสไตล์อิตาเลียน เสิร์ฟพร้อมซอสการ์ลิกไอโอโลและเลมอนย่าง',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-antipasti',
    basePrice: 320,
    currency: 'THB',
    portionSize: '1 จาน (220 กรัม)',
    preparationTimeMinutes: 10,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 4,
    dietaryLabels: ['อาหารทะเล'],
    allergenInformation: ['ปลาหมึก', 'แป้งสาลี', 'ไข่'],
    ingredients: [
      { id: 'ing-cal1', name: 'ปลาหมึกกล้วยสด', quantity: '180', unit: 'กรัม', notes: 'หั่นแว่นชุบแป้งบาง' },
      { id: 'ing-cal2', name: 'ซอสกระเทียม Aioli โฮมเมด', quantity: '40', unit: 'มิลลิลิตร', notes: 'ดิปหอมมัน' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'ชุบปลาหมึกกล้วยสดในแป้งเซโมลินาบางๆ ทอดในน้ำมันร้อนไฟปานกลางจนเหลืองกรอบ' },
      { stepNumber: 2, instruction: 'ตักสะเด็ดน้ำมัน โรยเกลือทะเลและพาร์สลีย์ เสิร์ฟคู่กับดิปไอโอโล' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-soup-day',
    name: 'ซุปครีมข้นประจำวัน (Soup of the Day)',
    englishName: 'Seasonal Soup of the Day',
    slug: 'soup-of-the-day',
    description: 'ซุปครีมข้นปรุงสดจากผักและวัตถุดิบตามฤดูกาล เสิร์ฟพร้อมขนมปังฟอกาเชียอบเนยสด',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-antipasti',
    basePrice: 220,
    currency: 'THB',
    portionSize: '1 ชาม (250 มล.)',
    preparationTimeMinutes: 8,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 5,
    dietaryLabels: ['ปรุงสดวันต่อวัน'],
    allergenInformation: ['นมสด', 'แป้งสาลี'],
    ingredients: [
      { id: 'ing-sd1', name: 'ผักและสต๊อกเข้มข้นตามฤดูกาล', quantity: '200', unit: 'มิลลิลิตร', notes: 'เคี่ยวไฟอ่อน' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'อุ่นซุปครีมสดในหม้อ ราดครีมสดและพาร์สลีย์ เสิร์ฟพร้อมขนมปังอบ' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },

  // CATEGORY B — INSALATE & ZUPPE
  {
    id: 'dish-caesar',
    name: 'ซีซาร์สลัดคลาสสิก (Classic Caesar Salad)',
    englishName: 'Classic Caesar Salad',
    slug: 'classic-caesar-salad',
    description: 'ผักคอสออร์แกนิกกรอบ ราดน้ำสลัดซีซาร์แอนโชวี่ทำเอง โรยขนมปังกรอบครูตองส์ และชีสพาร์เมซานขูด',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-insalate-zuppe',
    basePrice: 280,
    currency: 'THB',
    portionSize: '1 จาน (220 กรัม)',
    preparationTimeMinutes: 8,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 6,
    dietaryLabels: ['ผักออร์แกนิก'],
    allergenInformation: ['ไข่', 'นมสด', 'ปลา (แอนโชวี่)', 'แป้งสาลี'],
    ingredients: [
      { id: 'ing-cs1', name: 'ผักคอสออร์แกนิก', quantity: '150', unit: 'กรัม', notes: 'สดกรอบหวาน' },
      { id: 'ing-cs2', name: 'น้ำสลัดซีซาร์แอนโชวี่', quantity: '35', unit: 'มิลลิลิตร', notes: 'รสเข้มข้นหอมแอนโชวี่' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'คลุกผักคอสกับน้ำสลัดซีซาร์เบามือ ตักใส่จาน โรยครูตองส์และพาร์เมซานขูด' }
    ],
    optionGroups: [
      {
        id: 'opt-caesar-protein',
        name: 'เพิ่มเนื้อสัตว์ท็อปปิ้ง',
        isRequired: false,
        options: [
          { id: 'cp-1', name: 'เพิ่มอกไก่อบสมุนไพร (Herb Chicken +100g)', additionalPrice: 90, isAvailable: true },
          { id: 'cp-2', name: 'เพิ่มกุ้งย่างเนย (Grilled Prawns +3 ตัว)', additionalPrice: 130, isAvailable: true }
        ]
      }
    ],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-caprese',
    name: 'คาเพรเซ่สลัดมะเขือเทศและมอซซาเรลล่า (Insalata Caprese)',
    englishName: 'Insalata Caprese',
    slug: 'insalata-caprese',
    description: 'มอซซาเรลล่าชีสสดสไลซ์คู่กับมะเขือเทศสด ใบโหระพาอิตาเลียน และน้ำมันมะกอกเอ็กซ์ตร้าเวอร์จิน',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a81?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-insalate-zuppe',
    basePrice: 340,
    currency: 'THB',
    portionSize: '1 จาน (200 กรัม)',
    preparationTimeMinutes: 6,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 7,
    dietaryLabels: ['มังสวิรัติ', 'คาร์บต่ำ'],
    allergenInformation: ['นมสด (ชีส)'],
    ingredients: [
      { id: 'ing-cap1', name: 'มอซซาเรลล่าชีสสด Fior di Latte', quantity: '120', unit: 'กรัม', notes: 'สไลซ์หนาเนียน' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'จัดเรียงสไลซ์มอซซาเรลล่าชีสและมะเขือเทศสลับชั้น โรยใบโหระพาอิตาเลียนสด' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-french-onion',
    name: 'ซุปหัวหอมสไตล์ฝรั่งเศส (Soupe à l\'Oignon Gratinée)',
    englishName: 'French Onion Soup',
    slug: 'french-onion-soup',
    description: 'ซุปหัวหอมผัดคาราเมลเคี่ยวซุปเนื้อเข้มข้น อบหน้าด้วยขนมปังซาวโดว์และกรูแยร์ชีสเยิ้มกรอบ',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-insalate-zuppe',
    basePrice: 320,
    currency: 'THB',
    portionSize: '1 ชามอบ (280 มล.)',
    preparationTimeMinutes: 15,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 8,
    dietaryLabels: ['ตำรับฝรั่งเศส'],
    allergenInformation: ['นมสด (กรูแยร์ชีส)', 'แป้งสาลี', 'ไวน์ขาว'],
    ingredients: [
      { id: 'ing-fo1', name: 'หัวหอมใหญ่ผัดคาราเมล', quantity: '120', unit: 'กรัม', notes: 'ผัดเนย 45 นาทีจนหวานฉ่ำ' },
      { id: 'ing-fo2', name: 'ชีส Gruyère อิตาลี/ฝรั่งเศส', quantity: '50', unit: 'กรัม', notes: 'อบเยิ้มสีทอง' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'ตักซุปหัวหอมใส่ชามเซรามิกทนความร้อน วางขนมปังซาวโดว์ปิ้งท็อปด้วยชีสสไลซ์' },
      { stepNumber: 2, instruction: 'นำเข้าเตาอบความร้อนสูงจนชีสละลายเยิ้มเป็นสีเหลืองทองกรอบเสิร์ฟร้อน' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },

  // CATEGORY C — PASTA
  {
    id: 'dish-carbonara',
    name: 'สปาเกตตีคาร์โบนาร่าสูตรโรมแท้ (Spaghetti Carbonara)',
    englishName: 'Spaghetti alla Carbonara',
    slug: 'spaghetti-carbonara',
    description: 'สปาเกตตีเส้นสด ผัดแก้มหมูบ่มกวนชาเล่ (Guanciale) กรอบหอม ไข่แดงไข่อินทรีย์สด และชีสเปโกริโน่โรมาโน่ ไม่ใส่นมหรือครีมสด',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-pasta',
    basePrice: 390,
    currency: 'THB',
    portionSize: '1 จาน (300 กรัม)',
    preparationTimeMinutes: 12,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 10,
    dietaryLabels: ['สูตรโรมดั้งเดิม', 'ไม่ใส่ครีมสด'],
    allergenInformation: ['ไข่', 'แป้งสาลี', 'ชีสเปโกริโน่'],
    ingredients: [
      { id: 'ing-car1', name: 'เส้นสปาเกตตีสด', quantity: '120', unit: 'กรัม', notes: 'เหนียวนุ่มสไตล์ Al Dente' },
      { id: 'ing-car2', name: 'แก้มหมูบ่ม Guanciale อิตาลี', quantity: '60', unit: 'กรัม', notes: 'เจียวกรอบหอมมัน' },
      { id: 'ing-car3', name: 'ไข่แดงอินทรีย์สด', quantity: '2', unit: 'ฟอง', notes: 'ผสมชีสเปโกริโน่' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'เจียวแก้มหมู Guanciale ในกระทะด้วยไฟอ่อนจนน้ำมันหมูออกมาและผิวนอกกรอบทอง' },
      { stepNumber: 2, instruction: 'นำเส้นสปาเกตตีร้อนๆ คลุกส่วนผสมไข่แดงและชีสสะบัดกระทะจนซอสข้นเนียนเคลือบเส้น' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-bolognese',
    name: 'ตักเลียเตลเลซอสโบโลญเญเซ่ (Tagliatelle alla Bolognese)',
    englishName: 'Tagliatelle alla Bolognese',
    slug: 'tagliatelle-bolognese',
    description: 'เส้นตักเลียเตลเลสดนวดมือ คลุกซอสเนื้อวัวและหมูเคี่ยวไวน์แดงและมะเขือเทศซานมารซาโน่นาน 6 ชั่วโมง ตำรับเมืองโบโลญญาแท้',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6288307?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-pasta',
    basePrice: 380,
    currency: 'THB',
    portionSize: '1 จาน (320 กรัม)',
    preparationTimeMinutes: 14,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 11,
    dietaryLabels: ['พาสต้าเส้นสด', 'ตำรับโบโลญญา'],
    allergenInformation: ['ไข่', 'แป้งสาลี', 'นมสด', 'ไวน์แดง'],
    ingredients: [
      { id: 'ing-bo1', name: 'เส้นตักเลียเตลเลไข่ทำสด', quantity: '130', unit: 'กรัม', notes: 'นวดมือวันต่อวัน' },
      { id: 'ing-bo2', name: 'ซอสเรกูเนื้อวัวและหมูเคี่ยวไวน์แดง', quantity: '180', unit: 'กรัม', notes: 'เคี่ยว 6 ชั่วโมงเข้มข้น' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'ลวกเส้นพาสต้าตักเลียเตลเลสดในน้ำเกลือเดือดจัดจนได้ระดับ Al Dente' },
      { stepNumber: 2, instruction: 'นำเส้นพาสต้าลงผัดสะบัดกระทะกับซอสและเนยจืด โรยชีสพาร์เมซานขูดเสิร์ฟร้อน' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-seafood-linguine',
    name: 'ลิงกวินีผัดอาหารทะเลไวน์ขาว (Linguine ai Frutti di Mare)',
    englishName: 'Linguine ai Frutti di Mare',
    slug: 'linguine-seafood',
    description: 'เส้นลิงกวินีสด ผัดกุ้งแชบ๊วย หอยตลับ ปลาหมึกกล้วยสด น้ำมันมะกอก ไวน์ขาว และพริกแห้งกระเทียม',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-pasta',
    basePrice: 460,
    currency: 'THB',
    portionSize: '1 จานใหญ่ (350 กรัม)',
    preparationTimeMinutes: 15,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 15,
    dietaryLabels: ['อาหารทะเลสด'],
    allergenInformation: ['กุ้ง', 'ปลาหมึก', 'หอย', 'ไวน์ขาว', 'แป้งสาลี'],
    ingredients: [
      { id: 'ing-ling1', name: 'เส้นลิงกวินีสด', quantity: '130', unit: 'กรัม', notes: 'ต้ม Al Dente' },
      { id: 'ing-ling2', name: 'กุ้งแชบ๊วยและหอยตลับสด', quantity: '120', unit: 'กรัม', notes: 'ผัดไวน์ขาวหอมหวาน' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'ผัดกระเทียมและพริกแห้งในน้ำมันมะกอก ใส่กุ้งและหอยตลับ พรมไวน์ขาวและปิดฝาอบจนหอยเปิด' },
      { stepNumber: 2, instruction: 'ใส่เส้นลิงกวินีสดลงผัดเคลือบน้ำสต๊อกซีฟู้ด โรยพาร์สลีย์ซอย' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },

  // CATEGORY D — RISOTTO
  {
    id: 'dish-risotto-funghi',
    name: 'ริซอตโต้เห็ดพอร์ชินีและทรัฟเฟิล (Risotto ai Funghi)',
    englishName: 'Risotto ai Funghi e Tartufo',
    slug: 'risotto-ai-funghi',
    description: 'ข้าวริซอตโต้คาร์นาโรลีนำเข้า เคี่ยวในน้ำสต๊อกผักและซอสเห็ดพอร์ชินี ท็อปด้วยชีสพาร์เมซาน น้ำมันทรัฟเฟิลขาว Alba',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-risotto',
    basePrice: 460,
    currency: 'THB',
    portionSize: '1 จาน (300 กรัม)',
    preparationTimeMinutes: 18,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 17,
    dietaryLabels: ['มังสวิรัติ', 'นำเข้าอิตาลี'],
    allergenInformation: ['นมสด', 'ชีส', 'ไวน์ขาว'],
    ingredients: [
      { id: 'ing-r1', name: 'ข้าวริซอตโต้ Carnaroli', quantity: '100', unit: 'กรัม', notes: 'นำเข้าอิตาลี' },
      { id: 'ing-r2', name: 'เห็ดพอร์ชินีสด', quantity: '80', unit: 'กรัม', notes: 'ผัดเนยและไวน์ขาว' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'เคี่ยวข้าวคาร์นาโรลีกับน้ำสต๊อกเห็ดร้อนๆ ทีละทัพพีนาน 16 นาทีจนข้าวสุกข้นเนียน' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-risotto-gamberi',
    name: 'ริซอตโต้กุ้งแชบ๊วยซอสมะเขือเทศหญ้าฝรั่น (Risotto ai Gamberi)',
    englishName: 'Risotto ai Gamberi e Zafferano',
    slug: 'risotto-ai-gamberi',
    description: 'ข้าวริซอตโต้เคี่ยวซุปหัวกุ้งเข้มข้นผสมหญ้าฝรั่น (Saffron) สีทอง เสิร์ฟพร้อมกุ้งแชบ๊วยย่างเนยสด',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-risotto',
    basePrice: 490,
    currency: 'THB',
    portionSize: '1 จาน (300 กรัม)',
    preparationTimeMinutes: 18,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 18,
    dietaryLabels: ['อาหารทะเลพรีเมียม'],
    allergenInformation: ['กุ้ง', 'นมสด', 'ไวน์ขาว'],
    ingredients: [
      { id: 'ing-rg1', name: 'กุ้งแชบ๊วยสด', quantity: '4', unit: 'ตัวใหญ่', notes: 'ย่างเนยผิวนอกกรอบ' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'เคี่ยวข้าวริซอตโต้กับน้ำซุปมันกุ้งและหญ้าฝรั่น วางกุ้งย่างเนยด้านบนเสิร์ฟร้อน' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },

  // CATEGORY E — MAIN COURSES
  {
    id: 'dish-ribeye',
    name: 'สเต๊กเนื้อริบอายแบล็กแองกัส (Grilled Ribeye Steak 300g)',
    englishName: 'Grilled Black Angus Ribeye Steak',
    slug: 'grilled-ribeye-steak',
    description: 'สเต๊กเนื้อริบอายแบล็กแองกัสขุน 150 วัน ย่างบนเตาถ่านหินภูเขาไฟ เสิร์ฟพร้อมมันฝรั่งอบโรสแมรี่ และซอสไวน์แดงเกรวี่',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-mains',
    basePrice: 890,
    currency: 'THB',
    portionSize: '300 กรัม',
    preparationTimeMinutes: 20,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 19,
    dietaryLabels: ['ย่างเตาถ่าน', 'เนื้อพรีเมียม'],
    allergenInformation: ['นมสด (เนย)', 'ไวน์แดง'],
    ingredients: [
      { id: 'ing-rib1', name: 'เนื้อริบอาย Black Angus Grain-Fed 150 วัน', quantity: '300', unit: 'กรัม', notes: 'หนา 1.5 นิ้ว' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'ย่างสเต๊กเนื้อริบอายบนเตาถ่านหินความร้อนสูง ทาเนยสมุนไพรและพักเนื้อ 5 นาที' }
    ],
    optionGroups: [
      {
        id: 'opt-doneness',
        name: 'ระดับความสุกของสเต๊ก (Doneness)',
        isRequired: true,
        options: [
          { id: 'dn-1', name: 'Rare (ดิบปานกลาง)', additionalPrice: 0, isAvailable: true },
          { id: 'dn-2', name: 'Medium Rare (สุกปานกลางค่อนดิบ - แนะนำ)', additionalPrice: 0, isAvailable: true },
          { id: 'dn-3', name: 'Medium (สุกปานกลาง)', additionalPrice: 0, isAvailable: true },
          { id: 'dn-4', name: 'Medium Well (สุกค่อนข้างมาก)', additionalPrice: 0, isAvailable: true }
        ]
      }
    ],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-duck-confit',
    name: 'เป็ดคอนฟิตอบกรอบสไตล์ฝรั่งเศส (Duck Confit with Roasted Potatoes)',
    englishName: 'Duck Confit (Confit de Canard)',
    slug: 'duck-confit',
    description: 'น่องเป็ดหมักสมุนไพรตุ๋นในน้ำมันเป็ดไฟอ่อนนาน 12 ชั่วโมง อบหนังกรอบ เสิร์ฟพร้อมมันฝรั่งอบเนยและซอสซอสเบอร์รี่',
    image: 'https://images.unsplash.com/photo-1514944288352-fffac99f0bdf?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-mains',
    basePrice: 580,
    currency: 'THB',
    portionSize: '1 น่องใหญ่ (280 กรัม)',
    preparationTimeMinutes: 18,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 24,
    dietaryLabels: ['ตำรับฝรั่งเศส'],
    allergenInformation: ['นมสด'],
    ingredients: [
      { id: 'ing-dc1', name: 'น่องเป็ดคอนฟิตหมักสมุนไพร', quantity: '1', unit: 'น่อง', notes: 'ตุ๋นน้ำมันเป็ด 12 ชม.' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'อบน่องเป็ดคอนฟิตในเตาอบร้อนจนหนังกรอบสีเหลืองทอง เสิร์ฟพร้อมมันฝรั่งและซอสเบอร์รี่' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-salmon',
    name: 'แซลมอนนอร์เวย์นาบกระทะซอสมะนาวเนยสด (Pan-Seared Salmon)',
    englishName: 'Pan-Seared Norwegian Salmon',
    slug: 'pan-seared-salmon',
    description: 'สเต๊กแซลมอนนอร์เวย์สด หนังกรอบเนื้อนุ่มฉ่ำ เสิร์ฟพร้อมหน่อไม้ฝรั่งย่าง มันบดเนยสด และซอสเลมอนบัตเตอร์',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-mains',
    basePrice: 540,
    currency: 'THB',
    portionSize: '220 กรัม',
    preparationTimeMinutes: 16,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 22,
    dietaryLabels: ['ปลาสดนอร์เวย์'],
    allergenInformation: ['ปลา', 'นมสด'],
    ingredients: [
      { id: 'ing-s1', name: 'แซลมอนสดนอร์เวย์ตัดติดหนัง', quantity: '220', unit: 'กรัม', notes: 'สดไร้ก้าง' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'นาบด้านหนังแซลมอนจนกรอบทอง ตักเสิร์ฟพร้อมมันบดเนยและซอสเลมอนบัตเตอร์' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },

  // CATEGORY F — SIDES
  {
    id: 'dish-truffle-fries',
    name: 'เฟรนช์ฟรายส์ซอสทรัฟเฟิลดำ (Truffle Parmesan Fries)',
    englishName: 'Truffle Parmesan Fries',
    slug: 'truffle-parmesan-fries',
    description: 'มันฝรั่งทอดแท่งใหญ่ คลุกน้ำมันทรัฟเฟิลขาว โรยชีสพาร์เมซานขูดสดและพาร์สลีย์ เสิร์ฟพร้อมมายองเนสทรัฟเฟิล',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-sides',
    basePrice: 190,
    currency: 'THB',
    portionSize: '1 จาน (200 กรัม)',
    preparationTimeMinutes: 8,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 27,
    dietaryLabels: ['ของทานเล่นยอดนิยม'],
    allergenInformation: ['นมสด', 'ไข่'],
    ingredients: [
      { id: 'ing-tf1', name: 'มันฝรั่งแท่งใหญ่เกรดนำเข้า', quantity: '200', unit: 'กรัม', notes: 'ทอดกรอบ' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'ทอดมันฝรั่งจนกรอบ คลุกน้ำมันทรัฟเฟิลและชีสพาร์เมซานขูด เสิร์ฟคู่กับดิปทรัฟเฟิล' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-garlic-bread',
    name: 'ขนมปังกระเทียมอบเนยสมุนไพร (Garlic Bread)',
    englishName: 'Garlic Herb Bread',
    slug: 'garlic-bread',
    description: 'ขนมปังฝรั่งเศสทาเนยสด กระเทียมโขลก และพาร์สลีย์ อบในเตาร้อนจนขอบกรอบหอมฉุย',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-sides',
    basePrice: 140,
    currency: 'THB',
    portionSize: '4 ชิ้น',
    preparationTimeMinutes: 6,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 28,
    dietaryLabels: ['มังสวิรัติ'],
    allergenInformation: ['แป้งสาลี', 'นมสด'],
    ingredients: [
      { id: 'ing-gb1', name: 'ขนมปังบาแก็ตฝรั่งเศส', quantity: '4', unit: 'ชิ้น', notes: 'ทาเนยกระเทียมสด' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'อบขนมปังทาเนยกระเทียมในเตาอบร้อน 5 นาทีจนกรอบหอมเสิร์ฟร้อน' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },

  // CATEGORY G — DOLCI / DESSERTS
  {
    id: 'dish-tiramisu',
    name: 'ทิรามิสุสูตรเวนิสแท้ (Classic Tiramisu)',
    englishName: 'Classic Venetian Tiramisù',
    slug: 'classic-tiramisu',
    description: 'เลดี้ฟิงเกอร์ชุบกาแฟเอสเพรสโซ่เข้มข้นและเหล้ากาแฟ ครีมมาสคาร์โปเน่ชีสนุ่มละมุน โรยผงโกโก้พรีเมียม',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-dessert',
    basePrice: 220,
    currency: 'THB',
    portionSize: '1 ถ้วย (180 กรัม)',
    preparationTimeMinutes: 5,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 32,
    dietaryLabels: ['ของหวานซิกเนเจอร์'],
    allergenInformation: ['ไข่', 'แป้งสาลี', 'นมสด', 'คาเฟอีน'],
    ingredients: [
      { id: 'ing-t1', name: 'ชีส Mascarpone อิตาลี', quantity: '100', unit: 'กรัม', notes: 'เนื้อเนียนละมุน' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'วางเลดี้ฟิงเกอร์ชุบกาแฟเอสเพรสโซ่ สลับชั้นครีมมาสคาร์โปเน่ชีส โรยผงโกโก้' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-fondant',
    name: 'ช็อกโกแลตลาวาฟองดองต์ (Chocolate Fondant)',
    englishName: 'Fondant au Chocolat',
    slug: 'chocolate-fondant',
    description: 'เค้กช็อกโกแลตฝรั่งเศสเนื้อนุ่ม ไส้ช็อกโกแลตลาวาอุ่นเยิ้มไหล เสิร์ฟคู่ไอศกรีมวานิลลาแท้',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-dessert',
    basePrice: 240,
    currency: 'THB',
    portionSize: '1 ชิ้น + ไอศกรีม 1 สกู๊ป',
    preparationTimeMinutes: 12,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 35,
    dietaryLabels: ['ช็อกโกแลตฝรั่งเศส 70%'],
    allergenInformation: ['ไข่', 'แป้งสาลี', 'นมสด'],
    ingredients: [
      { id: 'ing-cf1', name: 'ช็อกโกแลตแท้ Valrhona 70%', quantity: '80', unit: 'กรัม', notes: 'เข้มข้นเยิ้มอุ่น' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'อบช็อกโกแลตฟองดองต์ในเตาร้อน 10 นาทีจนตรงกลางลาวาเยิ้ม ตักเสิร์ฟคู่ไอศกรีมวานิลลา' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },

  // CATEGORY H — WATER & BEVERAGES
  {
    id: 'dish-san-pellegrino',
    name: 'San Pellegrino Sparkling Water (น้ำแร่มีฟอง 750ml)',
    englishName: 'San Pellegrino Sparkling Mineral Water',
    slug: 'san-pellegrino',
    description: 'น้ำแร่ธรรมชาติมีฟองเกรดพรีเมียมจากเทือกเขาแอลป์ อิตาลี ช่วยล้างลิ้นและชูรสชาติอาหารมื้อค่ำ',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-beverage',
    basePrice: 160,
    currency: 'THB',
    portionSize: '1 ขวดแก้ว (750 มล.)',
    preparationTimeMinutes: 2,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 38,
    dietaryLabels: ['น้ำแร่อิตาลีแท้'],
    allergenInformation: [],
    ingredients: [
      { id: 'ing-sp1', name: 'น้ำแร่ธรรมชาติมีฟอง San Pellegrino', quantity: '750', unit: 'มิลลิลิตร', notes: 'นำเข้าอิตาลี' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'เสิร์ฟแช่เย็นจัดในขวดแก้ว พร้อมแก้วทรงสูงและมะนาวเลมอนสไลซ์' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-espresso',
    name: 'เอสเพรสโซ่ช็อตคู่ (Double Espresso)',
    englishName: 'Double Espresso Italian Blend',
    slug: 'double-espresso',
    description: 'กาแฟอิตาเลียนเอสเพรสโซ่คั่วเข้มเบลนด์เมล็ดอาราบิก้าและโรบัสต้า สกัดความเข้มข้นด้วยเครื่องอัดแรงดันสูง เครม่าหนานุ่ม',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-beverage',
    basePrice: 90,
    currency: 'THB',
    portionSize: '1 ช็อตคู่ (60 มล.)',
    preparationTimeMinutes: 3,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 39,
    dietaryLabels: ['คาเฟอีนเข้มข้น'],
    allergenInformation: ['คาเฟอีน'],
    ingredients: [
      { id: 'ing-e1', name: 'เมล็ดกาแฟอิตาเลียนโรสต์', quantity: '18', unit: 'กรัม', notes: 'บดสดช็อตต่อช็อต' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'สกัดกาแฟเอสเพรสโซ่เข้มข้น 60ml เครม่าสีน้ำตาลทองเสิร์ฟร้อน' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  }
];

export const initialPromoCodes: PromoCode[] = [
  { code: 'AUVELARO10', discountType: 'percentage', discountValue: 10, minSubtotal: 500, isActive: true },
  { code: 'TABLE100', discountType: 'fixed', discountValue: 100, minSubtotal: 1000, isActive: true }
];

export const initialOrders: Order[] = [
  {
    id: 'ord-1001',
    orderNumber: 'AV-20261003-8821',
    customerName: 'คุณสมชาย ใจดี',
    customerPhone: '081-234-5678',
    customerEmail: 'somchai@gmail.com',
    fulfillmentType: 'dinein',
    tableNumber: '08 (โซนห้องอาหารหลัก)',
    subtotal: 1290,
    discount: 129,
    discountCode: 'AUVELARO10',
    deliveryFee: 0,
    total: 1161,
    currency: 'THB',
    paymentMethod: 'promptpay',
    paymentStatus: 'paid',
    orderStatus: 'delivering',
    paymentReference: 'TXN-9988112233',
    customerNotes: 'ขอโต๊ะบรรยากาศเงียบสงบสำหรับฉลองวันครบรอบครับ',
    items: [
      {
        id: 'oi-1',
        menuItemId: 'dish-burrata',
        itemName: 'บุรราต้าสดและมะเขือเทศฮีร์ลูม (Burrata e Pomodoro)',
        itemImage: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a81?auto=format&fit=crop&w=400&q=80',
        unitPrice: 420,
        quantity: 1,
        selectedOptions: [],
        specialInstructions: '',
        lineTotal: 420
      },
      {
        id: 'oi-2',
        menuItemId: 'dish-bolognese',
        itemName: 'ตักเลียเตลเลซอสโบโลญเญเซ่ (Tagliatelle alla Bolognese)',
        itemImage: 'https://images.unsplash.com/photo-1621996346565-e3d5d6288307?auto=format&fit=crop&w=400&q=80',
        unitPrice: 380,
        quantity: 1,
        selectedOptions: [],
        specialInstructions: '',
        lineTotal: 380
      },
      {
        id: 'oi-3',
        menuItemId: 'dish-carpaccio',
        itemName: 'คาร์ปัชโชเนื้อวัวพรีเมียม (Beef Carpaccio)',
        itemImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80',
        unitPrice: 490,
        quantity: 1,
        selectedOptions: [],
        specialInstructions: '',
        lineTotal: 490
      }
    ],
    statusHistory: [
      { status: 'pending_confirmation', changedAt: '2026-10-03T01:10:00Z', note: 'ส่งออเดอร์แล้ว' },
      { status: 'confirmed', changedAt: '2026-10-03T01:12:00Z', note: 'ร้านรับออเดอร์แล้ว' },
      { status: 'preparing', changedAt: '2026-10-03T01:15:00Z', note: 'ครัวเริ่มจัดเตรียมพาสต้าสดและคาร์ปัชโช' },
      { status: 'delivering', changedAt: '2026-10-03T01:35:00Z', note: 'พนักงานกำลังนำไปเสิร์ฟที่โต๊ะ' }
    ],
    createdAt: '2026-10-03T01:10:00Z',
    confirmedAt: '2026-10-03T01:12:00Z'
  }
];
