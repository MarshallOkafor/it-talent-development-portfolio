import './Section.css'

const Section = ({ id, title, children, className = '', background = 'light' }) => {
  return (
    <section id={id} className={`section ${background} ${className}`}>
      <div className="section-container">
        <h2 className="section-title">{title}</h2>
        <div className="section-content">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Section
