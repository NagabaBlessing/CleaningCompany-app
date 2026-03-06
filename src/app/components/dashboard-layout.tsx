import React from 'react';
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { 
  LayoutDashboard, 
  ClipboardList, 
  FolderClock, 
  History as HistoryIcon, 
  Headset, 
  User, 
  Menu, 
  X,
  Moon,
  Sun,
  LogOut
} from "lucide-react";
import { cn } from "../components/ui/utils";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
// import logoImage from "../../../assets/logo.png";
import logoImage from "../../assets/logo.png";

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Apply for Service', href: '/dashboard/apply', icon: ClipboardList },
  { name: 'My Requests', href: '/dashboard/requests', icon: FolderClock },
  { name: 'History', href: '/dashboard/history', icon: HistoryIcon },
  { name: 'Contact Support', href: '/dashboard/support', icon: Headset },
  { name: 'Profile', href: '/dashboard/profile', icon: User },
];


export function DashboardLayout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-[var(--corecleen-gray)] dark:bg-gray-950">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[var(--corecleen-blue)] dark:bg-gray-900 text-white px-4 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2">
          <img src={logoImage} alt="CoreCleen" className="h-24 w-auto dark:brightness-0 dark:invert" />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40 mt-[64px]"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="bg-white dark:bg-gray-900 w-64 h-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="p-4 space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium",
                      isActive 
                        ? "bg-[var(--corecleen-blue)] text-white" 
                        : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <Link
                to="/login"
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 mt-4 border-t border-gray-200 dark:border-gray-700 pt-4"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="CoreCleen Solutions Ltd" className="h-24 w-auto" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium",
                  isActive 
                    ? "bg-[var(--corecleen-blue)] text-white" 
                    : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Theme Toggle & Logout */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
          <Button
            onClick={toggleTheme}
            variant="outline"
            className="w-full justify-start gap-3"
          >
            {theme === 'light' ? (
              <>
                <Moon className="h-5 w-5" />
                <span>Dark Mode</span>
              </>
            ) : (
              <>
                <Sun className="h-5 w-5" />
                <span>Light Mode</span>
              </>
            )}
          </Button>
          <Link to="/login" className="block">
            <Button variant="outline" className="w-full justify-start gap-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 border-red-200 dark:border-red-800">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </Button>
          </Link>
        </div>

        {/* Company Info */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-800 dark:text-gray-300 font-medium">
          <div className="space-y-1">
            <p>📞 +256 707265146</p>
            <p>📍 Bukoto St, Kampala</p>
            <p>✉ corecleensolutions@gmail.com</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64 min-h-screen">
        <div className="pt-[64px] lg:pt-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}