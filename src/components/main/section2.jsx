import "../../style/main.css"
import _img  from "/images/jamie (6).jpeg"

export function Section2 () {
    return (
        <section className="section-2" id="model-career">
            <div className="section-2-img">
                <img src={_img} alt="jamie-image" />
            </div>

            <div className="section-2-cnt">
                <div className="section-2-header">
                    <span>The Model Who Could Act: </span>
                    <span> A Launch Through Fashion </span>
                </div>
                
                <div className="section-2-body">
                    Jamie’s entry into the spotlight came through high fashion. Signed to Select Model Management, he quickly became one of the industry’s most in-demand male models in the early 2000s. Known for his rugged features, intense gaze, and quiet charisma, Dornan became the face of brands like Calvin Klein, Dior Homme, and Armani, sharing campaigns with top supermodels like Kate Moss and Eva Mendes. <br />
                    Dubbed “The Golden Torso” by the media, he graced global billboards and editorial covers, yet Jamie always saw modeling as a stepping stone to something more expressive. His transition to acting was not about vanity—it was about storytelling, vulnerability, and pushing creative boundaries.
                </div>
            </div>
        </section>
    )
}