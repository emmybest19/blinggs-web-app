import "./CoomingSoon.css"
import {Link} from "react-router-dom"
import AppleStore from "../../assets/apple-logo-home-cooming.png"
import PlayStore from "../../assets/playstoreCooming.png"



export default function ComingSoon(){
    return(
        <div className="coming-cont">
            <div className="coming-main">
                <h1>Cooming Soon</h1>
                <p>We're building something amazing. Be the first to experience it - download our app when it launches.</p>
                <div className="main-btn">
                    <Link to="https://www.apple.com/app-store/" target="_blank">
                        <img src={AppleStore} alt="apple_store"/>
                        <h3>Download on the App Store</h3>
                    </Link>
                    <Link to="https://play.google.com/store/apps?hl=en" target="_blank">
                        <img src={PlayStore} alt="playstore"/>
                        <h3>Get it on Google Play</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}