import React from 'react';
import './style.css';
import Header from './Components/Header';
import SectionGallery from './Components/SectionGallery';
import { GlobalContext } from './UserContext';

const App = () => {
  return (
    <GlobalContext>
      <Header />
      <SectionGallery />
    </GlobalContext>
  );
};

export default App;
