import React from 'react';

const COLORS = [
  'from-blue-500 to-blue-600',
  'from-green-500 to-green-600',
  'from-yellow-500 to-yellow-600',
  'from-red-500 to-red-600',
];

type Props = {
  options: string[];
  onSelect: (index: number) => void;
  showFeedback: 'correct' | 'wrong' | null;
  correctAnswer: number;
};

const Options: React.FC<Props> = ({
  options,
  onSelect,
  showFeedback,
  correctAnswer,
}) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`
            p-4 rounded-xl text-white font-semibold text-lg
            shadow-lg transform transition-all duration-300
            bg-gradient-to-r ${COLORS[index]}
            hover:scale-105 active:scale-95
            ${
              showFeedback === 'correct' && index === correctAnswer
                ? 'ring-4 ring-green-400 scale-105'
                : showFeedback === 'wrong' && index === correctAnswer
                ? 'ring-4 ring-green-400'
                : ''
            }
          `}
          disabled={showFeedback !== null}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;