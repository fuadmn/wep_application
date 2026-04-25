import React from 'react'

export const TodoItem = ({todo}) => {
  return (
    <li>
       <span>{todo.text}</span>
       <button>Delete</button>
    </li>
  )
}

