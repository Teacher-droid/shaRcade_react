import React from 'react'
import '../../App.css';
import slide1 from '../../assets/images/slide1.jpg'
import slide2 from '../../assets/images/slide2.jpg'
import slide3 from '../../assets/images/slide3.jpg'
import slide4 from '../../assets/images/slide4.jpg'
import './Hero.css';



const Hero = () => {
    return (
        <section className='hero-container retro'>
            <h1 className="App">Just shaRcade it</h1>
            <p className="App">The best of the beast</p>
            <div className="slider-container">
                <div className="slider">
                    <div className="slides">
                        <div id="slides__1" className="slide">
                            <span className="slide__text"><img alt="slide 1" src={slide1} /></span>
                            <a className="slide__prev" href="#slides__4" title="Next"></a>
                            <a className="slide__next" href="#slides__2" title="Next"></a>
                        </div>
                        <div id="slides__2" className="slide">
                            <span className="slide__text"><img alt="slide 2" src={slide2} /></span>
                            <a className="slide__prev" href="#slides__1" title="Prev"></a>
                            <a className="slide__next" href="#slides__3" title="Next"></a>
                        </div>
                        <div id="slides__3" className="slide">
                            <span className="slide__text"><img alt="slide 3" src={slide3} /></span>
                            <a className="slide__prev" href="#slides__2" title="Prev"></a>
                            <a className="slide__next" href="#slides__4" title="Next"></a>
                        </div>
                        <div id="slides__4" className="slide">
                            <span className="slide__text"><img alt="slide 4" src={slide4} /></span>
                            <a className="slide__prev" href="#slides__3" title="Prev"></a>
                            <a className="slide__next" href="#slides__1" title="Prev"></a>
                        </div>
                    </div>
                    <div className="slider__nav">
                        <a className="slider__navlink" href="#slides__1"></a>
                        <a className="slider__navlink" href="#slides__2"></a>
                        <a className="slider__navlink" href="#slides__3"></a>
                        <a className="slider__navlink" href="#slides__4"></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
