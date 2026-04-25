// npm i react-router // waxa uu naga sacidaa in pages relood asigoo sameeynin inaa adno paga kale


import { Outlet } from 'react-router'

const App = () => {
  return (
    <div>
      <h1>React Router</h1>
      <Outlet/>
    </div>
  )
}

export default App;
