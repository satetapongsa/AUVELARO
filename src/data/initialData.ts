import { MenuCategory, MenuItem, RestaurantSettings, PromoCode, Order } from '../types';

export const initialSettings: RestaurantSettings = {
  name: 'Artisanal Hearth',
  logoUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=300&q=80',
  heroImageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80',
  phone: '02-890-4455',
  email: 'concierge@artisanalhearth.co.th',
  address: '88 ถนนสุขุมวิท ซอย 39 แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพมหานคร 10110',
  openingHours: 'เปิดบริการมื้อค่ำทุกวัน 17:00 น. - 23:00 น. (เสาร์-อาทิตย์ มื้อกลางวัน 11:30 - 15:00 น.)',
  isOpen: true,
  minimumOrder: 350,
  deliveryFee: 60,
  freeDeliveryThreshold: 1500,
  supportedFulfillment: ['delivery', 'pickup', 'dinein'],
  supportedPayments: ['promptpay', 'card', 'cod', 'pay_at_store'],
  promptpayId: '0881234567',
  promptpayName: 'บจก. อาร์ติซานัล เฮิร์ท (ประเทศไทย)',
  noticeText: 'ประสบการณ์อาหารอิตาเลียนร่วมสมัย วัตถุดิบนำเข้าสดใหม่ ปรุงจานต่อจานในเตาฮาร์ท'
};

export const initialCategories: MenuCategory[] = [
  {
    id: 'cat-antipasti',
    name: 'Antipasti — อาหารเรียกน้ำย่อย',
    slug: 'antipasti',
    description: 'จานเริ่มต้นมื้ออาหารสไตล์อิตาเลียน ชีสบุรราต้าสด และเนื้อคูลาเทลโล่บ่มพิเศษ',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a81?auto=format&fit=crop&w=600&q=80',
    isActive: true,
    displayOrder: 1
  },
  {
    id: 'cat-pasta-risotto',
    name: 'Pasta & Risotto — พาสต้าและริซอตโต้',
    slug: 'pasta-risotto',
    description: 'เส้นพาสร้านนวดมือสดวันต่อวัน และริซอตโต้ข้าวคาร์นาโรลีเคี่ยวซุปเข้มข้น',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6288307?auto=format&fit=crop&w=600&q=80',
    isActive: true,
    displayOrder: 2
  },
  {
    id: 'cat-mains',
    name: 'Secondi — จานหลักสไตล์ยุโรป',
    slug: 'main-courses',
    description: 'สเต๊กเนื้อริบอายย่างเตาถ่าน แซลมอนนาบกระทะ และเนื้อสันในซอสไวน์แดง',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    isActive: true,
    displayOrder: 3
  },
  {
    id: 'cat-pizza',
    name: 'Pizza Napoletana — พิซซ่าเตาฟืน',
    slug: 'wood-fired-pizza',
    description: 'พิซซ่าแป้งหมักธรรมชาติ 48 ชั่วโมง อบในเตาฟืนหินลาวาความร้อนสูง',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    isActive: true,
    displayOrder: 4
  },
  {
    id: 'cat-sides',
    name: 'Contorni — เครื่องเคียงและสลัด',
    slug: 'sides-salads',
    description: 'สลัดผักออร์แกนิก ขนมปังฟอกาเชียอบสมุนไพร และเฟรนช์ฟรายส์ซอสทรัฟเฟิล',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    isActive: true,
    displayOrder: 5
  },
  {
    id: 'cat-dessert',
    name: 'Dolci — ของหวานสไตล์อิตาเลียน',
    slug: 'desserts',
    description: 'ทิรามิสุตำรับเวนิส พานาคอตต้านมสดวานิลลาแท้ และบาสก์ชีสเค้ก',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80',
    isActive: true,
    displayOrder: 6
  },
  {
    id: 'cat-beverage',
    name: 'Bevande — เครื่องดื่มและกาแฟ',
    slug: 'beverages',
    description: 'น้ำแร่ธรรมชาติ San Pellegrino กาแฟเอสเพรสโซ่ และอิตาเลียนโซดาส้มยูสุ',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80',
    isActive: true,
    displayOrder: 7
  },
  {
    id: 'cat-wine',
    name: 'Carta dei Vini — ไวน์เซเลกชัน (สำหรับทานที่ร้าน)',
    slug: 'wine-list',
    description: 'รายการไวน์อิตาลีบ่มพรีเมียม Chianti & Barolo ข้อมูลเฉพาะผู้ใหญ่สำหรับทานที่ร้าน',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80',
    isActive: true,
    displayOrder: 8
  }
];

