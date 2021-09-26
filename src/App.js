import "./App.css";
import Header from "./components/Header/Header";
import Library from "./components/Library/Library";

function App() {
  // Render HTML
  return (
    <div>
      {/* Header Arena */}
      <Header></Header>

      {/* Body Arena */}
      <Library></Library>
    </div>
  );
}

export default App;
