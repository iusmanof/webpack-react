import React from 'react';
import { test } from './style.module.scss'
import image1 from '../assets/1.png'
import image2 from '../assets/2.jpg'

interface AppProps {
  msg: string;
}

const App = ({msg}: AppProps) => {
  return (
      <div>
        {msg}
        <div className={test}>hello</div>
        <img src={image1} alt='png' width="100px"  />
        <img src={image2} alt='jpg' width="200px"  />
      </div>
  );
};

export default App;