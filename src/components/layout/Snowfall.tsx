"use client";
import React, { useEffect, useState } from 'react';

const SNOWFLAKE_COUNT = 100;

export function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const generatedSnowflakes = Array.from({ length: SNOWFLAKE_COUNT }).map(() => {
      const animationDuration = Math.random() * 5 + 5; // 5 to 10 seconds
      const size = Math.random() * 4 + 2; // 2px to 6px
      const startX = Math.random() * 100;
      const endX = startX + (Math.random() * 20 - 10);
      
      return {
        '--start-x': `${startX}vw`,
        '--end-x': `${endX}vw`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${animationDuration}s`,
        animationDelay: `${Math.random() * -10}s`, // Start some snowflakes mid-animation
        opacity: Math.random() * 0.7 + 0.3,
      } as React.CSSProperties;
    });
    setSnowflakes(generatedSnowflakes);
  }, []);

  if (snowflakes.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      {snowflakes.map((style, index) => (
        <div key={index} className="snowflake" style={style} />
      ))}
    </div>
  );
}
