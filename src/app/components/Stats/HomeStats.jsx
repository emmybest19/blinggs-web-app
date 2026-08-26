import { FunctionSquare } from "lucide-react"
import "./HomeStats.css"



export default function HomeStats(){
    return(
        <div className="stats">
            <div className="stats-box">
                <label>10k+</label>
                <p>Waitlist Signups</p>
                <div className="hr"></div>
            </div>
            <div className="stats-box">
                <label>Q4 2026</label>
                <p>Public Launch</p>
                <div className="hr"></div>
            </div>
            <div className="stats-box">
                <label>256-bit</label>
                <p>Encryption</p>
                <div className="hr"></div>
            </div>
            <div className="stats-box">
                <label>0%</label>
                <p>Transfer fees</p>
                <div className="hr"></div>
            </div>
        </div>
    );
}