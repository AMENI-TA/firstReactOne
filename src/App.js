//import logo from './logo.svg';
//import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello KIKA
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React from 'react';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import './App.css';

const App = () => {
  const name = 'AMENI'; 
  const greetingMessage = name ? `Bonjour, ${name}!` : 'Bonjour !';

  return (
    <div className="mt-5">
      <h1 className="text-center">
        <header>Produit en Vedette</header>
        <body>
          
          <Name />
          <Image />
          <Price />
          <Description />
           <button variant="primary" className="mt-3">Ajouter au Panier</button>
        </body>
      </h1>
      <div className="mt-3">
        <h5>{greetingMessage}</h5>
      </div>
    </div>
  );
};

export default App;
