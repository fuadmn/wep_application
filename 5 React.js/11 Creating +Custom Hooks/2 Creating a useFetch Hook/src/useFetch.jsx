import { useState, useEffect } from "react";

const useFetch = (url) => {

        const [data,setDate] = useState(null);
        const [loading,setLoading] = useState(true);
        const [error,setError] = useState(null);
    
    
        useEffect(() => {
    
            let isMounted = true;
    
            const fetchDate = async() => {
                try{
    
                    const response = await fetch(url)
    
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


        return {data, loading, error}

}

export default useFetch;