import "./StartMinutes.css"
import downloadImg from "../../assets/download_start_home.png"
import walletImg from "../../assets/wallet_start_home.png"
import transactImg from "../../assets/transaction_start_home.png"




export default function StartInMinutes(){
    return(
        <div className="start-contain">
            <h1>Start in minutes</h1>
            <div className="start-main">
                <div className="number-track">
                    <div className="track-No">
                        <p className="activeNo">1</p>
                    </div>
                    <div className="track-No">
                        <p>2</p>
                    </div>
                    <div className="track-No">
                        <p>3</p>
                    </div>
                </div>
                <hr/>
                <div className="main-contents">
                    <div className="con-div">
                        <img src={downloadImg} alt="download_faster" className="exceptThisImg"/>
                        <label>Download and Sign Up</label>
                        <p>Join the waitlist now to secure your spot. Once we launch on App Store and Play Store, you'll be first in line.</p>
                    </div>
                    <div className="con-div">
                        <img src={walletImg} alt="wallet_fund"/>
                        <label>Fund Your Wallet</label>
                        <p>Direct instant transfers from any local bank or stablecoins. Fast deposits, fully secure.</p>
                    </div>
                    <div className="con-div">
                        <img src={transactImg} alt="trnasaction_direct"/>
                        <label>Start Transacting</label>
                        <p>Transfer assets instantly, chat in real-time, pool money, or pay bills with a tap.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}