import logo from './logo.svg';
import './App.css';
import Dashboard from './Component/Dashboard';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React, { useState } from 'react';
import ConversationList from "./Component/conversationhistory";
import Feedback from "./Component/conversation"

function App() {
  const [themeType, setThemeType] = useState('light');

  const toggleTheme = () => {
    setThemeType(themeType === 'light' ? 'dark' : 'light');
  };

  const theme = createTheme({
    palette: {
      type: themeType,
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/conversations" element={<ConversationList />} />
    <Route path="/feedback" element={<Feedback />} />
  </Routes>
</Router>
    <button onClick={toggleTheme}>Toggle Theme</button>
  </ThemeProvider>
);
}

export default App;
