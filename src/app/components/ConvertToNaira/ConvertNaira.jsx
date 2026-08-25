import "./ConvertNaira.css"
import {Link} from "react-router-dom";







function ConvertToNiara(){
    return(
        <div className="naira-container">
            <span className="naira-label">NAIRA EXCHANGE</span>
            <h2>Convert to Naira Instantly</h2>
            <p>Exchange your funds seamlessly, Convert direct to Naira and withdraw instantly to your Nigerian bank account</p>
            <div className="naira-main">
                <div className="main-txt">
                    <label>Best Rates</label>
                    <p>Competitive Naira exchange rates</p> 
                </div>
                <div className="main-txt">
                    <label>Instant </label>
                    <p>Real-time Naira conversion</p> 
                </div>
                <div className="main-txt">
                    <label>Direct to bank </label>
                    <p>Instant NGN bank settlement</p> 
                </div>
                <Link to="">Join the waitlist</Link>
            </div>
        </div>
    )
}

export default ConvertToNiara;