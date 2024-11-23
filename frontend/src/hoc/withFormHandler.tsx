import { useState } from "react";

export type FormData = Record<string, string>;


export type WithForm=  {
  status: string;
  handleSubmit:  (e: React.FormEvent) => Promise<void>
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  formData:FormData
}
type Wrap=({ status, handleSubmit, handleChange, formData }:WithForm)=>JSX.Element

export const withFormHandler = (WrappedComponent:Wrap,initialFormData:FormData) => {
  return function FormComponent() {  
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
  
      // Simple validation (You can enhance this)
      if (!formData.name || !formData.email || !formData.message) {
        setStatus('Please fill all fields');
        return;
      }
  
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
    return <WrappedComponent status={status} formData={formData} handleSubmit={handleSubmit} handleChange={handleChange}/>
  }
   
  
}
