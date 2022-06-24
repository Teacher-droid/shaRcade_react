import React from 'react';
import 'bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import GamesIndex from './components/GamesIndex/GamesIndex';
import GameShow from './components/GameShow/GameShow';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Logout from './components/Logout/Logout';
import Footer from './components/Footer/Footer';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/games" element={<GamesIndex />} />
        <Route path="/games/:gameId" element={<GameShow />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/userdashboard" element={<UserDashboard/>} />
        <Route path="/editordashboard" element={<EditorDashboard/>} />
        <Route path="/admindashboard" element={<AdminDashboard/>} />
        {/*  
        <Route path="/addgame" element={<NewGame />} /> 
        <Route path="/updategame/:gameId" element={<UpdateGame/>} /> 
        <Route path="/deletegame/:gameId" element={<DeleteGame/>} /> 
        */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
