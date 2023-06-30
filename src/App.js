import "./App.scss";
import Header from "./components/Header/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Technologies from "./components/Technologies/Technologies";
import Contact from "./components/Contact/Contact";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <div className="top-bg"></div>
      <div className="container">
        <Header />
       
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            in={true}
            timeout={300}
            classNames="page"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <Footer />
    </div>
  );
}

export default App;
