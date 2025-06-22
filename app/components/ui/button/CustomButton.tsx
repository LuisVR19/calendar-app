'use client';

import React from 'react';
import styles from './CustomButton.module.css';

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({  
  children,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  return (
    <button className={styles.button} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default CustomButton;
