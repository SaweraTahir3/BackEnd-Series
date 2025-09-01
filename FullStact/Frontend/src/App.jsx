
import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"



function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/api/data')

      .then((response) => {
        setData(response.data)
      })

      .catch((error) => {
        console.log(error);
      })
  })

  return (
    <>
      <h1>Sawera and Full Stack</h1>

      <p> data : {data.length}</p>

      {

        data.map((datas) => {

          <div key={datas.id}>
            <h3>
              {datas.course}
            </h3>
            <h4>d{datas.paid}</h4>
            <h5>{datas.duration}</h5>
          </div>
        })
      }

    </>
  )
}

export default App
