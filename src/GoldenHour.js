import React from 'react'
import album from './img/GoldenHour.jpg'

const GoldenHour = () => (
    <div className="album-container">
        <div className="album-info"> 
            <h4>Current album: Golden Hour (2018)</h4>
            <div className="img-container">
                <img src={album} alt="Golden Hour album cover" className="album-cover"/>
                <a href="http://strm.to/goldenhourWE" target="_blank">
                    <div className="overlay">
                        <div className="overlay-text">Click to buy or stream</div>
                    </div>
                </a>
            </div>
        </div>

        <div className="track-listing">
            <h4>Track listing</h4>
                <ol>
                    <li>Slow Burn</li>
                    <li>Lonely Weekend</li>
                    <li>Butterflies</li>
                    <li>Oh, What a World</li>
                    <li>Mother</li>
                    <li>Love Is a Wild Thing</li>
                    <li>Space Cowboy</li>
                    <li>Happy &amp; Sad</li>
                    <li>Velvet Elvis</li>
                    <li>Wonder Woman</li>
                    <li>High Horse</li>
                    <li>Golden Hour</li>
                    <li>Rainbow</li>
                </ol>
         </div>

    </div>
)

export default GoldenHour