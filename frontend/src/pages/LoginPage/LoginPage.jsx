import { useNavigate } from "react-router-dom"
import { useState } from "react";
import './LoginPage.css'
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import twitter from '../../assets/images/twitter.png';

const LoginPage = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    return (
      <div className = "login-page">
        <div className = "login-left-pane" />

        <div className = "login-center-pane">
          <h1 className = "login-title">Login</h1>

          <div className="login-social-row">
            <img src={facebook} alt="Facebook Logo" className="facebook-logo" />
            <img src={instagram} alt="Instagram Logo" className="instagram-logo" />
            <img src={twitter} alt="Twitter Logo" className="twitter-logo" />
          </div>

          <div className = "login-input-group">
            <label>Username</label>
            <input
              className = "login-text-input"
              placeholder="Enter your username"
              value={username}
              onChange = {(e) => setUsername(e.target.value)}
            />
          </div>
          <div className = "login-input-group">
            <label>Password</label>
            <input
              className = "login-text-input"
              placeholder="Enter your password"
              value={password}
              onChange = {(e) => setPassword(e.target.value)}
            />
          </div>
          <button className = "signin-btn">Login</button>
        </div>
        <div className = "login-right-pane">
          <h2 className = "login-right-title">Don't have an account yet?</h2>
          <h1 className = "login-right-title">Sign Up</h1>
          <p className = "login-right-sub">Join us to hate bomb your prof!!</p>

          <button onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
      </div>
    )

}

export default LoginPage;