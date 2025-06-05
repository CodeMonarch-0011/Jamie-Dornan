import "../../style/main.css"
import _img  from "/images/jamie (4).jpeg"

export function Section5 () {
    return (
        <section className="section-1">
            <div className="section-1-img">
                <img src={_img} alt="jamie-image" />
            </div>

            <div className="section-1-cnt">
                <div className="section-1-header">
                    <span>Belfast: </span>
                    <span>A Career-Defining Homecoming</span>
                </div>
                
                <div className="section-1-body">
                    In 2021, Jamie delivered what many consider his most profound performance in Kenneth Branagh’s semi-autobiographical film “Belfast.” Set during the Troubles in Northern Ireland, the film was both intimate and political, resonating with audiences worldwide. Dornan played Pa, a devoted father struggling to keep his family safe and intact amidst chaos. <br />
                    The film won the People’s Choice Award at the Toronto International Film Festival, was nominated for seven Academy Awards, and brought Jamie widespread critical acclaim. His moving rendition of “Everlasting Love” in one of the film’s pivotal scenes showcased not only his acting but also his often-overlooked musical talent.
                </div>
            </div>
        </section>
    )
}