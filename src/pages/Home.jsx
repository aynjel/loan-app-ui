import About from './About'
import Contact from './Contact'
import { Link as ScrollLink } from 'react-scroll'

function Home() {
  return (
    <>
      <section className="home">
        <div className="home-content">
          <h1 className="home-title">Welcome to the Loan Application System</h1>
          <p className="home-text">This system is designed to help CEBECO 3 employee to apply for loan.</p>
          <div className="home-btns">
            <ScrollLink to="about" smooth={true} duration={500} className="home-btn">Learn More</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="home-btn">Contact Us</ScrollLink>
            </div>
        </div>
      </section>
      <About />
      <Contact />
    </>
    )
}

export default Home