

function App(){

  const todo = [
    {id: 1, text: "React Learn"},
     {id: 2, text: "Bulid Project"},
  ];

  return(
        <ul>
          {
            todo.map(( todo, index) => (
              <li key={index.id}>{todo.text}</li>
            ))
          }
        </ul>
  )
}

export default App;