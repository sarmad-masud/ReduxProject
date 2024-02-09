import React from 'react';
import { Layout, theme } from 'antd';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from './Theme/Navbar';
import Login from './Theme/login';
import UserDashboard from './Components/UserDashboard';
import Home from './Theme/Home';
import { Theme } from './Theme/Theme';
import Services from './Components/Services';

const { Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Get the current location using useLocation hook
  const location = useLocation();
  // Check if the current route is not the login page
  const showNavbar = location.pathname !== '/';
  console.log("AHMMMM", showNavbar);

  return (
    <Layout>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Theme />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>



      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Sarmad Masud
      </Footer>
    </Layout>
  );
};

export default App;