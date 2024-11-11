import React from 'react';
import { Star, ThumbsUp, Clock } from 'lucide-react';

interface GameCardProps {
  title: string;
  image: string;
  rating: number;
  genre: string;
  playTime: string;
  shortReview: string;
}

export default function GameCard({ title, image, rating, genre, playTime, shortReview }: GameCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2 bg-black/70 text-white px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
          <span>{rating}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span className="flex items-center gap-1">
            <ThumbsUp className="w-4 h-4" />
            {genre}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {playTime}
          </span>
        </div>
        <p className="text-gray-700">{shortReview}</p>
      </div>
    </div>
  );
}