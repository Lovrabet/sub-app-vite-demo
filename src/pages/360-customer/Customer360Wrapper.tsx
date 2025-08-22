import React from 'react';
import { Customer360Provider } from '@/context/Customer360Context';

interface Customer360WrapperProps {
  children: React.ReactNode;
}

const Customer360Wrapper: React.FC<Customer360WrapperProps> = ({ children }) => {
  return (
    <Customer360Provider>
      {children}
    </Customer360Provider>
  );
};

export default Customer360Wrapper;