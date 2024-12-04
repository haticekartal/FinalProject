import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import OurRoutes from './pages/OurRoutes';
import AdminPanel from './pages/AdminPanel';
import Favorites from './pages/Favorites';
import NewRoutes from './pages/NewRoutes';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        
        <Content>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/our-routes" element={<OurRoutes/>} />
            <Route path="/admin-panel" element={<AdminPanel/>} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/new-routes" element={<NewRoutes />} />





          </Routes>
        </Content>
              </Layout>
    </Router>
  );
}

export default App;
