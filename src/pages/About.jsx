function About() {
  return (
    <main className="about-page">
      <section className="about-container">
        <p className="small-title">ABOUT THE PROJECT</p>

        <h1>About CyberSafe Analyzer</h1>

        <p className="about-intro">
          CyberSafe Analyzer is a simple cybersecurity awareness
          project designed to help users understand common online
          security risks.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h2>🔐 Password Security</h2>

            <p>
              The password checker analyzes basic password
              requirements such as length, uppercase letters,
              lowercase letters, numbers, and special characters.
            </p>
          </div>

          <div className="about-card">
            <h2>🌐 URL Security</h2>

            <p>
              The URL detector checks for common suspicious signs
              such as unusual URL length, IP addresses, the @ symbol,
              and suspicious keywords.
            </p>
          </div>

          <div className="about-card">
            <h2>🎯 Project Goal</h2>

            <p>
              The goal is to promote safer digital habits and
              demonstrate basic cybersecurity concepts through a
              simple interactive web application.
            </p>
          </div>
        </div>

        <div className="disclaimer">
          <h3>Educational Project</h3>

          <p>
            CyberSafe Analyzer uses simple rule-based checks.
            It is designed for cybersecurity learning and awareness
            and should not be considered a professional security
            scanner.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;