import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;
const MenuItems = [ 
  { key: '1', 
  label:(  <a> Home <Link to="/home" /></a> ) },

  { key: '2', 
  label: (  <a> Users <Link to="/main" /></a> ) },

  { key: '3', 
  label: 'Services' },
  
  { key: '4', 
  label: 'Contact' },
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
