import { useState } from "react";

function URLDetector() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const checkURL = () => {
    if (!url.trim()) {
      setResult({
        score: 0,
        status: "Please enter a URL",
        checks: ["Enter a website URL before analyzing."],
      });
      return;
    }

    let score = 0;
    let checks = [];

    if (url.startsWith("https://")) {
      checks.push("Uses HTTPS");
    } else {
      score++;
      checks.push("Does not use HTTPS");
    }

    if (/@/.test(url)) {
      score++;
      checks.push("Contains @ symbol");
    } else {
      checks.push("No @ symbol detected");
    }

    if (url.length > 75) {
      score++;
      checks.push("URL is unusually long");
    } else {
      checks.push("URL length looks normal");
    }

    if (
      /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(url)
    ) {
      score++;
      checks.push("Contains an IP address");
    } else {
      checks.push("No IP address detected");
    }

    if (
      /login|verify|account|update|secure|bank|password/i.test(url)
    ) {
      score++;
      checks.push("Contains suspicious keywords");
    } else {
      checks.push("No common suspicious keywords");
    }

    let status = "Likely Safe";

    if (score >= 3) {
      status = "Dangerous";
    } else if (score >= 1) {
      status = "Suspicious";
    }

    setResult({
      score,
      status,
      checks,
    });
  };

  const resultClass = result
    ? result.status.toLowerCase().replace(/\s+/g, "-")
    : "";

  return (
    <main className="url-page">
      <section className="url-container">
        <p className="small-title">URL SECURITY</p>

        <h1>Suspicious URL Detector</h1>

        <p className="url-intro">
          Analyze a website URL for common signs that may indicate
          phishing or suspicious activity.
        </p>

        <div className="url-box">
          <label>Enter website URL</label>

          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
          />

          <button onClick={checkURL}>
            Analyze URL
          </button>
        </div>

        {result && (
          <div className={`url-result ${resultClass}`}>
            <h2>{result.status}</h2>

            <p>
              Risk Score: {result.score}/5
            </p>

            <div className="url-checks">
              {result.checks.map((check, index) => (
                <p key={index}>• {check}</p>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default URLDetector;