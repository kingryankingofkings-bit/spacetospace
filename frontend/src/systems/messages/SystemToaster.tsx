import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useMessageStore, MessageType } from './useMessageStore';

export const SystemToaster: React.FC = () => {
  const { messages, removeMessage } = useMessageStore();

  return (
    <div 
      className="fixed flex flex-col pointer-events-none" 
      style={{ bottom: '24px', right: '24px', zIndex: 9999, gap: '8px' }}
    >
      <AnimatePresence>
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="aaa-panel pointer-events-auto"
            style={{
              padding: '12px 20px',
              minWidth: '250px',
              borderLeft: `4px solid ${getColor(msg.type)}`,
              background: 'var(--panel-bg)',
              boxShadow: `0 8px 32px rgba(0,0,0,0.5), inset 0 0 10px ${getGlowColor(msg.type)}`,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}
            onClick={() => removeMessage(msg.id)}
          >
            <h4 style={{ 
              color: getColor(msg.type), 
              fontSize: '0.75rem', 
              margin: 0,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textShadow: `0 0 8px ${getGlowColor(msg.type)}`
            }}>
              {getHeading(msg.type)}
            </h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 500 }}>
              {msg.text}
            </p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

function getColor(type: MessageType) {
  switch (type) {
    case 'error': return 'var(--accent-danger, #ff0055)';
    case 'success': return 'var(--accent-primary, #00f0ff)';
    case 'warning': return '#ffaa00';
    case 'info':
    default:
      return 'var(--text-main, #ffffff)';
  }
}

function getGlowColor(type: MessageType) {
  switch (type) {
    case 'error': return 'rgba(255, 0, 85, 0.3)';
    case 'success': return 'rgba(0, 240, 255, 0.3)';
    case 'warning': return 'rgba(255, 170, 0, 0.3)';
    case 'info':
    default:
      return 'rgba(255, 255, 255, 0.1)';
  }
}

function getHeading(type: MessageType) {
  switch (type) {
    case 'error': return 'System Error';
    case 'success': return 'System Alert';
    case 'warning': return 'Warning';
    case 'info':
    default:
      return 'System Message';
  }
}
