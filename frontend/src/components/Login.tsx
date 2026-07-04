import React, { useState } from 'react';
import { setAuthToken } from '../store/multiplayerStore';

export const Login: React.FC<{ onLoginSuccess: () => void }> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const endpoint = isRegistering ? '/api/auth/register' : '/api/auth/login';
      const res = await fetch(`http://localhost:2567${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Authentication failed');

      if (isRegistering) {
        setIsRegistering(false);
        setError('Registration successful. Please login.');
      } else {
        localStorage.setItem('auth_token', data.token);
        localStorage.setItem('auth_username', data.username);
        setAuthToken(data.token, data.username);
        onLoginSuccess();
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg shadow-2xl w-96 text-white font-mono">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#00ff88]">
          {isRegistering ? 'REGISTER' : 'LOGIN'}
        </h2>
        {error && <div className="bg-red-500/20 text-red-400 p-3 mb-4 rounded border border-red-500/50 text-sm">{error}</div>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">USERNAME</label>
            <input 
              type="text" 
              value={username} 
              onChange={e => setUsername(e.target.value)} 
              className="w-full bg-black/50 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-[#00ff88]"
              required
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">PASSWORD</label>
            <input 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              className="w-full bg-black/50 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-[#00ff88]"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#00ff88] text-black font-bold py-2 rounded mt-4 hover:bg-[#00cc6a] transition-colors"
          >
            {isRegistering ? 'CREATE ACCOUNT' : 'ENTER'}
          </button>
        </form>
        <div className="text-center mt-4 text-xs text-gray-400">
          {isRegistering ? (
            <button onClick={() => setIsRegistering(false)} className="hover:text-white">Already have an account? Login</button>
          ) : (
            <button onClick={() => setIsRegistering(true)} className="hover:text-white">Need an account? Register</button>
          )}
        </div>
      </div>
    </div>
  );
};
