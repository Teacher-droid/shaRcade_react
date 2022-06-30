import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from './theme/GlobalStyles';
import { useTheme } from './theme/useTheme';
import 'bootstrap';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import GamesIndex from './components/GamesIndex/GamesIndex';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/UserForm/Login';
import Signup from './components/UserForm/Signup';
import Logout from './components/Logout/Logout';
import Footer from './components/Footer/Footer';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import UserDashboard from './components/UserDashboard/UserDashboard';
import EditorDashboard from './components/EditorDashboard/EditorDashboard';

import ThemeSelector from './ThemeSelector';



function App() {



  const { theme, themeLoaded } = useTheme();
  const [ selectedTheme, setSelectedTheme ] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
   }, [themeLoaded]);

  return (
    <>
    { themeLoaded && <ThemeProvider theme={ selectedTheme }>
        <GlobalStyles/>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/games" element={<GamesIndex />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/userdashboard" element={<UserDashboard/>} />
        <Route path="/editordashboard" element={<EditorDashboard/>} />
        <Route path="/admindashboard" element={<AdminDashboard/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    <ThemeSelector setter={ setSelectedTheme } />
      </ThemeProvider>
    }
    </>
  );
}

export default App;
