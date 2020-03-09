import React from 'react'
import album from './img/SameTrailer.png'


const SameTrailer = () => (
    <div className="album-container">
        <div className="album-info"> 
            <h4>Same Trailer, Different Park (2013)</h4>
            <div className="img-container">
                <img src={album} alt="Same Trailer, Different Park album cover" className="album-cover"/>
                <a href="https://open.spotify.com/album/6IGpQUt0KNi5rBUXZZOFI6" target="_blank">
                    <div className="overlay">
                        <div className="overlay-text">Click to stream on Spotify</div>
                    </div>
                </a>
            </div>     
        </div>

        <div className="track-listing">
            <h4>Track listing</h4>
                <ol>
                    <li>Silver Lining</li>
                    <li>My House</li>
                    <li>Merry Go 'Round</li>
                    <li>Dandelion</li>
                    <li>Blowin' Smoke</li>
                    <li>I Miss You</li>
                    <li>Step Off</li>
                    <li>Back on the Map</li>
                    <li>Keep It to Yourself</li>
                    <li>Stupid</li>
                    <li>Follow Your Arrow</li>
                    <li>It Is What It Is</li>
                </ol>
         </div>

    </div>
)

export default SameTrailer