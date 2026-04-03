import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import WorkerDashboard from "./pages/WorkerDashboard";

export default function App() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="w-full max-w-md bg-white border border-border rounded-2xl flex flex-col overflow-hidden">
        <Router>
          <Routes>
            <Route path="/" element={<ChatPage />} />
            <Route path="/worker" element={<WorkerDashboard />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
