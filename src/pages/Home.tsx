import React from 'react';
import Button from '../components/atoms/RegisterButton';
import Categories from '../components/molecules/Categories';
import Faq from '../components/molecules/Faq';
import IntroPage from '../components/molecules/IntroHomePage';
import ParrainageCard from '../components/molecules/ParrainageCard';
import Presentation from '../components/molecules/Presentation';
import Footer from '../components/organisms/Footer';
import Navigation from '../components/organisms/Navigation';


const Home = () => {
  return (
    <div>
      <div className="h-screen">
        <div style={{ backgroundColor: "#BBF49B" }}>
          <Navigation />
        </div>
        <IntroPage />
        <Categories />
        <ParrainageCard />
        <Presentation />
        <Faq />
        <Footer />
      </div>
    </div>
  )
}

export default Home;