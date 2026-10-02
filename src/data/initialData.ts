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
  minimumOrder: 0,
  deliveryFee: 0,
  freeDeliveryThreshold: 0,
  supportedFulfillment: ['dinein'],
  supportedPayments: ['pay_at_store'],
  promptpayId: '0881234567',
  promptpayName: 'บจก. โอเวลาโร (AUVELARO Co., Ltd.)',
  noticeText: 'AUVELARO — A MODERN EUROPEAN TABLE • ประสบการณ์อาหารยุโรปร่วมสมัยคัดสรรวัตถุดิบนำเข้าพรีเมียม'
};


export const initialCategories: MenuCategory[] = [
  {
    id: 'cat-starters',
    name: 'Signature Starters — อาหารเรียกน้ำย่อยซิกเนเจอร์',
    englishName: 'Signature Starters',
    slug: 'starters',
    description: 'หอยเชลล์ฮอกไกโดย่าง คาร์ปัชโชเนื้อ ทาร์ทาร์สไตล์ฝรั่งเศส และล็อบสเตอร์บิสก์',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    displayOrder: 1
  },
  {
    id: 'cat-pasta-risotto',
    name: 'Handcrafted Pasta & Risotto — พาสต้าเส้นสดและริซอตโต้',
    englishName: 'Handcrafted Pasta & Risotto',
    slug: 'pasta-risotto',
    description: 'พาสต้าตาญโญลินีแบล็กทรัฟเฟิล ราวิโอลีล็อบสเตอร์ และริซอตโต้เห็ดป่าพรีเมียม',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6288307?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    displayOrder: 2
  },
  {
    id: 'cat-mains',
    name: 'Signature Main Courses — อาหารจานหลักพรีเมียม',
    englishName: 'Signature Main Courses',
    slug: 'main-courses',
    description: 'เนื้อวากิวเทนเดอร์ลอยน์ ริบอายดรายเอจ ปลาชิลีซีบาสย่าง อกเป็ดย่างซอสเชอร์รี และซี่โครงแกะอบสมุนไพร',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    displayOrder: 3
  },
  {
    id: 'cat-desserts',
    name: 'Dessert Collection — ของหวานรังสรรค์พิเศษ',
    englishName: 'Dessert Collection',
    slug: 'desserts',
    description: 'ช็อกโกแลตฟองดองต์Valrhona ครีมบรูเล่วานิลลามาดากัสการ์ ทิรามิสุ และมิลเฟย',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    displayOrder: 4
  },
  {
    id: 'cat-beverages',
    name: 'Premium Non-Alcoholic Beverages — เครื่องดื่มนำเข้าและกาแฟคัดสรร',
    englishName: 'Premium Non-Alcoholic Beverages',
    slug: 'beverages',
    description: 'น้ำแร่ธรรมชาติชนิดมีฟองฝรั่งเศส กาแฟซิงเกิลออริจิน และเอสเพรสโซ่วานิลลาซิกเนเจอร์',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    displayOrder: 5
  }
];

