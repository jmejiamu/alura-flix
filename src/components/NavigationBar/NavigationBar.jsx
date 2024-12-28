import { Link } from "react-router";
import "./NavigationBar.css"; // Import the CSS file

export const NavigationBar = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <img src="../../../public/img/logo.png" alt="Logo" />
          </div>

          <div className="nav-buttons">
            <Link to="/" className="button button-primary">
              HOME
            </Link>
            <Link to="/new-video" className="button button-secondary">
              New Video
            </Link>
          </div>
        </nav>
      </header>
      <footer className="footer-nav">
        <Link to="/" className="button button-secondary">
          <span>🏠</span> HOME
        </Link>
        <Link to="/new-video" className="button button-primary">
          <span>➕</span> New Video
        </Link>
      </footer>
    </>
  );
};
