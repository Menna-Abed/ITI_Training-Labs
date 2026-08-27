import PortfolioCard from "./PortfolioCard";

function Portfolio() {
 const projects = [
    { id: 1, title: "WEB DESIGN" },
    { id: 2, title: "MOBILE DESIGN" },
    { id: 3, title: "LOGO DESIGN" },
    { id: 4, title: "WEB APPLICATION DEVELOPMENT" },
    { id: 5, title: "MOBILE APPLICATION DEVELOPMENT" },
    { id: 6, title: "PWA DEVELOPMENT" },
  ];

  return (
     <section className="portfolio">
      <h2>Portfolio</h2>

      <div className="portfolio-container">
        {projects.map((project) => (
          <PortfolioCard key={project.id} title={project.title}  number={project.id} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;