import "./App.css";
import CurrencyConverter from "./CurrencyConverter";

function App() {
  return (
    <div className="App">
      <CurrencyConverter />
      <footer>
        <p>
          Created and coded by{" "}
          <a
            href="https://www.linkedin.com/in/mariana-tellez-resendiz/"
            title="Mariana's LinkedIn"
            rel="noreferrer"
            target="_blank"
          >
            Mariana Tellez Resendiz
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
