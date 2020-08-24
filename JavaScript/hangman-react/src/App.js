import React from 'react';
import './App.css';

import { ContextController } from './context';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Index from './components/Index';

const App = () => {
  return (
    <ContextController>
      <Navbar />
      <div style={{ height: '100vh' }}>
        <Index />
      </div>
      <Footer />
    </ContextController>
  );
};

export default App;
