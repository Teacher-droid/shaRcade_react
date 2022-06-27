import React from 'react'
import './HookCanva.css';

const HookCanva = () => {
    return (
        <section className="bg-hook retro">
            <div className="m-auto w-900 text-center padding-top">
                <h2>Hello I'm HookCanva</h2>
                <p>My goal is to lead small humans who got astray and didn't sign-up yet.</p>
                <p>Now that you are back to the straight path you know what you've to do...</p>
                <p>Sign-up for a ShaRcade&reg; membership!</p>
            </div>
            <div className="d-flex">
                <div className="side1">
                    <h3>Awesome games !</h3>
                    <img src="https://images.squarespace-cdn.com/content/5ac589eb8ab722aa77be2eeb/1532023443220-Z4GF6TJG12BQSM2CSKUO/random_interactive_share.jpg?format=1000w&content-type=image%2Fjpeg" alt="prototype" class="padding-right" />
                    <p>Easily search your games by content, <br />category, favorites, ranks.</p>
                </div>
                <div className="side2">
                    <h3>Awesome games !</h3>
                    <img src="https://images.squarespace-cdn.com/content/5ac589eb8ab722aa77be2eeb/1532023443220-Z4GF6TJG12BQSM2CSKUO/random_interactive_share.jpg?format=1000w&content-type=image%2Fjpeg" alt="prototype" class="padding-right" />

                    <p>Easily search your games by content, <br />category, favorites, ranks.</p>
                </div>
            </div>
        </section>
    )
}

export default HookCanva