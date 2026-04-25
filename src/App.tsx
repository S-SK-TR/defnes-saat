import React, { useState, useEffect } from 'react';
import AnalogClock from './components/AnalogClock';
import DigitalClock from './components/DigitalClock';
import ControlPanel from './components/ControlPanel';
import styles from './styles/App.module.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isPracticeMode, setIsPracticeMode] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNewTime = () => {
    const randomHour = Math.floor(Math.random() * 24);
    const randomMinute = Math.floor(Math.random() * 60);
    const newTime = new Date();
    newTime.setHours(randomHour, randomMinute, 0, 0);
    setCurrentTime(newTime);
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Defne's Saat</h1>
      <AnalogClock time={currentTime} />
      <DigitalClock time={currentTime} />
      <ControlPanel
        onNewTime={handleNewTime}
        onPracticeMode={() => setIsPracticeMode(!isPracticeMode)}
      />
    </div>
  );
}

export default App;