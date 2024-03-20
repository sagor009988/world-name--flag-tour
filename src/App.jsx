
import { useState } from 'react'
import './App.css'
import Countries from './Components/countries/Countries'

function App() {
 
  const [visitedList,setVisitedList]=useState([]);

  const handleMarkVisited=(country)=>{
     (country && setVisitedList([...visitedList,country]))
  }
  
  console.log('new',visitedList);

  return (
    <>
    <h3>Visited Country List</h3>
     {
      visitedList.map(country=>(<div>
        <ul><li>{country.name.common}</li></ul>
      </div>))
     }
      <Countries handleMarkVisited={handleMarkVisited}></Countries>
      
    </>
  )
}

export default App
