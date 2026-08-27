import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import PortfolioItem from "./components/PortfolioItem";
import TeamMember from "./components/TeamMember";  
import Clients from "./components/Clients";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="services section" id="services">
        <div className="container">
          <div className="section-title">
                <h2>SERVICES</h2>
      <p> Lorem ipsum dolor sit amet consectetur. </p>

    </div>
          <div className="services-container">
            <Service />
            <Service />
            <Service />
          </div>
        </div>

      </section>

      <section className="portfolio section" id="portfolio">
        <div className="container">

         <div className="section-title">
      <h2>PORTFOLIO</h2>
      <p> Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.  </p>
    </div>

          <div className="portfolio-container">
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
          </div>
        </div>
      </section>

      <section className="team section" id="team">

        <div className="container">
          <div className="section-title">
      <h2>OUR AMAZING TEAM</h2>
      <p>  Lorem ipsum dolor sit amet consectetur. </p>
    </div>

          <div className="team-container">
            <TeamMember />
            <TeamMember />
            <TeamMember />
          </div>
          <p className="team-description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aut eaque, laboriosam veritatis quos non quis ad
      perspiciatis, totam corporis ea, alias ut unde.
    </p>
        </div>
      </section>
      <Clients />
      <Footer />
    </>
  );
}
export default App;