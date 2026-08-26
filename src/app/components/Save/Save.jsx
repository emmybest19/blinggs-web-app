import "./Save.css"








export default function Save(){
    return(
        <div className="save-cont">
            <div className="save-top">
                <div className="save-top-label">
                    <span>SAVINGS COOPERATIVES</span>
                </div>
                <h2>Two ways to save together</h2>
                <p>Whether it is coordinate-based daily savings pools or secure trust accounts, Blingg delivers complete transparency.</p>
            </div>
            <div className="save-main">
                <div className="save-main-cards">
                    <label className="label">Personal Groups</label>
                    <p className="p">Best for family networks, close friends, and housemate groups. Features single-admin simplified setups, zero-token instant drawouts, and conversational oversight.</p>
                    <div className="p-div">
                        <div className="p_txt">
                            <div className="tick">✓</div>
                            <p>Admin-controlled payout priority</p>
                        </div>
                        <div className="p_txt">
                            <div className="tick">✓</div>
                            <p>Trusted inner circle security</p>
                        </div>
                        <div className="p_txt">
                            <div className="tick">✓</div>
                            <p>Direct peer messaging built-in </p>
                        </div>
                    </div>
                </div>
                <div className="save-main-cards">
                    <label className="label">Public Groups</label>
                    <p className="p">Engineered for formal cooperatives, community clubs, and investments. Offers multi-signature approval triggers, ledger audits, and smart-contract protocol rules.</p>
                    <div className="p-div">
                        <div className="p_txt">
                            <div className="tick">✓</div>
                            <p>Multi-sig smart wallet release locks</p>
                        </div>
                        <div className="p_txt">
                            <div className="tick">✓</div>
                            <p>Comprehensive public ledger record</p>
                        </div>
                        <div className="p_txt">
                            <div className="tick">✓</div>
                            <p>Democratic vote-to-pay protocols</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}