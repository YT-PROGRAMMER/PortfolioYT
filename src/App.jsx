import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
function App() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const circleStyle = {
    position: "fixed",
    top: mousePos.y - 30, // نصف القطر
    left: mousePos.x - 30,
    width: 60,
    height: 60,
    border: "3px solid #00adb5",
    borderRadius: "50%",
    pointerEvents: "none",
    transition: "top 0.03s linear, left 0.03s linear",
    zIndex: 9999,
    mixBlendMode: "difference", // تأثير جميل لو الخلفية فاتحة
  };



  
  const [currentComponent, setCurrentComponent] = useState("home");
  const handleComponent = () => {
    switch (currentComponent) {
      case "home":
        return <Home />;

      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };
  return (
    <>
       <div style={circleStyle}></div>
      <Header setCurrentComponent={setCurrentComponent} />
      {handleComponent()}
    </>
  );
}

export default App;
