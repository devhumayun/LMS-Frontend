
import React, { ReactNode } from 'react';
import UserAuth from './userAuth';
import { redirect } from 'next/navigation';

interface ProtectedProps {
  children: ReactNode;
}

const Protected: React.FC<ProtectedProps> = ({ children }) => {
  const isAuthenticated = UserAuth()

  return isAuthenticated ? children : redirect("/")
};

export default Protected;