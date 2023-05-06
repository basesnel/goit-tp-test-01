import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Card user="Hansel" tweets={1414} followers={505505} />
    </div>
  );
}

export default App;
