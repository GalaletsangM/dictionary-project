import "./App.css";
import Dictionary from "./Dictionary.js"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src="https://seo-hacker.com/wp-content/uploads/2018/05/Search-Goes-Global_A-Look-Into-Search-Engines-Around-the-World-1024x768.jpg"
            className="App-logo img-fluid"
            alt="logo"
          ></img>
        </header>
        <main>
          <Dictionary defaultKeyWord="sunset" />
        </main>
        <footer className="app-footer">
          <small>coded by Precious</small>
        </footer>
      </div>
    </div>
  );
}
