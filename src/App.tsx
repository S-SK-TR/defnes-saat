import { useState, useEffect } from 'react';
import AnalogClock from './components/AnalogClock';
import DigitalClock from './components/DigitalClock';
import ControlPanel from './components/ControlPanel';
import styles from './styles/App.module.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [practiceTime, setPracticeTime] = useState<Date | null>(null);
  const [userGuess, setUserGuess] = useState('');
  const [checkResult, setCheckResult] = useState<'correct' | 'wrong' | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNewTime = () => {
    const h = Math.floor(Math.random() * 12) + 1;
    const m = Math.floor(Math.random() * 12) * 5;
    const t = new Date();
    t.setHours(h, m, 0, 0);
    setPracticeTime(t);
    setUserGuess('');
    setCheckResult(null);
  };

  const handleCheck = () => {
    if (!practiceTime || !userGuess.trim() || checkResult !== null) return;
    const parts = userGuess.trim().split(':');
    if (parts.length !== 2) { setCheckResult('wrong'); return; }
    const guessH = parseInt(parts[0], 10);
    const guessM = parseInt(parts[1], 10);
    const actualH = practiceTime.getHours() % 12 || 12;
    const actualM = practiceTime.getMinutes();
    setCheckResult(guessH === actualH && guessM === actualM ? 'correct' : 'wrong');
  };

  const displayTime = practiceTime ?? currentTime;
  const actualTimeStr = practiceTime
    ? `${practiceTime.getHours() % 12 || 12}:${String(practiceTime.getMinutes()).padStart(2, '0')}`
    : '';

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Defne'nin Saati</h1>
      <AnalogClock time={displayTime} />
      {!practiceTime && <DigitalClock time={currentTime} />}
      {practiceTime && (
        <div className={styles.practiceArea}>
          <p className={styles.practiceHint}>Bu saat kaç? (SS:DD)</p>
          <input
            type="text"
            placeholder="örn: 3:45"
            value={userGuess}
            onChange={(e) => { setUserGuess(e.target.value); setCheckResult(null); }}
            onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
            className={styles.guessInput}
            disabled={checkResult !== null}
            autoFocus
          />
          {checkResult === 'correct' && (
            <p className={styles.correct}>✓ Harika! Doğru cevap!</p>
          )}
          {checkResult === 'wrong' && (
            <p className={styles.wrong}>✗ Yanlış. Doğru cevap: {actualTimeStr}</p>
          )}
        </div>
      )}
      <ControlPanel
        onNewTime={handleNewTime}
        onCheck={handleCheck}
        canCheck={!!practiceTime && !!userGuess.trim() && checkResult === null}
      />
    </div>
  );
}

export default App;
