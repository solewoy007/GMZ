import React from 'react';
import { Star, Award, Users } from 'lucide-react';

interface FeaturedGameProps {
  title: string;
  image: string;
  rating: number;
  description: string;
}

export default function FeaturedGame({ title, image, rating, description }: FeaturedGameProps) {
  return (
    <div className="relative h-[500px] overflow-hidden rounded-2xl">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-yellow-400 text-black px-4 py-1 rounded-full font-bold flex items-center gap-1">
              <Star className="w-4 h-4" fill="currentColor" />
              {rating}
            </span>
            <span className="bg-purple-600 text-white px-4 py-1 rounded-full font-bold flex items-center gap-1">
              <Award className="w-4 h-4" />
              Выбор редакции
            </span>
            <span className="bg-blue-600 text-white px-4 py-1 rounded-full font-bold flex items-center gap-1">
              <Users className="w-4 h-4" />
              Топ месяца
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-gray-200 max-w-2xl text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
}