'use client';

import React from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  isLogin?: boolean ;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, isLogin = false }) => {

  return <div className={isLogin? styles.loginContainer : styles.generalContainer}>{children}</div>;

};

export default Container;
