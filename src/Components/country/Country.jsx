import { useState } from "react";
import "./country.css";

const Country = ({ country,handleMarkVisited ,handleVisitedFlag}) => {
  
  const [visited,setVisited]=useState(false);
  const handleVisited=()=>{
    setVisited(!visited)
  }

  return (
    <div className={visited?'condition1':'country'}>
      <h1>Country Name: {country?.name.common.slice(0, 5)}</h1>
      <h3>Week Start: {country?.startOfWeek}</h3>
      <img src={country?.flags?.png} alt="" />
      <button onClick={handleVisited}>{visited ?'Visited':'Going To Visit'}</button>
      {visited?<p>'i have visited The Country'</p>:'Want to go Visit the Country'}
      <button onClick={()=>handleMarkVisited(country)}>mark visited Country</button>
      <button onClick={()=>handleVisitedFlag(country)}>Flag</button>
    </div>
  );
};

export default Country;
