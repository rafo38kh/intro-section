import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] items-center bg-almostWhite">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
