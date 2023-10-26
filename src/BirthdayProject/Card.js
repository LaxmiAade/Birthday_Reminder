import Details from './Details'
import './Birthday.css'

import Data from './Data'
import { useState } from 'react'

const Card = () => {
    const [dataApi,setDataApi]=useState(Data)
  return (
    <section className='section'>
        <div className='card'>
            <h1>Todays Birthday 😊{dataApi.length}</h1>
            {dataApi.map((e)=>{
                return(
                    <Details name={e.name} age={e.age} img={e.img} key={e.age}></Details>
                )
            }) }
            <button onClick={()=>setDataApi([])}>Clear All</button>
        </div>
    </section>

  )
}

export default Card