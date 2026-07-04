import React, { useEffect, useState, useRef } from 'react';
import { useScene, useBeforeRender } from 'react-babylonjs';
import { 
  Vector3, 
  Color3, 
  Color4, 
  ParticleSystem, 
  Texture, 
  Scene,
  DirectionalLight
} from '@babylonjs/core';

type WeatherState = 'Clear' | 'Rain' | 'Snow' | 'Fog' | 'Sandstorm';
const WEATHER_STATES: WeatherState[] = ['Clear', 'Rain', 'Snow', 'Fog', 'Sandstorm'];

export const WeatherSystem: React.FC = () => {
  const scene = useScene();
  const [currentWeather, setCurrentWeather] = useState<WeatherState>('Clear');
  const particleSystemRef = useRef<ParticleSystem | null>(null);

  // Randomly shift weather every 60-180 seconds
  useEffect(() => {
    let timeoutId: number;

    const shiftWeather = () => {
      const nextWeather = WEATHER_STATES[Math.floor(Math.random() * WEATHER_STATES.length)];
      console.log(`Weather shifting to: ${nextWeather}`);
      setCurrentWeather(nextWeather);
      
      // Schedule next shift
      const nextInterval = Math.random() * 120000 + 60000; // 60s to 180s
      timeoutId = window.setTimeout(shiftWeather, nextInterval);
    };

    timeoutId = window.setTimeout(shiftWeather, 10000); // First shift after 10s for testing
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!scene) return;
    
    // Clean up existing particle system
    if (particleSystemRef.current) {
      particleSystemRef.current.dispose();
      particleSystemRef.current = null;
    }

    const dirLight = scene.getLightByName("dir-light") as DirectionalLight;

    // Reset fog and lighting to default (Clear)
    scene.fogMode = Scene.FOGMODE_EXP2;
    scene.fogDensity = 0.001;
    scene.fogColor = new Color3(0.9, 0.9, 0.95);
    if (dirLight) dirLight.intensity = 1.0;

    switch (currentWeather) {
      case 'Clear':
        break;
        
      case 'Fog':
        scene.fogDensity = 0.02;
        scene.fogColor = new Color3(0.5, 0.5, 0.5);
        if (dirLight) dirLight.intensity = 0.6;
        break;

      case 'Rain':
        scene.fogDensity = 0.005;
        scene.fogColor = new Color3(0.3, 0.3, 0.4);
        if (dirLight) dirLight.intensity = 0.4;
        
        const rain = new ParticleSystem("rain", 5000, scene);
        rain.particleTexture = new Texture("https://assets.babylonjs.com/textures/flare.png", scene);
        rain.emitter = new Vector3(0, 50, 0); // Will update to follow camera
        rain.minEmitBox = new Vector3(-50, 0, -50);
        rain.maxEmitBox = new Vector3(50, 0, 50);
        rain.color1 = new Color4(0.5, 0.5, 1.0, 0.5);
        rain.color2 = new Color4(0.5, 0.5, 1.0, 0.3);
        rain.colorDead = new Color4(0, 0, 0.2, 0.0);
        rain.minSize = 0.1;
        rain.maxSize = 0.2;
        rain.minLifeTime = 1.0;
        rain.maxLifeTime = 2.0;
        rain.emitRate = 1500;
        rain.blendMode = ParticleSystem.BLENDMODE_STANDARD;
        rain.gravity = new Vector3(0, -9.81 * 3, 0);
        rain.direction1 = new Vector3(-0.5, -1, -0.5);
        rain.direction2 = new Vector3(0.5, -1, 0.5);
        rain.minAngularSpeed = 0;
        rain.maxAngularSpeed = 0;
        rain.isLocal = false;
        rain.start();
        particleSystemRef.current = rain;
        break;

      case 'Snow':
        scene.fogDensity = 0.01;
        scene.fogColor = new Color3(0.8, 0.8, 0.9);
        if (dirLight) dirLight.intensity = 0.7;

        const snow = new ParticleSystem("snow", 3000, scene);
        snow.particleTexture = new Texture("https://assets.babylonjs.com/textures/flare.png", scene);
        snow.emitter = new Vector3(0, 50, 0);
        snow.minEmitBox = new Vector3(-50, 0, -50);
        snow.maxEmitBox = new Vector3(50, 0, 50);
        snow.color1 = new Color4(1, 1, 1, 1);
        snow.color2 = new Color4(0.9, 0.9, 1, 1);
        snow.colorDead = new Color4(0.5, 0.5, 0.5, 0);
        snow.minSize = 0.3;
        snow.maxSize = 0.8;
        snow.minLifeTime = 3.0;
        snow.maxLifeTime = 5.0;
        snow.emitRate = 300;
        snow.blendMode = ParticleSystem.BLENDMODE_STANDARD;
        snow.gravity = new Vector3(0, -9.81 * 0.2, 0);
        snow.direction1 = new Vector3(-1, -1, -1);
        snow.direction2 = new Vector3(1, -1, 1);
        snow.start();
        particleSystemRef.current = snow;
        break;

      case 'Sandstorm':
        scene.fogDensity = 0.025;
        scene.fogColor = new Color3(0.8, 0.6, 0.3);
        if (dirLight) dirLight.intensity = 0.8;

        const sand = new ParticleSystem("sand", 4000, scene);
        sand.particleTexture = new Texture("https://assets.babylonjs.com/textures/flare.png", scene);
        sand.emitter = new Vector3(-50, 10, 0);
        sand.minEmitBox = new Vector3(0, -10, -50);
        sand.maxEmitBox = new Vector3(0, 40, 50);
        sand.color1 = new Color4(0.8, 0.6, 0.3, 0.8);
        sand.color2 = new Color4(0.9, 0.7, 0.4, 0.5);
        sand.colorDead = new Color4(0.5, 0.4, 0.2, 0);
        sand.minSize = 0.5;
        sand.maxSize = 2.0;
        sand.minLifeTime = 2.0;
        sand.maxLifeTime = 4.0;
        sand.emitRate = 800;
        sand.blendMode = ParticleSystem.BLENDMODE_STANDARD;
        sand.gravity = new Vector3(0, -2, 0);
        sand.direction1 = new Vector3(20, -1, -5);
        sand.direction2 = new Vector3(30, 1, 5);
        sand.start();
        particleSystemRef.current = sand;
        break;
    }
  }, [currentWeather, scene]);

  // Keep particle emitter centered on camera
  useBeforeRender(() => {
    if (scene && scene.activeCamera && particleSystemRef.current) {
      const cameraPos = scene.activeCamera.position;
      if (currentWeather === 'Sandstorm') {
        particleSystemRef.current.emitter = new Vector3(cameraPos.x - 50, cameraPos.y + 10, cameraPos.z);
      } else {
        particleSystemRef.current.emitter = new Vector3(cameraPos.x, cameraPos.y + 30, cameraPos.z);
      }
    }
  });

  return null;
};
