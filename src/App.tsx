import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DishDetailModal } from './components/DishDetailModal';

import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { KitchenBoardPage } from './pages/KitchenBoardPage';
import { AboutPage } from './pages/AboutPage';
import { ReservationsPage } from './pages/ReservationsPage';

const MainApp: React.FC = () => {
  const { activeTab, selectedDish, setSelectedDish } = useStore();

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#252422]">
      {/* Header */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-1">
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'menu' && <MenuPage />}
        {activeTab === 'admin' && <AdminDashboard />}
        {activeTab === 'kitchen' && <KitchenBoardPage />}
        {activeTab === 'about' && <AboutPage />}
        {activeTab === 'reservations' && <ReservationsPage />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Culinary Dish Detail Modal */}
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

