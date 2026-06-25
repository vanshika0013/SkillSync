import "./Dashboard.css";
import {useState , useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

function Dashboard() {
  const navigate= useNavigate();
  console.log(import.meta.env.VITE_GEMINI_API_KEY);
  const hour= new Date().getHours();
  let greeting;
  if( hour<12){
    greeting="Good Morning!";
  }
  else if (hour<17){
    greeting="Good Afternoon!";
  }
  else{
    greeting="Good Evening!";
  }

  const githubData = 
  JSON.parse(localStorage.getItem("githubData")) || {};
  const skills =
  JSON.parse(localStorage.getItem("selectedSkills"));
  const goals = 
  JSON.parse(localStorage.getItem("selectedGoals"));
  const [roadmap,setRoadmap] = useState([]);
  const [loading, setLoading] = useState(false);
   const [collapsed, setCollapsed] = useState(false);

  const handleGenerateRoadmap = () => {

    console.log(skills);
    console.log(goals);
  setLoading(true);
  let generatedRoadmap = [];

    if (skills.includes("Web Development")) {
  generatedRoadmap.push({
    phase:`Phase ${generatedRoadmap.length + 1}`,
    title: "Web Development Path",
    topics: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Git & GitHub",
      "React Basics",
    ],
    project:
      "Build a Personal Portfolio Website",
  });
}

if (skills.includes("Data Science")) {
  generatedRoadmap.push({
    phase:`Phase ${generatedRoadmap.length + 1}`,
    title: "Data Science Path",
    topics: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Data Cleaning",
      "Statistics",
    ],
    project:
      "Build a Data Analysis Dashboard",
  });
}

if (skills.includes("AI / Machine Learning")) {
  generatedRoadmap.push({
    phase: `Phase ${generatedRoadmap.length + 1}`,
    title: "AI & Machine Learning",
    topics: [
      "Python",
      "Machine Learning Basics",
      "Scikit-Learn",
      "Deep Learning",
      "TensorFlow",
      "Model Deployment",
    ],
    project:
      "Build an Image Classification App",
  });
}

if (skills.includes("Cyber Security")) {
  generatedRoadmap.push({
    phase: `Phase ${generatedRoadmap.length + 1}`,
    title: "Cyber Security",
    topics: [
      "Networking",
      "Linux",
      "Ethical Hacking",
      "Cryptography",
      "OWASP",
      "Penetration Testing",
    ],
    project:
      "Build a Password Security Checker",
  });
}

if (skills.includes("Mobile Development")) {
  generatedRoadmap.push({
    phase: `Phase ${generatedRoadmap.length + 1}`,
    title: "Mobile Development",
    topics: [
      "Flutter",
      "Dart",
      "UI Design",
      "Firebase",
      "State Management",
      "API Integration",
    ],
    project:
      "Build a ToDo Mobile App",
  });
}

if (skills.includes("UI / UX Design")) {
  generatedRoadmap.push({
    phase: `Phase ${generatedRoadmap.length + 1}`,
    title: "UI/UX Design",
    topics: [
      "Design Principles",
      "Color Theory",
      "Typography",
      "Wireframing",
      "Figma",
      "Prototyping",
    ],
    project:
      "Design a Food Delivery App Interface",
  });
}

if (skills.includes("Cloud Computing")) {
  generatedRoadmap.push({
    phase: `Phase ${generatedRoadmap.length + 1}`,
    title: "Cloud Computing",
    topics: [
      "AWS Basics",
      "Linux",
      "Docker",
      "CI/CD",
      "Cloud Deployment",
      "DevOps Basics",
    ],
    project:
      "Deploy a Full Stack Application",
  });
}

if (skills.includes("Game Development")) {
  generatedRoadmap.push({
    phase: `Phase ${generatedRoadmap.length + 1}`,
    title: "Game Development",
    topics: [
      "Unity",
      "C#",
      "Game Physics",
      "Animations",
      "Game Design",
      "Optimization",
    ],
    project:
      "Build a 2D Platformer Game",
  });
}

if (skills.includes("DSA & Algorithms")) {
  generatedRoadmap.push({
    phase: `Phase ${generatedRoadmap.length + 1}`,
    title: "DSA Mastery",
    topics: [
      "Arrays",
      "Strings",
      "Linked Lists",
      "Trees",
      "Graphs",
      "Dynamic Programming",
    ],
    project:
      "Solve 200+ Coding Problems",
  });
}

if (skills.includes("DevOps")) {
  generatedRoadmap.push({
    phase: `Phase ${generatedRoadmap.length + 1}`,
    title: "DevOps",
    topics: [
      "Linux",
      "Docker",
      "Git",
      "GitHub Actions",
      "Jenkins",
      "Kubernetes",
    ],
    project:
      "Build a CI/CD Pipeline",
  });
}

if (skills.includes("Blockchain")) {
  generatedRoadmap.push({
    phase: `Phase ${generatedRoadmap.length + 1}`,
    title: "Blockchain Development",
    topics: [
      "Solidity",
      "Ethereum",
      "Smart Contracts",
      "Web3",
      "DApps",
      "Security",
    ],
    project:
      "Build a Voting DApp",
  });
}

if (skills.includes("Product Management")) {
  generatedRoadmap.push({
    phase: `Phase ${generatedRoadmap.length + 1}`,
    title: "Product Management",
    topics: [
      "Market Research",
      "User Stories",
      "Roadmapping",
      "Agile",
      "Analytics",
      "Leadership",
    ],
    project:
      "Create a Product Requirement Document",
  });
}

if (goals.includes("Get Internship")) {
  generatedRoadmap.push({
    phase: "Career Phase",
    title: "Internship Preparation",
    topics: [
      "Resume Building",
      "GitHub Portfolio",
      "Projects",
      "LinkedIn",
      "Interview Preparation",
    ],
    project:
      "Build and Deploy 3 Portfolio Projects",
  });
}

if (goals.includes("Crack Placements")) {
  generatedRoadmap.push({
    phase: "Placement Phase",
    title: "Placement Preparation",
    topics: [
      "DSA",
      "OOPs",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Mock Interviews",
    ],
    project:
      "Solve 150+ DSA Questions",
  });
}

if (generatedRoadmap.length === 0) {
  generatedRoadmap.push({
    phase: "Getting Started",
    title: "Begin Your Journey",
    topics: [
      "Choose a skill",
      "Practice consistently",
      "Build projects",
      "Stay curious",
    ],
    project:
      "Create your first beginner project",
  });
}

  setRoadmap(generatedRoadmap);

  setLoading(false);
};

