import "../../style/main.css"
import jamie from "/images/jamie (7).jpeg"

export function Banner({setContactOpen}) {
    return (
        <section className="main-page-banner" id="home">
            <div className="main-page-banner-content">
                <div className="main-page-banner-header">
                    <span> Jamie Dornan: <span className="text-backdrop" /> </span> <br /> From Belfast to the Big Screen 🎬
                </div>

                <span> 
                    <span> Actor </span>
                    <span>|</span> 
                    <span> Musician </span> 
                    <span>|</span> 
                    <span>Storyteller </span>
                    <span>|</span> 
                    <span>Northern Irish Icon </span>
                </span>

                <button className="button" onClick={() => setContactOpen(true)}>
                    Get in Touch
                </button>
            </div>

            <div className="main-page-banner-bck-img">
                <img src={jamie} alt="jamie-img" />

                <div className="pink-ball" />
                <div className="pink-ball" />
                <div className="pink-ball" />
            </div>


        </section>
    )
}