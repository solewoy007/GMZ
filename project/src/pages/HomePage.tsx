import React, { useState } from 'react';
import FeaturedGame from '../components/FeaturedGame';
import GameCard from '../components/GameCard';
import { ArrowRight, Flame, Trophy, Zap, UserPlus } from 'lucide-react';
import RegisterModal from '../components/auth/RegisterModal';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <main className="container mx-auto px-4 py-8">
      <FeaturedGame
        title="Cyberpunk 2077: Phantom Liberty"
        image="https://overclockers.ru/st/legacy/blog/427436/422705_O.jpeg"
        rating={9.2}
        description="Погрузитесь в новое масштабное дополнение к Cyberpunk 2077, которое привносит шпионский триллер в мир темного будущего. Исследуйте новый район Night City и раскройте захватывающую историю предательства и политических интриг."
      />

      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Flame className="w-6 h-6 text-red-500" />
            Популярные обзоры
          </h2>
          <Link to="/ratings" className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
            Все обзоры
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GameCard
            title="Baldur's Gate 3"
            image="https://images.gog-statics.com/da2b2d57e2b8654397043377654b1aa3ce6c11a03435c9afa28325e4f0fcc610.jpg"
            rating={9.8}
            genre="RPG"
            playTime="100+ часов"
            shortReview="Эпическое приключение с невероятной свободой выбора и последствиями каждого решения."
          />
          <GameCard
            title="Starfield"
            image="https://gaming-cdn.com/images/products/2675/orig/starfield-pc-game-steam-cover.jpg?v=1708361145"
            rating={8.5}
            genre="Action RPG"
            playTime="80+ часов(без учёта экрана загрузки)"
            shortReview="Масштабное космическое приключение от создателей Skyrim."
          />
          <GameCard
            title="Alan Wake 2"
            image="https://newxboxone.ru/wp-content/uploads/2023/05/alan-wake-ii_2023_05-24-23_013.jpeg"
            rating={9.0}
            genre="Horror"
            playTime="20 часов"
            shortReview="Атмосферный психологический триллер с уникальным повествованием."
          />
        </div>
      </div>

      <div className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            Лучшие игры месяца
          </h2>
          <Link to="/ratings" className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
            Весь рейтинг
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GameCard
            title="Marvel's Spider-Man 2"
            image="https://images.stopgame.ru/screenshots/21046/marvel_s_spider_man_2-8.jpg"
            rating={9.5}
            genre="Action"
            playTime="30 часов"
            shortReview="Новые приключения в Нью-Йорке с двумя играбельными героями."
          />
          <GameCard
            title="Lies of P"
            image="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1627720/capsule_616x353.jpg?t=1726714349"
            rating={8.8}
            genre="Souls-like"
            playTime="40 часов"
            shortReview="Мрачная интерпретация истории о Пиноккио в стиле souls-like."
          />
          <GameCard
            title="Mortal Kombat 1"
            image="https://cdn2.unrealengine.com/egs-mortalkombat1khaosreignskollection-netherrealmstudiosqloc-editions-g1a-00-1920x1080-0e390078d489.jpg"
            rating={8.7}
            genre="Fighting"
            playTime="15 часов"
            shortReview="Перезапуск легендарной серии с новой боевой системой."
          />
        </div>
      </div>

      <div className="mt-16 bg-gradient-to-r from-blue-800 to-indigo-900 rounded-2xl p-8 text-white">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl font-bold">Присоединяйтесь к сообществу</h2>
        </div>
        <p className="text-lg mb-6 max-w-2xl">Получайте персональные рекомендации, участвуйте в дискуссиях и делитесь своим мнением об играх с тысячами других геймеров.</p>
        <button 
          onClick={() => setIsRegisterModalOpen(true)}
          className="bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-purple-100 transition-colors flex items-center gap-2"
        >
          <UserPlus className="w-5 h-5" />
          Создать аккаунт
        </button>
      </div>

      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">О проекте</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">О нас</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Команда</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Вакансии (Нам не нужно ещё людей)</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Разделы</h3>
              <ul className="space-y-2">
                <li><Link to="/ratings" className="text-gray-400 hover:text-white">Рейтинг</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Новости</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white"></a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Сообщество</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white"></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Тех поддержка (Не пишите сюда пж.)</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white"></a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Подписаться</h3>
              <p className="text-gray-400 mb-4">Будьте в курсе последних новостей и обзоров</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-800 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-black-600 px-4 py-2 rounded-r-lg hover:bg-purple-700">
                  OK
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 GameMasterZone. Все права защищены перцовкой и огнестрелом.</p>
          </div>
        </div>
      </footer>

      <RegisterModal 
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />
    </main>
  );
}