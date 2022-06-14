import React from 'react';
import Button from "../../components/atom/RegisterButton";
import Footer from '../../components/organisms/Footer';
import Form from '../../components/molecules/forms/Form';
import styles from './Login.module.css';
import Navigation from '../../components/organisms/Navigation';

export function Register() {

    return (
        <div>
            <Navigation />
            <p className={styles.connect}>Se connecter</p>
            <div className="h-screen">
                <Form />
                <Button label="S'inscrire" />
            </div>
            <Footer />
        </div>
    );
}
