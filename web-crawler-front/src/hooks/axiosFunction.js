import axios from "axios"
export const axiosFunction = async (url , method , data) => {
  const config = {
    headers:{
      'Content-Type': 'application/json',
      'accept':'application/json'
    }
  }
  let res;
  if (method==='POST'){
    try {
      res = await axios.post(url , data ,config);
        // const jres = await res.json()
        console.log(res.data.id)
        // const ddata = await jres
        return res.data.id
    }
    catch {
    }
  }

  if (method==='GET'){
    res = await axios.get(url,config);
    const jres = await res.data
    console.log(jres)
    // const ddata = await jres
    return jres
  }
}