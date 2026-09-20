import React, { useState } from 'react';
import Grade1Module from './components/grade1/Grade1Module';
import Grade2Module from './components/grade2/Grade2Module';
import Grade3Module from './components/grade3/Grade3Module';
import './App.css';

function App() {
  const [selectedGrade, setSelectedGrade] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Logic Lounge</h1>
        <p>Adaptive IGCSE Mathematics (Grades 1–6)</p>
      </header>
      <main style={{ padding: '20px' }}>
        {!selectedGrade ? (
          <div>
            <h2>Choose Your Grade Level</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setSelectedGrade(1)}
                style={{ padding: '15px 30px', fontSize: '18px', cursor: 'pointer', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '8px' }}
              >
                Grade 1
              </button>
              <button 
                onClick={() => setSelectedGrade(2)}
                style={{ padding: '15px 30px', fontSize: '18px', cursor: 'pointer', background: '#059669', color: '#fff', border: 'none', borderRadius: '8px' }}
              >
                Grade 2
              </button>
              <button 
                onClick={() => setSelectedGrade(3)}
                style={{ padding: '15px 30px', fontSize: '18px', cursor: 'pointer', background: '#d97706', color: '#fff', border: 'none', borderRadius: '8px' }}
              >
                Grade 3
              </button>
            </div>
          </div>
        ) : (
          <div>
            <button 
              onClick={() => setSelectedGrade(null)}
              style={{ marginBottom: '20px', padding: '8px 16px', cursor: 'pointer' }}
            >
              ← Back to Grades
            </button>
            {selectedGrade === 1 && <Grade1Module />}
            {selectedGrade === 2 && <Grade2Module />}
            {selectedGrade === 3 && <Grade3Module />}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;