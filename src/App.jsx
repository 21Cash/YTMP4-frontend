import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import VideoList from "./Components/VideoList/VideoList";
import Fast from "./Components/Fast/Fast";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Direct" element={<Homepage />} />
        {/* Instead of Direct Download, Making The Default Path to Fast Route */}
        <Route path="/" element={<Fast />} />
        <Route path="/VideoList" element={<VideoList />} />
        <Route path="/Fast" element={<Fast />} />
      </Routes>
    </Router>
  );
}

export default App;
