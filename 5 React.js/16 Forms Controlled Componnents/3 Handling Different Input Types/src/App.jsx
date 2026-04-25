import { useState } from "react"



const App = () => {

  const [isChecked, setIsChecked] = useState(false);
  const [selectOption, setSelectOption] = useState();

  const handleSubmit = (event) => {
   event.preventDefault();

    // form sub 

    if(!isChecked){
      alert("Please check the box")
      return
    }
    console.log(isChecked)
    if(setIsChecked == ""){
        alert("Please choose an option")
        return
    }
    console.log(selectOption)
  }

const handleCheckboxChange = (e) => {
  setIsChecked(e.target.checked);
}

  return (
   <form onSubmit={handleSubmit}>
    <label htmlFor="">Checkbox</label>
   <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>

   <select value={selectOption} onChange={(e) => setSelectOption(e.target.value)} >
      <option value="">Select option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select>

    <button type="submit">Submit</button>

   </form>
  )
}

export default App
