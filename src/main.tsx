import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ChakraProvider>
);
