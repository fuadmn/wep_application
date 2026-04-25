import { useState } from "react"



const App = () => {



  const [formData,setFormData] = useState({
   username:"",
   email:"",
   agreement: false,
   county: ""

  })

  const handleSubmit = (event) => {
   event.preventDefault();

    // form sub 

   console.log(formData)
  }

const handleChange = (e) => {
  const {name, value, type,checked } = e.target;
  setFormData((prevData) => ({...prevData, [name] : type === "checkbox" ? checked : value}))
}

  return (
   <form onSubmit={handleSubmit}>


    <input type="text" name="username" value={formData.username} onChange={handleChange}/>
    <input type="email" name="email" value={formData.email} onChange={handleChange}/>

    <label htmlFor="">Checkbox</label>
   <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange}/>

   <select name="county" value={setFormData.county} onChange={handleChange} >
      <option value="">Select county</option>
      <option value="somalia">somalia </option>
      <option value="dibouti">Dibouti</option>
    </select>

    <button type="submit">Submit</button>

   </form>
  )
}

export default App
