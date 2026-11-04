import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/site/SiteLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ExperiencePage from "./pages/ExperiencePage";
import NotFound from "./pages/NotFound";
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";

const Home = lazy(() => import("./pages/Home"));

const Boot = () => (
  <div className="boot">
    <span className="boot__name">Chirag Shetty</span>
    <span className="boot__line" aria-hidden="true" />
  </div>
);

function App() {
  return (
    <Suspense fallback={<Boot />}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<SiteLayout />}>
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="skills" element={<Skills />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
