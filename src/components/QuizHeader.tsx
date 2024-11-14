import React from 'react';
import { Heart, Trophy } from 'lucide-react';

type Props = {
  lives: number;
  score: number;
  timeLeft: number;
};

const QuizHeader: React.FC<Props> = ({ lives, score, timeLeft }) => {
  return (
    <div className="bg-white/90 rounded-xl p-4 shadow-lg backdrop-blur-sm">
      <div className="flex justify-between items-center">
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <Heart
              key={i}
              className={`w-8 h-8 ${
                i < lives ? 'text-red-500 fill-red-500' : 'text-gray-300'
              } transition-colors duration-300`}
            />
          ))}
        </div>
        
        <div className="flex items-center gap-2">
          <Trophy className="w-6 h-6 text-yellow-500" />
          <span className="text-2xl font-bold">{score}</span>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-1000 ease-linear"
            style={{ width: `${(timeLeft / 15) * 100}%` }}
          />
        </div>
        <div className="text-center mt-1 text-sm font-medium text-gray-600">
          {timeLeft}s
        </div>
      </div>
    </div>
  );
};

export default QuizHeader;