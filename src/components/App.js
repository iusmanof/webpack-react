import React from 'react';

import Home from './Home';
import Footer from './Footer';

// import './style.scss';
import { test } from './style.module.scss'

const App = () => {
  return (
      <div>
        <div className={test}>hello</div>
        <Home />
        <Footer />
      </div>
  );
};

export default App;