import React from 'react'

import useFetch from './useFetch';

export const Posts = () => {

  const {loading, data, error} = useFetch('https://jsonplaceholder.typicode.com/posts');

  if(loading) return <h1>Loading...</h1>
  
  return (
    <div>
      <div>{JSON.stringify(data, null, 4)}</div>
    </div>
  )
}
