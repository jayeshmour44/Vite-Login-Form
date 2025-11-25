import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './Auth/Login';
import Home from './Pages/Home';
import About from './Pages/About';
import TablePage from './Pages/TablePage';
import Contact from './Pages/Contact';
import UserInfo from './Pages/UserInfo';
import Layout from './Layout/Layout';
import Practice from './Pages/Practice'
import './App.css';
import './Styles/theme.css';

const App = () => {

return (
  <Router>

    <Routes>

      {/* Login */}
      <Route path="/" element={<Login />} />

     
      <Route element={<Layout />}>

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path='/practice' element={<Practice />} />

      </Route>

      <Route path="*" element={<Navigate to="/" />} />

    </Routes>

  </Router>
);
};

export default App;
