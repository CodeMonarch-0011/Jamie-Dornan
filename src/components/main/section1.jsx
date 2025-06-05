import "../../style/main.css"
import _img  from "/images/jamie (1).jpeg"

export function Section1 () {
    return (
        <section className="section-1" id="story">
            <div className="section-1-img">
                <img src={_img} alt="jamie-image" />
            </div>

            <div className="section-1-cnt">
                <div className="section-1-header">
                    <span>Born in Belfast: </span>
                    <span>A Story Begins</span>
                </div>
                
                <div className="section-1-body"> 
                    Born on May 1, 1982, in Holywood, County Down, Northern Ireland, Jamie Dornan grew up in a close-knit, culturally rich community just outside of Belfast. Raised in a family that nurtured both academic and creative pursuits, Jamie’s early years were marked by a love of sport, music, and performance. His father, a well-known obstetrician and academic, encouraged curiosity and discipline—two traits that would come to define Jamie’s diverse career. <br />
                    Following the untimely loss of his mother when he was just 16, Jamie found refuge in the arts. While attending Methodist College Belfast, he participated in school plays and musical groups, unknowingly setting the stage for a career that would span continents and genres. Later, he relocated to London, initially intending to pursue drama school but instead diving into the world of fashion modeling—a move that would open doors to the international entertainment industry.
                </div>
            </div>
        </section>
    )
}