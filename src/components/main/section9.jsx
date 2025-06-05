import "../../style/main.css"
import _img  from "/images/jamie-ph.jpg"

export function Section9 () {
    return (
        <section className="section-1 padd-btm">
            <div className="section-1-img">
                <img src={_img} alt="jamie-image" />
            </div>

            <div className="section-1-cnt">
                <div className="section-1-header">
                    <span> Philanthropy and Advocacy: </span>
                    <span>Giving Voice to the Voiceless</span>
                </div>
                
                <div className="section-1-body">
                    Jamie has been involved in several charitable causes over the years, particularly those related to healthcare, mental health, and children’s welfare. He’s worked with NHS charities, UNICEF UK, and has supported fundraising for children’s hospitals in Ireland. During the COVID-19 pandemic, he actively participated in relief efforts and digital fundraisers, using his platform to support medical staff and frontline workers. <br />
                    Though not always vocal in the media, his actions behind the scenes consistently reflect a desire to do good and stay grounded in gratitude.
                </div>
            </div>
        </section>
    )
}