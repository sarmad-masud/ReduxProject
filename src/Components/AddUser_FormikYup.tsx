import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, UserInfo } from '../Features/userSlice';
import { Formik, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import './AddUser_FormikYup.css';


const initialValues: UserInfo = {
  userId: '',
  name: '',
  email: '',
  password: '',
  age: 0,
  website: '',
  introduction: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  age: Yup.number().min(12, 'Minimum age is 12').max(99, 'Maximum age is 99').required('Age is required'),
  website: Yup.string().url('Invalid URL'),
  introduction: Yup.string(),
});

const AddUser_FormikYup = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState<UserInfo>({
    userId: '',
    name: '',
    email: '',
    password: '',
    age: 0,
    website: '',
    introduction: '',
  });
  const generateUniqueUserId = (): string => {
    const prefix = 'user'; // You can customize the prefix
    const timestamp = Date.now().toString();
    const randomSuffix = Math.floor(Math.random() * 1000).toString(); // Adding some randomness

    return `${prefix}-${timestamp}-${randomSuffix}`;
  };

  const onFinish = (values: typeof user, { resetForm }: FormikHelpers<typeof user>) => {
    console.log('Button Clicked');
    const newUser = {
      ...values,
      userId: generateUniqueUserId(),
    };
    setUser(newUser); // Update state here
    console.log('Dispatching Form values', newUser);
    dispatch(addUser(newUser));
    resetForm();
    
  };
  return (
    <Formik
      initialValues={user}
      validationSchema={validationSchema}
      onSubmit={onFinish}
    >
      {({ values, handleChange, handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              id="name"
              name="name"
            />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
            />
            <ErrorMessage name="email" component="div" className="error-message"/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
            />
            <ErrorMessage name="password" component="div" className="error-message"/>
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <Field
              type="number"
              id="age"
              name="age"
            />
            <ErrorMessage name="age" component="div" className="error-message"/>
          </div>
          <div>
            <label htmlFor="website">Website</label>
            <Field
              type="text"
              id="website"
              name="website"
            />
            <ErrorMessage name="website" component="div" className="error-message"/>
          </div>
          <div>
            <label htmlFor="introduction">Introduction</label>
            <Field
              as="textarea"
              id="introduction"
              name="introduction"
            />
          </div>
          <div>
            <button type="submit"> Submit </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default AddUser_FormikYup;
