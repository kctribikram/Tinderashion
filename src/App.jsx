import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        {/* Other components or content here */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
