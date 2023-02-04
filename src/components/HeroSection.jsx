import HeroDesktop from '../images/image-hero-desktop.png';
import HeroMobile from '../images/image-hero-mobile.png';
function HeroSection({ClientDataBiz, ClientAudioPhile, ClientMeet,  ClientMaker}) {
  return (
    <section className="hero-section">
      <div className="first-section">
        <h1>Make remote work</h1>
        <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and  watch productivity soar.</p>
        <div className="btn-container"><button>Learn more</button></div>
        <div className="icon-section">
            <img src={ClientDataBiz} />
            <img src={ClientAudioPhile} />
            <img src={ClientMeet} />
            <img src={ClientMaker} />
        </div>
      </div>
      <div className="second-section">
        <img src={HeroDesktop} className='image-desktop'/>
        <img src={HeroMobile} className='image-mobile' />
      </div>
    </section>
  )
}

export default HeroSection;
