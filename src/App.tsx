import Home from "./components/Home";
import Footer from "./components/Footer";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="app">
      <h1 style={{textAlign: "center"}}>SR Stores</h1>
      <Home name="SR Stores"/>
      <Counter />
      <Footer name="SR Stores" />
    </div>
  );
}

export default App;