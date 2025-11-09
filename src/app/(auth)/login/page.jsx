'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '../../../components/auth/LoginForm';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (credentials) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Login credentials:', credentials);
      
      // Store in localStorage (frontend only)
      localStorage.setItem('user', JSON.stringify(credentials));
      localStorage.setItem('isAuthenticated', 'true');
      
      router.push('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return <LoginForm onSubmit={handleLogin} isLoading={isLoading} />;
}