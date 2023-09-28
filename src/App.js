import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import InputChoc from './Component/Chocolate Handle/InputChoc';
import CartProvider from './Component/Store/CartProvider';
import MainNavigation from './Component/MainNavigation/MainNavigation';

function App() {
  return (
    <div>
      <CartProvider>
        <MainNavigation />
        <Routes>
          <Route path="/home" element={<InputChoc />} />
          {/* Define other routes here */}
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
