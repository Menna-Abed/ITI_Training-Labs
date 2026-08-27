function PortfolioCard({ title, number }) {
  return (
    <div className={ number % 2 !== 0 ? "portfolio-card light" : "portfolio-card dark" } > {title} </div>
  );
}

export default PortfolioCard;