import React, { useState, useEffect } from "react";
import Home from "./Components/Pages/Home";
import { Route, Routes } from "react-router";
import AboutPage from "./Components/Pages/Aboutpage";
import Servicespage from "./Components/Pages/Servicespage";
import Projectspage from "./Components/Pages/Projectspage";

const App = ({ toggleTheme }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
      x;
    }, 2000);

    // Cleanup the timeout to prevent memory leaks
    return () => clearTimeout(delay);
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            background: "#02050A",
            height: "100vh",
            position: "relative",
          }}
        >
          <img
            src="./images/loading.gif"
            alt=""
            style={{
              width: "20%",
              position: "absolute",
              left: "40%",
              top: "30%",
            }}
          />
        </div>
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<Servicespage />} />
            <Route path="/projects" element={<Projectspage />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default App;
