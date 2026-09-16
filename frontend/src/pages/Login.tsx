import { FormEvent, useState } from "react";
import { ArrowRight, LockKeyhole, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!username || !password) {
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-brand-panel">
        <div className="login-brand">
          <div className="brand-icon">F</div>
          <span>FlowDesk</span>
        </div>

        <div className="brand-content">
          <h1>Manage workflows with clarity.</h1>
          <p>
            Track requests, vendors, workflow stages and business operations
            from one centralized platform.
          </p>
        </div>

        <div className="brand-footer">
          Business Workflow & Request Management Platform
        </div>
      </div>

      <div className="login-form-panel">
        <div className="login-card">
          <div className="login-heading">
            <h2>Welcome back</h2>
            <p>Sign in to continue to FlowDesk</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>

              <div className="input-wrapper">
                <User size={18} />

                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>

              <div className="input-wrapper">
                <LockKeyhole size={18} />

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <button type="button" className="forgot-password">
                Forgot password?
              </button>
            </div>

            <button type="submit" className="login-button">
              Sign in
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="login-note">
            Demo authentication — backend integration will be added later.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;