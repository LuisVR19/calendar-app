'use client';

import React from 'react';
import styles from './CustomInput.module.css';

interface CustomInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({  
  id,
  label,
  type = 'text',
  placeholder = '',
  required = true
}) => {
  return (
        <>
            <label className={styles.label} htmlFor={id}>{label}</label>
            <input className={styles.input} type={type} id={id} placeholder={placeholder} required={required} />
        </>
  );
};

export default CustomInput;
