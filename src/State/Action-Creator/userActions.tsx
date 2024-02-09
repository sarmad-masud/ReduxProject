import { App, Button, Space } from 'antd';

interface UserInfo {
  userId: string;
  name: string;
  email: string;
  password: string;
  age: number | null | undefined;
  website: string;
  introduction: string;
}

export const login = (email: string, password: string) => {
  const mockUser: UserInfo = {
    userId: '123',
    name: 'John Doe',
    email: 'test@example.com',
    password: 'password123',
    age: 25,
    website: 'example.com',
    introduction: 'Hello, I am John Doe.',
  };

  // Check if the provided credentials are valid (mock authentication)
  if (email === 'test@example.com' && password === 'password123') {
    // Dispatch the 'LOGIN' action with user information
    return {
      type: 'LOGIN',
      payload: mockUser,
    };
  } else {
    // If authentication fails, you may want to handle it accordingly
    console.error('Authentication failed');
    return {
      type: 'AUTH_ERROR',
    };
  }
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const addUser = (user: UserInfo) => {
  return {

    type: 'ADD_USER',
    payload: user,
  };
};

export const updateUser = (user: UserInfo) => {
  return {
    type: 'UPDATE_USER',
    payload: user,
  };
};

export const deleteUser = (userId: string) => {
  return {
    type: 'DELETE_USER',
    payload: userId,
  };
};

export const viewUser = (userId: string) => {
  return {
    type: 'VIEW_USER',
    payload: userId,
  };
};
