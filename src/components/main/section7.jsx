import "../../style/main.css"
import _img  from "/images/jamie (2).jpeg"

export function Section7 () {
    return (
        <section className="section-2 section-7">
            <div className="section-2-img">
                <img src={_img} alt="jamie-image" />
            </div>

            <div className="section-2-cnt">
                <div className="section-2-header">
                    <span></span>
                    <span>Comedy, Satire, and Self-Awareness</span>
                </div>
                
                <div className="section-2-body">
                    In recent years, Dornan has proven he’s not afraid to poke fun at himself or dive into the absurd. His role in the 2022 satirical comedy “Barb and Star Go to Vista Del Mar”, where he played the lovably clueless Edgar Pagét, was a revelation. His comedic chops—particularly in the musical number “Edgar’s Prayer”—won over critics and introduced Jamie to a new generation of fans. <br />
                    This willingness to take risks, try new genres, and embrace offbeat projects highlights Dornan’s evolving creative philosophy: don’t play it safe; play it honest.
                </div>
            </div>
        </section>
    )
}