export const initialMenuItems: MenuItem[] = [
  {
    id: 'dish-burrata',
    name: 'Burrata con Pomodorini (บุรราต้าสดและมะเขือเทศฮีร์ลูม)',
    slug: 'burrata-con-pomodorini',
    description: 'ชีสบุรราต้าสดจากปูลยา ครีมนุ่มทะลัก เสิร์ฟพร้อมมะเขือเทศฮีร์ลูมหลากสี ซอสเพสโต้โหระพาอิตาเลียน และน้ำมันมะกอกเอ็กซ์ตร้าเวอร์จิน',
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
    allergenInformation: ['นมสด (ชีส)', 'ถั่วพีนัท/ถั่วพายน์ (ในซอสเพสโต้)'],
    ingredients: [
      { id: 'ing-b1', name: 'ชีสบุรราต้าสด Puglia', quantity: '150', unit: 'กรัม', notes: 'ชีสนมวัวสดครีมชีสทะลัก' },
      { id: 'ing-b2', name: 'มะเขือเทศฮีร์ลูมหลากสี', quantity: '100', unit: 'กรัม', notes: 'หวานฉ่ำคัดพิเศษ' },
      { id: 'ing-b3', name: 'ซอสเพสโต้โหระพาอิตาเลียน', quantity: '20', unit: 'มิลลิลิตร', notes: 'โขลกสดพร้อมถั่วพายน์และพาร์เมซาน' },
      { id: 'ing-b4', name: 'น้ำมันมะกอก EVOO', quantity: '15', unit: 'มิลลิลิตร', notes: 'สกัดเย็นสเปนเกรดพรีเมียม' },
      { id: 'ing-b5', name: 'ซอสน้ำส้มสายชูบัลซามิกบ่ม 12 ปี', quantity: '10', unit: 'มิลลิลิตร', notes: 'เข้มข้นหวานเปรี้ยวกลมกล่อม' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'จัดเรียงสไลซ์มะเขือเทศฮีร์ลูมหลากสีบนจานพอร์ซเลนเย็น' },
      { stepNumber: 2, instruction: 'วางชีสบุรราต้าสดอิตาเลียนไว้ตรงกลาง ผ่าเปิดผิวเบาๆ ให้ครีมสดไหลย้อย' },
      { stepNumber: 3, instruction: 'ราดด้วยซอสเพสโต้โหระพา น้ำมันมะกอกเอ็กซ์ตร้าเวอร์จิน และดร็อปบัลซามิกบ่ม 12 ปี โรยเกลือหิมาลายัน' }
    ],
    optionGroups: [
      {
        id: 'opt-burrata-extra',
        name: 'เพิ่มเครื่องเคียงพิเศษ',
        isRequired: false,
        options: [
          { id: 'be-1', name: 'เพิ่มพรอสชุตโต้พาร์มาแฮมบ่ม 24 เดือน (Prosciutto di Parma)', additionalPrice: 160, isAvailable: true },
          { id: 'be-2', name: 'เพิ่มขนมปังซาวโดว์ปิ้งทาเนยกระเทียม', additionalPrice: 60, isAvailable: true }
        ]
      }
    ],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-carpaccio',
    name: 'Carpaccio di Manzo (คาร์ปัชโชเนื้อวัวพรีเมียม)',
    slug: 'carpaccio-di-manzo',
    description: 'เนื้อวัวสันในแบล็กแองกัสสไลซ์บางพิเศษ เสิร์ฟพร้อมผักร็อกเก็ตป่า ชีสพาร์เมซานสไลซ์ แรดิช และซอสดิฌองมัสตาร์ดเลมอน',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-antipasti',
    basePrice: 480,
    currency: 'THB',
    portionSize: '1 จาน (180 กรัม)',
    preparationTimeMinutes: 12,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 2,
    dietaryLabels: ['คาร์บต่ำ', 'เชฟแนะนำ'],
    allergenInformation: ['นมสด (ชีสพาร์เมซาน)', 'มัสตาร์ด'],
    ingredients: [
      { id: 'ing-c1', name: 'เนื้อวัวสันใน Black Angus', quantity: '120', unit: 'กรัม', notes: 'สไลซ์บางสดเย็น' },
      { id: 'ing-c2', name: 'ผักร็อกเก็ตป่าสด', quantity: '30', unit: 'กรัม', notes: 'รสเผ็ดซ่าฉุนฉาย' },
      { id: 'ing-c3', name: 'ชีส Parmigiano-Reggiano บ่ม 24 เดือน', quantity: '20', unit: 'กรัม', notes: 'สไลซ์แผ่นบาง' },
      { id: 'ing-c4', name: 'น้ำสลัดเลมอนมัสตาร์ดดิฌอง', quantity: '25', unit: 'มิลลิลิตร', notes: 'สดชื่นเปรี้ยวละมุน' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'จัดเรียงสไลซ์เนื้อวัวสันในแบล็กแองกัสเย็นแผ่เต็มจาน' },
      { stepNumber: 2, instruction: 'วางผักร็อกเก็ตป่าไว้ตรงกลาง โรยชีสพาร์มิเจียโน่สไลซ์' },
      { stepNumber: 3, instruction: 'ราดซอสมัสตาร์ดเลมอนและน้ำมันมะกอกเกรดพรีเมียม โรยพริกไทยดำบดใหม่' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-bolognese',
    name: 'Tagliatelle alla Bolognese (ตักเลียเตลเลซอสเนื้อโบโลญเญเซ่)',
    slug: 'tagliatelle-bolognese',
    description: 'เส้นตักเลียเตลเลสดนวดมือ คลุกซอสเนื้อวัวและหมูเคี่ยวไวน์แดงและมะเขือเทศซานมารซาโน่นาน 6 ชั่วโมง ตำรับเมืองโบโลญญาแท้',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6288307?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-pasta-risotto',
    basePrice: 380,
    currency: 'THB',
    portionSize: '1 จาน (320 กรัม)',
    preparationTimeMinutes: 14,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 3,
    dietaryLabels: ['พาสต้าเส้นสด', 'ตำรับโบโลญญา'],
    allergenInformation: ['ไข่', 'แป้งสาลี', 'นมสด', 'ไวน์แดง'],
    ingredients: [
      { id: 'ing-bo1', name: 'เส้นตักเลียเตลเลไข่ทำสด', quantity: '130', unit: 'กรัม', notes: 'นวดมือวันต่อวัน' },
      { id: 'ing-bo2', name: 'ซอสเรกูเนื้อวัวและหมูเคี่ยวไวน์แดง', quantity: '180', unit: 'กรัม', notes: 'เคี่ยว 6 ชั่วโมงเข้มข้น' },
      { id: 'ing-bo3', name: 'ชีส Parmigiano-Reggiano ขูด', quantity: '25', unit: 'กรัม', notes: 'หอมมันเข้มข้น' },
      { id: 'ing-bo4', name: 'เนยจืดอิตาเลียน', quantity: '15', unit: 'กรัม', notes: 'ผัดเคลือบเส้น' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'ลวกเส้นพาสต้าตักเลียเตลเลสดในน้ำเกลือเดือดจัดจนได้ระดับ Al Dente (3 นาที)' },
      { stepNumber: 2, instruction: 'อุ่นซอสเรกูโบโลญเญเซ่ในกระทะเหล็ก ใส่น้ำลวกเส้นพาสต้าเล็กน้อย' },
      { stepNumber: 3, instruction: 'นำเส้นพาสต้าลงผัดสะบัดกระทะกับซอสและเนยจืด ปิดไฟแล้วใส่ชีสพาร์เมซานขูดตักเสิร์ฟ' }
    ],
    optionGroups: [
      {
        id: 'opt-pasta-type',
        name: 'เลือกประเภทเส้นพาสต้า',
        isRequired: true,
        options: [
          { id: 'pt-1', name: 'เส้นตักเลียเตลเลสด (Tagliatelle - แนะนำ)', additionalPrice: 0, isAvailable: true },
          { id: 'pt-2', name: 'เส้นเพนเน่ (Penne Rigate)', additionalPrice: 0, isAvailable: true },
          { id: 'pt-3', name: 'เส้นริกาโตนี่ (Rigatoni)', additionalPrice: 0, isAvailable: true }
        ]
      },
      {
        id: 'opt-truffle-topping',
        name: 'ท็อปปิ้งเพิ่มเติม',
        isRequired: false,
        options: [
          { id: 'tt-1', name: 'เพิ่มเห็ดทรัฟเฟิลดำสไลซ์สด (Fresh Shaved Black Truffle)', additionalPrice: 150, isAvailable: true },
          { id: 'tt-2', name: 'เพิ่มชีสพาร์เมซานขูดพิเศษ', additionalPrice: 40, isAvailable: true }
        ]
      }
    ],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-carbonara',
    name: 'Spaghetti alla Carbonara Traditional (สปาเกตตีคาร์โบนาร่าสูตรโรมแท้)',
    slug: 'spaghetti-carbonara',
    description: 'สปาเกตตีเส้นสด ผัดแก้มหมูบ่มกวนชาเล่ (Guanciale) กรอบหอม ไข่แดงไข่อินทรีย์สด และชีสเปโกริโน่โรมาโน่ ไม่ใส่นมหรือครีมสด',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-pasta-risotto',
    basePrice: 390,
    currency: 'THB',
    portionSize: '1 จาน (300 กรัม)',
    preparationTimeMinutes: 12,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 4,
    dietaryLabels: ['สูตรโรมดั้งเดิม', 'ไม่ใส่ครีมสด'],
    allergenInformation: ['ไข่', 'แป้งสาลี', 'ชีสเปโกริโน่'],
    ingredients: [
      { id: 'ing-car1', name: 'เส้นสปาเกตตีสด', quantity: '120', unit: 'กรัม', notes: 'เหนียวนุ่มสไตล์ Al Dente' },
      { id: 'ing-car2', name: 'แก้มหมูบ่ม Guanciale อิตาลี', quantity: '60', unit: 'กรัม', notes: 'เจียวกรอบหอมมัน' },
      { id: 'ing-car3', name: 'ไข่แดงอินทรีย์สด', quantity: '2', unit: 'ฟอง', notes: 'ผสมชีสเปโกริโน่' },
      { id: 'ing-car4', name: 'ชีส Pecorino Romano DOC', quantity: '30', unit: 'กรัม', notes: 'ขูดละเอียดหอมมันเค็ม' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'เจียวแก้มหมู Guanciale ในกระทะด้วยไฟอ่อนจนน้ำมันหมูออกมาและผิวนอกกรอบทอง ตักพักไว้' },
      { stepNumber: 2, instruction: 'ผสมไข่แดงสดกับชีสเปโกริโน่ขูดและพริกไทยดำบดใหม่ในชามผสม' },
      { stepNumber: 3, instruction: 'นำเส้นสปาเกตตีร้อนๆ ลงผัดในกระทะแก้มหมู ยกลงจากเตา ปล่อยให้เย็นลงเล็กน้อยแล้วเทส่วนผสมไข่แดงลงคลุกสะบัดกระทะจนซอสข้นเนียนเคลือบเส้น' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-risotto',
    name: 'Risotto ai Funghi e Tartufo (ริซอตโต้เห็ดและซอสทรัฟเฟิลดำ)',
    slug: 'risotto-funghi-tartufo',
    description: 'ข้าวริซอตโต้คาร์นาโรลีนำเข้า เคี่ยวในน้ำสต๊อกผักและซอสเห็ดพอร์ชินี ท็อปด้วยชีสพาร์เมซาน น้ำมันทรัฟเฟิลขาว และเห็ดผัดเนย',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-pasta-risotto',
    basePrice: 460,
    currency: 'THB',
    portionSize: '1 จาน (300 กรัม)',
    preparationTimeMinutes: 18,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 5,
    dietaryLabels: ['มังสวิรัติ', 'ซิกเนเจอร์'],
    allergenInformation: ['นมสด', 'ชีส', 'ไวน์ขาว'],
    ingredients: [
      { id: 'ing-r1', name: 'ข้าวริซอตโต้ Carnaroli', quantity: '100', unit: 'กรัม', notes: 'นำเข้าจากอิตาลี' },
      { id: 'ing-r2', name: 'เห็ดพอร์ชินีและเห็ดออรินจิสด', quantity: '80', unit: 'กรัม', notes: 'ผัดเนยและไวน์ขาว' },
      { id: 'ing-r3', name: 'น้ำซุปสต๊อกเห็ดและผักเข้มข้น', quantity: '300', unit: 'มิลลิลิตร', notes: 'ค่อยๆ ค่อยเติมเคี่ยว' },
      { id: 'ing-r4', name: 'น้ำมันทรัฟเฟิลขาว Alba', quantity: '10', unit: 'มิลลิลิตร', notes: 'กลิ่นหอมหรูหรา' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'ผัดข้าวคาร์นาโรลีกับหอมแดงสับและเนยในหม้อจนเม็ดข้าวใส พรมไวน์ขาวจนงวด' },
      { stepNumber: 2, instruction: 'ทยอยเติมน้ำสต๊อกเห็ดร้อนๆ ทีละทัพพี กวนข้าวอย่างสม่ำเสมอนาน 16 นาทีจนข้าวสุกนุ่มข้น' },
      { stepNumber: 3, instruction: 'ใส่เนยเย็นและชีสพาร์เมซานขูด (Mantecatura) กวนให้เข้ากัน ราดน้ำมันทรัฟเฟิลขาวเสิร์ฟร้อน' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-[#F7EFF1]eye',
    name: 'Bistecca alla Griglia — Ribeye Steak (สเต๊กริบอายแบล็กแองกัส 300g)',
    slug: 'ribeye-steak',
    description: 'สเต๊กเนื้อริบอายแบล็กแองกัสขุน 150 วัน ย่างบนเตาถ่านหินภูเขาไฟ หอมกลิ่นควันไม้โอ๊ค เสิร์ฟพร้อมมันฝรั่งอบโรสแมรี่ และซอสไวน์แดงเกรวี่',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-mains',
    basePrice: 890,
    currency: 'THB',
    portionSize: '300 กรัม',
    preparationTimeMinutes: 20,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 6,
    dietaryLabels: ['ย่างเตาถ่าน', 'เนื้อเกรดพรีเมียม'],
    allergenInformation: ['นมสด (เนย)', 'ไวน์แดง'],
    ingredients: [
      { id: 'ing-rib1', name: 'เนื้อริบอาย Black Angus Grain-Fed 150 วัน', quantity: '300', unit: 'กรัม', notes: 'ตัดหนาพิเศษ 1.5 นิ้ว' },
      { id: 'ing-rib2', name: 'เนยสมุนไพรทาร์รากอนและโรสแมรี่', quantity: '20', unit: 'กรัม', notes: 'ทาเคลือบขณะย่าง' },
      { id: 'ing-rib3', name: 'มันฝรั่งเล็กอบเกลือทะเลและโรสแมรี่', quantity: '100', unit: 'กรัม', notes: 'กรอบนอกนุ่มใน' },
      { id: 'ing-rib4', name: 'ซอสไวน์แดงเคี่ยว Jus', quantity: '50', unit: 'มิลลิลิตร', notes: 'เคี่ยว 12 ชั่วโมงเข้มข้น' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'โรยเกลือทะเลและพริกไทยดำบดใหม่บนสเต๊กเนื้อริบอายทั้งสองด้าน' },
      { stepNumber: 2, instruction: 'ย่างบนเตาถ่านหินความร้อนสูง ทาเนยสมุนไพรเป็นระยะจนได้ระดับความสุกตามลูกค้าเลือก' },
      { stepNumber: 3, instruction: 'พักเนื้อ 5 นาทีให้จูซซี่กระจายตัว ตักใส่จานร้อนพร้อมมันฝรั่งอบและซอสไวน์แดง' }
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
    id: 'dish-salmon',
    name: 'Salmone al Limone (แซลมอนนอร์เวย์นาบกระทะซอสมะนาวเนยสด)',
    slug: 'salmone-al-limone',
    description: 'สเต๊กแซลมอนนอร์เวย์สด หนังกรอบเนื้อนุ่มฉ่ำ เสิร์ฟพร้อมหน่อไม้ฝรั่งย่าง มันบดเนยสด และซอสเลมอนบัตเตอร์หอมกลมกล่อม',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-mains',
    basePrice: 540,
    currency: 'THB',
    portionSize: '220 กรัม',
    preparationTimeMinutes: 16,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 7,
    dietaryLabels: ['ปลาสดนอร์เวย์', 'โอเมก้า 3'],
    allergenInformation: ['ปลา', 'นมสด (เนย)'],
    ingredients: [
      { id: 'ing-s1', name: 'แซลมอนสดนอร์เวย์ตัดติดหนัง', quantity: '220', unit: 'กรัม', notes: 'คัดสดไร้ก้าง' },
      { id: 'ing-s2', name: 'ซอสเลมอนบัตเตอร์', quantity: '40', unit: 'มิลลิลิตร', notes: 'เนยสดฝรั่งเศสและน้ำมะนาวแท้' },
      { id: 'ing-s3', name: 'หน่อไม้ฝรั่งอบเนย', quantity: '60', unit: 'กรัม', notes: 'สดกรอบหวาน' },
      { id: 'ing-s4', name: 'มันบดเนยสดละมุน', quantity: '80', unit: 'กรัม', notes: 'เนื้อเนียนละมุน' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'นาบด้านหนังแซลมอนลงบนกระทะเหล็กร้อนจนหนังกรอบสุกสีทอง' },
      { stepNumber: 2, instruction: 'พลิกกลับด้านเนื้อ ตักเนยและเลมอนราดบนเนื้อปลาอย่างต่อเนื่อง' },
      { stepNumber: 3, instruction: 'จัดเสิร์ฟบนมันบดเนยสด หน่อไม้ฝรั่งย่าง และราดซอสเลมอนบัตเตอร์' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-margherita',
    name: 'Pizza Margherita Speziale (พิซซ่ามาร์เกริต้าเตาฟืน)',
    slug: 'pizza-margherita',
    description: 'พิซซ่าเตาฟืนแป้งหมัก 48 ชั่วโมง ซอสมะเขือเทศ San Marzano จากอิตาลี มอซซาเรลล่าชีสสด (Fior di Latte) และใบโหระพาอิตาเลียน',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-pizza',
    basePrice: 350,
    currency: 'THB',
    portionSize: '1 ถาด (8 ชิ้น / 12 นิ้ว)',
    preparationTimeMinutes: 12,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 8,
    dietaryLabels: ['เตาฟืนหิน', 'มังสวิรัติ'],
    allergenInformation: ['แป้งสาลี', 'นมสด (มอซซาเรลล่าชีส)'],
    ingredients: [
      { id: 'ing-p1', name: 'แป้งพิซซ่าหมักธรรมชาติ 48 ชั่วโมง', quantity: '250', unit: 'กรัม', notes: 'นวดแผ่นขอบพองสไตล์นาโปลี' },
      { id: 'ing-p2', name: 'ซอสมะเขือเทศ San Marzano DOP', quantity: '80', unit: 'กรัม', notes: 'มะเขือเทศภูเขาไฟหวานฉ่ำ' },
      { id: 'ing-p3', name: 'มอซซาเรลล่าชีสสด Fior di Latte', quantity: '100', unit: 'กรัม', notes: 'ยืดหอมมัน' },
      { id: 'ing-p4', name: 'ใบโหระพาอิตาเลียนสด', quantity: '10', unit: 'กรัม', notes: 'หอมสดชื่น' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'แผ่แป้งพิซซ่าด้วยมือ ทาซอสมะเขือเทศซานมารซาโน่ให้ทั่วแผ่น' },
      { stepNumber: 2, instruction: 'วางมอซซาเรลล่าชีสสด และหยอดน้ำมันมะกอกเอ็กซ์ตร้าเวอร์จิน' },
      { stepNumber: 3, instruction: 'นำเข้าอบในเตาฟืนความร้อน 450 องศาเซนติเกรดนาน 90 วินาทีจนขอบแป้งเกรียมพองสวยงาม โรยใบโหระพา' }
    ],
    optionGroups: [
      {
        id: 'opt-pizza-crust',
        name: 'ตัวเลือกขอบแป้งพิซซ่า',
        isRequired: false,
        options: [
          { id: 'pc-1', name: 'ขอบแป้งนาโปลีพองนุ่ม (ปกติ)', additionalPrice: 0, isAvailable: true },
          { id: 'pc-2', name: 'สอดไส้ชีส มอซซาเรลล่าในขอบ', additionalPrice: 80, isAvailable: true }
        ]
      }
    ],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-prosciutto-pizza',
    name: 'Pizza Prosciutto e Funghi (พิซซ่าพรอสชุตโต้พาร์มาแฮมและเห็ดทรัฟเฟิล)',
    slug: 'pizza-prosciutto-funghi',
    description: 'พิซซ่าเตาฟืนท็อปด้วยพรอสชุตโต้พาร์มาแฮมบ่ม 24 เดือน เห็ดแชมปิญอง ซอสครีมทรัฟเฟิล และผักร็อกเก็ตป่าสด',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-pizza',
    basePrice: 490,
    currency: 'THB',
    portionSize: '1 ถาด (8 ชิ้น / 12 นิ้ว)',
    preparationTimeMinutes: 14,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 9,
    dietaryLabels: ['พาร์มาแฮมบ่ม 24 เดือน'],
    allergenInformation: ['แป้งสาลี', 'นมสด'],
    ingredients: [
      { id: 'ing-pp1', name: 'พรอสชุตโต้พาร์มาแฮมบ่ม 24 เดือน', quantity: '80', unit: 'กรัม', notes: 'สไลซ์บางเรียงบนพิซซ่า' },
      { id: 'ing-pp2', name: 'ซอสครีมทรัฟเฟิลและมอซซาเรลล่าชีส', quantity: '120', unit: 'กรัม', notes: 'เข้มข้นหอมทรัฟเฟิล' },
      { id: 'ing-pp3', name: 'เห็ดแชมปิญองสดสไลซ์', quantity: '60', unit: 'กรัม', notes: 'อบสุกพอดี' },
      { id: 'ing-pp4', name: 'ผักร็อกเก็ตป่าสด', quantity: '20', unit: 'กรัม', notes: 'วางท็อปหลังอบ' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'ทาซอสครีมทรัฟเฟิลและโรยมอซซาเรลล่าชีสพร้อมเห็ดสไลซ์' },
      { stepNumber: 2, instruction: 'อบในเตาฟืนหินความร้อนสูง 90 วินาที' },
      { stepNumber: 3, instruction: 'ตักออกจากเตา เรียงพรอสชุตโต้แฮมบ่มสด และโรยผักร็อกเก็ตป่าพร้อมชีสพาร์เมซานขูด' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-truffle-fries',
    name: 'Truffle & Parmesan Fries (เฟรนช์ฟรายส์ซอสทรัฟเฟิลดำและชีส)',
    slug: 'truffle-parmesan-fries',
    description: 'มันฝรั่งทอดแท่งใหญ่ ทอดกรอบไม่อมน้ำมัน คลุกน้ำมันทรัฟเฟิลขาว โรยชีสพาร์เมซานขูดสดและพาร์สลีย์ เสิร์ฟพร้อมมายองเนสทรัฟเฟิล',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-sides',
    basePrice: 190,
    currency: 'THB',
    portionSize: '1 จาน (200 กรัม)',
    preparationTimeMinutes: 8,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 10,
    dietaryLabels: ['ของทานเล่นยอดนิยม'],
    allergenInformation: ['นมสด (ชีส)', 'ไข่ (ในมายองเนส)'],
    ingredients: [
      { id: 'ing-tf1', name: 'มันฝรั่งแท่งใหญ่เกรดนำเข้า', quantity: '200', unit: 'กรัม', notes: 'ทอดกรอบไม่อมน้ำมัน' },
      { id: 'ing-tf2', name: 'น้ำมันทรัฟเฟิลขาว Alba', quantity: '10', unit: 'มิลลิลิตร', notes: 'คลุกหอมฉุย' },
      { id: 'ing-tf3', name: 'ชีส Parmigiano-Reggiano ขูด', quantity: '20', unit: 'กรัม', notes: 'โรยเต็มจาน' },
      { id: 'ing-tf4', name: 'มายองเนสทรัฟเฟิลโฮมเมด', quantity: '30', unit: 'มิลลิลิตร', notes: 'ดิปคู่กัน' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'ทอดมันฝรั่งในน้ำมันร้อนไฟปานกลางจนเหลืองกรอบ ตักพักสะเด็ดน้ำมัน' },
      { stepNumber: 2, instruction: 'คลุกน้ำมันทรัฟเฟิล เกลือทะเล และพาร์สลีย์ซอยในชามผสม' },
      { stepNumber: 3, instruction: 'ตักใส่จาน โรยชีสพาร์เมซานขูดหนาแน่น เสิร์ฟคู่กับดิปมายองเนสทรัฟเฟิล' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-tiramisu',
    name: 'Classic Venetian Tiramisù (ทิรามิสุสูตรเวนิสแท้)',
    slug: 'classic-tiramisu',
    description: 'ขนมหวานอิตาเลียนชั้นเลิศ เลดี้ฟิงเกอร์ชุบกาแฟเอสเพรสโซ่เข้มข้นและเหล้ากาแฟ ครีมมาสคาร์โปเน่ชีสนุ่มละมุน โรยผงโกโก้พรีเมียม',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-dessert',
    basePrice: 220,
    currency: 'THB',
    portionSize: '1 ถ้วย (180 กรัม)',
    preparationTimeMinutes: 5,
    isAvailable: true,
    isPublished: true,
    isFeatured: true,
    displayOrder: 11,
    dietaryLabels: ['ของหวานซิกเนเจอร์'],
    allergenInformation: ['ไข่', 'แป้งสาลี', 'นมสด (มาสคาร์โปเน่ชีส)', 'คาเฟอีน'],
    ingredients: [
      { id: 'ing-t1', name: 'ชีส Mascarpone อิตาลี', quantity: '100', unit: 'กรัม', notes: 'ตีเนื้อเนียนละมุน' },
      { id: 'ing-t2', name: 'ขนมปัง Ladyfingers (Savoiardi)', quantity: '4', unit: 'ชิ้น', notes: 'ชุบกาแฟเอสเพรสโซ่' },
      { id: 'ing-t3', name: 'ช็อตกาแฟ Double Espresso & เหล้า Kahlúa', quantity: '40', unit: 'มิลลิลิตร', notes: 'หอมเข้มข้น' },
      { id: 'ing-t4', name: 'ผงโกโก้ Valrhona 100%', quantity: '10', unit: 'กรัม', notes: 'โรยท็อปหน้า' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'นำขนมปังเลดี้ฟิงเกอร์จุ่มในน้ำกาแฟเอสเพรสโซ่ผสมเหล้ากาแฟวางเรียงก้นแก้ว' },
      { stepNumber: 2, instruction: 'ปาดครีมมาสคาร์โปเน่ชีสสลับชั้นอย่างพิถีพิถัน แช่เย็นให้เซ็ตตัว' },
      { stepNumber: 3, instruction: 'ร่อนผงโกโก้วาลโรนาเข้มข้นโรยท็อปเต็มหน้าก่อนเสิร์ฟเย็น' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-panna-cotta',
    name: 'Panna Cotta al Lamponi (พานาคอตต้านมสดวานิลลาซอสมิกซ์เบอร์รี่)',
    slug: 'panna-cotta-lamponi',
    description: 'พานาคอตต้านมสดครีมสดแท้เคี่ยวฝักวานิลลาจากมาดากัสการ์ นุ่มดุ้งละมุน ราดซอสราสเบอร์รี่เปรี้ยวหวานสดชื่น',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-dessert',
    basePrice: 180,
    currency: 'THB',
    portionSize: '1 ถ้วย (160 กรัม)',
    preparationTimeMinutes: 5,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 12,
    dietaryLabels: ['ของหวานสดชื่น'],
    allergenInformation: ['นมสด', 'เจลาติน'],
    ingredients: [
      { id: 'ing-pc1', name: 'ครีมสดและนมสดพาสเจอร์ไรส์', quantity: '120', unit: 'มิลลิลิตร', notes: 'เคี่ยวไฟอ่อน' },
      { id: 'ing-pc2', name: 'ฝักวานิลลาแท้ Madagascar Vanilla', quantity: '0.5', unit: 'ฝัก', notes: 'ขูดหอมธรรมชาติ' },
      { id: 'ing-pc3', name: 'ซอสมิกซ์เบอร์รี่โฮมเมด', quantity: '35', unit: 'มิลลิลิตร', notes: 'เปรี้ยวอมหวานเคี่ยวสด' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'เคี่ยวครีมสด นมสด และเมล็ดวานิลลาแท้ หยอดเจลาตินแล้วเทใส่พิมพ์ถ้วยทรงสวย' },
      { stepNumber: 2, instruction: 'แช่เย็นจนพานาคอตต้าเซ็ตตัวนุ่มละมุน' },
      { stepNumber: 3, instruction: 'ราดซอสมิกซ์เบอร์รี่เปรี้ยวหวานและประดับใบสะระแหน่สดก่อนเสิร์ฟ' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'dish-san-pellegrino',
    name: 'San Pellegrino Sparkling Water (น้ำแร่ธรรมชาติมีฟอง 750ml)',
    slug: 'san-pellegrino',
    description: 'น้ำแร่ธรรมชาติมีฟองเกรดพรีเมียมจากเทือกเขาแอลป์ อิตาลี ความซ่าละมุน ช่วยล้างลิ้นและชูรสชาติอาหารมื้อค่ำ',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cat-beverage',
    basePrice: 160,
    currency: 'THB',
    portionSize: '1 ขวดแก้ว (750 มล.)',
    preparationTimeMinutes: 2,
    isAvailable: true,
    isPublished: true,
    isFeatured: false,
    displayOrder: 13,
    dietaryLabels: ['น้ำแร่อิตาลีแท้'],
    allergenInformation: [],
    ingredients: [
      { id: 'ing-sp1', name: 'น้ำแร่ธรรมชาติมีฟอง San Pellegrino', quantity: '750', unit: 'มิลลิลิตร', notes: 'นำเข้าจากอิตาลี' }
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
    name: 'Double Espresso Italian Blend (กาแฟเอสเพรสโซ่ช็อตคู่)',
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
    displayOrder: 14,
    dietaryLabels: ['คาเฟอีนเข้มข้น'],
    allergenInformation: ['คาเฟอีน'],
    ingredients: [
      { id: 'ing-e1', name: 'เมล็ดกาแฟอิตาเลียนโรสต์', quantity: '18', unit: 'กรัม', notes: 'บดสดใหม่ช็อตต่อช็อต' }
    ],
    preparationSteps: [
      { stepNumber: 1, instruction: 'บดเมล็ดกาแฟสด อัดแทมป์แรงดัน 9 บาร์ สกัดกาแฟเข้มข้น 60ml เครม่าสีน้ำตาลทอง' }
    ],
    optionGroups: [],
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z'
  }
];

export const initialPromoCodes: PromoCode[] = [
  { code: 'HEARTH10', discountType: 'percentage', discountValue: 10, minSubtotal: 500, isActive: true },
  { code: 'ITALIA100', discountType: 'fixed', discountValue: 100, minSubtotal: 1000, isActive: true }
];

export const initialOrders: Order[] = [
  {
    id: 'ord-1001',
    orderNumber: 'AH-20261003-8821',
    customerName: 'คุณสมชาย ใจดี',
    customerPhone: '081-234-5678',
    customerEmail: 'somchai@gmail.com',
    fulfillmentType: 'dinein',
    tableNumber: '08 (โซนสวนด้านนอก)',
    subtotal: 1290,
    discount: 129,
    discountCode: 'HEARTH10',
    deliveryFee: 0,
    total: 1161,
    currency: 'THB',
    paymentMethod: 'promptpay',
    paymentStatus: 'paid',
    orderStatus: 'delivering',
    paymentReference: 'TXN-9988112233',
    customerNotes: 'ขอโต๊ะบรรยากาศเงียบสงบสำหรับฉลองครบรอบครับ',
    items: [
      {
        id: 'oi-1',
        menuItemId: 'dish-burrata',
        itemName: 'Burrata con Pomodorini (บุรราต้าสดและมะเขือเทศฮีร์ลูม)',
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
        itemName: 'Tagliatelle alla Bolognese (ตักเลียเตลเลซอสเนื้อโบโลญเญเซ่)',
        itemImage: 'https://images.unsplash.com/photo-1621996346565-e3d5d6288307?auto=format&fit=crop&w=400&q=80',
        unitPrice: 380,
        quantity: 1,
        selectedOptions: [
          { groupName: 'เลือกประเภทเส้นพาสต้า', optionName: 'เส้นตักเลียเตลเลสด (Tagliatelle - แนะนำ)', additionalPrice: 0 }
        ],
        specialInstructions: '',
        lineTotal: 380
      },
      {
        id: 'oi-3',
        menuItemId: 'dish-margherita',
        itemName: 'Pizza Margherita Speziale (พิซซ่ามาร์เกริต้าเตาฟืน)',
        itemImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80',
        unitPrice: 350,
        quantity: 1,
        selectedOptions: [],
        specialInstructions: '',
        lineTotal: 350
      },
      {
        id: 'oi-4',
        menuItemId: 'dish-san-pellegrino',
        itemName: 'San Pellegrino Sparkling Water (น้ำแร่ธรรมชาติมีฟอง 750ml)',
        itemImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80',
        unitPrice: 140,
        quantity: 1,
        selectedOptions: [],
        specialInstructions: '',
        lineTotal: 140
      }
    ],
    statusHistory: [
      { status: 'pending_confirmation', changedAt: '2026-10-03T01:10:00Z', note: 'ส่งออเดอร์แล้ว' },
      { status: 'confirmed', changedAt: '2026-10-03T01:12:00Z', note: 'ร้านรับออเดอร์แล้ว' },
      { status: 'preparing', changedAt: '2026-10-03T01:15:00Z', note: 'ครัวเริ่มอบพิซซ่าและลวกพาสต้า' },
      { status: 'delivering', changedAt: '2026-10-03T01:35:00Z', note: 'พนักงานกำลังนำไปเสิร์ฟที่โต๊ะ' }
    ],
    createdAt: '2026-10-03T01:10:00Z',
    confirmedAt: '2026-10-03T01:12:00Z'
  }
];
