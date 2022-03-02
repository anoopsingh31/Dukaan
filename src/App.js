import React from 'react' 
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;
