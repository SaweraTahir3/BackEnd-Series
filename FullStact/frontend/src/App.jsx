import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"


function App() {
  const [data, setData] = useState([])

  useEffect(() => {

    axios.get('/api/data')
      .then((response) => {
      console.log(response.data); 
        setData(response.data)
      })

      .catch((error) => {
        console.log(error);
      })
  } )

  return (
    <>
      <h1>Sawera and Full Stack</h1>

      <p> data : {data.length}</p>

      {

        data.map((datas , index) => (

          <div key={datas.id}>
            <h2>{datas.Course}</h2>
            <h3>{datas.name}</h3>
            <h4>{datas.paid}</h4>
            <h5>{datas.duration}</h5>
          </div>
        ))
        }
      


    </>
  )
}

export default App
