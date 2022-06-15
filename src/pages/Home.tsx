import React from 'react';
import Button from '../components/atom/RegisterButton';
import Footer from '../components/organisms/Footer';
import Navigation from '../components/organisms/Navigation';


const Home = () => {
  return (
    <div>
      <div className="h-screen">
        <div style={{ backgroundColor: "#BBF49B" }}>
          <Navigation />
        </div>
        <div className='relative w-full h-2/3'>
          <div className='w-full h-full absolute' style={{ top: 0, backgroundColor: "#BBF49B" }}>
            <div className='grid grid-cols-2'>
              <div>
                <p className='mt-40 ml-10 mb-10 text-5xl text-center font-bold'>ENVIE D'UN BON REPAS SANS BOUGER DE CHEZ VOUS ?</p>
                <Button label='Commandez ici' />
              </div>
              <img className='mt-20 ml-40 object-scale-down h-60 w-96' src={process.env.PUBLIC_URL + '/img/les-courses.png'} />
            </div>
          </div>
        </div>
        <div className='text-center mt-20 mb-20 text-4xl font-bold'>
          <p>Explorer par catégories</p>
        </div>
        <div className='grid grid-cols-3 gap-x-0 gap-y-8 mb-28 place-items-center'>
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative">
            <a href="#">
              <img className="rounded-t-lg" src={process.env.PUBLIC_URL + '/img/burger.jpg'} alt="" />
              <div className="absolute w-full h-full top-0 text-white text-2xl flex justify-center items-center">EQUILIBRÉ</div>
            </a>
          </div>
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative">
            <a href="#">
              <img className="rounded-t-lg" src={process.env.PUBLIC_URL + '/img/pizza.jpg'} alt="" />
              <div className="absolute w-full h-full top-0 text-white text-2xl flex justify-center items-center">PETITS PRIX</div>
            </a>
          </div>
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative">
            <a href="#">
              <img className="rounded-t-lg" src={process.env.PUBLIC_URL + '/img/burger.jpg'} alt="" />
              <div className="absolute w-full h-full top-0 text-white text-2xl flex justify-center items-center">EQUILIBRÉ</div>
            </a>
          </div>
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative">
            <a href="#">
              <img className="rounded-t-lg" src={process.env.PUBLIC_URL + '/img/burger.jpg'} alt="" />
              <div className="absolute w-full h-full top-0 text-white text-2xl flex justify-center items-center">PETITS PRIX</div>
            </a>
          </div>
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative">
            <a href="#">
              <img className="rounded-t-lg" src={process.env.PUBLIC_URL + '/img/pizza.jpg'} alt="" />
              <div className="absolute w-full h-full top-0 text-white text-2xl flex justify-center items-center">EQUILIBRÉ</div>
            </a>
          </div>
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative">
            <a href="#">
              <img className="rounded-t-lg" src={process.env.PUBLIC_URL + '/img/burger.jpg'} alt="" />
              <div className="absolute w-full h-full top-0 text-white text-2xl flex justify-center items-center">PETITS PRIX</div>
            </a>
          </div>
        </div>
        <div className='w-full h-2/3' style={{ backgroundColor: "#BBF49B" }}>
          <div className='grid grid-cols-1 place-items-center'>
            <div className='text-center mt-10 mb-6 text-3xl font-bold'>
              <p>PARRAINER UN AMI</p>
            </div>
            <img className='object-scale-down h-60 w-96 mb-4' src={process.env.PUBLIC_URL + '/img/ami.png'} />
            <Button label='Partager votre code' />
            <p className='mt-6 font-bold'>Offrez 10€ et recevez 10€ - Invitez vos amis et c'est nous qui régalons !</p>
          </div>
        </div>
        <div className='text-center mt-20 mb-20 text-3xl font-bold'>
          <p>TRAVAILLER AVEC ONI-CHAN</p>
        </div>
        <div className='grid grid-cols-2 gap-0 place-items-center mb-40 p-10'>
          <img className='object-scale-down h-48 w-48 mb-4 ml-32' src={process.env.PUBLIC_URL + '/img/camion.png'} />
          <div>
            <p className='mt-6 font-bold text-center text-3xl'>Livrer pour nous</p>
            <p className='mt-6 text-center'>Roulez avec Deliveroo et travaillez à votre propre rythme. En rejoignant la communauté de livreurs et livreuses partenaires de Deliveroo, vous profiterez également de tout un tas d'avantages et de réductions.</p>
          </div>
          <div>
            <p className='mt-6 font-bold text-center text-3xl'>Devenez partenaire</p>
            <p className='mt-6 text-center'>Devenez partenaire de Deliveroo et attirez encore plus de clients. Nous gérons la livraison, vous ne gérez que la préparation !</p>
          </div>
          <img className='object-scale-down h-48 w-48 mb-4 mr-32' src={process.env.PUBLIC_URL + '/img/serveur.png'} />
          <img className='object-scale-down h-48 w-48 mb-4 ml-32' src={process.env.PUBLIC_URL + '/img/travail.png'} />
          <div>
            <p className='mt-6 font-bold text-center text-3xl'>Carrières</p>
            <p className='mt-6 text-center'>Notre mission est de révolutionner la manière dont vous commandez vos plats. C'est un projet ambitieux, comme nous. Et nous avons besoin de vous pour nous aider !</p>
          </div>
        </div>
        <div className='text-center mb-20 text-5xl font-bold'>
          <p>Foire aux questions</p>
        </div>
        <div className='grid grid-cols-1 place-items-center space-y-4'>
          <button type="button" className="shadow-2xl w-2/3 text-black font-medium rounded-full text-sm px-36 py-3 text-center" style={{ backgroundColor: "#BBF49B" }}>
            <p style={{ fontSize: 18 }}>Puis-je envoyer mes propres images de menus ?</p>
          </button>
          <button type="button" className="shadow-2xl w-2/3 text-black font-medium rounded-full text-sm px-36 py-3 text-center" style={{ backgroundColor: "#BBF49B" }}>
            <p style={{ fontSize: 18 }}>Comment augmenter mon chiffre d'affaire ?</p>
          </button>
          <button type="button" className="shadow-2xl w-2/3 text-black font-medium rounded-full text-sm px-36 py-3 text-center" style={{ backgroundColor: "#BBF49B" }}>
            <p style={{ fontSize: 18 }}>Comment mettre en place la commande à emporter ?</p>
          </button>
          <button type="button" className="shadow-2xl w-2/3 text-black font-medium rounded-full text-sm px-36 py-3 text-center" style={{ backgroundColor: "#BBF49B" }}>
            <p style={{ fontSize: 18 }}>Que faire en cas de problèmes avec une commande ?</p>
          </button>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home;