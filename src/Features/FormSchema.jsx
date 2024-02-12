import * as Yup from 'yup';


export const FormSchema = Yup.object().shape({
    name: Yup.string().required('FY Name is required'),
    email: Yup.string().email('Invalid email').required('FY Email is required'),
    password: Yup.string().required('FY Password is required'),
    age: Yup.number().min(12, 'Minimum age is 12').max(99, 'Maximum age is 99').required('FY Age is required'),
    website: Yup.string().url('Invalid URL').required('FY Website is required'),
    introduction: Yup.string(),
  });
  
