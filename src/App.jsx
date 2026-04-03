import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ChatPage from "./pages/ChatPage";
import WorkerDashboard from "./pages/WorkerDashboard";
import SuperAdminPanel from "./pages/SuperAdminPanel";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/worker" element={<WorkerDashboard />} />
        <Route path="/admin" element={<SuperAdminPanel />} />
      </Routes>
    </Router>
  );
}
