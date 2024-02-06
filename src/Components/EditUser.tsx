import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, UserInfo } from "../Features/userSlice";
import { Modal, Form, Input, Button } from 'antd';

import { useAppSelector } from '../Hooks';

interface EditUserProps {
    userId: string;
    onClose: () => void;
}

const EditUser: React.FC<EditUserProps> = ({ userId, onClose }) => {
    const dispatch = useDispatch();
    const userList = useAppSelector(state => {
        console.log(state)
        return state.userList
      })
    const currentUser = userList.find((user) => user.userId === userId);
    console.log( "userId in edit: ", userId)
    console.log( "currentUser in edit:", currentUser)
    console.log( "userList in edit: ", userList)
    const [form] = Form.useForm();

    useEffect(() => {
        if (currentUser) {
            form.setFieldsValue({
                name: currentUser.name,
                email: currentUser.email,
                password: currentUser.password,
                age: currentUser.age,
                website: currentUser.website,
                introduction: currentUser.introduction,
            });
        }
    }, [currentUser, form]);

    const onFinish = (values: any) => {
        const updatedData: { userId: string; updatedUser: UserInfo } = {
            userId,  // Include the userId property
            updatedUser: {
                name: values.name,
                email: values.email,
                password: values.password,
                age: values.age,
                website: values.website,
                introduction: values.introduction,
                userId: userId
            },
        };
    
        dispatch(updateUser(updatedData));
        onClose();
    };

    return (
        
        
            <Form form={form} onFinish={onFinish} layout="vertical">
                <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter the name' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter the email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input.Password />
                </Form.Item>
                <Form.Item label="Age" name="age">
                    <Input type="number" />
                </Form.Item>
                <Form.Item label="Website" name="website">
                    <Input />
                </Form.Item>
                <Form.Item label="Introduction" name="introduction">
                    <Input.TextArea />
                </Form.Item>
                <Button key="submit" type="primary" onClick={() => form.submit()}>
                    Save
                </Button>,
            </Form>
        
    );
};

export default EditUser;
