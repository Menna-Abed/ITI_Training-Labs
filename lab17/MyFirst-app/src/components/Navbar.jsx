function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <a href="#home" className="logo">HOME</a>
        <div className="nav-links">
          <a href="#services">SERVICES</a>
          <a href="#portfolio">PORTFOLIO</a>
          <a href="#team"> TEAM</a>
          <a href="#contact"> CONTACT</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;