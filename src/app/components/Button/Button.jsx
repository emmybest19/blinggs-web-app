import { Link } from 'react-router-dom'
import './Button.css'

export default function Button() {
    return (
        <div className="button-container">
                <Link to="/waitlist" className="btn-waitlist"> Join Waitlist</Link>
                <Link to="/affiliate" className="btn-affiliate">Our Affiliate Program</Link>
            </div>
    )
}