export const initialMenuItems: MenuItem[] = [
  // A. SIGNATURE STARTERS
  {
    id: 'dish-hokkaido-scallops',
    name: 'หอยเชลล์ฮอกไกโดย่าง ซอสครีมดอกกะหล่ำ (Hokkaido Scallops, Cauliflower Velouté)',
    englishName: 'Hokkaido Scallops, Cauliflower Velouté',
    slug: 'hokkaido-scallops',
    description: 'หอยเชลล์ฮอกไกโดเกรดพรีเมียมนาบกระทะผิวนอกสีทอง เสิร์ฟพร้อมซอสซูเฟล่ครีมดอกกะหล่ำเนียนละมุน คาร์เวียร์และน้ำมันสมุนไพรสด',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1000&q=80',
    categoryId: 'cat-starters',
    basePrice: 890,
    currency: 'THB',
    portionSize: '3 ชิ้นใหญ่ (180g)',
    preparationTimeMinutes: 12,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 1,
    dietaryLabels: ['อาหารทะเลนำเข้า', 'เชฟแนะนำ'],
    allergenInformation: ['หอยเชลล์', 'นมสด', 'เนยฝรั่งเศส'],
    ingredients: [
      { id: 'ing-hs1', name: 'หอยเชลล์ฮอกไกโดสดเกรดซาชิมิ', quantity: '3', unit: 'ตัวใหญ่', notes: 'นาบกระทะผิวนอกทองหอมเนย' },
      { id: 'ing-hs2', name: 'ซอส Cauliflower Velouté', quantity: '80', unit: 'ml', notes: 'เคี่ยวเค็มมันละมุนลิ้น' },
      { id: 'ing-hs3', name: 'คาร์เวียร์พรีเมียม & Herb Oil', quantity: '10', unit: 'g', notes: 'ท็อปแต่งสีสันรสสัมผัส' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'นาบหอยเชลล์ฮอกไกโดสดบนกระทะความร้อนสูงด้วยเนยจืดฝรั่งเศส 60 วินาทีต่อด้าน' },
      { stepNumber: 2, instruction: 'ราดซอสครีมดอกกะหล่ำอุ่นร้อนตรงกลางจานพอร์ซเลนเย็น วางหอยเชลล์ย่างท็อปด้วยคาร์เวียร์' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-03T10:00:00Z'
  },
  {
    id: 'dish-beef-tartare',
    name: 'ทาร์ทาร์เนื้อวัวสไตล์ฝรั่งเศส (French Beef Tartare)',
    englishName: 'French Beef Tartare',
    slug: 'beef-tartare',
    description: 'เนื้อวัวสันในคัดพิเศษสับหยาบ ปรุงรสด้วยแอปเปิ้ลเขียว เคเปอร์ หอมแดง ดิฌองมัสตาร์ด และไข่แดงนกกระทาสด เสิร์ฟพร้อมไทม์ขนมปังซาวโดว์กรอบ',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    categoryId: 'cat-starters',
    basePrice: 790,
    currency: 'THB',
    portionSize: '1 จาน (160g)',
    preparationTimeMinutes: 10,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 2,
    dietaryLabels: ['ตำรับฝรั่งเศส', 'เนื้อวัวพรีเมียม'],
    allergenInformation: ['ไข่', 'มัสตาร์ด', 'แป้งสาลี'],
    ingredients: [
      { id: 'ing-bt1', name: 'เนื้อวัวสันในสับหยาบสด', quantity: '140', unit: 'g', notes: 'คัดสดอุณหภูมิเย็นจัด' },
      { id: 'ing-bt2', name: 'ไข่แดงนกกระทาสดอินทรีย์', quantity: '1', unit: 'ฟอง', notes: 'วางท็อปตรงกลาง' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'คลุกเคล้าเนื้อวัวสับกับเครื่องปรุง ดิฌองมัสตาร์ด น้ำมันมะกอกเอ็กซ์ตร้าเวอร์จินอย่างเบามือ' },
      { stepNumber: 2, instruction: 'อัดทรงพิมพ์วงกลม เสิร์ฟพร้อมขนมปังซาวโดว์ปิ้งกรอบหอม' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-03T10:00:00Z'
  },
  {
    id: 'dish-burrata-heirloom',
    name: 'ชีสบุรราต้าสดและมะเขือเทศฮีร์ลูม (Burrata, Heirloom Tomato & Basil Oil)',
    englishName: 'Burrata, Heirloom Tomato & Basil Oil',
    slug: 'burrata-heirloom',
    description: 'ชีสบุรราต้าสดจากปูลยา ครีมนุ่มละลัก เสิร์ฟพร้อมมะเขือเทศฮีร์ลูมหลากสี ซอสเพสโต้โหระพาอิตาเลียน และดร็อปบัลซามิกบ่ม 12 ปี',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a81?auto=format&fit=crop&w=1000&q=80',
    categoryId: 'cat-starters',
    basePrice: 620,
    currency: 'THB',
    portionSize: '1 จาน (220g)',
    preparationTimeMinutes: 8,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 3,
    dietaryLabels: ['มังสวิรัติ', 'นำเข้าจากอิตาลี'],
    allergenInformation: ['นมสด (ชีส)', 'ถั่วพายน์'],
    ingredients: [
      { id: 'ing-b1', name: 'ชีสบุรราต้าสด Puglia', quantity: '150', unit: 'g', notes: 'ครีมสดเปิดทะลัก' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'จัดเรียงสไลซ์มะเขือเทศฮีร์ลูม วางชีสบุรราต้าสดอิตาเลียนไว้ตรงกลาง ผ่าเปิดผิวเบาๆ' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-03T10:00:00Z'
  },
  {
    id: 'dish-lobster-bisque',
    name: 'ซุปล็อบสเตอร์ข้นสไตล์ฝรั่งเศส (Lobster Bisque)',
    englishName: 'French Lobster Bisque',
    slug: 'lobster-bisque',
    description: 'ซุปล็อบสเตอร์เคี่ยวเปลือกและมันล็อบสเตอร์เข้มข้น ผสมครีมสดฝรั่งเศส บรั่นดี และเนื้อล็อบสเตอร์ลวกเนยสด',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1000&q=80',
    categoryId: 'cat-starters',
    basePrice: 690,
    currency: 'THB',
    portionSize: '1 ชาม (220ml)',
    preparationTimeMinutes: 10,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 4,
    dietaryLabels: ['ตำรับฝรั่งเศส', 'อาหารทะเล'],
    allergenInformation: ['กุ้งล็อบสเตอร์', 'นมสด', 'บรั่นดี'],
    ingredients: [
      { id: 'ing-lb1', name: 'สต๊อกเปลือกและมันกุ้งล็อบสเตอร์', quantity: '200', unit: 'ml', notes: 'เคี่ยว 8 ชั่วโมงเข้มข้น' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'ตักซุปล็อบสเตอร์เข้มข้นใส่ชามร้อน โรยครีมสด วางชิ้นเนื้อล็อบสเตอร์ลวกเนย' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-03T10:00:00Z'
  },

  // B. HANDCRAFTED PASTA & RISOTTO
  {
    id: 'dish-truffle-tagliolini',
    name: 'พาสต้าตาญโญลินีเส้นสดแบล็กทรัฟเฟิล (Tagliolini with Black Truffle)',
    englishName: 'Tagliolini with Black Truffle',
    slug: 'truffle-tagliolini',
    description: 'พาสต้าตาญโญลินีเส้นสดนวดมือ คลุกเนยฝรั่งเศสฉ่ำๆ ชีสพาร์เมซานบ่ม 24 เดือน ท็อปด้วยแบล็กทรัฟเฟิลสดสไลซ์บางแผ่นต่อแผ่น',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6288307?auto=format&fit=crop&w=1000&q=80',
    categoryId: 'cat-pasta-risotto',
    basePrice: 1290,
    currency: 'THB',
    portionSize: '1 จาน (250g)',
    preparationTimeMinutes: 14,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 5,
    dietaryLabels: ['พาสต้าเส้นสด', 'แบล็กทรัฟเฟิลสด'],
    allergenInformation: ['ไข่', 'แป้งสาลี', 'นมสด', 'ชีส'],
    ingredients: [
      { id: 'ing-tt1', name: 'เส้น Tagliolini สดนวดมือ', quantity: '120', unit: 'g', notes: 'นวดสดวันต่อวัน' },
      { id: 'ing-tt2', name: 'แบล็กทรัฟเฟิลสดสไลซ์', quantity: '15', unit: 'g', notes: 'ทรัฟเฟิลฤดูกาลนำเข้า' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'ลวกเส้นพาสต้าตาญโญลินีในน้ำเกลือเดือด คลุกเนยและชีสพาร์มิเจียโน่ขูดในกระทะทองเหลือง' },
      { stepNumber: 2, instruction: 'ตักใส่จาน สไลซ์แบล็กทรัฟเฟิลสดแผ่นบางคลุมเต็มหน้าพาสต้าพร้อมเสิร์ฟ' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-03T10:00:00Z'
  },
  {
    id: 'dish-lobster-ravioli',
    name: 'ราวิโอลีล็อบสเตอร์โฮมเมด ซอสเนย (Handmade Lobster Ravioli)',
    englishName: 'Handmade Lobster Ravioli',
    slug: 'lobster-ravioli',
    description: 'เกี๊ยวพาสต้าราวิโอลีโฮมเมดสอดไส้เนื้อล็อบสเตอร์และริคอตต้าชีส ราดซอสเนยไวน์ขาวและมะเขือเทศเชอร์รี่แห้ง',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=80',
    categoryId: 'cat-pasta-risotto',
    basePrice: 1490,
    currency: 'THB',
    portionSize: '5 ชิ้นใหญ่ (280g)',
    preparationTimeMinutes: 15,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 6,
    dietaryLabels: ['พาสต้าทำมือ', 'ล็อบสเตอร์สด'],
    allergenInformation: ['ล็อบสเตอร์', 'ไข่', 'แป้งสาลี', 'นมสด', 'ไวน์ขาว'],
    ingredients: [
      { id: 'ing-lr1', name: 'ไส้กุ้งล็อบสเตอร์ & Ricotta Cheese', quantity: '150', unit: 'g', notes: 'ปั้นสดชิ้นต่อชิ้น' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'ต้มราวิโอลีล็อบสเตอร์สดจนแป้งนุ่มสุก ราดซอสเนยไวน์ขาวเคี่ยวสมุนไพร' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-03T10:00:00Z'
  },
  {
    id: 'dish-mushroom-risotto',
    name: 'ริซอตโต้เห็ดป่าและชีสพาร์เมซานบ่ม (Wild Mushroom Risotto)',
    englishName: 'Wild Mushroom Risotto with Aged Parmesan',
    slug: 'wild-mushroom-risotto',
    description: 'ข้าวคาร์นาโรลีเคี่ยวซุปเห็ดพอร์ชินีเข้มข้น ผัดเห็ดป่าตามฤดูกาล ชีสพาร์มิกิอาโน่บ่ม 24 เดือน และน้ำมันทรัฟเฟิลขาว',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=1000&q=80',
    categoryId: 'cat-pasta-risotto',
    basePrice: 890,
    currency: 'THB',
    portionSize: '1 จาน (280g)',
    preparationTimeMinutes: 18,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 7,
    dietaryLabels: ['มังสวิรัติ', 'ข้าว Carnaroli อิตาลี'],
    allergenInformation: ['นมสด', 'ชีส', 'ไวน์ขาว'],
    ingredients: [
      { id: 'ing-mr1', name: 'ข้าว Carnaroli อิตาลี', quantity: '100', unit: 'g', notes: 'เคี่ยว 16 นาทีพอดีอัลเดนเต้' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'เคี่ยวข้าวคาร์นาโรลีกับน้ำสต๊อกเห็ดพอร์ชินีร้อนๆ ทีละทัพพีนาน 16 นาทีจนข้าวสุกข้นเนียน' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-03T10:00:00Z'
  },
  {
    id: 'dish-beef-pappardelle',
    name: 'พัปปาร์เดลเลเส้นสด ซอสเนื้อตุ๋น (Pappardelle with Slow-Braised Beef Ragù)',
    englishName: 'Pappardelle with Slow-Braised Beef Ragù',
    slug: 'beef-pappardelle',
    description: 'เส้นพัปปาร์เดลเลแผ่นใหญ่สดนวดมือ คลุกซอสแก้มเนื้อวัวตุ๋นไวน์แดงบอร์โดนาน 8 ชั่วโมง ละลายในปาก',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6288307?auto=format&fit=crop&w=1000&q=80',
    categoryId: 'cat-pasta-risotto',
    basePrice: 790,
    currency: 'THB',
    portionSize: '1 จาน (300g)',
    preparationTimeMinutes: 14,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 8,
    dietaryLabels: ['เนื้อวัวตุ๋น 8 ชม.', 'พาสต้าเส้นสด'],
    allergenInformation: ['ไข่', 'แป้งสาลี', 'ไวน์แดง', 'นมสด'],
    ingredients: [
      { id: 'ing-bp1', name: 'แก้มเนื้อวัวตุ๋นไวน์แดง Bordeaux', quantity: '150', unit: 'g', notes: 'เปื่อยเปื่อยละลาย' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'ผัดเส้นพัปปาร์เดลเลสดกับซอสเนื้อตุ๋นเข้มข้น โรยพาร์เมซานขูดสดและไทม์' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-03T10:00:00Z'
  },
  {
    id: 'dish-king-prawn-linguine',
    name: 'ลิงกวินีซีฟู้ดพร้อมกุ้งลายเสือใหญ่ (Seafood Linguine with King Prawns)',
    englishName: 'Seafood Linguine with King Prawns',
    slug: 'king-prawn-linguine',
    description: 'ลิงกวินีสดผัดกุ้งลายเสือมหาสมุทรขนาดใหญ่ หอยตลับ ไวน์ขาว มะเขือเทศเชอร์รี่ และพริกแห้งกระเทียมหอมควัน',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80',
    categoryId: 'cat-pasta-risotto',
    basePrice: 1090,
    currency: 'THB',
    portionSize: '1 จาน (350g)',
    preparationTimeMinutes: 15,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 9,
    dietaryLabels: ['กุ้งลายเสือใหญ่', 'ซีฟู้ดพรีเมียม'],
    allergenInformation: ['กุ้ง', 'หอย', 'แป้งสาลี', 'ไวน์ขาว'],
    ingredients: [
      { id: 'ing-kp1', name: 'กุ้งลายเสือสดขนาดใหญ่', quantity: '2', unit: 'ตัวใหญ่', notes: 'ผัดไวน์ขาวหอมมัน' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'ย่างกุ้งลายเสือบนกระทะ ผัดเส้นลิงกวินีสดกับซอสมันกุ้งและไวน์ขาว' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-03T10:00:00Z'
  },

  // C. SIGNATURE MAIN COURSES
  {
    id: 'dish-wagyu-tenderloin',
    name: 'เนื้อวากิวเทนเดอร์ลอยน์ ออสเตรเลีย (Australian Wagyu Tenderloin MB7+)',
    englishName: 'Australian Wagyu Tenderloin MB7+',
    slug: 'wagyu-tenderloin',
    description: 'เนื้อวากิวสันในออสเตรเลีย มาร์บลอยด์สกอร์ MB7+ ย่างเตาไฟสมุนไพร เสิร์ฟพร้อมมันบดเนยทรัฟเฟิล ผักย่าง และซอสไวน์แดงบอร์โด',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    categoryId: 'cat-mains',
    basePrice: 2490,
    currency: 'THB',
    portionSize: '200g',
    preparationTimeMinutes: 20,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 10,
    dietaryLabels: ['Wagyu MB7+', 'เชฟแนะนำ'],
    allergenInformation: ['นมสด', 'เนยสด', 'ไวน์แดง'],
    ingredients: [
      { id: 'ing-wt1', name: 'เนื้อ Wagyu Tenderloin MB7+', quantity: '200', unit: 'g', notes: 'นุ่มละลายในปาก' },
      { id: 'ing-wt2', name: 'ซอส Red Wine Reduction', quantity: '50', unit: 'ml', notes: 'เคี่ยวไวน์บอร์โด 12 ชม.' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'ย่างเนื้อวากิวเทนเดอร์ลอยน์ความร้อนสูง ทาเนยสมุนไพร พักเนื้อ 6 นาทีให้ชุ่มฉ่ำ' },
      { stepNumber: 2, instruction: 'ตักมันบดเนยทรัฟเฟิล วางเนื้อวากิวย่าง ราดซอสไวน์แดงเข้มข้นพร้อมเสิร์ฟ' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-03T10:00:00Z'
  },
  {
    id: 'dish-dry-aged-ribeye',
    name: 'สเต๊กริบอายดรายเอจ 45 วัน (Dry-Aged Ribeye Steak 350g)',
    englishName: '45-Day Dry-Aged Ribeye Steak',
    slug: 'dry-aged-ribeye',
    description: 'สเต๊กริบอายบ่มแห้ง 45 วัน กลิ่นหอมเนยและถั่วเอกลักษณ์ ย่างเตาถ่านหินภูเขาไฟ เสิร์ฟพร้อมซอสเกรวี่พริกไทยอ่อน',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80',
    categoryId: 'cat-mains',
    basePrice: 2190,
    currency: 'THB',
    portionSize: '350g',
    preparationTimeMinutes: 22,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 11,
    dietaryLabels: ['บ่มแห้ง 45 วัน', 'ย่างเตาถ่าน'],
    allergenInformation: ['นมสด', 'เนยสด'],
    ingredients: [
      { id: 'ing-dr1', name: 'เนื้อ Ribeye Dry-Aged 45 วัน', quantity: '350', unit: 'g', notes: 'เข้มข้นรสเนื้อแท้' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'ย่างริบอายดรายเอจบนเตาถ่านความร้อนสูง พักเนื้อเพื่อรักษาความฉ่ำด้านใน' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-03T10:00:00Z'
  },
  {
    id: 'dish-chilean-seabass',
    name: 'ปลาชิลีซีบาสย่างกระทะ ซอสเลมอนบัตเตอร์ (Pan-Seared Chilean Sea Bass)',
    englishName: 'Pan-Seared Chilean Sea Bass',
    slug: 'chilean-sea-bass',
    description: 'ปลาหิมะชิลีซีบาสสด หนังกรอบเนื้อขาวนุ่มชุ่มฉ่ำ เสิร์ฟพร้อมมันฝรั่งบดเนยสด หน่อไม้ฝรั่งย่าง และซอสเนยเลมอนฝรั่งเศส',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80',
    categoryId: 'cat-mains',
    basePrice: 1590,
    currency: 'THB',
    portionSize: '220g',
    preparationTimeMinutes: 16,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 12,
    dietaryLabels: ['ปลาหิมะแท้', 'อาหารทะเลพรีเมียม'],
    allergenInformation: ['ปลา', 'นมสด', 'เนยฝรั่งเศส'],
    ingredients: [
      { id: 'ing-csb1', name: 'เนื้อปลาชิลีซีบาสสดติดหนัง', quantity: '220', unit: 'g', notes: 'เนื้อขาวชุ่มเนียน' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'นาบหนังปลาชิลีซีบาสจนกรอบทอง ราดซอสเนยสดพรมเลมอนสดฉ่ำ' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-03T10:00:00Z'
  },
  {
    id: 'dish-duck-cherry',
    name: 'อกเป็ดย่างซอสเชอร์รีฝรั่งเศส (Duck Breast with Cherry Jus)',
    englishName: 'Duck Breast with Cherry Jus',
    slug: 'duck-breast-cherry',
    description: 'อกเป็ดฝรั่งเศสย่างหนังกรอบเนื้อสีชมพูนุ่ม เสิร์ฟพร้อมซอสเรดเชอร์รีบ่ม และมันฝรั่งอบเนยโรสแมรี่',
    image: 'https://images.unsplash.com/photo-1514944288352-fffac99f0bdf?auto=format&fit=crop&w=1200&q=80',
    categoryId: 'cat-mains',
    basePrice: 1390,
    currency: 'THB',
    portionSize: '250g',
    preparationTimeMinutes: 18,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 13,
    dietaryLabels: ['ตำรับฝรั่งเศส'],
    allergenInformation: ['นมสด', 'เชอร์รีไวน์'],
    ingredients: [
      { id: 'ing-dc1', name: 'อกเป็ดสดฝรั่งเศส', quantity: '250', unit: 'g', notes: 'บั้งหนังย่างรีดน้ำมันกรอบ' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'ย่างอกเป็ดด้านหนังจนกรอบ อบต่อความสุกมีเดียม ราดซอสเชอร์รีเรดไวน์หวานกลมกล่อม' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-03T10:00:00Z'
  },
  {
    id: 'dish-rack-of-lamb',
    name: 'ซี่โครงแกะอบสมุนไพรสด (Herb-Crusted Rack of Lamb)',
    englishName: 'Herb-Crusted Rack of Lamb',
    slug: 'rack-of-lamb',
    description: 'ซี่โครงแกะนิวซีแลนด์คลุกสมุนไพรสดและเกล็ดขนมปังเนย อบสุกมีเดียมเรร์ เสิร์ฟพร้อมซอสเกรวี่แกะเคี่ยวพาร์สลีย์',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    categoryId: 'cat-mains',
    basePrice: 1890,
    currency: 'THB',
    portionSize: '3 ซี่โครง (300g)',
    preparationTimeMinutes: 20,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 14,
    dietaryLabels: ['ซี่โครงแกะนำเข้า'],
    allergenInformation: ['แป้งสาลี', 'นมสด', 'เนย'],
    ingredients: [
      { id: 'ing-rl1', name: 'ซี่โครงแกะนิวซีแลนด์สด', quantity: '300', unit: 'g', notes: 'คลุก Herb Crust อบกรอบ' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'อบซี่โครงแกะคลุกสมุนไพรสดในเตาอบความร้อนสูงจนได้สีทองสุกมีเดียมเรร์' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-03T10:00:00Z'
  },
  {
    id: 'dish-poached-lobster',
    name: 'ล็อบสเตอร์ปรุงเนยสดฝรั่งเศส (Butter-Poached Lobster)',
    englishName: 'Butter-Poached Canadian Lobster',
    slug: 'butter-poached-lobster',
    description: 'กุ้งล็อบสเตอร์แคนาดาสดทั้งตัว ปรุงด้วยเนยจืดฝรั่งเศสอุณหภูมิควบคุม เสิร์ฟพร้อมซอสครีมพอร์ชินีและผักตามฤดูกาล',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80',
    categoryId: 'cat-mains',
    basePrice: 2290,
    currency: 'THB',
    portionSize: '1 ตัวเต็ม (500g)',
    preparationTimeMinutes: 22,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 15,
    dietaryLabels: ['แคนาดาล็อบสเตอร์แท้', 'พรีเมียมซีฟู้ด'],
    allergenInformation: ['กุ้งล็อบสเตอร์', 'นมสด', 'เนยสด'],
    ingredients: [
      { id: 'ing-pl1', name: 'กุ้งล็อบสเตอร์แคนาดาสด', quantity: '1', unit: 'ตัวเต็ม', notes: 'ตุ๋นเนยสดฝรั่งเศส' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'ต้มล็อบสเตอร์ในเนยสดอุณหภูมิต่ำเนียนนุ่ม จัดเสิร์ฟพร้อมซอสบิสก์ครีม' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-03T10:00:00Z'
  },

  // D. DESSERT COLLECTION
  {
    id: 'dish-chocolate-fondant',
    name: 'ช็อกโกแลตฟองดองต์Valrhona (Valrhona Chocolate Fondant)',
    englishName: 'Valrhona Chocolate Fondant',
    slug: 'valrhona-chocolate-fondant',
    description: 'เค้กช็อกโกแลตฝรั่งเศส Valrhona 70% เนื้ออบอุ่น ไส้ช็อกโกแลตลาวาเข้มข้นไหลย้อย เสิร์ฟคู่ไอศกรีมวานิลลามาดากัสการ์',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=80',
    categoryId: 'cat-desserts',
    basePrice: 490,
    currency: 'THB',
    portionSize: '1 ชิ้น + ไอศกรีม 1 สกู๊ป',
    preparationTimeMinutes: 12,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 16,
    dietaryLabels: ['Valrhona 70%', 'ของหวานซิกเนเจอร์'],
    allergenInformation: ['ไข่', 'แป้งสาลี', 'นมสด'],
    ingredients: [
      { id: 'ing-cf1', name: 'ช็อกโกแลต Valrhona 70%', quantity: '80', unit: 'g', notes: 'เข้มข้นลาวาอุ่น' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'อบช็อกโกแลตฟองดองต์ในเตาร้อน 10 นาทีจนตรงกลางลาวาเยิ้ม ตักเสิร์ฟคู่ไอศกรีมวานิลลา' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-03T10:00:00Z'
  },
  {
    id: 'dish-creme-brulee',
    name: 'ครีมบรูเล่วานิลลามาดากัสการ์ (Madagascar Vanilla Crème Brûlée)',
    englishName: 'Madagascar Vanilla Crème Brûlée',
    slug: 'vanilla-creme-brulee',
    description: 'คัสตาร์ดครีมสดผสมฝักวานิลลามาดากัสการ์แท้ เผาหน้าน้ำตาลคาร์เพลกรอบหอมกระจก เสิร์ฟพร้อมเบอร์รี่สด',
    image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=1000&q=80',
    categoryId: 'cat-desserts',
    basePrice: 390,
    currency: 'THB',
    portionSize: '1 ถ้วย (160g)',
    preparationTimeMinutes: 6,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 17,
    dietaryLabels: ['วานิลลามาดากัสการ์'],
    allergenInformation: ['ไข่', 'นมสด', 'ครีมสด'],
    ingredients: [
      { id: 'ing-cb1', name: 'ฝักวานิลลา Madagascar สด', quantity: '1', unit: 'ฝัก', notes: 'หอมเมล็ดวานิลลาแท้' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'โรยน้ำตาลบนหน้าคัสตาร์ดเย็น ใช้พ่นไฟเผาจนน้ำตาลละลายเป็นแผ่นกระจกสีทองกรอบ' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-03T10:00:00Z'
  },
  {
    id: 'dish-tiramisu-house',
    name: 'ทีรามิสุสูตรต้นตำรับอิตาเลียน (Classic Tiramisu, House Style)',
    englishName: 'Classic Tiramisu, House Style',
    slug: 'classic-tiramisu-house',
    description: 'ขนมเลดี้ฟิงเกอร์ชุบกาแฟเอสเพรสโซ่เข้มข้น สลับชั้นครีมมาสคาร์โปเน่ชีสนุ่มละมุน โรยผงโกโก้ฝรั่งเศส',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1000&q=80',
    categoryId: 'cat-desserts',
    basePrice: 420,
    currency: 'THB',
    portionSize: '1 ชิ้นใหญ่ (180g)',
    preparationTimeMinutes: 5,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 18,
    dietaryLabels: ['ตำรับอิตาเลียนแท้'],
    allergenInformation: ['ไข่', 'แป้งสาลี', 'นมสด', 'คาเฟอีน'],
    ingredients: [
      { id: 'ing-th1', name: 'ชีส Mascarpone นำเข้า', quantity: '100', unit: 'g', notes: 'เนื้อเนียนนุ่ม' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'จัดชั้นเลดี้ฟิงเกอร์ชุบกาแฟกับครีมชีสมาสคาร์โปเน่ โรยผงโกโก้สดเข้มข้นก่อนเสิร์ฟ' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-03T10:00:00Z'
  },
  {
    id: 'dish-mille-feuille',
    name: 'มิลเฟยพัฟพาสทรีวานิลลาครีม (Mille-Feuille with Vanilla Cream)',
    englishName: 'Mille-Feuille with Vanilla Cream',
    slug: 'mille-feuille-vanilla',
    description: 'พัฟพาสทรีอบกรอบ 1,000 ชั้น สลับชั้นวานิลลาดิโพลแมตครีมเนียนนุ่ม และสตรอว์เบอร์รี่สดตัดรสชาติ',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80',
    categoryId: 'cat-desserts',
    basePrice: 520,
    currency: 'THB',
    portionSize: '1 ชิ้น (150g)',
    preparationTimeMinutes: 8,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 19,
    dietaryLabels: ['ขนมฝรั่งเศสดั้งเดิม'],
    allergenInformation: ['ไข่', 'แป้งสาลี', 'นมสด', 'เนย'],
    ingredients: [
      { id: 'ing-mf1', name: 'แป้งพัฟอบกรอบเนยสด', quantity: '3', unit: 'แผ่น', notes: 'อบกรอบพาสทรี' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'ประกอบแผ่นพัฟพาสทรีกรอบสลับไส้ครีมวานิลลาสด โรยไอซิ่งและตกแต่งด้วยสตรอว์เบอร์รี่' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-03T10:00:00Z'
  },

  // E. PREMIUM NON-ALCOHOLIC BEVERAGES
  {
    id: 'dish-sparkling-water',
    name: 'น้ำแร่ธรรมชาติชนิดมีฟองฝรั่งเศส (French Sparkling Mineral Water 750ml)',
    englishName: 'French Sparkling Mineral Water',
    slug: 'french-sparkling-water',
    description: 'น้ำแร่ธรรมชาติชนิดมีฟองนำเข้าจากฝรั่งเศส ฟองละเอียดยิบสดชื่น ช่วยตัดความมันและเสริมรสชาติมื้ออาหาร',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80',
    categoryId: 'cat-beverages',
    basePrice: 290,
    currency: 'THB',
    portionSize: 'ขวดแก้ว 750ml',
    preparationTimeMinutes: 2,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 21,
    dietaryLabels: ['นำเข้าจากฝรั่งเศส'],
    allergenInformation: [],
    ingredients: [
      { id: 'ing-sw1', name: 'น้ำแร่มีฟองธรรมชาตินำเข้า', quantity: '750', unit: 'ml', notes: 'แช่เย็นจัด' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'เสิร์ฟแช่เย็นจัดในขวดแก้ว พร้อมแก้วไวน์ทรงสูงและเลมอนสไลซ์' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-03T10:00:00Z'
  },
  {
    id: 'dish-still-water',
    name: 'น้ำแร่ธรรมชาติชนิดไม่มีฟองฝรั่งเศส (Still Mineral Water 750ml)',
    englishName: 'Still Mineral Water',
    slug: 'french-still-water',
    description: 'น้ำแร่ธรรมชาติชนิดบริสุทธิ์นำเข้าจากฝรั่งเศส รสสัมผัสนุ่มใส ดื่มง่ายคู่มื้อค่ำ',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=1000&q=80',
    categoryId: 'cat-beverages',
    basePrice: 220,
    currency: 'THB',
    portionSize: 'ขวดแก้ว 750ml',
    preparationTimeMinutes: 2,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 22,
    dietaryLabels: ['นำเข้าจากฝรั่งเศส'],
    allergenInformation: [],
    ingredients: [
      { id: 'ing-stw1', name: 'น้ำแร่ธรรมชาติบริสุทธิ์', quantity: '750', unit: 'ml', notes: 'แช่เย็น' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'เสิร์ฟแช่เย็นในขวดแก้วหรูหรา' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-03T10:00:00Z'
  },
  {
    id: 'dish-single-origin-espresso',
    name: 'กาแฟเอสเพรสโซ่คัดสรรซิงเกิลออริจิน (Single-Origin Espresso)',
    englishName: 'Single-Origin Espresso',
    slug: 'single-origin-espresso',
    description: 'เอสเพรสโซ่สกัดจากเมล็ดกาแฟซิงเกิลออริจินสายพันธุ์พิเศษ กลิ่นหอมช็อกโกแลตและผลไม้แห้ง เครม่าสีน้ำตาลทอง',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1000&q=80',
    categoryId: 'cat-beverages',
    basePrice: 180,
    currency: 'THB',
    portionSize: '1 ช็อตคู่ (60ml)',
    preparationTimeMinutes: 3,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 23,
    dietaryLabels: ['Single-Origin Arabica'],
    allergenInformation: ['คาเฟอีน'],
    ingredients: [
      { id: 'ing-so1', name: 'เมล็ดกาแฟ Single-Origin คั่วสด', quantity: '18', unit: 'g', notes: 'สกัดช็อตต่อช็อต' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'สกัดช็อตกาแฟเอสเพรสโซ่เข้มข้น 60ml เสิร์ฟในแก้วกาแฟพอร์ซเลนอุ่นร้อน' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-03T10:00:00Z'
  },
  {
    id: 'dish-signature-vanilla-espresso',
    name: 'เอสเพรสโซ่วานิลลาซิกเนเจอร์ (Signature Vanilla Espresso)',
    englishName: 'Signature Vanilla Espresso',
    slug: 'signature-vanilla-espresso',
    description: 'เอสเพรสโซ่สกัดเย็นผสมไซรัปวานิลลามาดากัสการ์และฟองนมนุ่มละเอียด ไร้แอลกอฮอล์ ดื่มสดชื่นปิดท้ายมื้ออาหาร',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80',
    categoryId: 'cat-beverages',
    basePrice: 240,
    currency: 'THB',
    portionSize: '1 แก้ว (200ml)',
    preparationTimeMinutes: 4,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 24,
    dietaryLabels: ['สูตรซิกเนเจอร์', 'ไม่มีแอลกอฮอล์'],
    allergenInformation: ['นมสด', 'คาเฟอีน'],
    ingredients: [
      { id: 'ing-sve1', name: 'เอสเพรสโซ่ & Vanilla Madagascar', quantity: '200', unit: 'ml', notes: 'ฟองนมเนียนละมุน' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'เขย่าเอสเพรสโซ่กับไซรัปวานิลลาแท้และน้ำแข็ง รินใส่แก้วทรงสูงท็อปฟองนมนุ่ม' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-03T10:00:00Z'
  }
];

export const initialPromoCodes: PromoCode[] = [
  { code: 'AUVELARO10', discountType: 'percentage', discountValue: 10, minSubtotal: 500, isActive: true }
];

export const initialOrders: Order[] = [];
