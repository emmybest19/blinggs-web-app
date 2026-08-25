import "./Groups.css"
import groupImg from "../../assets/group-img-feature.png"







export default function Groups(){
    return(
        <div className="chat-cont">
            <div className="chat-lft">
                <img src={groupImg} alt="chat_and_pay" />
            </div>
            <div className="chat-rgt">
                <div className="rght-m-label">
                    <span>GROUPS</span>
                </div>
                <h2>Create & manage groups</h2>
                <p>Organize shared expenses with public groups anyone can join, and keep close circles private with invite-only contributions.</p>
                <div className="p-div">
                    <div className="p_txt">
                        <div className="tick">✓</div>
                        <p>Public groups for community contributions</p>
                    </div>
                    <div className="p_txt">
                        <div className="tick">✓</div>
                        <p>Private groups for close circles</p>
                    </div>
                    <div className="p_txt">
                        <div className="tick">✓</div>
                        <p>Invite-only access and member management</p>
                    </div>
                </div>
            </div>
        </div>
    )
}