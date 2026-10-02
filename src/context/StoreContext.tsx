import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  MenuItem, MenuCategory, CartItem, Order, RestaurantSettings, 
  OrderStatus, SelectedOptionSnapshot, PromoCode, FulfillmentType, PaymentMethod
} from '../types';
import { 
  initialCategories, initialMenuItems, initialOrders, initialSettings, initialPromoCodes 
} from '../data/initialData';

interface StoreContextType {
  settings: RestaurantSettings;
  updateSettings: (newSettings: RestaurantSettings) => void;
  
  categories: MenuCategory[];
  addCategory: (category: MenuCategory) => void;
  updateCategory: (category: MenuCategory) => void;
  deleteCategory: (id: string) => void;
  
  menuItems: MenuItem[];
  addMenuItem: (item: MenuItem) => void;
  updateMenuItem: (item: MenuItem) => void;
  deleteMenuItem: (id: string) => void;
  toggleDishAvailability: (id: string) => void;
  
  cart: CartItem[];
  addToCart: (dish: MenuItem, quantity: number, options: SelectedOptionSnapshot[], specialInstructions: string) => void;
  updateCartItemQuantity: (cartItemId: string, newQuantity: number) => void;
  removeFromCart: (cartItemId: string) => void;
  clearCart: () => void;
  cartSubtotal: number;
  
  promoCode: PromoCode | null;
  promoError: string | null;
  applyPromoCode: (code: string) => boolean;
  removePromoCode: () => void;
  discountAmount: number;
  
  fulfillmentType: FulfillmentType;
  setFulfillmentType: (type: FulfillmentType) => void;
  deliveryFee: number;
  cartTotal: number;
  
  orders: Order[];
  createOrder: (orderData: Omit<Order, 'id' | 'orderNumber' | 'createdAt' | 'statusHistory'>) => Order;
  updateOrderStatus: (orderId: string, status: OrderStatus, note?: string) => void;
  getOrderById: (orderId: string) => Order | undefined;
  
