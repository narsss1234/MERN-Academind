import React from 'react';
import { BrowserRouter as Router,Route, Routes, Navigate } from "react-router-dom";

import Users from "./users/pages/Users"
import NewPlace from "./places/pages/NewPlace"

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Users />} exact />
      <Route path="/places/new" element={<NewPlace />} exact/>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
  );
}

export default App;
