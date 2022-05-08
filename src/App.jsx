import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import ProjectList from "./components/ProjectsList/ProjectList";

function App() {
  return (
    <div>
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
