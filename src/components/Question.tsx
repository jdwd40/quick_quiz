import React from 'react';

type Props = {
  question: string;
  showFeedback: 'correct' | 'wrong' | null;
};

const Question: React.FC<Props> = ({ question, showFeedback }) => {
  return (
    <div
      className={`bg-white/90 rounded-xl p-6 mb-6 shadow-lg backdrop-blur-sm transform transition-all duration-300 ${
        showFeedback === 'correct'
          ? 'scale-105 bg-green-100'
          : showFeedback === 'wrong'
          ? 'scale-95 bg-red-100'
          : ''
      }`}
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center leading-relaxed">
        {question}
      </h2>
    </div>
  );
};

export default Question;