import "./EverythingNeed.css"
import message from "../../assets/message-square.png"
import mainMessage from "../../assets/message-main img.png"
import smart from "../../assets/credit-card-payments.png"
import smartPayment from "../../assets/payments-main-img.png"
import group from "../../assets/group-icon.png"
import groupChat from "../../assets/group-chat-img.png"







export default function EverythingYouNeed(){
    return(
        <div className="container">
            <div className="h1">
                <h2>Everything you need.</h2>
                <h4>Nothing you don't</h4>
            </div>
            <div className="card-parent">
                <div className="parent-flex-card">
                    <div className="flx-card">
                        <div className="left-flx">
                            <img src={message} alt="default_message_icon" className="icon"/>
                            <div className="lf-txt">
                                <label>Chat & Pay</label>
                                <p>Messaging and commerce blended into one smooth flow. Request money and send receipts natively within the conversation.</p>
                            </div>
                        </div>
                        <img src={mainMessage} alt="contact_img" className="main_img"/>
                    </div>
                </div>

                <div className="parent-flex-card">
                    <div className="flx-card">
                        <div className="left-flx">
                            <img src={smart} alt="default_message_icon" className="icon"/>
                            <div className="lf-txt">
                                <label>Smart Payments</label>
                                <p>Enjoy rapid transfers, direct debit mandates, and contactless utilities. Instant confirmation guarantees absolute peace of mind.</p>
                            </div>
                        </div>
                        <img src={smartPayment} alt="wallet_default_img" className="main_img"/>
                    </div>
                </div>

                <div className="parent-flex-card-horizontal">
                    <div className="flx-card-horizontal">
                        <div className="left-flx-horizontal">
                            <img src={group} alt="default_message_icon" className="icon-horizontal"/>
                            <div className="lf-txt-horizontal">
                                <label>Group Power</label>
                                <p>Pool resources effortlessly. Set joint targets, coordinate mutual savings circles, and watch collective wealth compound automatically.</p>
                            </div>
                        </div>
                        <img src={groupChat} alt="default_group_conversation" className="main_img-horizontal"/>
                    </div>
                </div>

            </div>
        </div>
    )
}