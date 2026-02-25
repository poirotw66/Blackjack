import React from 'react';
import { Card as CardType } from '../types';

interface CardProps {
  card: CardType;
}

export const Card: React.FC<CardProps> = ({ card }) => {
  if (card.isHidden) {
    return (
      <div className="w-20 h-32 md:w-24 md:h-36 rounded-xl border-2 border-white/20 bg-blue-900 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)] shadow-2xl flex items-center justify-center transform transition-transform hover:-translate-y-2">
        <div className="w-12 h-20 md:w-16 md:h-24 border-2 border-white/20 rounded-lg"></div>
      </div>
    );
  }

  const isRed = card.suit === 'hearts' || card.suit === 'diamonds';
  const suitSymbol = {
    hearts: '♥',
    diamonds: '♦',
    clubs: '♣',
    spades: '♠',
  }[card.suit];

  return (
    <div className="w-20 h-32 md:w-24 md:h-36 rounded-xl bg-white shadow-2xl flex flex-col justify-between p-2 relative transform transition-transform hover:-translate-y-2 border border-gray-200">
      <div className={`text-lg md:text-xl font-bold ${isRed ? 'text-red-600' : 'text-slate-900'}`}>
        {card.rank}
        <div className="text-xl md:text-2xl leading-none">{suitSymbol}</div>
      </div>
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-6xl opacity-10 ${isRed ? 'text-red-600' : 'text-slate-900'}`}>
        {suitSymbol}
      </div>
      <div className={`text-lg md:text-xl font-bold rotate-180 ${isRed ? 'text-red-600' : 'text-slate-900'}`}>
        {card.rank}
        <div className="text-xl md:text-2xl leading-none">{suitSymbol}</div>
      </div>
    </div>
  );
};
