import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./Pages/SharedLayout";
import Notfound from "./Pages/Notfound";

// Single-page sections
import Welecome from "./Pages/Welecome";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const basename =
  import.meta.env.BASE_URL === "/" ? undefined : "/my-portifolio";

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        {/* Main Layout with Navbar/Outlet */}
        <Route path="/" element={<SharedLayout />}>
          {/* Instead of subpages, keep sections as SPA */}
          <Route index element={<Welecome />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Catch-all for unknown routes */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
