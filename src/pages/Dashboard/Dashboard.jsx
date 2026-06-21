import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* Sidebar */}

      <aside className="sidebar">

        <div className="sidebar-top">

          <div className="logo">
            🌿 SkillSync
          </div>

          <button className="collapse-btn">
            ❮❮
          </button>

        </div>

        <ul className="sidebar-menu">

          <li className="active">
            🏠 Dashboard
          </li>

          <li>
            🗺️ Roadmap
          </li>

          <li>
            📈 Progress
          </li>

          <li>
            📚 Resources
          </li>

          <li>
            💼 Projects
          </li>

          <li>
            📝 Notes
          </li>

          <li>
            ⚙️ Settings
          </li>

        </ul>

        {/* Upgrade Card */}

        <div className="upgrade-card">

          <h3>
            🌿 Upgrade to Pro
          </h3>

          <p>
            Unlock AI roadmap,
            advanced analytics and more.
          </p>

          <button>
            Upgrade Now →
          </button>

        </div>

        {/* User */}

        <div className="sidebar-user">

          <img
            src="https://i.pravatar.cc/100"
            alt=""
          />

          <div>

            <h4>
              Vanshika
            </h4>

            <p>
              vanshika@example.com
            </p>

          </div>

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
                src=""
                alt=""
              />

              <span>
                Vanshika
              </span>

            </div>

          

        </nav>

        {/* Greeting */}

        <div className="greeting-section">

          <div>

            <h1>
              Good Evening,
              Vanshika 🌿
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

              <div className="stat-card">
                <h2>12</h2>
                <p>Skills Learned</p>
              </div>

              <div className="stat-card">
                <h2>3</h2>
                <p>Goals Selected</p>
              </div>

              <div className="stat-card">
                <h2>18 🔥</h2>
                <p>Day Streak</p>
              </div>

              <div className="stat-card">
                <h2>7</h2>
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

              <button>
                🚀 Generate My Roadmap
              </button>

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
                src="https://avatars.githubusercontent.com/u/583231?v=4"
                alt=""
              />

              <h2>
                vanshika-code
              </h2>

              <div className="github-stats">

                <div>
                  <h3>42</h3>
                  <p>Repos</p>
                </div>

                <div>
                  <h3>156</h3>
                  <p>Followers</p>
                </div>

                <div>
                  <h3>102</h3>
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
                  18 days
                </span>

              </div>

              <div className="days">

                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>

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
                🌱
              </h2>

              <p>
                The best time to plant a tree
                was 20 years ago.
                The second best time is now.
              </p>

            </section>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;