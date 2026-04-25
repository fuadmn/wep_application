import { useState } from "react"

import './App.css'

const App = () => {



  const [formData,setFormData] = useState({
   username:"",
   email:"",
  })

  const [errors,setErrors] = useState({});

  const validateFrom = () => {
    const errors = {};

    if(!formData.username.trim()){
      errors.username = "Username is requited"
    }
      if(!formData.email.trim()){
      errors.email = "Email is requited";
    }
    return errors;
  }

  const handleSubmit = (event) => {
   event.preventDefault();
   const validateErrors = validateFrom();
   console.log(Object.keys(validateErrors))
   if(Object.keys(validateErrors).length === 0){
    console.log("Success")
   }else{
   setErrors(validateErrors);
   }
    // form sub 

   console.log(formData)
  }

const handleChange = (e) => {
  const {name, value } = e.target;
  setFormData((prevData) => ({...prevData, [name] : value}));

  if(name === 'email' && !value.includes('@')){
    setErrors((prev) => ({...prev, email: "Email is invalid"}))
  }else{
     setErrors((prev) => ({...prev, [name]: ""}))
  }
}

  return (
   <form onSubmit={handleSubmit}>


    <input type="text" name="username" value={formData.username} onChange={handleChange}/>
    <br />
    { errors.username && <p className="error">{errors.username}</p> }
    <input type="email" name="email" value={formData.email} onChange={handleChange}/>
    { errors.email && <p className="error">{errors.email}</p> }
    <br />

   

    <button type="submit">Submit</button>

   </form>
  )
}

export default App
