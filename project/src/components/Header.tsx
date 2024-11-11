import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Gamepad2, Search, UserPlus } from 'lucide-react';
import RegisterModal from './auth/RegisterModal';

export default function Header() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Gamepad2 className="w-8 h-8" />
              <h1 className="text-2xl font-bold">GameMasterZone</h1>
            </Link>
            <div className="relative max-w-xl w-full mx-4">
              <input
                type="text"
                placeholder="Поиск игр..."
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-white/70" />
            </div>
            <nav className="flex items-center gap-6">
              <ul className="flex gap-6">
                <li>
                  <Link 
                    to="/ratings" 
                    className={`hover:text-purple-200 ${location.pathname === '/ratings' ? 'text-purple-200 font-medium' : ''}`}
                  >
                    Рейтинг
                  </Link>
                </li>
                <li><a href="#" className="hover:text-purple-200">Новинки</a></li>
              </ul>
              <button
                onClick={() => setIsRegisterModalOpen(true)}
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
              >
                <UserPlus className="w-5 h-5" />
                Регистрация
              </button>
            </nav>
          </div>
        </div>
      </header>

      <RegisterModal 
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />
    </>
  );
}