export type FulfillmentType = 'pickup' | 'delivery' | 'dinein';

export type PaymentMethod = 'promptpay' | 'card' | 'cod' | 'pay_at_store';

export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';

export type OrderStatus = 
  | 'pending_confirmation'  // รอร้านยืนยัน
  | 'confirmed'             // ร้านรับออเดอร์แล้ว
  | 'preparing'             // กำลังเตรียมอาหาร
  | 'ready'                 // อาหารพร้อมรับ/พร้อมส่ง
  | 'delivering'            // กำลังจัดส่ง
  | 'completed'            // ส่งมอบเรียบร้อย
  | 'cancelled';            // ยกเลิก

export interface Ingredient {
  id: string;
  name: string;
  quantity: string;
  unit: string;
  notes?: string;
  allergen?: boolean;
}

export interface PreparationStep {
  stepNumber: number;
  instruction: string;
  timerMinutes?: number;
}

export interface MenuItemOption {
  id: string;
  name: string;
  additionalPrice: number;
  isAvailable: boolean;
}

export interface MenuItemOptionGroup {
  id: string;
  name: string;
  isRequired: boolean;
  minSelections?: number;
  maxSelections?: number;
  options: MenuItemOption[];
}

export interface MenuItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  categoryId: string;
  basePrice: number;
  currency: string;
  portionSize: string;
  preparationTimeMinutes: number;
  isAvailable: boolean;
  isPublished: boolean;
  isFeatured: boolean;
  displayOrder: number;
  dietaryLabels: string[];
  allergenInformation: string[];
  ingredients: Ingredient[];
  preparationSteps: PreparationStep[];
  optionGroups: MenuItemOptionGroup[];
  createdAt: string;
  updatedAt: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  isActive: boolean;
  displayOrder: number;
}

export interface SelectedOptionSnapshot {
  groupName: string;
  optionName: string;
  additionalPrice: number;
}

export interface CartItem {
  cartItemId: string;
  menuItem: MenuItem;
  quantity: number;
  selectedOptions: SelectedOptionSnapshot[];
  specialInstructions: string;
  unitPrice: number;
  totalPrice: number;
}

export interface OrderItemSnapshot {
  id: string;
  menuItemId: string;
  itemName: string;
  itemImage: string;
  unitPrice: number;
  quantity: number;
  selectedOptions: SelectedOptionSnapshot[];
  specialInstructions: string;
  lineTotal: number;
}

export interface OrderStatusHistoryItem {
  status: OrderStatus;
  changedAt: string;
  note?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  fulfillmentType: FulfillmentType;
  deliveryAddress?: string;
  deliveryInstructions?: string;
  tableNumber?: string;
  subtotal: number;
  discount: number;
  discountCode?: string;
  deliveryFee: number;
  total: number;
  currency: string;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  orderStatus: OrderStatus;
  paymentReference?: string;
  customerNotes?: string;
  items: OrderItemSnapshot[];
  statusHistory: OrderStatusHistoryItem[];
  createdAt: string;
  confirmedAt?: string;
  completedAt?: string;
}

export interface RestaurantSettings {
  name: string;
  logoUrl: string;
  heroImageUrl: string;
  phone: string;
  email: string;
  address: string;
  openingHours: string;
  isOpen: boolean;
  minimumOrder: number;
  deliveryFee: number;
  freeDeliveryThreshold: number;
  supportedFulfillment: FulfillmentType[];
  supportedPayments: PaymentMethod[];
  promptpayId: string;
  promptpayName: string;
  noticeText: string;
}

export interface PromoCode {
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minSubtotal: number;
  isActive: boolean;
}
