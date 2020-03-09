import React from 'react';
import logo from './logo.svg';
import './index.css';
import './zengarden.css';
import AlbumList from './AlbumList.js';
import AlbumInfo from './AlbumInfo.js';
import EmailForm from './EmailForm.js';


function App() {
    return (
        <div className="page-wrapper">
                    
            <section className="intro" id="zen-intro" style={{ paddingTop: '16%' }}>
                <header role="banner">
                    <div className="page-title">
                        <h1>KACEY MUSGRAVES</h1>
                    </div>
                    <br />
                    <div className="image-wrapper">
                        <img src="https://thefader-res.cloudinary.com/private_images/w_1440,c_limit,f_auto,q_auto:best/HR_Kacey_Musgraves_180314000000010002_mz67vs/kacey-mugraves-golden-hour-interview.jpg" alt="Kacey Musgraves in Fader magazine."/>
                    </div>
                    <br />
                </header>
            </section>
        
            <div className="main supporting" id="zen-supporting" role="main">

                <div className="biography participation" id="zen-participation" role="article">
                    <h3>Bio</h3>  
                    <p>Born and raised in Golden, Texas, Kacey Musgraves began songwriting at the age of 8 and learned to play music on the mandolin and later the guitar. Growing up Musgraves would write, sing, and play music, performing western swing music at local festivals and releasing several demo albums. After graduating high school she moved to Austin, Texas and was discovered professionally, releasing EPs and opening for acts such as Lady Antebellum and Loretta Lynn.
                    <br />    
                    In 2013 Musgraves released her debut album <em>Same Trailer Different Park</em>, which won the Grammy Award for Best Country Album and the Academy of Country Music award for Album of the Year. In addition, its lead single “Merry Go ‘Round” won the Grammy for Best Country Song. “Follow Your Arrow,” another single from that album was controversial due to its positive reference to homosexuality, but earned her the Country Music Association Award for Song of the Year. In 2015 she released her second album <em>Pageant Material</em> which received critical acclaim and a Best Country Album Grammy nomination.
                    <br />
                    Her latest studio album <em>Golden Hour</em> (2018) was a critically acclaimed crossover that netted Musgraves Album of the Year, Best Country Album, Best Country Song (“Space Cowboy”), and Best Country Solo Performance (“Butterflies”) at the 61st Grammy Awards. Its unique and contemporary sound set itself apart from traditional country albums and Musgraves garnered a larger fan base than ever before, who she interacts with through her <a href="https://twitter.com/KaceyMusgraves" target="_blank">Twitter</a>. She is currently finishing up the American leg of her <a href="https://www.kaceymusgraves.com/tour" target="_blank">Oh, What a World: Tour II</a> before performing internationally.
                    <br />
                    Musgraves’ music is notable for her more progressive lyrics that break from the traditionally conservative country music genre. For instance, her lyrics have questioned religious sentiment, discussed recreational marijuana use, and promoted LGBT acceptance. While she receives criticism from conservative listeners, others praise her as the coming of a new era of country music.</p>
                </div>

                <div className="requirements" id="zen-requirements" role="article">
                    <h3>Music</h3> 
                    <AlbumList />
                    <AlbumInfo />
                </div> 
                
                <div className="email-form">
                    <h3>Sign Up for Updates and Future Show Announcements</h3> 
                    <EmailForm />
                </div>
                
                <footer>
                    <p id="footer-text" role="contentinfo">You can find out more on Kacey's <a href="https://www.kaceymusgraves.com" target="_blank">official site</a>.</p>
                </footer>
                
            </div>
            
        </div>  
            
    );
}

export default App;
