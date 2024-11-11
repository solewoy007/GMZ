import React, { useState } from 'react';
import { Star, Filter, ArrowUpDown } from 'lucide-react';

interface Game {
  id: number;
  title: string;
  image: string;
  rating: number;
  genre: string;
  releaseDate: string;
  votes: number;
  description: string;
}

const games: Game[] = [
  {
    id: 1,
    title: "Baldur's Gate 3",
    image: "https://images.gog-statics.com/da2b2d57e2b8654397043377654b1aa3ce6c11a03435c9afa28325e4f0fcc610.jpg",
    rating: 9.8,
    genre: "RPG",
    releaseDate: "3 августа 2023",
    votes: 15243,
    description: "Эпическое приключение с невероятной свободой выбора и последствиями каждого решения."
  },
  {
    id: 2,
    title: "Marvel's Spider-Man 2",
    image: "https://images.stopgame.ru/screenshots/21046/marvel_s_spider_man_2-8.jpg",
    rating: 9.5,
    genre: "Экшен",
    releaseDate: "20 октября 2023",
    votes: 12876,
    description: "Новые приключения в Нью-Йорке с двумя играбельными героями."
  },
  {
    id: 3,
    title: "Cyberpunk 2077: Phantom Liberty",
    image: "https://overclockers.ru/st/legacy/blog/427436/422705_O.jpeg",
    rating: 9.2,
    genre: "Экшен RPG",
    releaseDate: "26 сентября 2023",
    votes: 11432,
    description: "Масштабное дополнение, привносящее шпионский триллер в мир темного будущего."
  },
  {
    id: 4,
    title: "Alan Wake 2",
    image: "https://newxboxone.ru/wp-content/uploads/2023/05/alan-wake-ii_2023_05-24-23_013.jpeg",
    rating: 9.0,
    genre: "Horror",
    releaseDate: "27 октября 2023",
    votes: 9876,
    description: "Атмосферный психологический триллер с уникальным повествованием."
  },
  {
    id: 5,
    title: "Lies of P",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1627720/capsule_616x353.jpg?t=1726714349",
    rating: 8.8,
    genre: "Souls-like",
    releaseDate: "19 сентября 2023",
    votes: 8654,
    description: "Мрачная интерпретация истории о Пиноккио в стиле souls-like."
  },
  {
    id: 6,
    title: "Mortal Kombat 1",
    image: "https://cdn2.unrealengine.com/egs-mortalkombat1khaosreignskollection-netherrealmstudiosqloc-editions-g1a-00-1920x1080-0e390078d489.jpg",
    rating: 8.7,
    genre: "Fighting",
    releaseDate: "19 сентября 2023",
    votes: 7890,
    description: "Перезапуск легендарной серии с новой боевой системой."
  },
  {
    id: 7,
    title: "Starfield",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkjwsZN9c6hidyLldMr5WGmi6LrqGCSkfMAA&s",
    rating: 8.5,
    genre: "Экшен RPG",
    releaseDate: "6 сентября 2023",
    votes: 14567,
    description: "Масштабное космическое приключение от создателей Skyrim."
  }
];

type SortKey = 'rating' | 'votes' | 'releaseDate';

export default function RatingsPage() {
  const [sortKey, setSortKey] = useState<SortKey>('rating');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedGenre, setSelectedGenre] = useState<string>('all');

  const genres = ['all', ...new Set(games.map(game => game.genre))];

  const sortedAndFilteredGames = [...games]
    .filter(game => selectedGenre === 'all' || game.genre === selectedGenre)
    .sort((a, b) => {
      const modifier = sortOrder === 'asc' ? 1 : -1;
      if (sortKey === 'rating') return (a.rating - b.rating) * modifier;
      if (sortKey === 'votes') return (a.votes - b.votes) * modifier;
      return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime() * modifier;
    });

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('desc');
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Star className="w-8 h-8 text-yellow-500" fill="currentColor" />
          Рейтинг игр
        </h1>

        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>
                  {genre === 'all' ? 'Все жанры' : genre}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => handleSort('rating')}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg border transition-colors ${
                sortKey === 'rating' ? 'bg-blue-100 border-blue-300' : 'hover:bg-gray-100'
              }`}
            >
              <ArrowUpDown className="w-4 h-4" />
              По рейтингу
            </button>
            <button
              onClick={() => handleSort('votes')}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg border transition-colors ${
                sortKey === 'votes' ? 'bg-blue-100 border-blue-300' : 'hover:bg-gray-100'
              }`}
            >
              <ArrowUpDown className="w-4 h-4" />
              По голосам
            </button>
            <button
              onClick={() => handleSort('releaseDate')}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg border transition-colors ${
                sortKey === 'releaseDate' ? 'bg-blue-100 border-blue-300' : 'hover:bg-gray-100'
              }`}
            >
              <ArrowUpDown className="w-4 h-4" />
              По дате
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {sortedAndFilteredGames.map((game, index) => (
          <div key={game.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 h-48 md:h-auto relative">
              <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full font-bold">
                #{index + 1}
              </div>
            </div>
            <div className="p-6 md:w-2/3 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{game.title}</h2>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{game.genre}</span>
                    <span>{game.releaseDate}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold">
                    <Star className="w-4 h-4" fill="currentColor" />
                    {game.rating}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {game.votes.toLocaleString()} голосов
                  </div>
                </div>
              </div>
              <p className="text-gray-600 flex-grow">{game.description}</p>
              <div className="mt-4">
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}