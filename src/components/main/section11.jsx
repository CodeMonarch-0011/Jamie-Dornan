import "../../style/main.css"
import { AiFillInstagram } from "react-icons/ai"
import { FaFacebookSquare } from "react-icons/fa"
import { openSocial } from "../../utils/mailer"


function Copyright () {
    return (
        <div className="copyright">
            Copyright©2025. All Rights Reserved
        </div>
    )
}

export function Section11 ({setContactOpen}) {
    return (
        <div className="section-8" id="contact">
            <span className="section-8-header">A Legacy of Subtle Strength</span>

            <span>
                Jamie Dornan defies easy categorization. He’s not just the romantic lead, the fashion icon, or the indie darling—he’s all of these and more. His career is a study in contrast: mainstream and arthouse, charming and haunting, light-hearted and profoundly serious. With each new role, Dornan proves that he is still evolving—not chasing trends but setting a personal standard of honesty, craftsmanship, and emotional truth. <br />
                He brings Northern Irish grit to Hollywood storytelling, blending talent with resilience in a way few actors can match.
            </span>

            <button className="button secondary-button" onClick={() => setContactOpen(true)}> Reach Out To Us</button>

            <div className="section-8-contacts">
                <span onClick={() => openSocial("https://www.instagram.com/jamiedornan?igsh=YWRnZnpnZTNubjFq")}> <AiFillInstagram /> </span>
                <span onClick={() => openSocial("https://www.facebook.com/share/15YpJ8pPa9/?mibextid=qi2Omg")}> <FaFacebookSquare /> </span>
            </div>

            <Copyright />
        </div>
    )
}