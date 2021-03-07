import './App.css';
import React from "react";
import NavBar from "./Components/NavBar";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;