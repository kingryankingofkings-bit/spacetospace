import React, { useEffect } from 'react';

type WeatherState = 'Clear' | 'Rain' | 'Snow' | 'Fog' | 'Sandstorm';
const WEATHER_STATES: WeatherState[] = ['Clear', 'Rain', 'Snow', 'Fog', 'Sandstorm'];

export const WeatherSystem: React.FC = () => {
  useEffect(() => {
    let timeoutId: number;
    const shiftWeather = () => {
      const nextWeather = WEATHER_STATES[Math.floor(Math.random() * WEATHER_STATES.length)];
      console.log(`Weather shifting to: ${nextWeather}`);
      
      const nextInterval = Math.random() * 120000 + 60000;
      timeoutId = window.setTimeout(shiftWeather, nextInterval);
    };

    timeoutId = window.setTimeout(shiftWeather, 10000);
    return () => clearTimeout(timeoutId);
  }, []);

  return null;
};
