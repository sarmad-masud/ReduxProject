import React from 'react';
import { Layout, theme } from 'antd';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './Theme/Navbar';
import Login from './Components/login';
import UserDashboard from './Components/UserDashboard';
import Home from './Theme/Home';

const { Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Navbar/>
      <Content style={{ padding: '40px 48px' }}>

        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Router>
            <Routes>
            
              <Route path="/home" element={<Home />}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/user-dashboard" element={<UserDashboard/>} />
            </Routes>
          </Router>

        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Sarmad Masud
      </Footer>
    </Layout>
  );
};

export default App;