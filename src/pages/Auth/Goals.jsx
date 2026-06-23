import "./Goals.css";
import background4 from "../../assets/background4.png";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Skillsection.jsx";
import "./Profiles.jsx";
function Goals(){
  function handleContinue() {
  localStorage.setItem(
    "selectedGoals",
    JSON.stringify(selectedGoals)
  );

  navigate("/profiles");
}
  const navigate = useNavigate();
  const goalCards =[
    {
      icon:"🎯",
      title:"Get Internship",
      desc:"Build skills and projects."
    },
    {
      icon:"💼",
      title:"Crack Placements",
      desc:"Prepare DSA and interviews."
    },
    {
      icon:"🚀",
      title:"Become Developer",
      desc:"Master development."
    },
    {
      icon:"💻",
      title:"Build Projects",
      desc:"Create real-world projects."
    },
    {
      icon:"🧠",
      title:"Improve DSA",
      desc:"Strenghten Problem solving"
    },
    {
      icon:"  📈",
      title:"Learn New Skills",
      desc:"Explore new Technologies."
    },
    {
      icon:"📚",
      title:"Prepare for Exams",
      desc:"GATE, GRE and competitive exams."
    },
    {
      icon:"🌱",
      title:"Personal Growth",
      desc:"Build discipline and consistency"
    },
    {
      icon:" 🌍",
      title:"Open Source",
      desc:"Contribute to projects worldwide"
    },
    {
      icon:" 🏆",
      title:"Hackathons",
      desc:"Participate and Build rapidly"
    },
    {
      icon:"☁️",
      title:"Learn Cloud",
      desc:"AWS, Docker and DevOps"
    },
    {
      icon:"🤖",
      title:"Learn AI/ML",
      desc:"Explore modern Ai technologies"
    }
    
  ];
  const[selectedGoals,setSelectedGoals]=useState([]);
 
  const handleGoalClick = (goal) => {
  if (selectedGoals.includes(goal)) {
    setSelectedGoals(
      selectedGoals.filter(
        (s) => s !== goal
      )
    );
  } else {
    setSelectedGoals([
      ...selectedGoals,
      goal
    ]);
  }
};
  return(
    <div className="goals-page">

  <nav className="navbar">
    <div className="logo">
      <span>&lt;/&gt;</span> SkillSync
    </div>

    <div className="steps">
      <span onClick={() => navigate("/")}> Welcome</span>
      <span onClick={() => navigate("/skillsection")}> Skills</span>
      <span className="active"> Goals</span>
      <span onClick={() => navigate("/profiles")}> Profiles</span>
      <span> Dashboard</span>
    </div>
  </nav>

  <div className="goals-container">

    {/* Left Section */}

    <div className="left-panel">

      <div className="step-pill">
        Step 3 of 5
      </div>

      <h1>
        What are your
        <span> Learning Goals?</span>
      </h1>

      <p>
        Select what you want to achieve.
        You can choose multiple goals.
      </p>

      <div className="quote">
        🌿 A goal without a plan is just a wish.
      </div>

      <img
        src={background4}
        alt=""
      />

    </div>

    {/* Right Section */}

    <div className="right-panel">

      <div className="heading">
        <h2>Choose your goals</h2>

        <p>
          Pick the goal that matter most to you.
        </p>
      </div>

      <div className="goals-grid">
          
          {goalCards.map((card) => (

            <div 
            key={card.title}
            className={
              selectedGoals.includes(card.title)
              ? "goal-card selected"
              : "goal-card"
            }
            onClick={ () => 
              handleGoalClick(card.title)
            }
            >
              <div className="goal-icon">
                {card.icon}
                </div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
                {
                  selectedGoals.includes(
                    card.title 
                  )
                  &&
                  (<div className="tick">
                     ✓
                     </div>
                  )
                }
                </div>

          ))}
        
      </div>

      <div className="buttons">

       

        <button className="continue-btn" disabled={selectedGoals.length==0} onClick={handleContinue}>
          Continue →
        </button>

      </div>

    </div>

  </div>

</div>
  )
}

export default Goals;
