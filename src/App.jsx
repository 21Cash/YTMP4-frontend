import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import VideoList from "./Components/VideoList/VideoList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/VideoList" element={<VideoList />} />
      </Routes>
    </Router>
  );
}

export default App;
