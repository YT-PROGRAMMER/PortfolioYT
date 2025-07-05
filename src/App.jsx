import "./App.css";
import Home from "./components/Home";
import Loading from "./components/Loading";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
function App() {
  const [isLoading, setLoading] = useState(true)
  const handleLoading =( ) => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)

  }
  useEffect(() => {
    handleLoading()
  }, [])

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
      <Header setCurrentComponent={setCurrentComponent} />
      {isLoading ? <Loading/> :handleComponent()}
    
    </>
  );
}

export default App;
