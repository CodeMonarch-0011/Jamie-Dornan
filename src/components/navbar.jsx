import "../style/components.css"
import { CgMenuGridO } from 'react-icons/cg'
import { openMail, navigate } from "../utils/mailer";

export function Navbar ({ setSliderOpen, setContactOpen }) {
    return (
        <div className="navbar">
            <span className="navbar-logo"> JamieDornan </span>

            <nav className="navbar-navigation">
                <span onClick={() => navigate("#home")}>Home</span>
                <span onClick={() => navigate("#story")}>His Story</span>
                <span onClick={() => navigate("#model-career")}>Model Career</span>
               
            </nav>

            <button className="button" onClick={() => setContactOpen(true)}>
                Contact Us
            </button>

            <span className="mobile-menu-icon" onClick={() => {setSliderOpen(true); console.log('clidked')} }>
                <CgMenuGridO />
            </span>
        </div>
    )
}