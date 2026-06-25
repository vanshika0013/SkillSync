import skillSectionbg from "../../assets/skil-sectionbg.png";
import "./Skillsection.css";
import computer from "../../assets/computer.png";
import { useState , useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./Goals.jsx";
import { useNavigate } from "react-router-dom";

function Skillsection() {
  const navigate = useNavigate();
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "Python",
    "Java",
    "DSA",
    "UI/UX",
    "AI/ML",
    "Data Science",
    "Cyber Security",
    "Web Development"
  ];

  const skillCards = [
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Build modern websites and web applications."
  },
  {
    icon: "📊",
    title: "Data Science",
    desc: "Analyze data and build powerful models."
  },
  {
    icon: "🧠",
    title: "AI / Machine Learning",
    desc: "Create intelligent systems and AI solutions."
  },
  {
    icon: "🛡️",
    title: "Cyber Security",
    desc: "Learn to protect systems and ethical hacking."
  },
  {
    icon: "📱",
    title: "Mobile Development",
    desc: "Build mobile apps for Android and iOS."
  },
  {
    icon: "🎨",
    title: "UI / UX Design",
    desc: "Design beautiful and user-friendly interfaces."
  },
  {
    icon: "☁️",
    title: "Cloud Computing",
    desc: "Learn cloud platforms and deployment."
  },
  {
    icon: "🎮",
    title: "Game Development",
    desc: "Create games and interactive experiences."
  },
  {
    icon: "💻",
    title: "DSA & Algorithms",
    desc: "Master problem solving and algorithms."
  },
  {
    icon: "∞",
    title: "DevOps",
    desc: "Automate, deploy and manage applications."
  },
  {
    icon: "📦",
    title: "Blockchain",
    desc: "Learn blockchain and decentralized systems."
  },
  {
    icon: "💼",
    title: "Product Management",
    desc: "Learn to build and manage successful products."
  }
];

  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] =
    useState(false);

  const filteredSkills = skills.filter((skill) =>
    skill
      .toLowerCase()
      .includes(search.toLowerCase())
  );
  const [selectedSkills,setSelectedSkills]= useState([]);
  useEffect(() => {
  const savedSkills =
    JSON.parse(
      localStorage.getItem("selectedSkills")
    ) || [];

  setSelectedSkills(savedSkills);
}, []);
  const handleSkillClick = (skill) => {
  if (selectedSkills.includes(skill)) {
    setSelectedSkills(
      selectedSkills.filter(
        (s) => s !== skill
      )
    );
  } else {
    setSelectedSkills([
      ...selectedSkills,
      skill
    ]);
  }
};
console.log(selectedSkills);
function handleContinue() {
    localStorage.setItem(
      "selectedSkills",
      JSON.stringify(selectedSkills)
    );
    navigate("/goals");
  }

const handleClear = () => {
  setSelectedSkills([]);
};

  return (
    <div className="sectionpage">
      <div className="top-section">

        <div className="logo">
          <span className="logo-icon">
            &lt;/&gt;
          </span>
          SkillSync
        </div>

        <div className="progress">
          <p>Step 2 : Skill Selection</p>
        </div>

      </div>

      <div className="main-section">

        <div className="first-section">

          <div className="left-section">
            <h2>
              Choose your
              <br />
              Learning Path
            </h2>

            <p>
              Select the skills you want to learn.
              <br />
              You can choose multiple skills.
            </p>
          </div>

          <img
            className="image"
            src={computer}
            alt="computer"
          />

        </div>

        <div className="search-container">

          <div className="search-box">

            <FaSearch
              className="search-icon"
            />

            <input
              type="text"
              placeholder="Search skills..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              onFocus={() =>
                setShowSuggestions(true)
              }
              onBlur={() =>
                setTimeout(() => {
                  setShowSuggestions(false);
                }, 100)
              }
            />

          </div>

          {showSuggestions && (
            <ul className="suggestions">

              {filteredSkills.map((skill) => (
                <li
                  key={skill}
                  onClick={() => {
                      setSearch(skill);
                      handleSkillClick(skill);
                      setShowSuggestions(false);
                    }}
                >
                  {skill}
                </li>
              ))}

            </ul>
          )}

        </div>

        <div className="skills-section">

  {/* SKILLS GRID */}

  <div className="skills-grid">

  {skillCards.map((card) => (

    <div
      key={card.title}
      className={
        selectedSkills.includes(card.title)
          ? "skill-card selected"
          : "skill-card"
      }
      onClick={() =>
        handleSkillClick(card.title)
      }
    >

      <div className="skill-icon">
        {card.icon}
      </div>

      <h4>{card.title}</h4>

      <p>{card.desc}</p>

      {
        selectedSkills.includes(
          card.title
        ) &&
        (
          <div className="tick">
            ✓
          </div>
        )
      }

    </div>

  ))}

</div>

  {/* SELECTED SKILLS */}

  <div className="selected-skills">

  <h3>
    {selectedSkills.length}{" "}
    {selectedSkills.length === 1 || 0
      ? "Skill"
      : "Skills"}{" "}
    Selected
  </h3>

  <div className="selected-container">

    {selectedSkills.map((skill) => (
      <div
        className="selected-pill"
        key={skill}
      >
        {skill}
      </div>
    ))}

    <button className="clear-btn" onClick={handleClear}>
      Clear All
    </button>

  </div>

</div>

  {/* BUTTONS */}

  <div className="bottom-buttons">

    <button className="back-btn" onClick={() => navigate("/login")}>
      ← Back
    </button>

    <button className="continue-btn" disabled={selectedSkills.length==0} onClick={handleContinue}>
      Continue →
    </button>

  </div>

</div>

  </div>
        </div>

         

        
  );
}

export default Skillsection;