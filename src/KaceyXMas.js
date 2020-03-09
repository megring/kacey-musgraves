import React from 'react'
import album from './img/KaceyXMas.jpg'


const KaceyXMas = () => (
    <div className="album-container">
        <div className="album-info"> 
            <h4>A Very Kacey Christmas (2016)</h4>
            <div className="img-container">
                <img src={album} alt="A Very Kacey Christmas album cover" className="album-cover"/>
                <a href="https://open.spotify.com/album/7sIB15nu0Rp1vR8wXnTx3a" target="_blank">
                    <div className="overlay">
                        <div className="overlay-text">Click to stream on Spotify</div>
                    </div>
                </a>
            </div>
        </div>

        <div className="track-listing">
            <h4>Track listing</h4>
                <ol>
                    <li>Have Yourself a Merry Little Christmas</li>
                    <li>Let It Snow (feat. The Quebe Sisters)</li>
                    <li>Christmas Don't Be Late</li>
                    <li>A Willie Nice Christmas (feat. Willie Nelson and Trigger)</li>
                    <li>Feliz Navidad</li>
                    <li>Christmas Makes Me Cry</li>
                    <li>Present Without a Bow (feat. Leon Bridges)</li>
                    <li>Mele Kalikimaka (feat. The Quebe Sisters)</li>
                    <li>I Want a Hippopotamus for Christmas</li>
                    <li>Rudolph the Red-Nosed Reindeer</li>
                    <li>Ribbons and Bows</li>
                    <li>What Are You Doing New Year's Eve?</li>
                </ol>
         </div>

    </div>
)

export default KaceyXMas