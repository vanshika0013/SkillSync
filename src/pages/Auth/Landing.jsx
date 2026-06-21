import "./Landing.css";
import background3 from "../../assets/background3.png";
import "./Login.jsx";
import "./Signup.jsx";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function Landing() {
  const navigate= useNavigate();
  const homeRef = useRef(null);
const featuresRef = useRef(null);
  return (
    <div className="landing-page">

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo">
          <span className="logo-icon">
            &lt;/&gt;
          </span>

          SkillSync
        </div>

        <ul className="nav-links">
          <li onClick={() =>
    homeRef.current.scrollIntoView({
      behavior: "smooth"
    })
  } >Home</li>
          <li   onClick={() =>
    featuresRef.current.scrollIntoView({
      behavior: "smooth"
    })
  }>Features</li>
          <li onClick={()=> navigate("/login")}>Roadmaps</li>
          <li onClick={()=> navigate("/login")}>Testimonials</li>
          <li onClick={()=> navigate("/login")}>About</li>
        </ul>

        <button className="login-btn" onClick={()=> navigate("/login")}>
          Login
        </button>

      </nav>

      {/* HERO SECTION */}

      <section className="hero-section" ref={homeRef}>

        <div className="hero-left">

          <div className="tag">
            🌿 Your Journey. Our Sync.
          </div>

          <h1>
            Learn. Track.
            <br />
            Grow.
            <span> Repeat.</span>
          </h1>

          <p>
            SkillSync is your personalized
            learning companion that helps
            you plan, track and achieve
            your goals with clarity and
            consistency.
          </p>

          <button className="journey-btn" onClick={() => navigate("/signup")}>
            Start Your Journey →
          </button>

          <div className="rating">

            <h3>4.9/5 Rating</h3>

            <p>
              Trusted by 1200+ learners
            </p>

          </div>

        </div>

        

      </section>

      {/* FEATURES */}

      <section className="features"   ref={featuresRef} >

        <div className="feature-card">

          <h3>
            Personalized Roadmaps
          </h3>

          <p>
            Get custom roadmaps based on
            your goals and current level.
          </p>

        </div>

        <div className="feature-card">

          <h3>
            Track Progress
          </h3>

          <p>
            Stay consistent through visual
            analytics and progress tracking.
          </p>

        </div>

        <div className="feature-card">

          <h3>
            Connect Profiles
          </h3>

          <p>
            Connect GitHub, LeetCode and
            showcase your growth.
          </p>

        </div>

        <div className="feature-card">

          <h3>
            Stay Consistent
          </h3>

          <p>
            Build habits and achieve your
            learning goals every day.
          </p>

        </div>

      </section>

      {/* STATS */}

      <section className="stats">

        <div className="stat-card">
          <h2>10K+</h2>
          <p>Active Learners</p>
        </div>

        <div className="stat-card">
          <h2>500+</h2>
          <p>Resources</p>
        </div>

        <div className="stat-card">
          <h2>25K+</h2>
          <p>Projects Tracked</p>
        </div>

        <div className="stat-card">
          <h2>95%</h2>
          <p>Goal Achievement</p>
        </div>

      </section>

    </div>
  );
}

export default Landing;