import _img  from "/images/jamie (3).jpeg"
import "../../style/main.css"

export function Section3 () {
    return (
        <section className="section-1">
            <div className="section-1-img">
                <img src={_img} alt="jamie-image" className="align-image" />
            </div>

            <div className="section-1-cnt">
                <div className="section-1-header">
                    <span>From Shadows to Spotlight: </span>
                    <span>Fifty Shades of Breakthrough</span>
                </div>
                
                <div className="section-1-body"> 
                    Jamie’s major acting breakthrough came in 2013, when he was cast as Christian Grey, the enigmatic lead in the global phenomenon Fifty Shades of Grey, adapted from E.L. James’ bestselling novels. The trilogy—Fifty Shades of Grey (2015), Fifty Shades Darker (2017), and Fifty Shades Freed (2018)—catapulted Dornan into international fame, earning over $1.3 billion worldwide. <br />
                    Though the role was controversial and polarizing, Dornan’s performance brought complexity to a character often viewed through a single lens. He portrayed Christian not just as a dominant billionaire, but as a man grappling with trauma, control, and emotional connection. The success of the franchise opened the floodgates to a flood of roles—but Dornan refused to be typecast.
                </div>
            </div>
        </section>
    )
}