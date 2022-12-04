import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Freelancers from "./components/Freelancers";
import Projects from "./components/Projects";
import Project from "./components/Project";
import Contests from "./components/Contests";
import Contest from "./components/Contest";
import Main from "./components/Main";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Projects />} />
          <Route path="projects" element={<Projects />} />
          <Route path="freelancers" element={<Freelancers />} />
          <Route path="contests" element={<Contests />} />
        </Route>
        <Route path="about" element={<div>About page</div>} />
        <Route path="projects/:projectId" element={<Project />} />
        <Route path="contests/:contestId" element={<Contest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
