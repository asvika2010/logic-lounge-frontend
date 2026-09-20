import React, { useState } from 'react';
import { grade1Questions } from '../../data/grade1Data';

export default function Grade1Module() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = grade1Questions[currentIndex];

  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option === currentQ.answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setSelectedOption(null);
      if (currentIndex + 1 < grade1Questions.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setIsFinished(true);
      }
    }, 1000);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>Grade 1 Math: Addition Fun</h2>
      {!isFinished ? (
        <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '10px', maxWidth: '400px', margin: '0 auto' }}>
          <p>Question {currentIndex + 1} of {grade1Questions.length}</p>
          <h3>{currentQ.question}</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
            {currentQ.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(opt)}
                disabled={selectedOption !== null}
                style={{
                  padding: '10px 20px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  background: selectedOption === opt ? (opt === currentQ.answer ? '#4caf50' : '#f44336') : '#fff',
                  border: '1px solid #ccc',
                  borderRadius: '5px'
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h3>Great job! 🎉</h3>
          <p>You scored {score} out of {grade1Questions.length}!</p>
          <button 
            onClick={() => { setCurrentIndex(0); setScore(0); setIsFinished(false); }}
            style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}