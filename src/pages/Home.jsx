import About from './About'
import Contact from './Contact'

function Home() {
  return (
    <>
      <section className="home">
        <div className="home-content">
          <h1 className="home-title">Welcome to the Loan Application System</h1>
          <p className="home-text">This system is designed to help CEBECO 3 employee to apply for loan.</p>
        </div>
      </section>
      <About />
      <Contact />
    </>
    )
}

export default Home