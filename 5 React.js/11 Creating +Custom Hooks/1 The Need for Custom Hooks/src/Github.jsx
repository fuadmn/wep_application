import React, { useState , useEffect } from 'react'


export const Github = () => {


    const [data,setDate] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);


    useEffect(() => {

        let isMounted = true;

        const fetchDate = async() => {
            try{

                const response = await fetch('https://api.github.com/users/fuadmn')

                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status} `)
                }

                const result = await response.json();

               
                if(isMounted){
                    setDate(result);
                    setLoading(false)
                }

            } catch(error){
                if(isMounted){
                    setError(null)
                    setLoading(false)

                }

            }
        }

        fetchDate();

        return () => {
            isMounted = false;
        }

    },[])

    if(loading) return<h1>Loading...</h1>

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github;
     