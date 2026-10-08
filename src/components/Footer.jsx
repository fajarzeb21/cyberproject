import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div>
          <h3>🛡️ CyberSafe</h3>
          <p>
            A simple cybersecurity toolkit for safer digital habits.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/password">Password Security</Link>
          <Link to="/url">URL Detector</Link>
          <Link to="/about">About</Link>
        </div>

        <div>
          <h4>Project</h4>
          <p>Cybersecurity Awareness</p>
          <p>Password Analysis</p>
          <p>Phishing Detection</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 CyberSafe Analyzer. Educational project.</p>
      </div>
    </footer>
  );
}

export default Footer;