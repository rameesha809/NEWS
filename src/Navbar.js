import { Link } from 'react-router-dom'
import { useState } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';

import M from 'materialize-css';
export default function Navbar(props) {

  const [showSearch, setShowSearch] = useState(false);
  useEffect(() => {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
  }, []);
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  }
  return (
    <div>
      <nav style={{ backgroundColor: "black", color: "white", marginTop: "0", marginBottom: "50", position: "fixed", top: "0", width: "100%", zIndex: "1000" }}>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            <i className="material-icons">cloud</i>News Studio
          </Link>
          <a href="#!" data-target="mobile-demo" class="right sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right">
            <li><Link to="/later">Later</Link></li>
            <li>
              <a href="#!" onClick={toggleSearch}>
                <i className="material-icons">search</i>
              </a>
            </li>
            <li><Link to="/form"><span class="material-icons" style={{ paddingTop: "20px" }} >login</span></Link></li>
          </ul>
          <ul class="right hide-on-med-and-down">
            <li><Link to="/en">en</Link></li>
            <li><Link to="/es">es</Link></li>
            <li><Link to="/fr">fr</Link></li>
            <li><Link to="/he">he</Link></li>
            <li><Link to="/it">it</Link></li>
            <li><Link to="/nl">nl</Link></li>
            <li><Link to="/no">no</Link></li>
            <li><Link to="/pt">pt</Link></li>
            <li><Link to="/ru">ru</Link></li>
            <li><Link to="/sv">sv</Link></li>
            <li><Link to="/ud">ud</Link></li>
            <li><Link to="/zh">zh</Link></li>


          </ul>

        </div>
      </nav>
      <ul class="sidenav" id="mobile-demo" style={{ paddingTop: "70px", zIndex: "999" }}>
        <li><Link to="/">Components</Link></li>
        <li><Link to="/en">en</Link></li>
        <li><Link to="/es">es</Link></li>
        <li><Link to="/fr">fr</Link></li>
        <li><Link to="/he">he</Link></li>
        <li><Link to="/it">it</Link></li>
        <li><Link to="/nl">nl</Link></li>
        <li><Link to="/no">no</Link></li>
        <li><Link to="/pt">pt</Link></li>
        <li><Link to="/ru">ru</Link></li>
        <li><Link to="/sv">sv</Link></li>
        <li><Link to="/ud">ud</Link></li>
        <li><Link to="/zh">zh</Link></li>


      </ul>
      <div style={{ paddingBottom: showSearch ? "50px" : "0" }}>
        {showSearch && (
          <div style={{ position: "fixed", top: "64px", width: "100%", backgroundColor: "white", padding: "10px", display: "flex", zIndex: "999", alignContent: "center", justifyContent: "center" }}>
            <input
              type="text"
              placeholder="Search..."
              style={{ width: "70%", padding: "10px", fontSize: "16px", display: "flex", Index: "999", alignContent: "center", justifyContent: "center" }}
            />
          </div>
        )}
      </div>
    </div>
  )
}