const [streak,setStreak] = useState(1);

useEffect(()=> {
  const today = new Date().toDateString();

  const lastVisit= localStorage.getItem("lastVisit");
  let currentStreak= Number(localStorage.getItem("streak")) || 1;

   if (!lastVisit) {
    localStorage.setItem(
      "lastVisit",
      today
    );

    localStorage.setItem(
      "streak",
      1
    );

    setStreak(1);
    return;
  }
 const last =
  new Date(lastVisit);

  const current =
  new Date(today);

  const diff =
  Math.floor(
    (
      current - last
    )
    /
    (
      1000
      *
      60
      *
      60
      *
      24
    )
  );

  if (diff === 1) {

    currentStreak++;

    localStorage.setItem(
      "streak",
      currentStreak
    );

    localStorage.setItem(
      "lastVisit",
      today
    );

  }

  else if (diff > 1) {

    currentStreak = 1;

    localStorage.setItem(
      "streak",
      1
    );

    localStorage.setItem(
      "lastVisit",
      today
    );
  }

  setStreak(
    currentStreak
  );
}, []);

    const[visitedDays,setVisitedDays]=useState([]);

  useEffect(() => {

  const currentDay =
    new Date()
      .toLocaleDateString(
        "en-US",
        {
          weekday:"short"
        }
      );

  let days =
    JSON.parse(
      localStorage.getItem(
        "visitedDays"
      )
    ) || [];

  if (
    !days.includes(
      currentDay
    )
  ) {

    days.push(currentDay);

    localStorage.setItem(
      "visitedDays",
      JSON.stringify(days)
    );
  }

  setVisitedDays(days);

}, []);

