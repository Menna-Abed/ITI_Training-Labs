import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

function NavBar() {
 const { lang, changeLanguage } = useContext(LanguageContext);

  return (
    <nav className="navbar">
      <Link to="/" className="logo"> Movie List </Link>

      <div className="navbar-right">
        <select value={lang} onChange={(e) => changeLanguage(e.target.value)}
          className="lang-select" >

          <option value="en">en</option>
          <option value="ar">ar</option>
        </select>

        <Link to="/watchlist" className="watchlist-btn"> 🖤 Watchlist </Link>

      </div>
    </nav>
  );
}

export default NavBar;