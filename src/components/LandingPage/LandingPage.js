import React from 'react';
import About from './About';
import Mode from './Mode';
import Investor from './Investor';
import Souls from './Souls';
import Swords from './Swords';
import Play from './Play';
import Roadmap from './Roadmap';
import HomePage from './HomePage';
import Footer from '../common/Footer';
import Backer from './Backer';
import Tokenomics from './Tokenomics';
import Rules from './Rules';

const LandingPage = () => {
  return (
  
    <div className="cover">
      <section className="header-section">
        <HomePage />
      </section>
      
      <section id="swords">
        <Swords />
      </section> 

      <section id="souls">
        <Souls />
      </section>

     <section id="mode">
        <Mode />
      </section> 

      <section id="roadmap">
      <Roadmap />
      </section> 

      <section id="tokenomics">
      <Tokenomics />
      </section>

      <section id="backer">
        <Backer />
        <Investor />
        <Footer />
      </section>


      {/* <section id="play">
        <Play />
      </section> 

      <section id="usecase">
        <Token />
      </section> */}
      
      
      {/* <section id="intro">
        <About />
      </section> */}

      {/* <section id="rules">
        <Rules />
      </section> */}
      
    </div>
  );
};

export default LandingPage;
