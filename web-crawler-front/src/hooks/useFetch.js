

import { useState, useEffect } from "react"

export const useFetch = (url , method = 'GET') => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const [options , setOptions] = useState(null)

  const postData = (Pdata) => {
    setOptions({
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
        'accept':'application/json'
      },
      mode : "no-cors",
      body: JSON.stringify(Pdata),
      // body: Pdata,
    })
  }


  useEffect(() => {

    const fetchData = async (fetchOptions) => {
      setIsPending(true)

      try {
        const res = await fetch(url, fetchOptions)
        const jres = await res.json()
        console.log(jres)
        setIsPending(false)
        setData(jres)
        setError(null)
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted")
        } else {
          setIsPending(false)
          setError('Could not fetch the data')
        }
      }
    }

    if (method === "GET"){
      fetchData({
        method:"GET",
        headers:{
          'Content-Type': 'application/json',
          'accept':'application/json'
        },
        mode : "no-cors"
        // body: Pdata,
      })
    }
    if ((method === "POST" || method === 'PUT') && options){
      fetchData(options)
    }

  }, [method, options, url])

  return { data, isPending, error , postData}
}