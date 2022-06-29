import React, { useState, useEffect } from 'react';
import { API_URL } from '../../stores/api_url'
import './Slider.css'
import BtnSlider from './BtnSlider';
import sliderImages from './sliderImages';

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [gameList, setGameList] = useState([]);

  const nextSlide = () => {
    if (slideIndex !== gameList.length) {
      setSlideIndex(slideIndex + 1)
    }
    else if (slideIndex === gameList.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if(slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1) {
      setSlideIndex(gameList.length)
    }
  }

  const moveDot = index => {
    setSlideIndex(index)
  }

  useEffect(() => {
    fetch(API_URL + 'games', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((response) => {
      setGameList(response);
    })
    .catch((error) => console.log(error));
  }, [])

  const Images = gameList.map((game, index) => {
    const imageLink = require('../../assets/images/games/' + game.image_url) ? require('../../assets/images/games/' + game.image_url) : require('../../assets/images/games/default_game_screenshot.png');
    return (
      <div
      key={game.id}
      className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
      >
      <img src={imageLink}/>
      </div>
      )
  })

  return (
    <div className="container-slider'">
    {Images}
    <BtnSlider moveSlide={nextSlide} direction={"next"} />
    <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

    <div className="container-dots">
    {Array.from({length: gameList.length}).map((item, index) => (
      <div
      onClick={() => moveDot(index + 1)}
      className={slideIndex === index + 1 ? "dot active" : "dot"}
      ></div>
      ))}
    </div>
    </div>
    )
}
