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
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);


  
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
    <div
      style={{
        position: "fixed",
        top: position.y - 40, // عشان تبقى في النص
        left: position.x - 40,
        width: 80,
        height: 80,
        borderRadius: "50%",
        border: "3px solid #00adb5",
        backgroundColor: "transparent",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "top 0.05s linear, left 0.05s linear",
        mixBlendMode: "difference", // شكلها يبان فوق الخلفية
      }}
    ></div>
      <Header setCurrentComponent={setCurrentComponent} />
      {handleComponent()}
    </>
  );
}

export default App;
