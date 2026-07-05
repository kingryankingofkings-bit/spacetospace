import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import './MapViewer.css';

interface MapViewerProps {
  mapUrl: string;
  mapTitle: string;
  onClose: () => void;
}

const MapViewer: React.FC<MapViewerProps> = ({ mapUrl, mapTitle, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scale state for zooming
  const [scale, setScale] = useState(1);
  const scaleSpring = useSpring(scale, { stiffness: 300, damping: 30 });

  const handleWheel = (e: React.WheelEvent) => {
    // Zoom in or out based on scroll direction
    const zoomFactor = -e.deltaY * 0.001;
    const newScale = Math.min(Math.max(scale + zoomFactor, 0.5), 4);
    setScale(newScale);
    scaleSpring.set(newScale);
  };

  const handleZoomIn = () => {
    const newScale = Math.min(scale + 0.5, 4);
    setScale(newScale);
    scaleSpring.set(newScale);
  };

  const handleZoomOut = () => {
    const newScale = Math.max(scale - 0.5, 0.5);
    setScale(newScale);
    scaleSpring.set(newScale);
  };

  return (
    <div className="map-viewer-overlay">
      <div className="map-viewer-header">
        <h2 className="map-viewer-title">{mapTitle}</h2>
        <div className="map-viewer-controls">
          <button className="map-btn" onClick={handleZoomOut}>-</button>
          <span className="map-scale-label">{Math.round(scale * 100)}%</span>
          <button className="map-btn" onClick={handleZoomIn}>+</button>
          <button className="map-close-btn" onClick={onClose}>Close Map</button>
        </div>
      </div>
      
      <div 
        className="map-viewer-container" 
        ref={containerRef}
        onWheel={handleWheel}
      >
        {/* The interactive drag area */}
        <motion.div
          className="map-drag-area"
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}
          style={{ scale: scaleSpring }}
        >
          <div className="map-image-wrapper">
            {/* The actual map image */}
            <img src={mapUrl} alt={mapTitle} className="map-image-content" draggable="false" />
            
            {/* Parchment/Vignette shader overlay */}
            <div className="map-shader-overlay"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MapViewer;
