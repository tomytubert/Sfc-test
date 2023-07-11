import React, { lazy } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./views/home/Home"));
const LandingPage = lazy(() => import("./views/landingPage/LandingPage"));
const OdourInputs = lazy(() => import("./views/odourInputs/OdourInputs"));

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/landing-page" element={<LandingPage />} />
          <Route exact path="/odour-inputs" element={<OdourInputs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
