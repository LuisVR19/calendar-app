'use client';

import React from 'react';
import styles from './CustomInput.module.css';

interface CustomInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
}

const CustomInput: React.FC<CustomInputProps> = ({  
  id,
  label,
  type = 'text',
  placeholder = '',
  required = true,
  minLength
}) => {
  return (
        <div className={styles.formGroup}>
          <input 
              type={type} 
              id={id} 
              className={styles.formInput}
              placeholder={placeholder}
              required={required}
              {...(minLength && { minLength })}
          />
          <label htmlFor={id} className={styles.formLabel}>{label}</label>
      </div>
  );
};

export default CustomInput;
