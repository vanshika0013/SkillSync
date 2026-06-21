import "./Profiles.css";
import { FaGithub } from "react-icons/fa";
import source from "../../assets/sources.png";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Profiles() {
  const navigate=useNavigate();
  const[github,setGithub]= useState("");
  const[codeforces,setCodeforces]= useState("");
  const [githubData,setGithubData]= useState({});
  const [loading,setLoading]= useState(false);
  const [error,setError]= useState("");
  const handleContinue= async ()=>{
    const data = await fetchGithubUser();

        if(!data){
          return;
        }
      localStorage.setItem(
        "github",
        github
      );
      localStorage.setItem(
        "codeforces",
        codeforces
      );

      localStorage.setItem(
      "githubData",
      JSON.stringify(data)
  );

      navigate("/dashboard");   
  };

  const fetchGithubUser = async ()=>{
    try{   
        setLoading(true);
    setError("");

    const response= await fetch(`https://api.github.com/users/${github}`);

      if (!response.ok) {
    setError("GitHub user not found");
    setLoading(false);
    return null;
  }

    
    const data = await response.json();
    setGithubData(data);
    setLoading(false);
    return data;
    }
    catch(err) {
      setError("Something went wrong");
    setLoading(false);
    return null;
    }
    
  };
  return (
    <div className="profiles-page">

      <nav className="navbar">
        <div className="logo">
          💻 SkillSync
        </div>

        <div className="steps">
          <span>Welcome</span>
          <span>Skills</span>
          <span>Goals</span>
          <span className="active">
            Profiles
          </span>
          <span>Dashboard</span>
        </div>
      </nav>

      <div className="profiles-container">

        {/* Left Section */}

        <div className="left-panel">

          <div className="step-pill">
            Step 4 of 5
          </div>

          <h1>
            Connect your
            <span> coding profiles</span>
          </h1>

          <p>
            Connect your profiles to get
            personalized insights and track
            your learning progress better.
          </p>

          <div className="quote">
            🚀 We only read your public data.
            Your information is safe with us.
          </div>

          <div className="illustration">
            <img 
            src={source}
            />
          </div>

        </div>

        {/* Right Section */}

        <div className="right-panel">

          <div className="heading">
            <h2>Connect Profiles</h2>

            <p>
              Add your coding accounts and
              build your personalized dashboard.
            </p>
          </div>

          <div className="profile-grid">

            {/* GitHub */}

            <div className="profile-card">

              <div className="card-icon">
                  <FaGithub className="github-icon"/>
              </div>

              <h3>GitHub Username</h3>

              <p>
                Enter your GitHub username
              </p>

              <input
                type="text"
                placeholder="e.g. octocat"
                value={github} onChange={(e) => setGithub(e.target.value)}
              />
              {
              error &&
              (
                <div className="error-box">
                   GitHub user not found
                </div>
              )
            }

            </div>

            {/* Codeforces */}

            <div className="profile-card">


              <div className="card-icon">
                🏆
              </div>

              <h3>
                Codeforces Username
              </h3>

              <p>
                Enter your Codeforces username
              </p>

              <input
                type="text"
                placeholder="e.g. tourist"
                value={codeforces} onChange={(e) => setCodeforces(e.target.value)}
              />

            </div>

          </div>

          <div className="buttons">

            <button className="skip-btn" onClick={()=> navigate("/dashboard")}>
              Skip for now
            </button>

            <button className="continue-btn" disabled={!github.trim()} onClick={handleContinue}>
              Continue →
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profiles;