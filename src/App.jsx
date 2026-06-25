import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Skillsection from "./pages/Auth/Skillsection";
import Goals from "./pages/Auth/Goals";
import Landing from "./pages/Auth/Landing";
import Profiles from "./pages/Auth/Profiles";
import Notes from "./pages/Auth/Notes";
import Settings from "./pages/Auth/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}  />
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/skillsection" element={<Skillsection/>} />
        <Route path="/goals" element={<Goals/>} />
        <Route path="/profiles" element={<Profiles/>} />
        <Route path="/notes" element={<Notes/>} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;