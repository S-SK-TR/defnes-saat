import React from 'react';
import styles from '../styles/Clock.module.css';

interface DigitalClockProps {
  time: Date;
}

const DigitalClock: React.FC<DigitalClockProps> = ({ time }) => {
  const formattedTime = time.toLocaleTimeString('tr-TR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <div className={styles.digitalClock}>{formattedTime}</div>
  );
};

export default DigitalClock;