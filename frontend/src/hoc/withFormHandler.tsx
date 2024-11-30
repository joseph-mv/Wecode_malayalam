import axios from "axios";
import { useState } from "react";
import { JSX } from "react/jsx-runtime";

export type FormData = Record<string, string>;


export type WithForm=  {
  status?: string;
  handleSubmit?:  (e: React.FormEvent) => Promise<void>
  handleChange?: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  formData?:FormData;
  setIsLogin?:React.Dispatch<React.SetStateAction<boolean>>
}
type Wrap=({ status, handleSubmit, handleChange, formData }:WithForm)=>JSX.Element | null
const BASE_URL = import.meta.env.VITE_BASE_URL
export const withFormHandler = (WrappedComponent:Wrap,initialFormData:FormData,url:string) => {
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
  // console.log(formData,url)
    // Handle form submission
    const handleSubmit = async (e:React.FormEvent) => {
      e.preventDefault();
  
      //  API request 
      try {
        // console.log(formData)
        
      const response=  await axios.post(BASE_URL+'/'+url,formData)
      console.log(response.data.msg || response.data.error)
        setStatus(response.data.msg || response.data.error);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } catch (error: unknown) {
        setStatus(error?.response.data.message);
        console.log(error.response)
        console.log(error?.response.data.message)
      }
    };
    return <WrappedComponent {...props} status={status} formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} />
  }
   
  
}
