import useFetch  from './useFetch';

export const Github = () => {

    const {data, loading, error} = useFetch(`https://api.github.com/users/fuadmn`)

    if(loading) return<h1>Loading...</h1>

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github;
     