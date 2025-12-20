import { useNavigate } from "react-router-dom"
import { useState } from "react";
import './SignupPage.css'
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import twitter from '../../assets/images/twitter.png';

const SignupPage = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    return (
      <div className = "signup-page">
        <div className = "signup-left-pane">
          <h1 className = "signup-left-title">Welcome Back</h1>
          <button onClick={() => navigate("/login")}>Sign In</button>
        </div>

        <div className = "signup-center-pane">
          <h1 className = "signup-title">Sign Up</h1>

          <div className="signup-social-row">
            <img src={facebook} alt="Facebook Logo" className="facebook-logo" />
            <img src={instagram} alt="Instagram Logo" className="instagram-logo" />
            <img src={twitter} alt="Twitter Logo" className="twitter-logo" />
          </div>

          <div className = "signup-input-group">
            <label>Username</label>
            <input
              className = "signup-text-input"
              placeholder="Enter your username"
              value={username}
              onChange = {(e) => setUsername(e.target.value)}
            />
          </div>
          <div className = "signup-input-group">
            <label>Email</label>
            <input
              className = "signup-text-input"
              placeholder="Enter your email"
              value={email}
              onChange = {(e) => setEmail(e.target.value)}
            />
          </div>
          <div className = "signup-input-group">
            <label>Password</label>
            <input
              className = "signup-text-input"
              placeholder="Enter your password"
              value={password}
              onChange = {(e) => setPassword(e.target.value)}
            />
          </div>
          <button className = "signup-btn">Sign up</button>
        </div>
      </div>
    )

}

export default SignupPage;