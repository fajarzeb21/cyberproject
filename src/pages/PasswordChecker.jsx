import { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);

  const checkPassword = () => {
    let score = 0;
    let checks = [];

    if (password.length >= 8) {
      score++;
      checks.push("Good password length");
    } else {
      checks.push("Password should have at least 8 characters");
    }

    if (/[A-Z]/.test(password)) {
      score++;
      checks.push("Contains uppercase letter");
    } else {
      checks.push("Add an uppercase letter");
    }

    if (/[a-z]/.test(password)) {
      score++;
      checks.push("Contains lowercase letter");
    } else {
      checks.push("Add a lowercase letter");
    }

    if (/[0-9]/.test(password)) {
      score++;
      checks.push("Contains a number");
    } else {
      checks.push("Add a number");
    }

    if (/[^A-Za-z0-9]/.test(password)) {
      score++;
      checks.push("Contains a special character");
    } else {
      checks.push("Add a special character");
    }

    let strength = "Weak";

    if (score >= 4) {
      strength = "Strong";
    } else if (score >= 3) {
      strength = "Medium";
    }

    setResult({
      score,
      strength,
      checks,
    });
  };

  return (
    <main className="checker-page">
      <section className="checker-container">
        <p className="small-title">PASSWORD SECURITY</p>

        <h1>Password Strength Checker</h1>

        <p className="checker-intro">
          Check your password against basic security requirements
          and get suggestions for making it stronger.
        </p>

        <div className="password-box">
          <label>Enter your password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />

          <button onClick={checkPassword}>
            Check Password
          </button>
        </div>

        {result && (
          <div className="result-box">
            <h2>
              Security Level: {result.strength}
            </h2>

            <p>
              Score: {result.score}/5
            </p>

            <div className="checks">
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

export default PasswordChecker;