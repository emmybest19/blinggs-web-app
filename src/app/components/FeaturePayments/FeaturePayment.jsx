import "./FeaturePayments.css"
import featurePay from "../../assets/payments-main-img.png"






export default function FeaturePayment(){
    return(
        <div className="pay-cont">
            <div className="pay-left">
                <span className="pay-label">PAYMENTS</span>
                <label> Smart Payments</label>
                <p>Enjoy rapid transfers, direct debit mandates, and contactless utilities. Instant confirmation guarantees absolute peace of mind.</p>
                <div className="p-div">
                    <div className="p_txt">
                        <div className="tick">✓</div>
                        <p>Zero transfer fees</p>
                    </div>
                    <div className="p_txt">
                        <div className="tick">✓</div>
                        <p>All Nigerian banks supported</p>
                    </div>
                    <div className="p_txt">
                        <div className="tick">✓</div>
                        <p>256-bit encryption standards </p>
                    </div>
                </div>
            </div>
            <div className="pay-right">
                <img src={featurePay} alt="smart_payments"/>
            </div>
        </div>
    )
}