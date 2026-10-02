import React, { useState } from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { DishDetailModal } from './components/DishDetailModal';

import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderTrackingPage } from './pages/OrderTrackingPage';
import { AccountPage } from './pages/AccountPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { KitchenBoardPage } from './pages/KitchenBoardPage';
import { AboutPage } from './pages/AboutPage';
import { HowToOrderPage } from './pages/HowToOrderPage';
import { ReservationsPage } from './pages/ReservationsPage';
import { Order } from './types';

const MainApp: React.FC = () => {
  const { activeTab, setActiveTab, selectedDish, setSelectedDish } = useStore();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentTrackingOrderId, setCurrentTrackingOrderId] = useState<string | undefined>(undefined);

  const handleOrderPlaced = (order: Order) => {
    setCurrentTrackingOrderId(order.orderNumber);
    setActiveTab('tracking');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#252422]">
      {/* Header */}
      <Header onOpenCart={() => setIsCartOpen(true)} />

      {/* Main Page Content */}
      <main className="flex-1">
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'menu' && <MenuPage />}
        {activeTab === 'checkout' && (
          <CheckoutPage
            onOrderPlaced={handleOrderPlaced}
            onBackToMenu={() => setActiveTab('menu')}
          />
        )}
        {activeTab === 'tracking' && (
          <OrderTrackingPage
            orderId={currentTrackingOrderId}
            onBackToMenu={() => setActiveTab('menu')}
          />
        )}
        {activeTab === 'account' && (
          <AccountPage
            onSelectOrder={(orderNumber) => {
              setCurrentTrackingOrderId(orderNumber);
              setActiveTab('tracking');
            }}
          />
        )}
        {activeTab === 'admin' && <AdminDashboard />}
        {activeTab === 'kitchen' && <KitchenBoardPage />}
        {activeTab === 'about' && <AboutPage />}
        {activeTab === 'how-to-order' && <HowToOrderPage />}
        {activeTab === 'reservations' && <ReservationsPage />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setActiveTab('checkout');
        }}
      />

      {/* Dish Detail Modal */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
      />
    </div>
  );
};

export default function App() {
  return (
    <StoreProvider>
      <MainApp />
    </StoreProvider>
  );
}
