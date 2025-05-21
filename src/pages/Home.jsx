import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import Card from './Card'
import axios from 'axios'

const Home = () => {
  const [datas , setDatas] = useState([]);

  const fetchData = async() => {
    try {
      const response = await axios.get("http://localhost:3000/blog");
      if(response.status == 200) {
        setDatas(response.data.data)
      }
      else {
        setDatas(null)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  },[])
  return (
<>
  <Navbar />
<div className="flex flex-wrap justify-center gap-6 px-4 py-8 mt-8">
  {
    datas.length > 0 && datas?.map((data) => {
      return (
        <>
        <Card key={data?._id} data={data}/>
        </>
      )
    })
  }
</div>

</>

  )
}

export default Home