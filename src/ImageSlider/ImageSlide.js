import React, { useState } from 'react'
import { Carousel } from 'antd';
import { WarningFilled } from '@ant-design/icons';

import mealsImage from '../Assets/pexels-alimurat-üral-14836741.jpg';
import mealimage2 from '../Assets/pexels-elina-fairytale-3811013.jpg';
import mealimage3 from '../Assets/pexels-kader-d-kahraman-7552831.jpg';
import mealimage4 from '../Assets/pexels-meruyert-gonullu-6161503.jpg';
import './ImageSlider.css'



function ImageSlide() {
  const [dotPosition, setDotPosition] = useState(0);
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img src={mealsImage} alt='candy shop ' />
        </div>
        <div>
          <img src={mealimage2} alt="description of "/>
        </div>
        <div>
          <img src={mealimage3} alt="description of " />
        </div>
        <div>
          <img src={mealimage4} alt="description of " />
        </div>
      </Carousel>
    </div>
  )
}

export default ImageSlide