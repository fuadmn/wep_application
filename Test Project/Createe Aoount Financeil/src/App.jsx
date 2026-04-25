const App = () => {

  const options = [
    "Assets",
    "Liability",
    "Owner's Equity",
    "Expense",
    "Revenue"
  ];

  return (
    <div className="bg-[#e7e7f1] h-screen w-screen flex justify-center items-center">
      <div className="bg-gray-100 h-90 w-72 rounded-2xl shadow-md p-4">

       <form >
         <div> 
          <div className="flex flex-col">
            <label className="font-extrabold mb-1">Account Name</label>
            <input 
              type="text" 
              className="border border-gray-600 h-8 w-64 rounded-xl pl-5 font-bold" 
              placeholder="Accounts"
            />
          </div>

          <div className="flex flex-col mt-3">
            <label className="font-medium mb-1">Date</label>
            <input 
              type="date" 
              className="border border-gray-600 h-8 w-64 rounded-xl pl-5 font-bold"
            />
          </div>
        </div>

        <div className="mt-3">     
          <div className="flex flex-col">
            <label>Equation</label>
            <select className="border rounded-xl pl-5 w-64 h-8 font-bold">
              {options.map((item, index) => (
                <option key={index}>{item} *</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col mt-3">
            <label className="font-medium mb-1">Description</label>
            <input 
              type="text" 
              className="border border-gray-600 h-8 w-64 rounded-xl pl-5 font-bold" 
              placeholder="Description"
            />
          </div>
        </div>
        <button type="submit" className="h-8 w-64 bg-blue-700 rounded-2xl text-white mt-5">Submit</button>
       </form>
  
      </div>
      
    </div>
    
  )
}

export default App;