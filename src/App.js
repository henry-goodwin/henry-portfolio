import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { NoMatch } from "./pages/NoMatch";
import { Projects } from "./pages/Projects";
import { NavigationBar } from "./components/NavigationBar";
import Education from "./pages/Education";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
