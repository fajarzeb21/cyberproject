import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <p className="small-title">CYBERSECURITY TOOLKIT</p>

        <h1>
          Stay Safe in the <span>Digital World</span>
        </h1>

        <p className="hero-text">
          CyberSafe helps you check password strength and identify
          suspicious URLs using simple security analysis.
        </p>

        <div className="hero-buttons">
          <Link to="/password" className="primary-btn">
            Check Password
          </Link>

          <Link to="/url" className="secondary-btn">
            Analyze URL
          </Link>
        </div>
      </section>

      <section className="tools">
        <div className="tool-card">
          <div className="tool-icon">🔐</div>
          <h2>Password Security</h2>

          <p>
            Check your password strength and get useful security
            recommendations.
          </p>

          <Link to="/password">
            Try Password Checker →
          </Link>
        </div>

        <div className="tool-card">
          <div className="tool-icon">🌐</div>
          <h2>URL Security</h2>

          <p>
            Analyze a website URL and identify common signs of
            suspicious or phishing links.
          </p>

          <Link to="/url">
            Try URL Detector →
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;