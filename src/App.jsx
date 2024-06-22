import React from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import './App.css'

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;

