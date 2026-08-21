import React from 'react';
import { Home, Scale, BookOpen, Mail } from 'lucide-react';
import { PageRoute } from '../types';
import { NavBar, TubelightNavItem } from './ui/tubelight-navbar';

interface MobileBottomNavProps {
  currentPage: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenDiagnostic: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ 
  currentPage, 
  onNavigate,
}) => {
  const navItems: TubelightNavItem[] = [
    {
      name: 'Inicio',
      icon: Home,
      route: 'home',
      onClick: () => {
        onNavigate('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      name: 'Servicios',
      icon: Scale,
      route: 'areas',
      onClick: () => {
        onNavigate('areas');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      name: 'Insights',
      icon: BookOpen,
      route: 'insights',
      onClick: () => {
        onNavigate('insights');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      name: 'Contacto',
      icon: Mail,
      route: 'contact',
      onClick: () => {
        onNavigate('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
  ];

  // Determine which tab is active based on currentPage
  const getActiveTabName = () => {
    switch (currentPage) {
      case 'home':
        return 'Inicio';
      case 'areas':
      case 'area-detail':
        return 'Servicios';
      case 'insights':
        return 'Insights';
      case 'contact':
        return 'Contacto';
      default:
        return 'Inicio';
    }
  };

  return (
    <div className="lg:hidden">
      <NavBar 
        items={navItems} 
        activeTab={getActiveTabName()} 
      />
    </div>
  );
};

export default MobileBottomNav;
