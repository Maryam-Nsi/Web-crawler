
import axios from "axios"
export const axiosFunction = async (url , method , data) => {
  const config = {
    withCredentials: false,
    headers:{
      crossdomain: true ,
      'Content-Type': 'application/json',
      'accept':'application/json'
    }
  }
  let res;
  if (method=='POST'){


    res = await axios.post(url , data ,config);


  }

  if (method=='GET'){
    res = await axios.get(url,config);
  }
  const jres = await res.json()
  console.log(jres)
  const ddata = await jres
  return  {ddata}


}