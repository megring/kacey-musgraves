import React from 'react'
import album from './img/PageantMaterial.jpg'


const PageantMaterial = () => (
    <div className="album-container">
        <div className="album-info"> 
            <h4>Pageant Material (2015)</h4>
            <div className="img-container">
                <img src={album} alt="Pageant Material album cover" className="album-cover"/>
                <a href="https://open.spotify.com/album/5xxKrpAO6Toq1KmopQ4tox" target="_blank">
                    <div className="overlay">
                        <div className="overlay-text">Click to stream on Spotify</div>
                    </div>
                </a>
            </div>
        </div>

        <div className="track-listing">
            <h4>Track listing</h4>
                <ol>
                    <li>High Time</li>
                    <li>Dime Store Cowgirl</li>
                    <li>Late to the Party</li>
                    <li>Pageant Material</li>
                    <li>This Town</li>
                    <li>Biscuits</li>
                    <li>Somebody to Love</li>
                    <li>Miserable</li>
                    <li>Die Fun</li>
                    <li>Family Is Family</li>
                    <li>Good Ol' Boys Club</li>
                    <li>Cup of Tea</li>
                    <li>Fine</li>
                </ol>
         </div>

    </div>
)

export default PageantMaterial