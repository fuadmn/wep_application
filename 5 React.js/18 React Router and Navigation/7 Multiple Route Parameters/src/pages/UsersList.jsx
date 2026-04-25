import { Link } from "react-router"

export const users = [
        { id: 1, name: 'Alice'},
        { id: 2, name: 'Bpp'},
        { id: 3, name: 'Aisha'},
        { id: 4, name: 'Ali'},
        { id: 5, name: 'Mohamed'},
     ];

const UsersList = () => {



  return (
    <div className="text-gray-900">
        <h1 className="font-bold">Users list</h1>
        <ul>
            {
                users.map(user => (
                    <li key={user.id}>
                        <Link to= {`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default UsersList;
