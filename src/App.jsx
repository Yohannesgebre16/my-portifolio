import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welecome from "./Pages/Welecome";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import SharedLayout from "./Pages/SharedLayout";
import Notfound from "./Pages/Notfound";

const basename = import.meta.env.BASE_URL === '/' ? undefined : '/my-portifolio';

function App() {
  return (
    <Router basename={basename}>
      <div>
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/' element={<Welecome />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
