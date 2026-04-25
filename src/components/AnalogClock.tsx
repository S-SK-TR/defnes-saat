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

  const numbers = Array.from({ length: 12 }, (_, i) => {
    const num = i + 1;
    const angle = (num * 30 - 90) * (Math.PI / 180);
    const r = 38;
    return { num, x: 50 + r * Math.cos(angle), y: 50 + r * Math.sin(angle) };
  });

  return (
    <div className={styles.analogClock}>
      <div className={styles.clockFace}>
        {numbers.map(({ num, x, y }) => (
          <span
            key={num}
            className={styles.clockNumber}
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            {num}
          </span>
        ))}
        <div className={styles.centerDot} />
        <div
          className={styles.hourHand}
          style={{ transform: `translateX(-50%) rotate(${hourDegrees}deg)` }}
        />
        <div
          className={styles.minuteHand}
          style={{ transform: `translateX(-50%) rotate(${minuteDegrees}deg)` }}
        />
        <div
          className={styles.secondHand}
          style={{ transform: `translateX(-50%) rotate(${secondDegrees}deg)` }}
        />
      </div>
    </div>
  );
};

export default AnalogClock;
