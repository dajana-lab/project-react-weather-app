import "./App.css";
import axios from "axios"
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
       
        <Weather />
        <footer>
          This project is coded by Dajana and is{" "}
          <a
            href="https://github.com/dajana-lab/project-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
