import "./HowSub.css"
import benefitImg from "../../assets/how-star.png"







export default function HowSub(){
    return(
        <div className="sub-cont">
            <div className="cont-cards">
                <img src={benefitImg} alt="Star_Itworks.Blingg"/>
                <h2>Early Access</h2>
                <p>Be among the first to download the app and secure your custom handle prefix before public launch.</p>
            </div>
            <div className="cont-cards">
                <img src={benefitImg} alt="Star_Itworks.Blingg"/>
                <h2>Exclusive Perks</h2>
                <p>Earn early member status benefits including zero transfer fee caps and premium design themes.</p>
            </div>
            <div className="cont-cards">
                <img src={benefitImg} alt="Star_Itworks.Blingg"/>
                <h2>Early Access</h2>
                <p>Unlock a direct line of communication to the founding product and support engineer teams.</p>
            </div>
        </div>
    )
}