import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from '../App';
import Home from './Home';
import Login from './login';

const { Header } = Layout;
const MenuItems = [ 
  { key: '1', label:(  <a> Home <Link to="/home" /></a>

  ) , path: <Link to="/home" /> },
  { key: '2', label: 'About Us', path: '/about' },
  { key: '3', label: 'Services', path: '/services' },
  { key: '4', label: 'Login', path: '/login' },
];


export const Navbar = () => {
  return (
    <div><Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className="demo-logo" />
      
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={MenuItems}
        style={{ flex: 1, minWidth: 0 }}
      
      />
    </Header></div>
  )
}
