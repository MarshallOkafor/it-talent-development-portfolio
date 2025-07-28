import Navigation from './components/layout/Navigation'
import HeroSection from './components/sections/HeroSection'
import Section from './components/sections/Section'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      
      <HeroSection />
      
      <Section id="about" title="About Me" background="light">
        <div className="section-placeholder">
          <h3>Professional Background</h3>
          <p>
            Experienced IT Talent Development Manager with a proven track record of building 
            high-performance technology teams and implementing strategic talent development initiatives.
          </p>
        </div>
      </Section>
      
      <Section id="services" title="Services" background="dark">
        <div className="section-placeholder">
          <h3>IT Talent Development Services</h3>
          <p>
            Comprehensive consultancy services including talent acquisition strategy, 
            team development programs, leadership coaching, and organizational development.
          </p>
        </div>
      </Section>
      
      <Section id="experience" title="Experience" background="light">
        <div className="section-placeholder">
          <h3>Professional Experience</h3>
          <p>
            Over a decade of experience in IT leadership, talent management, and 
            organizational development across various industries and company sizes.
          </p>
        </div>
      </Section>
      
      <Section id="contact" title="Get In Touch" background="gradient">
        <div className="section-placeholder">
          <h3>Contact Information</h3>
          <p>
            Ready to discuss your IT talent development needs? Let's connect and 
            explore how we can build your high-performance technology team together.
          </p>
        </div>
      </Section>
    </div>
  )
}

export default App
