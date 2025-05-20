const Header = ({ setCurrentComponent }) => {
  return (
    <header>
      <h1>YOUSSEF</h1>
      <nav className="desktop">
        <ul>
          <li>
            <button
              onClick={() => {
                setCurrentComponent("home");
              }}
            >
              <p>Home</p>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentComponent("about");
              }}
            >
              <p>About</p>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentComponent("skills");
              }}
            >
              <p>Skills</p>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentComponent("projects");
              }}
            >
              <p>Projects</p>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentComponent("contact");
              }}
            >
              <p>Contact</p>
            </button>
          </li>
        </ul>
      </nav>
      <nav className="mobile">
        <i className="fa-solid fa-bars"></i>
        <ul>
          <li>
            <button
              onClick={() => {
                setCurrentComponent("home");
              }}
            >
              <p>Home</p>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentComponent("about");
              }}
            >
              <p>About</p>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentComponent("skills");
              }}
            >
              <p>Skills</p>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentComponent("projects");
              }}
            >
              <p>Projects</p>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentComponent("contact");
              }}
            >
              <p>Contact</p>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
