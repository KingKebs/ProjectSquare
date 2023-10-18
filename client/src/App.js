// App.js
import React from 'react';
import Menu from './components/Menu';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Brands from './components/Brands';

function App() {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <WhatWeDo />
      <Slider />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
