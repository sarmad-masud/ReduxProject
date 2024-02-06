import React from 'react';
import { Layout, theme } from 'antd';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './Theme/Navbar';
import Login from './Theme/login';
import UserDashboard from './Components/UserDashboard';
import Home from './Theme/Home';
import { Theme } from './Theme/Theme';

const { Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      

          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/navbar" element={<Navbar />} />
              <Route path="/main" element={<Theme />} />
              <Route path="/home" element={<Home />} />
              <Route path="/user-dashboard" element={<UserDashboard />} />
            </Routes>
          </Router>

      
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Sarmad Masud
      </Footer>
    </Layout>
  );
};

export default App;