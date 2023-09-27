import ImageSlide from './ImageSlider/ImageSlide';
import InputChoc from './Component/Chocolate Handle/InputChoc';
import './App.css';
import DisplayChoc from './Component/Chocolate Handle/DisplayChoc';
import CartProvider from './Component/Store/CartProvider';


function App() {
  return (
    <div>
      <CartProvider>
      <InputChoc/><br/>
      </CartProvider>
    </div>
  );
}

export default App;
