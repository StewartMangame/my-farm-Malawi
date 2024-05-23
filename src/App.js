import "./App.css";
import Home from "./components/homepage/home";
import Markets from "./components/markets/markets";
import Footer from "./components/homepage/footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Markets />
      <Footer />
    </div>
  );
}

export default App;
