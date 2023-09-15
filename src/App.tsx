import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Home from './components/Home/Home';
import Toolbar from './components/UI/Toolbar/Toolbar';


function App() {
  return (
    <>
      <Toolbar />
      <Home />
    </>
  );
}

export default App;
