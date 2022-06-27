import React from 'react'
import './HookCanva.css';

const HookCanva = () => {
    return (
        <section className="bg-hook retro">
            <div className="m-auto w-900 text-center padding-top">
                <h2>Hello I'm HookCanva</h2>
                <p>My goal is to lead small humans who got astray and didn't sign-up yet <br />Now that you are back to the straight path you know what you've to do<br /> subscribe.</p>
            </div>
            <div className="padding-top d-flex">
                <img className="padding-right" src="https://images.squarespace-cdn.com/content/5ac589eb8ab722aa77be2eeb/1532023443220-Z4GF6TJG12BQSM2CSKUO/random_interactive_share.jpg?format=1000w&content-type=image%2Fjpeg" alt="prototype" />
                <div className="padding-top">
                    <div>
                        <h3>Awesome games !</h3>
                        <p>Easily search your games by content, <br />category, favorites, ranks.</p>
                    </div>
                    <div className="padding-top1">
                        <h3>Mobile Friendly !</h3>
                        <p>Have fun with your beloved games across all your devices.</p>
                    </div>
                    <div className="padding-top1" >
                        <h3>More Awesome games !</h3>
                        <p>Get addict from the first moment you started using the website and give us all your money</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HookCanva