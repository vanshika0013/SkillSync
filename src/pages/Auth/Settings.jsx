import "./Settings.css";
import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import {
  saveUserData,
  getUserData,
  removeUserData,
  clearUserData,
} from "../../utils/storage";

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

  // ── Load ALL user data inside ONE onAuthStateChanged listener ────────────────
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) return;

      setEmail(user.email);

      const githubData = getUserData("githubData") || {};
      setName(githubData.name || "");
      setAchievements(githubData.public_repos || 0);

      setGithub(getUserData("github") || "");
      setCodeforces(getUserData("codeforces") || "");

      setSkills(getUserData("selectedSkills") || []);
      setGoals(getUserData("selectedGoals") || []);
      setNotes(getUserData("notes") || []);
    });

    return () => unsubscribe();
  }, []);

  async function saveChanges() {
    try {
      saveUserData("github", github);
      saveUserData("codeforces", codeforces);

      const response = await fetch(
        `https://api.github.com/users/${github}`
      );

      if (!response.ok) {
        alert("GitHub user not found");
        return;
      }

      const data = await response.json();
      data.name = name || data.name;

      saveUserData("githubData", data);
      alert("Changes saved successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    }
  }

  function clearNotes() {
    setNotes([]);
    removeUserData("notes");
  }

  async function clearData() {
    const confirmDelete = window.confirm(
      "Are you sure you want to clear all your skillsync data ?"
    );
    if (!confirmDelete) return;

    clearUserData();

    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLogout() {
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
              <h2>{goals.length}</h2>
              <p>Goals</p>
            </div>

            <div className="stat-card">
              <h2>{notes.length}</h2>
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

  <button className="danger-btn" onClick={clearData}>
    Clear All Data
  </button>

  <button className="logout-btn" onClick={handleLogout}>
    Logout
  </button>
</div>
        </section>
      </div>
    </div>
  );
}

export default Settings;
