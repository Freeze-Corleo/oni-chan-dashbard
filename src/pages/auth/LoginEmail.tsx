import React from 'react';
import { WaveLogo } from '../../components/atom/WaveLogo';
import Button from "../../components/atom/RegisterButton";
import Footer from '../../components/organisms/Footer';
import Form from '../../components/molecules/forms/Form';
import styles from './Login.module.css';

export function Register() {

    return (
        <div>
            <WaveLogo />
            <p className={styles.connect}>Se connecter</p>
            <Form />
            <Button label="S'inscrire" />
            <Footer />
        </div>
    );
}
