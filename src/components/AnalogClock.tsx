import React from 'react';
import styles from '../styles/Clock.module.css';

interface AnalogClockProps {
  time: Date;
}

const AnalogClock: React.FC<AnalogClockProps> = ({ time }) => {
  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDegrees = (hours * 30) + (minutes * 0.5);
  const minuteDegrees = minutes * 6;
  const secondDegrees = seconds * 6;

  return (
    <div className={styles.analogClock}>
      <div className={styles.clockFace}>
        <div
          className={styles.hourHand}
          style={{ transform: `rotate(${hourDegrees}deg)` }}
        />
        <div
          className={styles.minuteHand}
          style={{ transform: `rotate(${minuteDegrees}deg)` }}
        />
        <div
          className={styles.secondHand}
          style={{ transform: `rotate(${secondDegrees}deg)` }}
        />
      </div>
    </div>
  );
};

export default AnalogClock;