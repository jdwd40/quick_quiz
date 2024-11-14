import React, { useState, useEffect } from 'react';
import { Heart, Trophy, Timer } from 'lucide-react';
import QuizHeader from './components/QuizHeader';
import Question from './components/Question';
import Options from './components/Options';
import GameOver from './components/GameOver';
import { questions } from './data/questions';

export type QuestionType = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

function App() {
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showFeedback, setShowFeedback] = useState<'correct' | 'wrong' | null>(null);

  useEffect(() => {
    if (lives === 0) {
      setIsGameOver(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleWrongAnswer();
          return 15;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [lives, currentQuestion]);

  const handleAnswer = (selectedIndex: number) => {
    const isCorrect = selectedIndex === questions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      setScore((prev) => prev + 100);
      setShowFeedback('correct');
    } else {
      handleWrongAnswer();
      setShowFeedback('wrong');
    }

    setTimeout(() => {
      setShowFeedback(null);
      setTimeLeft(15);
      setCurrentQuestion((prev) => (prev + 1) % questions.length);
    }, 1000);
  };

  const handleWrongAnswer = () => {
    setLives((prev) => prev - 1);
  };

  const resetGame = () => {
    setLives(3);
    setScore(0);
    setCurrentQuestion(0);
    setTimeLeft(15);
    setIsGameOver(false);
    setShowFeedback(null);
  };

  if (isGameOver) {
    return <GameOver score={score} onRestart={resetGame} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <QuizHeader 
          lives={lives} 
          score={score} 
          timeLeft={timeLeft} 
        />
        
        <div className="mt-8">
          <Question 
            question={questions[currentQuestion].question}
            showFeedback={showFeedback}
          />
          
          <Options 
            options={questions[currentQuestion].options}
            onSelect={handleAnswer}
            showFeedback={showFeedback}
            correctAnswer={questions[currentQuestion].correctAnswer}
          />
        </div>
      </div>
    </div>
  );
}

export default App;