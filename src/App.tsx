import Home from "./components/Home";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 style={{textAlign: "center"}}>SR Stores</h1>
      <Home name="SR Stores"/>
      <Footer />
    </div>
  );
}

export default App;