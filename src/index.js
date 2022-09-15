import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home';
import Carrinho from './pages/carrinho';
import './scss/index.scss';
import styled from 'styled-components'
import Bolha from './assets/bolha.svg';
import { CarrinhoProvider } from './contexts/CarrinhoContext';

const BolhaEl = styled.img`
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CarrinhoProvider>
      <div className='wrapper'>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
        <BolhaEl src={Bolha}></BolhaEl>

      </div>
    </CarrinhoProvider>
  </BrowserRouter> 
);