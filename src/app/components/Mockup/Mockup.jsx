import "./Mockup.css"
import mockUp from '../../assets/Phone_Cluster_Container.png'
import encryptionImg from "../../assets/circle-x.png"
import ZeroFee from "../../assets/Vector_fees.png"
import Transfer from "../../assets/Vector-transfers.png"


export default function MockUp() {
    return(
        <div className="mockup-container">
            <div className="img-holder">
                <img src={mockUp} alt="default mockup-img" className="img-itself"/>
            </div>
            <div className="hero-txt">
                <div className="txt-div">
                    <img src={encryptionImg} alt="encryption_insure"  className="div-img"/>
                    <p>256-bit Encryption</p>
                </div>
                <div className="txt-div">
                    <img src={ZeroFee} alt="IsNot_fess" className="div-img"/>
                    <p>Zero Fees</p>
                </div>
                <div className="txt-div">
                    <img src={Transfer} alt="Instant_transfer" className="div-img"/>
                    <p>Instant Transfers</p>
                </div>
            </div>
        </div>
    )
}











