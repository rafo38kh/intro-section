import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="grid min-h-screen grid-rows-[1fr_auto] bg-almostWhite">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
