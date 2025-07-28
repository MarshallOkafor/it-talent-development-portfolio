import './HeroSection.css'

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>IT Talent Development Manager</h1>
          <p className="hero-subtitle">Building High-Performance Technology Teams</p>
          <p className="hero-description">
            Empowering organizations to attract, develop, and retain top IT talent through 
            strategic leadership, innovative training programs, and comprehensive 
            talent development solutions.
          </p>
          <div className="hero-actions">
            <button className="cta-primary">Explore Services</button>
            <button className="cta-secondary">Get In Touch</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <span>Professional Photo</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
