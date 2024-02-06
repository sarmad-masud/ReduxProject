import React, { useState, useEffect } from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,  UserInfo  } from '../Features/userSlice';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};



const AddUser: React.FC = () => {


    const dispatch = useDispatch();
    
    const [user, setUser] = useState <UserInfo>({
        userId: '',
        name: '',
        email: '',
        password: '',
        age: null as number | null | undefined,
        website: '',
        introduction: '',
    });
    const generateUniqueUserId = (): string => {
        const prefix = 'user'; // You can customize the prefix
        const timestamp = Date.now().toString();
        const randomSuffix = Math.floor(Math.random() * 1000).toString(); // Adding some randomness
      
        return `${prefix}-${timestamp}-${randomSuffix}`;
      };

    const onFinish = (values: typeof user) => {
      
        user.userId = generateUniqueUserId();
        console.log('Dispatching Form values', user);
        dispatch(addUser(user));      
        
      };

      


    return (
        <div>
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
                validateMessages={validateMessages}
            >
                <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                    <Input
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                    />
                </Form.Item>
                <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                    <Input
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                </Form.Item>
                <Form.Item name={['user', 'password']} label="Password" rules={[{ required: true }]}>
                    <Input
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                </Form.Item>

                <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 12, max: 99 }]}>
                    <InputNumber
                        value={user.age}
                        onChange={(value) => setUser({ ...user, age: value !== 0 ? value : undefined })}
                    />
                </Form.Item>
                <Form.Item name={['user', 'website']} label="Website">
                    <Input
                        value={user.website}
                        onChange={(e) => setUser({ ...user, website: e.target.value })}
                    />
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="Introduction">
                    <Input.TextArea
                        value={user.introduction}
                        onChange={(e) => setUser({ ...user, introduction: e.target.value })}
                    />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AddUser;
