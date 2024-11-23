import { useState } from "react";
import { JSX } from "react/jsx-runtime";

export type FormData = Record<string, string>;


export type WithForm=  {
  status?: string;
  handleSubmit?:  (e: React.FormEvent) => Promise<void>
  handleChange?: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  formData?:FormData;
  setIsLogin:React.Dispatch<React.SetStateAction<boolean>>
}
type Wrap=({ status, handleSubmit, handleChange, formData }:WithForm)=>JSX.Element | null

export const withFormHandler = (WrappedComponent:Wrap,initialFormData:FormData) => {
  return function FormComponent(props: JSX.IntrinsicAttributes & WithForm) {  
    // State to manage form submission status
    const [formData,setFormData]=useState(initialFormData)
    const [status, setStatus] = useState('');
  
    // Handle input change
    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement >) => {
      
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  console.log(formData)
    // Handle form submission
    const handleSubmit = async (e:React.FormEvent) => {
      e.preventDefault();
  
      //  API request 
      try {
        console.log(setFormData)
  
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } catch (error) {
        setStatus('Something went wrong. Please try again later.');
        console.log(error)
      }
    };
    return <WrappedComponent {...props} status={status} formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} />
  }
   
  
}
