'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SignUpForm from '@/components/auth/SignUpForm';

export default function SignUpPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (formData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Sign up data:', formData);
      
      // Store in localStorage (frontend only)
      localStorage.setItem('user', JSON.stringify(formData));
      localStorage.setItem('isAuthenticated', 'true');
      
      // Redirect to dashboard
      router.push('/dashboard');
    } catch (error) {
      console.error('Sign up error:', error);
      alert('Sign up failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return <SignUpForm onSubmit={handleSignUp} isLoading={isLoading} />;
}