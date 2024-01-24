import React from 'react';
import Navbar from './Navbar';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';



const App = () => {
  return (
    <div className='container'>
      <nav>
        <h1>Makanan indonesia</h1>
      <ul>
        <li>
          <a href='/'>HOME</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href='/'>ABOUT</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href='/'>CONTACT</a>
        </li>
      </ul>
    </nav>
    </div>    
  )
}

export default App
