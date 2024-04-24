import React from 'react';

import Home from './Home';
import Footer from './Footer';

// import './style.scss';
import { test } from './style.module.scss'

import image1 from '../images/1.png'
import image2 from '../images/2.jpg'

const App = () => {
  return (
      <div>
        <div className={test}>hello</div>
        <Home />
        <Footer />
        <img src={image1} alt='png'  />
        <img src={image2} alt='jpg' width="200px"  />
      </div>
  );
};

export default App;