import logo from './logo.svg';
import './App.css';
import Dashboard from './Component/Dashboard';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import ConversationHistory from "./Component/conversationhistory";
import ConversationPage from "./Component/conversation"

function App() {
  
  return(
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/data" element={<ConversationPage />} />
        <Route path="/conversations" element={<ConversationHistory />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App;