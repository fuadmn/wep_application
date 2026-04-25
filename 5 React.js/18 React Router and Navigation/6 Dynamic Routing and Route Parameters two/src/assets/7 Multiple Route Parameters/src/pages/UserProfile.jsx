import { useParams } from "react-router";
import { users } from "./UsersList"

const UserProfile = () => {

   const { userId } = useParams();
  
   const userInfo = users.filter(user => user.id == userId)[0]

   console.log(userInfo)


  return (
    <div>
      <h2>UserProfile</h2>
      <p>User Id : {userInfo.id}</p>
      <p>User Name  : {userInfo.name}</p>
    </div>
  )
}

export default UserProfile;
