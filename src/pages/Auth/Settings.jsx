import "./Settings.css";
import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

function Settings() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [github, setGithub] = useState("");
  const [codeforces, setCodeforces] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState([]);
  const [goals, setGoals] = useState([]);
  const [notes, setNotes] = useState([]);
  const [achievements, setAchievements] = useState(0);

  useEffect(() => {
    const githubData = JSON.parse(localStorage.getItem("githubData")) || {};

    setName(githubData.name || "");
    setGithub(localStorage.getItem("github") || "");
    setAchievements(githubData.public_repos || 0);

    setCodeforces(localStorage.getItem("codeforces") || "");
  }, []);

  useEffect(() => {
    if (auth.currentUser) {
      setEmail(auth.currentUser.email);
    }
  }, []);

  function saveChanges() {
    localStorage.setItem("github", github);
    localStorage.setItem("codeforces", codeforces);
    const githubData = JSON.parse(localStorage.getItem("githubData")) || {};

    githubData.name = name;

    localStorage.setItem("githubData", JSON.stringify(githubData));
  }

  useEffect(() => {
    const savedSkills =
      JSON.parse(localStorage.getItem("selectedSkills")) || [];

    const savedGoals = JSON.parse(localStorage.getItem("selectedGoals")) || [];

    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    setSkills(savedSkills || []);
    setGoals(savedGoals || []);
    setNotes(savedNotes || []);
  }, []);
  function clearNotes() {
    setNotes([]);
    localStorage.removeItem("notes");
  }

  async function clearData() {
    const confirmDelete = window.confirm(
      "Are you sure you want to clear all your skillsync data ?",
    );
    if (!confirmDelete) {
      return;
    }
    const keys = [
      "selectedSkills",
      "selectedGoals",
      "notes",
      "codeforces",
      "githubData",
      "github",
      "streak",
      "visitedDays",
      "lastVisit",
    ];

    keys.forEach((key) => {
      localStorage.removeItem(key);
    });
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="settings-page">
      <div className="settings-logo">
        <span className="logo-icon">&lt;/&gt;</span>
        <h2>SkillSync</h2>
      </div>

      <div className="settings-main-section">
        <h1 className="settings-heading">Settings ⚙️</h1>

        <p className="subtitle-settings">
          Manage your preferences and personalize your learning experience.
        </p>

        {/* Profile Section */}

        <section className="settings-card">
          <div className="section-title">
            <h3>👤 Profile</h3>
            <p>Update your personal information and accounts.</p>
          </div>

          <div className="profile-content">
            <div className="profile-left">
              <div className="profile-photo">
                {name.charAt(0).toUpperCase()}
              </div>

              <button className="change-photo-btn">Change Photo</button>
            </div>

            <div className="profile-right">
              <div className="input-group">
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input type="email" value={email} disabled />
              </div>

              <div className="input-group">
                <label>GitHub Username</label>
                <input
                  type="text"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label>Codeforces Username</label>
                <input
                  type="text"
                  value={codeforces}
                  onChange={(e) => setCodeforces(e.target.value)}
                />
              </div>

              <button className="save-btn" onClick={saveChanges}>
                Save Changes
              </button>
            </div>
          </div>
        </section>

        {/* Learning Preferences */}

        {/* <section className="settings-card">

  <div className="section-title">
    <h3>📚 Learning Preferences</h3>
    <p>Select the skills you want SkillSync to focus on.</p>
  </div>

  <div className="skills-grid">

    <div className="skill-option active">
      Web Development
    </div>

    <div className="skill-option active">
      DSA
    </div>

    <div className="skill-option">
      AI / ML
    </div>

    <div className="skill-option">
      Cloud
    </div>

    <div className="skill-option">
      Cyber Security
    </div>

    <div className="skill-option">
      DevOps
    </div>

  </div>

  <button className="save-btn">
    Save Preferences
  </button>

</section> */}

        {/* Appearance */}

        <section className="settings-card">
          <div className="section-title">
            <h3>🎨 Appearance</h3>
            <p>Choose your accent color.</p>
          </div>

          <div className="color-options">
            <span className="color sage"></span>
            <span className="color blue"></span>
            <span className="color purple"></span>
            <span className="color orange"></span>
          </div>
        </section>

        {/* Notifications */}

        <section className="settings-card">
          <div className="section-title">
            <h3>🔔 Notifications</h3>
            <p>Choose what updates you want to receive.</p>
          </div>

          <div className="notification-item">
            <span>Study Reminders</span>

            <label className="switch">
              <input type="checkbox" />

              <span className="slider"></span>
            </label>
          </div>

          <div className="notification-item">
            <span>Achievment Alerts</span>

            <label className="switch">
              <input type="checkbox" />

              <span className="slider"></span>
            </label>
          </div>

          <div className="notification-item">
            <span>Roadmap Updates</span>

            <label className="switch">
              <input type="checkbox" />

              <span className="slider"></span>
            </label>
          </div>
        </section>

        {/* Account Stats */}

        <section className="settings-card">
          <div className="section-title">
            <h3>📊 Account Stats</h3>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <h2>{skills.length}</h2>
              <p>Skills</p>
            </div>

            <div className="stat-card">
              <h2> {goals.length} </h2>
              <p>Goals</p>
            </div>

            <div className="stat-card">
              <h2> {notes.length} </h2>
              <p>Notes</p>
            </div>

            <div className="stat-card">
              <h2>{achievements}</h2>
              <p>Achievements</p>
            </div>
          </div>
        </section>

        {/* Data Management */}

        <section className="settings-card">
          <div className="section-title">
            <h3>🗑 Data Management</h3>
          </div>

          <div className="data-buttons">
            <button className="secondary-btn" onClick={clearNotes}>
              Clear Notes
            </button>

            {/* <button className="warning-btn">
      Reset Journey
    </button> */}

            <button className="danger-btn" onClick={clearData}>
              Clear All Data
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Settings;
