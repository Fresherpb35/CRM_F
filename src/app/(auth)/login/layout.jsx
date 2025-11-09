import AuthLayout from '@/components/layout/AuthLayout';

export const metadata = {
  title: 'Login - Your App',
  description: 'Login to access your account'
};

export default function AuthLayoutWrapper({ children }) {
  return <AuthLayout>{children}</AuthLayout>;
}