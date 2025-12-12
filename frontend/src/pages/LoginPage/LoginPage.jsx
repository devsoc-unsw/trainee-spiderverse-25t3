import { useNavigate } from "react-router-dom"
import { useState } from "react";
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
        <div className = "left-pane" />

        <div className = "center-pane">
          <h1 className = "title">Login</h1>

          <div className="social-row">
            <img src={facebook} alt="Facebook Logo" className="facebook-logo" />
            <img src={instagram} alt="Instagram Logo" className="instagram-logo" />
            <img src={twitter} alt="Twitter Logo" className="twitter-logo" />
          </div>

          <div className = "input-group">
            <label>Username</label>
            <input
              className = "text-input"
              placeholder="Enter your username"
              value={username}
              onChange = {(e) => setUsername(e.target.value)}
            />
          </div>
          <div className = "input-group">
            <label>Password</label>
            <input
              className = "text-input"
              placeholder="Enter your password"
              value={password}
              onChange = {(e) => setPassword(e.target.value)}
            />
          </div>
          <button className = "signin-btn">Login</button>
        </div>
        <div className = "right-pane">
          <h2 className = "right-title">Don't have an account yet?</h2>
          <h1 className = "right-title">Sign Up</h1>
          <p className = "right-sub">Join us to hate bomb your prof!!</p>

          <button onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
      </div>
    )

}

export default LoginPage;