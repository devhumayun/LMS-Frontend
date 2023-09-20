
import React, { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { useSelector } from 'react-redux';

interface ProtectedProps {
  children: ReactNode;
}

const AdminProtected: React.FC<ProtectedProps> = ({ children }) => {
  const {user} = useSelector((state:any) => state.auth)
  if(user) {
    const admin = user.role === "admin"

    return admin ? children : redirect("/")
  }


};

export default AdminProtected;