  favorites: string[];
  toggleFavorite: (dishId: string) => void;
  isFavorite: (dishId: string) => boolean;
  
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedDish: MenuItem | null;
  setSelectedDish: (dish: MenuItem | null) => void;
  
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (catId: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<RestaurantSettings>(() => {
    const saved = localStorage.getItem('ah_settings');
    return saved ? JSON.parse(saved) : initialSettings;
  });

  const [categories, setCategories] = useState<MenuCategory[]>(() => {
    const saved = localStorage.getItem('ah_categories');
    return saved ? JSON.parse(saved) : initialCategories;
  });

  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    const saved = localStorage.getItem('ah_menu_items');
    return saved ? JSON.parse(saved) : initialMenuItems;
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('ah_orders');
    return saved ? JSON.parse(saved) : initialOrders;
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('ah_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('ah_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [promoCode, setPromoCode] = useState<PromoCode | null>(null);
  const [promoError, setPromoError] = useState<string | null>(null);
  const [fulfillmentType, setFulfillmentType] = useState<FulfillmentType>('delivery');
  
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    localStorage.setItem('ah_settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('ah_categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('ah_menu_items', JSON.stringify(menuItems));
  }, [menuItems]);

  useEffect(() => {
    localStorage.setItem('ah_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('ah_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('ah_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const updateSettings = (newSettings: RestaurantSettings) => {
    setSettings(newSettings);
  };

  const addCategory = (category: MenuCategory) => {
    setCategories(prev => [...prev, category]);
  };

  const updateCategory = (category: MenuCategory) => {
    setCategories(prev => prev.map(c => c.id === category.id ? category : c));
  };

  const deleteCategory = (id: string) => {
    setCategories(prev => prev.filter(c => c.id !== id));
  };

  const addMenuItem = (item: MenuItem) => {
    setMenuItems(prev => [item, ...prev]);
  };

  const updateMenuItem = (item: MenuItem) => {
    setMenuItems(prev => prev.map(m => m.id === item.id ? item : m));
  };

  const deleteMenuItem = (id: string) => {
    setMenuItems(prev => prev.filter(m => m.id !== id));
  };

  const toggleDishAvailability = (id: string) => {
    setMenuItems(prev => prev.map(m => m.id === id ? { ...m, isAvailable: !m.isAvailable } : m));
  };

  const addToCart = (dish: MenuItem, quantity: number, options: SelectedOptionSnapshot[], specialInstructions: string) => {
    if (!dish.isAvailable) return;

    const optionsExtra = options.reduce((sum, opt) => sum + opt.additionalPrice, 0);
    const unitPrice = dish.basePrice + optionsExtra;
    const optionsKey = JSON.stringify(options);
    const cartItemId = `${dish.id}-${optionsKey}-${specialInstructions}`;

    setCart(prev => {
      const existing = prev.find(item => item.cartItemId === cartItemId);
      if (existing) {
        return prev.map(item => item.cartItemId === cartItemId
          ? {
              ...item,
              quantity: item.quantity + quantity,
              totalPrice: (item.quantity + quantity) * item.unitPrice
            }
          : item
        );
      } else {
        return [
          ...prev,
          {
            cartItemId,
            menuItem: dish,
            quantity,
            selectedOptions: options,
            specialInstructions,
            unitPrice,
            totalPrice: unitPrice * quantity
          }
        ];
      }
    });
  };

  const updateCartItemQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prev => prev.map(item => item.cartItemId === cartItemId
      ? { ...item, quantity: newQuantity, totalPrice: newQuantity * item.unitPrice }
      : item
    ));
  };

  const removeFromCart = (cartItemId: string) => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const clearCart = () => {
    setCart([]);
    setPromoCode(null);
  };

  const cartSubtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  const applyPromoCode = (code: string): boolean => {
    const found = initialPromoCodes.find(p => p.code.toUpperCase() === code.toUpperCase() && p.isActive);
    if (!found) {
      setPromoError('รหัสส่วนลดไม่ถูกต้องหรือหมดอายุ');
      return false;
    }
    if (cartSubtotal < found.minSubtotal) {
      setPromoError(`ต้องมียอดซื้อขั้นต่ำ ฿${found.minSubtotal} เพื่อใช้รหัสนี้`);
      return false;
    }
    setPromoCode(found);
    setPromoError(null);
    return true;
  };

  const removePromoCode = () => {
    setPromoCode(null);
    setPromoError(null);
  };

  let discountAmount = 0;
  if (promoCode && cartSubtotal >= promoCode.minSubtotal) {
    if (promoCode.discountType === 'percentage') {
      discountAmount = Math.round((cartSubtotal * promoCode.discountValue) / 100);
    } else {
      discountAmount = promoCode.discountValue;
    }
  }

  const deliveryFee = fulfillmentType === 'delivery' 
    ? (cartSubtotal >= settings.freeDeliveryThreshold || cartSubtotal === 0 ? 0 : settings.deliveryFee)
    : 0;

  const cartTotal = Math.max(0, cartSubtotal - discountAmount + deliveryFee);

  const createOrder = (orderData: Omit<Order, 'id' | 'orderNumber' | 'createdAt' | 'statusHistory'>): Order => {
    const now = new Date().toISOString();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const orderNumber = `AH-${dateStr}-${randomSuffix}`;
    const newId = `ord-${Date.now()}`;

    const newOrder: Order = {
      ...orderData,
      id: newId,
      orderNumber,
      createdAt: now,
      statusHistory: [
        { status: 'pending_confirmation', changedAt: now, note: 'ลูกค้าส่งออเดอร์แล้ว' }
      ]
    };

    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  const updateOrderStatus = (orderId: string, status: OrderStatus, note?: string) => {
    const now = new Date().toISOString();
    setOrders(prev => prev.map(ord => {
      if (ord.id !== orderId) return ord;
      const history = [...ord.statusHistory, { status, changedAt: now, note }];
      const updates: Partial<Order> = { orderStatus: status, statusHistory: history };
      if (status === 'confirmed') updates.confirmedAt = now;
      if (status === 'completed') updates.completedAt = now;
      return { ...ord, ...updates };
    }));
  };

  const getOrderById = (orderId: string) => {
    return orders.find(o => o.id === orderId || o.orderNumber === orderId);
  };

  const toggleFavorite = (dishId: string) => {
    setFavorites(prev => prev.includes(dishId) ? prev.filter(id => id !== dishId) : [...prev, dishId]);
  };

  const isFavorite = (dishId: string) => favorites.includes(dishId);

  return (
    <StoreContext.Provider value={{
      settings, updateSettings,
      categories, addCategory, updateCategory, deleteCategory,
      menuItems, addMenuItem, updateMenuItem, deleteMenuItem, toggleDishAvailability,
      cart, addToCart, updateCartItemQuantity, removeFromCart, clearCart, cartSubtotal,
      promoCode, promoError, applyPromoCode, removePromoCode, discountAmount,
      fulfillmentType, setFulfillmentType, deliveryFee, cartTotal,
      orders, createOrder, updateOrderStatus, getOrderById,
      favorites, toggleFavorite, isFavorite,
      activeTab, setActiveTab, selectedDish, setSelectedDish,
      searchQuery, setSearchQuery, selectedCategory, setSelectedCategory
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within a StoreProvider');
  return context;
};
