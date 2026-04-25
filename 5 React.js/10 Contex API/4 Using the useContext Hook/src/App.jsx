import  {Header} from './Header';

const App = () => {

  const user = {name: "Mc", role: "admin"}
  
  return(
    <div>
      <h1>My Application</h1>
        <Header user={user}/>
    </div>

  )
}

export default App;