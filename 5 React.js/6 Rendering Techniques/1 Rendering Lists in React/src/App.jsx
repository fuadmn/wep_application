

function App(){

  const fruits = ["Apple","Banana","chary"];

  return(
    <div>
        <ul>
          {
            fruits.map( fruits => (
              <li key={fruits}>{fruits}</li>
            ))
          }
        </ul>
    </div>
  )
}

export default App;