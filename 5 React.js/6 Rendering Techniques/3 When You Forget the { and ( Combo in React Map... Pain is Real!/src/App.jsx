

function App(){

  const fruit = ["Apple","Panana","Chery"];

  return(
     <ul>
      {
        fruit.map(( fruit, index ) => {

          // meshaan shaqooyin 

          return  <li key={index}>{fruit}</li>
        })
      }
     </ul>
  )
}

export default App;