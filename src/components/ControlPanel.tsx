import React from 'react';
import styles from '../styles/Clock.module.css';

interface ControlPanelProps {
  onNewTime: () => void;
  onPracticeMode: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ onNewTime, onPracticeMode }) => {
  return (
    <div className={styles.controlPanel}>
      <button onClick={onNewTime} className={styles.newTimeButton}>Yeni Saat</button>
      <button onClick={onPracticeMode} className={styles.practiceButton}>Kontrol Et</button>
    </div>
  );
};

export default ControlPanel;