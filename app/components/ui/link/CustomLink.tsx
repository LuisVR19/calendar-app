'use client';

import React from 'react';
import styles from './CustomLink.module.css';

interface CustomLinkProps {
  text: string;
  route: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({  
  text,
  route
}) => {
  return (
    <div className={styles.forgotPassword}>
        <a href={route}>
            {text}
        </a>
    </div>
  );
};

export default CustomLink;
