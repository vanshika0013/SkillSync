import "./Login.css";
import wave from "../../assets/wave.svg";
import { FaGithub } from "react-icons/fa";
import learn from "../../assets/learn.png";
import Practice from "../../assets/Practice.png";
import Build from "../../assets/Build.png";
import Achieve from "../../assets/Achieve.png";
import background from "../../assets/background.png"
import { useState } from "react";
import {useNavigate} from "react-router-dom";
function Login() {
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [rememberMe,setRememberMe]= useState(false);
  const navigate= useNavigate();
    console.log(email);
  console.log(password);
  console.log(rememberMe);

  const handleSubmit= (e) => {
    e.preventDefault();
    if(email.trim()===""){
      alert("Enter Email first");
      return;
    }
    else if(password.trim()===""){
      alert("Enter password first");
      return;
    }
    else if(!email.includes("@")){
      alert("Enter valid email");
      return;
    }
    else if(password.length < 6 ){
      alert("Enter stronger password");
      return;
    }
    console.log("Form submitted");
    navigate("/Skillsection");
    console.log(email);
    console.log(password);
    console.log(rememberMe);
  }
  return (
 <div className="login-page">
  <div className="left-panel">
    <div className="logo"> <span className="logo-icon"> &lt;/&gt; </span>SkillSync</div>
    <div className="hero-content">
      <h1 className="hero-heading">Your learning journey <br /> <span className="hero-span">starts here</span> </h1>
      <p>Small steps today,<br /><span>great skills</span> tomorrow</p>
    </div>

    <div className="journey-timeline">

    <img 
    src={wave}
    className="timeline-wave"
    alt=""
    />
    <div className="timeline-item">
      <span className="timeline-number">01</span>
      <div className="timeline-icon">
        <img src = {learn} alt="Learn"/>
      </div>
       <div className="timeline-dot"></div>
      <h4>Learn</h4>
      <p>Understand the basics</p>
    </div>

    <div className="timeline-item">
      <span className="timeline-number">02</span>
      <div className="timeline-icon">
        <img src={Practice} alt="Practice"/>
      </div>
       <div className="timeline-dot"></div>
      <h4>Practice</h4>
      <p>Solve problems and build skills</p>
    </div>

    <div className="timeline-item">
      <span className="timeline-number">03</span>
      <div className="timeline-icon">
        <img src={Build} alt="Build"/>
      </div>
       <div className="timeline-dot"></div>
      <h4>Build</h4>
      <p>Work on projects and apply concepts</p>
    </div>

    <div className="timeline-item">
      <span className="timeline-number">04</span>
      <div className="timeline-icon">
        <img src={Achieve} alt="Achieve"/>
      </div>
       <div className="timeline-dot"></div>
      <h4>Achieve</h4>
      <p>Track progress and level up </p>
    </div>

    </div>

    {/* <div className="left-decorations"></div> */}
  </div>

  <div className="right-panel">
    <div className="login-card">
      <div className="card-icon">
          &lt;/&gt;
      </div>

      <h2 className="login-title">Welcome Back </h2>

      <p className="login-subtitle">Let's continue your learning journey</p>

      <form className="login-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Email</label> <br/>
         <input type="email" placeholder="Email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
        </div>

        <div className="form-group">
          <label>Password</label> <br/>
          <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}
          />
        </div>
       
        
        <div className="options">
          <label className="RememberMe">
           <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e)=>setRememberMe(e.target.checked)}
                />
            Remember me
          </label>

          <span className="forgot-password">Forgot password?
          </span>
        </div>

        <button type="submit" className="continue-learning">Continue Learning</button> 
        <p className="or">or</p>
        <button type="button" className="github-btn">
          <FaGithub className="github-icon"/>
          Continue with GitHub</button>
      </form>

      <div className="signup-link">
        Don't have an account?{" "}
        <span onClick={() => navigate("/signup")}>Create Account</span>
      </div>
    </div>
    <p className="quote">Every expert was once a beginner.</p>
  </div>
 </div>
  );


}

export default Login;