import React from 'react';
import { WaveLogo } from '../../components/atoms/WaveLogo';
import { RegisterBtn } from '../../components/atoms/RegisterButton';
import Footer from '../../components/organisms/Footer';
import Form from '../../components/organisms/Form';
import styles from './Login.module.css';

export function LoginEmail() {
  return (
    <div>
      <WaveLogo />
      <p className={styles.connect}>Se connecter</p>
      <Form />
      <RegisterBtn />
      <Footer />
    </div>
  );
}
