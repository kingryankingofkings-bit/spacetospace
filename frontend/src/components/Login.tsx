import React, { useState } from 'react';
import { setAuthToken } from '../store/multiplayerStore';
import { motion, AnimatePresence } from 'framer-motion';

export const Login: React.FC<{ onLoginSuccess: () => void }> = ({ onLoginSuccess }) => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || (window.location.hostname === 'localhost' ? 'http://localhost:2567' : '');
      const res = await fetch(`${baseUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: loginUsername, password: loginPassword })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Authentication failed');

      localStorage.setItem('auth_token', data.token);
      localStorage.setItem('auth_username', data.username);
      setAuthToken(data.token, data.username);
      onLoginSuccess();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || (window.location.hostname === 'localhost' ? 'http://localhost:2567' : '');
      const res = await fetch(`${baseUrl}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: registerUsername, password: registerPassword })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Registration failed');

      setSuccess('Registration successful. Please login using the established credentials.');
      setRegisterUsername('');
      setRegisterPassword('');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center">
      {/* Background cinematic blur */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)' }}
      />
      
      <AnimatePresence mode="wait">
        {(error || success) && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            style={{ 
              position: 'relative',
              zIndex: 10,
              background: error ? 'rgba(255, 0, 85, 0.1)' : 'rgba(0, 240, 255, 0.1)', 
              border: `1px solid ${error ? 'var(--accent-danger)' : 'var(--accent-primary)'}`, 
              color: error ? 'var(--accent-danger)' : 'var(--accent-primary)', 
              padding: '16px 32px', 
              borderRadius: '6px',
              marginBottom: '32px',
              fontSize: '1rem',
              fontWeight: '600',
              boxShadow: `0 0 20px ${error ? 'rgba(255, 0, 85, 0.2)' : 'rgba(0, 240, 255, 0.2)'}`,
              backdropFilter: 'blur(4px)'
            }}
          >
            {error || success}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex gap-8">
        {/* LOGIN PANEL */}
        <motion.div 
          initial={{ opacity: 0, x: -30, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="aaa-panel relative"
          style={{ width: '400px', padding: '0', overflow: 'visible' }}
        >
          <div className="aaa-header justify-center" style={{ fontSize: '1.25rem', padding: '24px' }}>
            ESTABLISH LINK (LOGIN)
          </div>
          
          <div style={{ padding: '32px' }}>
            <form onSubmit={handleLogin} className="flex-col gap-6">
              <div>
                <label className="aaa-label">CALLSIGN / USERNAME</label>
                <input 
                  type="text" 
                  value={loginUsername} 
                  onChange={e => setLoginUsername(e.target.value)} 
                  className="aaa-input"
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <label className="aaa-label">SECURITY CLEARANCE / PASSWORD</label>
                <input 
                  type="password" 
                  value={loginPassword} 
                  onChange={e => setLoginPassword(e.target.value)} 
                  className="aaa-input"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="aaa-button primary w-full"
                style={{ marginTop: '16px', padding: '16px', fontSize: '1.1rem' }}
              >
                LOGIN
              </button>
            </form>
          </div>
          
          <div className="absolute" style={{ top: -1, left: -1, width: 20, height: 20, borderTop: '2px solid var(--accent-primary)', borderLeft: '2px solid var(--accent-primary)' }} />
          <div className="absolute" style={{ top: -1, right: -1, width: 20, height: 20, borderTop: '2px solid var(--accent-primary)', borderRight: '2px solid var(--accent-primary)' }} />
          <div className="absolute" style={{ bottom: -1, left: -1, width: 20, height: 20, borderBottom: '2px solid var(--accent-primary)', borderLeft: '2px solid var(--accent-primary)' }} />
          <div className="absolute" style={{ bottom: -1, right: -1, width: 20, height: 20, borderBottom: '2px solid var(--accent-primary)', borderRight: '2px solid var(--accent-primary)' }} />
        </motion.div>

        {/* REGISTER PANEL */}
        <motion.div 
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="aaa-panel relative"
          style={{ width: '400px', padding: '0', overflow: 'visible' }}
        >
          <div className="aaa-header justify-center" style={{ fontSize: '1.25rem', padding: '24px' }}>
            INITIALIZE NEW LINK (REGISTER)
          </div>
          
          <div style={{ padding: '32px' }}>
            <form onSubmit={handleRegister} className="flex-col gap-6">
              <div>
                <label className="aaa-label">NEW CALLSIGN / USERNAME</label>
                <input 
                  type="text" 
                  value={registerUsername} 
                  onChange={e => setRegisterUsername(e.target.value)} 
                  className="aaa-input"
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <label className="aaa-label">NEW SECURITY CLEARANCE / PASSWORD</label>
                <input 
                  type="password" 
                  value={registerPassword} 
                  onChange={e => setRegisterPassword(e.target.value)} 
                  className="aaa-input"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="aaa-button primary w-full"
                style={{ marginTop: '16px', padding: '16px', fontSize: '1.1rem' }}
              >
                REGISTER
              </button>
            </form>
          </div>
          
          <div className="absolute" style={{ top: -1, left: -1, width: 20, height: 20, borderTop: '2px solid var(--accent-primary)', borderLeft: '2px solid var(--accent-primary)' }} />
          <div className="absolute" style={{ top: -1, right: -1, width: 20, height: 20, borderTop: '2px solid var(--accent-primary)', borderRight: '2px solid var(--accent-primary)' }} />
          <div className="absolute" style={{ bottom: -1, left: -1, width: 20, height: 20, borderBottom: '2px solid var(--accent-primary)', borderLeft: '2px solid var(--accent-primary)' }} />
          <div className="absolute" style={{ bottom: -1, right: -1, width: 20, height: 20, borderBottom: '2px solid var(--accent-primary)', borderRight: '2px solid var(--accent-primary)' }} />
        </motion.div>
      </div>
    </div>
  );
};
