// App.js
import React from 'react';
import Menu from './components/Menu';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';

function App() {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <WhatWeDo />
      <Slider />
      {/* Other components... */}
    </div>
  );
}

export default App;
