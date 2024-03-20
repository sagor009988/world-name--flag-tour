import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './countries.css'

const Countries = ({handleMarkVisited}) => {
    const [countries,setCountries]=useState([]);
    //  visited country flag
    const [visitedFlag,setVisitedFlag]=useState([]);
    const handleVisitedFlag=(flag)=>{
       (flag && setVisitedFlag([...visitedFlag,flag]))
    }

    useEffect(()=>{
       const fetchData=async()=>{
        try{
            const response=await fetch('https://restcountries.com/v3.1/all');
            if(!response.ok){
                throw new Error('network problem');

            }
            const data=await response.json();
            setCountries(data);
        }
        catch(error){
            console.error('error',error)
        }
       }
       fetchData()
    },[])
   let count=1;
    return (
        <div >
            <h1>World Tour Flags</h1>
            <div>
                {
                    visitedFlag.map(flg=>(<div>
                        {count++}<img src={flg.flags.png} alt="" />
                    </div>))
                }
            </div>
           <div className='country-container'>
           {
            countries && countries.map((country,index)=><Country key={index} country={country}
                handleVisitedFlag={handleVisitedFlag}
                handleMarkVisited={handleMarkVisited}
            ></Country>)
            
           }
           </div>
        </div>
    );
};

export default Countries;