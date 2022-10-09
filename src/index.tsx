import React from 'react';
import App from './App';
import { PokemonDetailsContext, PokemonListContext } from './context/contexts';
import usePokemonList from './hooks/usePokemonList';
import ReusableProvider from './context/ReusableContext';
import reportWebVitals from './reportWebVitals';
import usePokemonDetails from './hooks/usePokemonDetails';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <ReusableProvider Context={PokemonListContext} hook={usePokemonList}>
      <ReusableProvider Context={PokemonDetailsContext} hook={usePokemonDetails}>
        <App />
      </ReusableProvider>
    </ReusableProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
