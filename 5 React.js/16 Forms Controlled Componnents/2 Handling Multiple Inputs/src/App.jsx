import { useState } from "react"



const App = () => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
   
  });

  const handleSubmit = (event) => {
   event.preventDefault();

    // form sub 

    console.log(formData)
  }

  const handleChange = (e) => {
    
    const {name, value} = e.target

   setFormData((prevData) => ({...prevData, [name] : value}))

  }


  return (
   <form onSubmit={handleSubmit}>
   <input type="text" name="username" placeholder="Enter Username" value={formData.username} onChange={handleChange}/>
   <input type="text" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange}/>
   <input type="password" name="password"  value={formData.password} onChange={handleChange}/>
    <button type="submit">Submit</button>
   </form>
  )
}

export default App


