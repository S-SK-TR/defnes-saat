import React from 'react';
import styles from '../styles/Clock.module.css';

interface ControlPanelProps {
  onNewTime: () => void;
  onCheck: () => void;
  canCheck: boolean;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ onNewTime, onCheck, canCheck }) => {
  return (
    <div className={styles.controlPanel}>
      <button onClick={onNewTime} className={styles.newTimeButton}>Yeni Saat</button>
      <button onClick={onCheck} disabled={!canCheck} className={styles.practiceButton}>Kontrol Et</button>
    </div>
  );
};

export default ControlPanel;
