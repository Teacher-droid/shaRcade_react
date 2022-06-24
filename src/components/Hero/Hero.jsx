import React from 'react'
import '../../App.css';
import slide from '../../assets/images/logo/slide.jpg'
import './Hero.css';



const Hero = () => {
    return (
        <section className='hero-container retro'>
            <h1 className="App">Just shaRcade it</h1>
            <p className="App">The best of the beast</p>
            <img className="hero-banner" src="https://www.journaldujapon.com/wp-content/uploads/2020/03/Salle-darcade-a-Akihabara-Photo-by-Nicholas-Doherty-on-Unsplash-min.jpg" alt="banner" />

            <div className="slider-container">
                <div className="slider">
                    <div className="slides">
                        <div id="slides__1" className="slide">
                            <span className="slide__text"><img alt="slide" src={slide} /></span>
                            <a className="slide__prev" href="#slides__4" title="Next"></a>
                            <a className="slide__next" href="#slides__2" title="Next"></a>
                        </div>
                        <div id="slides__2" className="slide">
                            <span className="slide__text">2</span>
                            <a className="slide__prev" href="#slides__1" title="Prev"></a>
                            <a className="slide__next" href="#slides__3" title="Next"></a>
                        </div>
                        <div id="slides__3" className="slide">
                            <span className="slide__text">3</span>
                            <a className="slide__prev" href="#slides__2" title="Prev"></a>
                            <a className="slide__next" href="#slides__4" title="Next"></a>
                        </div>
                        <div id="slides__4" className="slide">
                            <span className="slide__text">4</span>
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

            <a href="./" target="_blank" className='read-article'>
                Read the article 👉
            </a>


        </section>
    )
}

export default Hero