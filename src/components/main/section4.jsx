import "../../style/main.css"
import _img  from "/images/jamie (5).jpeg"

export function Section4 () {
    return (
        <section className="section-2">
            <div className="section-2-img">
                <img src={_img} alt="jamie-image" />
            </div>

            <div className="section-2-cnt">
                <div className="section-2-header">
                    <span>Beyond Grey: </span>
                    <span> Acting with Grit and Depth </span>
                </div>
                
                <div className="section-2-body">
                    Determined to showcase his dramatic range, Jamie pivoted to darker, more nuanced roles. In BBC Two’s critically acclaimed crime series “The Fall” (2013–2016), he played Paul Spector, a chillingly intelligent serial killer opposite Gillian Anderson. Dornan’s performance was magnetic and disturbing, revealing his ability to humanize deeply flawed characters. The series earned him a British Academy Television Award nomination, further establishing his dramatic credibility. <br />
                    From there, Jamie starred in a range of independent and studio films. In “Anthropoid” (2016), he portrayed Czech resistance fighter Jan Kubiš in a WWII thriller based on the assassination of SS officer Reinhard Heydrich. He followed this with the Irish drama A Private War (2018), co-starring with Rosamund Pike, and Synchronic (2019), a mind-bending sci-fi film that challenged both actor and viewer.
                </div>
            </div>
        </section>
    )
}