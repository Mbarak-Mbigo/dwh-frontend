import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Dashboard from "./pages/dashboard/Dashboard";

// Create a client
const queryClient = new QueryClient();

const App = () => (
  // Provide the client to your App
  <QueryClientProvider client={queryClient}>
    <Router>
      <div>
        <Routes>
          <Route path="/*" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
    <ReactQueryDevtools initialIsOpen />
  </QueryClientProvider>
);

export default App;
