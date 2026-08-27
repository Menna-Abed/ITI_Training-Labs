import SocialMedia from "./Social";
function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-content">
        <p> Copyright © Mystudio 2022 </p> 
         <SocialMedia />
        <div className="footer-links">
          <a href="#home"> Privacy Policy </a>
          <a href="#home">  Terms of Use </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;