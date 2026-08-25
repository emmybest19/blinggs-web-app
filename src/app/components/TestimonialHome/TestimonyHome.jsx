import "./TestimonyHome.css";
import TestimonyStar from "../../assets/testimony-Home_Stars.png"


export default function TestimonyHome(){
    return(
        <div className="textimony">
            <h1>Loved by early testers</h1>
            <div className="testimony-cont">
                <div className="textimony-box">
                    <div className="qoute">
                        <p>“</p>
                        <img src={TestimonyStar} alt="testimony_default_qoute"/>
                    </div>
                    <div className="main-textimoy">
                        <p>I signed up for the waitlist the moment I saw the concept. An app that combines messaging with payments and group savings? This is exactly what my friend group needs.</p>
                    </div>
                    <div className="testifier-bio">
                        <h3>Demola Adebayor</h3>
                        <p>Waitlist Member</p>
                    </div>
                </div>
                <div className="textimony-box">
                    <div className="qoute">
                        <p>“</p>
                        <img src={TestimonyStar} alt="testimony_default_qoute"/>
                    </div>
                    <div className="main-textimoy">
                        <p>As a freelancer, converting crypto to Naira is a constant headache. Blingg's promise of instant conversion at competitive rates has me counting down to launch day.</p>
                    </div>
                    <div className="testifier-bio">
                        <h3>Chinedu Okafor</h3>
                        <p>Waitlist Member</p>
                    </div>
                </div>
                <div className="textimony-box">
                    <div className="qoute">
                        <p>“</p>
                        <img src={TestimonyStar} alt="testimony_default_qoute"/>
                    </div>
                    <div className="main-textimoy">
                        <p>Our cooperative has been looking for a transparent group savings tool. The multi-signature approval and public ledger features Blingg is building are exactly what we need.</p>
                    </div>
                    <div className="testifier-bio">
                        <h3>Mariam Aliyu</h3>
                        <p>Waitlist Member</p>
                    </div>
                </div>
            </div>
        </div>
    )
}















// export default function TestimonyHome() {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const testimonies = [
//         {
//             text: "I signed up for the waitlist the moment I saw the concept. An app that combines messaging with payments and group savings? This is exactly what my friend group needs.",
//             name: "Demola Adebayor",
//             role: "Waitlist Member"
//         },
//         {
//             text: "As a freelancer, converting crypto to Naira is a constant headache. Blingg's promise of instant conversion at competitive rates has me counting down to launch day.",
//             name: "Chinedu Okafor",
//             role: "Waitlist Member"
//         },
//         {
//             text: "Our cooperative has been looking for a transparent group savings tool. The multi-signature approval and public ledger features Blingg is building are exactly what we need.",
//             name: "Mariam Aliyu",
//             role: "Waitlist Member"
//         },
//         {
//             text: "The combination of messaging and financial tools is what makes Blingg interesting to me. Everything feels connected instead of having to switch between different apps.",
//             name: "Ifeanyi Okeke",
//             role: "Early Tester"
//         },
//         {
//             text: "Managing contributions with friends can sometimes be stressful. A platform that makes group savings transparent and easy to track would be incredibly useful.",
//             name: "Aisha Bello",
//             role: "Waitlist Member"
//         },
//         {
//             text: "I really like the idea of being able to chat, transfer money, and manage shared finances from one place. It feels like the direction modern apps should be going.",
//             name: "Tosin Williams",
//             role: "Early Tester"
//         }
//     ];

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActiveIndex((prevIndex) =>
//                 prevIndex === testimonies.length - 1
//                     ? 0
//                     : prevIndex + 1
//             );
//         }, 5000);

//         return () => clearInterval(interval);
//     }, [testimonies.length]);


//     return (
//         <section className="textimony">
//             <h1>Loved by early testers</h1>
//             <div className="testimony-cont">
//                 {testimonies.map((testimony, index) => (
//                     <div
//                         className={`textimony-box ${
//                             index === activeIndex ? "active-testimony" : ""
//                         }`}
//                         key={index}
//                     >

//                         <div className="qoute">
//                             <div className="stars">
//                                 ★ ★ ★ ★ ★
//                             </div>
//                         </div>
//                         <div className="main-textimoy">
//                             <p>{testimony.text}</p>
//                         </div>
//                         <div className="testifier-bio">
//                             <h3>{testimony.name}</h3>
//                             <p>{testimony.role}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
