import "./FAQ.css";








export default function FAQ() {
    return (
        <section className="faq-cont">

            <div className="faq-head">
                <span className="faq-label">
                    QUESTIONS
                </span>

                <h2>Frequently Asked Questions</h2>
            </div>


            <div className="faq-main">

                <div className="faq-box">
                    <div className="faq-question">
                        <span>When will Blingg launch publicly?</span>

                        <span className="faq-icon">+</span>
                    </div>

                    <div className="faq-answer">
                        <p>
                            We are currently operating in a Private Beta to
                            refine core transaction mechanics. Our general
                            public launch on iOS and Android is planned for
                            late Q2 2026.
                        </p>
                    </div>
                </div>


                <div className="faq-box">
                    <div className="faq-question">
                        <span>Is it completely free to join the waitlist?</span>

                        <span className="faq-icon">+</span>
                    </div>

                    <div className="faq-answer">
                        <p>
                            Yes. Joining the waitlist and participating in our
                            pre-launch community program is entirely free and
                            guarantees early benefits.
                        </p>
                    </div>
                </div>


                <div className="faq-box">
                    <div className="faq-question">
                        <span>What platforms will be supported?</span>

                        <span className="faq-icon">+</span>
                    </div>

                    <div className="faq-answer">
                        <p>
                            Blingg will release native applications built
                            specifically for Apple iOS through the App Store
                            and Google Android through the Play Store.
                        </p>
                    </div>
                </div>

            </div>

        </section>
    );
}