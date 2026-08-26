import "./How_people.css"
import SocialProof from "../../assets/avatars-row.png"







export default function How_people(){
    return(
        <div className="p-cont">
            <div className="how-img-cont">
                <img src={SocialProof} alt="how_people_trusted.Blingg"/>
                {/* <span>+10k</span> */}
            </div>
            {/* <p>Join 10,000+ builders & operators waiting for launch</p> */}
        </div>
    )
}