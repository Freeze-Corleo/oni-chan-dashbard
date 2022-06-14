import React from 'react';
import styles from './Login.module.css';

export function Login() {

  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,160L80,181.3C160,203,320,245,480,224C640,203,800,117,960,90.7C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        <text x="105" y="67" fill="white" style={{fontSize: 30}}>ONI-CHAN</text>
        </svg>
        <p className={styles.connect}>Se connecter</p>
        <div className='grid place-content-center w-full space-y-8 '>     
          <button type="button" className="relative shadow-2xl text-white font-medium rounded-full text-sm px-36 py-3 text-center inline-flex items-center  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br">
            <svg className="h-6 w-6 absolute left-10 top-1/2 -translate-y-2/4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
            <p style={{fontSize: 18}}>Se connecter avec Facebook</p>
          </button>
          <button type="button" className="relative shadow-2xl text-black font-medium rounded-full text-sm px-36 py-3 text-center inline-flex items-center  bg-gradient-to-r from-white-500 via-white-600 to-white-700 hover:bg-gradient-to-br">
          <svg className="h-6 w-6 absolute left-10 top-1/2 -translate-y-2/4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
            <p style={{fontSize: 18}}>Se connecter avec Google</p>
          </button>
          <button type="button" className="relative shadow-2xl text-black font-medium rounded-full text-sm px-36 py-3 text-center inline-flex items-center  bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br">
          <svg className="h-6 w-6 absolute left-10 top-1/2 -translate-y-2/4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <p style={{fontSize: 18}}>Se connecter avec une adresse mail</p>
          </button>
          <div className='grid place-content-center w-full'>   
            <button type="button" className="text-white shadow-2xl font-medium rounded-full mb-20 text-sm px-10 py-3 text-center inline-flex items-center bg-black">
              <p>S'inscrire</p>
            </button>
          </div>  
      </div>  
      <div className='grid place-content-center w-full'>   
        <div className={styles.bottom}>
          <div className='grid grid-cols-4'>
            <div className="ml-48 mt-10 z-40 text-white"><p style={{fontSize: 40}}>ONI-CHAN</p></div>
            <div className="ml-40 mt-16 z-40 text-white"><p style={{fontSize: 28}}>Obtenir de l'aide</p></div>
            <div className="ml-40 mt-16 z-40 text-white col-span-2"><p style={{fontSize: 28}}>Créez un compte professionnel</p></div>
            <div className="ml-48 mt-10 z-40 text-white"><p style={{fontSize: 40}}>logo</p></div>
            <div className="ml-40 mt-6 z-40 text-white"><p style={{fontSize: 28}}>Ajouter un restaurant</p></div>
            <div className="ml-40 mt-6 z-40 text-white col-span-2"><p style={{fontSize: 28}}>Economisez sur votre première commande</p></div>
            <div className="ml-48 mt-10 z-40 text-white"><p style={{fontSize: 40}}>logo2</p></div>
            <div className="ml-40 z-40 text-white col-span-2"><p style={{fontSize: 28}}>Devenez coursier-partenaire</p><p style={{fontSize: 28, marginTop: '3%'}}>Historique des commandes</p></div>
            <div className="ml-20 mt-16 z-40 text-white">
              <div className="flex space-between">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
            </div>
          </div>
        </div>    
        </div>  
      </div>
  );
}