import React from 'react';
import { Trophy, RefreshCw } from 'lucide-react';

type Props = {
  score: number;
  onRestart: () => void;
};

const GameOver: React.FC<Props> = ({ score, onRestart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center">
      <div className="bg-white/90 rounded-xl p-8 shadow-lg backdrop-blur-sm max-w-md w-full mx-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Game Over!</h1>
          
          <div className="flex items-center justify-center gap-3 mb-8">
            <Trophy className="w-12 h-12 text-yellow-500" />
            <span className="text-5xl font-bold text-gray-800">{score}</span>
          </div>
          
          <p className="text-gray-600 mb-8">
            Great effort! Can you beat your score?
          </p>
          
          <button
            onClick={onRestart}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-xl
              shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95
              flex items-center justify-center gap-2 w-full"
          >
            <RefreshCw className="w-5 h-5" />
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOver;