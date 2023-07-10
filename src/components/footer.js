import instagramImage from '../Images/instagramColor.png'
import facebookImage from '../Images/facebookColor.png'
import twitterImage from '../Images/twitterColor.png'
import vanceV3Logo from '../Images/vanceV3.png'


const footer = () => {
    return ( <footer>
        <div class="footer-links">
            <ul class="footer-links">
                <section class="socialMedia">
                    <h1>Follow us on Social Media</h1>
                    <ul>

                        <li><a href="https://www.instagram.com"><img src={instagramImage}
                                    id="logoBottom"/></a></li>
                        <li><a href="https://www.facebook.com"><img src={facebookImage}
                                    id="logoBottom"/></a></li>
                        <li><a href="https://twitter.com"><img src={twitterImage} id="logoBottom"/></a></li>
                    </ul>
                </section>
                <p>Copyright 1999-2023 by Vance Inc. All Rights Reserved. <br/> Powered by CSS.</p>
                <a href="index.html"><img src={vanceV3Logo} id="logoBottom"/></a>

            </ul>
        </div>
    </footer> );
}
 
export default footer;