import { useRouteError } from "react-router"

const NotFound = () => {

  const error = useRouteError();

  console.log(error)
  
  return (
    <div>
      <h2>Error</h2>
      <p>{error.statusText}</p>
      <p>Sorry this page does not exists.statusText</p>
    </div>
  )
}

export default NotFound