const quotes = [
  "Small progress is still progress",
  "Consistency beats intensity",
  "Stay curious. Keep building",
  "Code a little Everyday",
  "The expert in anything was once a beginner"
];

const randomIndex = Math.floor(Math.random()*quotes.length);

const [email,setEmail] = useState("");
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setEmail(user.email);
    }
  });

  return () => unsubscribe();
}, []);

  return (
    <div className="dashboard-page">

      {/* Sidebar */}

      <aside className={ 
        collapsed ? "sidebar collapsed" : "sidebar"
      }>

        <div className="sidebar-top">

  <div className="logo">
    <span>&lt;/&gt;</span>

    {!collapsed &&
    <span>SkillSync</span>}
  </div>

</div>

<button
  className="collapse-btn"
  onClick={() => setCollapsed(!collapsed)}
>
  {collapsed ? "❯" : "❮"}
</button>

        <ul className="sidebar-menu">

          <li className="active">
            <span>🏠</span>
            {!collapsed && 
            <span>Dashboard</span>
            }
          </li>

          <li>
            <span>🗺️</span>
            {!collapsed && 
            <span>Roadmap</span>}
          </li>

          <li>
           <span>📈</span> 
           {!collapsed && 
           <span>Stats</span>}
          </li>

          <li>
            <span>📚</span>
            {!collapsed && 
            <span>Resources</span>}
          </li>

          <li>
            <span>💼</span>
            {!collapsed && 
            <span>Projects</span>}
          </li>

          <li onClick={()=> navigate("/notes")}>
            <span>📝</span>
            {!collapsed && 
            <span >Notes</span>}
          </li>

          <li onClick={()=> navigate("/settings")}>
            <span>⚙️</span>
            {!collapsed && 
            <span>Settings</span>}
          </li>

        </ul>
        {/* User */}

        <div className="sidebar-user">

  <img
    src={
      githubData?.avatar_url ||
      "https://i.pravatar.cc/100"
    }
    alt=""
  />

  {
    !collapsed &&
    <div className="user-info">
      <h4>
        {githubData?.name ||
         githubData?.login}
      </h4>

      <p>
    {email}
      </p>
    </div>
  }

</div>

      </aside>

      {/* Main */}

      <main className="main-content">

        {/* Top Navbar */}

        <nav className="top-navbar">

          {/* <input
            type="text"
            placeholder="Search anything..."
          /> */}

          

            <div className="top-user">

              <img
                src={githubData?.avatar_url || "https://i.pravatar.cc/100"}
                alt=""
              />

              <span>
                {githubData?.name || githubData?.login}
              </span>

            </div>

          

        </nav>

        {/* Greeting */}

        <div className="greeting-section">

          <div>

            <h1>
              {greeting}{" "}
               {githubData?.name || githubData?.login} 
            </h1>

            <p>
              Keep learning,
              keep growing.
              You're doing great!
            </p>

          </div>

          <button>
            View Analytics →
          </button>

        </div>

        {/* Main Grid */}

        <div className="dashboard-grid">

          {/* LEFT */}

          <div className="left-column">

            {/* Stats */}

            <div className="stats-grid">

              <div className="stat-card clickable" onClick={()=>navigate("/skillsection")}>
                <h2>{skills.length}</h2>
                <p>Skills Selected</p>
                
              </div>

              <div className="stat-card clickable" onClick={()=> navigate("/goals")}>
                <h2>{goals.length}</h2>
                <p>Goals Selected</p>
                
              </div>

              <div className="stat-card">
                <h2>{streak}</h2>
                <p>Day Streak</p>
              </div>

              <div className="stat-card">
                <h2>{githubData?.public_repos || 0}</h2>
                <p>Projects Built</p>
              </div>

            </div>


            <div className="goals-roadmap">

                {/* Weekly Goals */}

            <section className="weekly-goals">

              <div className="section-title">

                <h2>
                  Weekly Goals
                </h2>

                <span>
                  View All
                </span>

              </div>

              <div className="goal-item">
                ☑ Solve 15 DSA Problems
              </div>

              <div className="goal-item">
                ☑ Learn React Basics
              </div>

              <div className="goal-item">
                ☐ Build a Project
              </div>

              <div className="goal-item">
                ☐ Read 2 Articles
              </div>

            </section>

            {/* AI Roadmap */}

            <section className="roadmap-card">

              <h2>
                Generate Your AI Roadmap
              </h2>

              <p>
                Get a personalized roadmap
                based on your goals and skills.
              </p>

              <button onClick={handleGenerateRoadmap}>
                🚀 Generate My Roadmap
              </button>
              {
                loading &&
                <p>Generating roadmap...</p>
              }

              {
  roadmap.map((item, index) => (
    <div
      className="phase-card"
      key={index}
    >
      <h3>
        {item.phase}
      </h3>

      <h4>
        {item.title}
      </h4>

      <ul>
        {
          item.topics.map(
            (topic, i) => (
              <li key={i}>
                {topic}
              </li>
            )
          )
        }
      </ul>

      <p className="project">
        💡 Project:
        {" "}
        {item.project}
      </p>
    </div>
  ))
}

            </section>

            </div>
            
            {/* Recommended */}

            <section className="recommended">

              <div className="section-title">

                <h2>
                  Recommended For You
                </h2>

                <span>
                  View All
                </span>

              </div>

              <div className="resources-grid">

                <div className="resource-card">
                  React Documentation
                </div>

                <div className="resource-card">
                  Array Problems
                </div>

                <div className="resource-card">
                  React Crash Course
                </div>

                <div className="resource-card">
                  Next.js Tutorial
                </div>

              </div>

            </section>

            {/* Progress */}

            <section className="progress-card">

              <div className="section-title">

                <h2>
                  Your Progress Overview
                </h2>

                <select>

                  <option>
                    This Week
                  </option>

                  <option>
                    This Month
                  </option>

                </select>

              </div>

              <div className="chart-placeholder">

                Chart Here 📈

              </div>

            </section>

          </div>

          {/* RIGHT */}

          <div className="right-column">

            {/* GitHub */}

            <section className="github-card">

              <div className="section-title">

                <h2>
                  GitHub Profile
                </h2>

                <span>
                  View Profile ↗
                </span>

              </div>

              <img
                src={githubData?.avatar_url}
                alt=""
              />

              <h2>
                  {githubData?.name || githubData?.login}
                </h2>

                <p>
                  @{githubData?.login}
                </p>

              <div className="github-stats">

                <div>
                  <h3>{githubData?.public_repos}</h3>
                  <p>Repos</p>
                </div>

                <div>
                  <h3>{githubData?.followers}</h3>
                  <p>Followers</p>
                </div>

                <div>
                  <h3>{githubData?.following}</h3>
                  <p>Following</p>
                </div>

              </div>

            </section>

            {/* Streak */}

            <section className="streak-card">

              <div className="section-title">

                <h2>
                  Learning Streak
                </h2>

                <span>
                  {streak} {streak===1  ? "day" : "days"} 
                </span>

              </div>

              <div className="days">

                {
                  [
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat",
                    "Sun"
                  ].map((day) =>(
                    <span
                    key={day}
                    className={
                      visitedDays.includes(day)
                      ?"visited"
                      : ""
                    }
                    >
                      {day}
                    </span>
                  ))
                }

              </div>

            </section>

            {/* Upcoming */}

            <section className="tasks-card">

              <div className="section-title">

                <h2>
                  Upcoming Tasks
                </h2>

                <span>
                  View All
                </span>

              </div>

              <p>
                • React Project
              </p>

              <p>
                • DSA Practice
              </p>

              <p>
                • System Design
              </p>
 
            </section>

            {/* Quote */}

            <section className="quote-card">

              <h2>
            <h2 className="quote-icon">
              <FaQuoteLeft />
            </h2>
              </h2>

              <p>
                {quotes[randomIndex]}
              </p>

            </section>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;