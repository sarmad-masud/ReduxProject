import { Layout, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../State/Action-Creator/userActions';
import { useNavigate } from 'react-router-dom';


const { Header } = Layout;
const MenuItems = [
  {
    key: '1',
    label: (<a> Home <Link to="/home" /></a>)
  },

  {
    key: '2',
    label: (<a> Users <Link to="/main" /></a>)
  },

  {
    key: '3',
    label: (<a> Services <Link to="/Services" /></a>)
  },

  {
    key: '4',
    label: 'Contact'
  },
];


export const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logout clicked');
    dispatch(logout());
    navigate('/');
  };




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
      <Button onClick={handleLogout} type="primary" style={{ marginLeft: 'auto' }}>
        Logout
      </Button>
    </Header></div>
  )
}
