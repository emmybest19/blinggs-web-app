import "./FeatureChat.css"
import chatFeatureImg from "../../assets/chat-conversation.png"


export default function FeatureChat(){
    return(
        <div className="chat-cont">
            <div className="chat-lft">
                <img src={chatFeatureImg} alt="chat_and_pay" />
            </div>
            <div className="chat-rgt">
                <div className="rght-m-label">
                    <span>MESSAGING</span>
                </div>
                <h2>Chat & Pay</h2>
                <p>Messaging and commerce blended into one smooth flow. Request money and send receipts natively within the conversation.</p>
                <div className="p-div">
                    <div className="p_txt">
                        <div className="tick">✓</div>
                        <p>End-to-end encrypted messages</p>
                    </div>
                    <div className="p_txt">
                        <div className="tick">✓</div>
                        <p>Send money mid-conversation</p>
                    </div>
                    <div className="p_txt">
                        <div className="tick">✓</div>
                        <p>Voice notes, images &amp; payments in one thread</p>
                    </div>
                </div>
            </div>
        </div>
    )
}