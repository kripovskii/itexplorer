import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';

const theme = extendTheme({
  styles: {
    global: {
      '.chakra-button': {
        borderRadius: '999px', // Создание овальной формы
        transition: 'background 0.3s', // Добавление плавного перехода
      },
      '.chakra-button:hover': {
        background: 'linear-gradient(to right, #FFD700, #8A2BE2)', // Градиентный фон
      },
    },
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999 }} />
      <HomePage />
      <Footer />
    </ChakraProvider>
  );
};

export default App;
