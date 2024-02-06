import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Card, Flex } from 'antd';
import { login } from '../State/Action-Creator/userActions';
import UserDashboard from './UserDashboard';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const result = dispatch(login(email, password));

        if (result.type === 'LOGIN') {
            // If login is successful, navigate to the desired route using navigate
            navigate('/user-dashboard'); // Adjust the route based on your application structure
        }
    };

    const cardStyle: React.CSSProperties = {
        width: 620,
    };

    const imgStyle: React.CSSProperties = {
        display: 'block',
        width: 273,
        height: 273,
        objectFit: 'cover',
    };

    const divStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
    };

    return (
        <div style={divStyle}>
            <Card hoverable style={cardStyle} bodyStyle={{ padding: 0, overflow: 'hidden' }}>
                <Flex justify="space-between">
                    <img
                        alt="avatar"
                        src="https://sarmadmasud.com/wp-content/uploads/2023/09/IMG_0849_11zon-scaled.jpg"
                        style={imgStyle}
                    />
                    <Flex vertical align="flex-end" justify="space-between" style={{ padding: 32 }}>
                        <Form>
                            <Form.Item label="Email">
                                <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Item>
                            <Form.Item label="Password">
                                <Input.Password
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" onClick={handleLogin}>
                                    Login
                                </Button>
                            </Form.Item>
                        </Form>
                    </Flex>
                </Flex>
            </Card>
        </div>
    );
};

export default Login;
