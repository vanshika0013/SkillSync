import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Skillsection from "./pages/Auth/Skillsection";
import Goals from "./pages/Auth/Goals";
import Landing from "./pages/Auth/Landing";
import Profiles from "./pages/Auth/Profiles";

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
      </Routes>


    </BrowserRouter>
  );
}

export default App;