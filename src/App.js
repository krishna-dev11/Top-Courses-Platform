import React, { useEffect, useState } from "react";
import {apiUrl,filterData} from "./data"
import Filter from "./components/Filter"
import Navbar from "./components/Navbar"
import Spinner from "./components/Spinner";
import Cards from "./components/Cards";


const App = () => {
     
 const[category,setcategory] = useState(filterData[0].title)
 const[loading,setloading] = useState(true)
 const[data,setdata] = useState(null)


async function fetchdata()
{
  setloading(true);

  try
  {
      const response = await fetch(apiUrl)
      const output = await response.json();
      setdata(output.data)
  }
  catch(error)
  {

  }

  setloading(false)
}

useEffect(()=>{
    fetchdata();
},[])

  return (
     <div className="h-screen w-screen flex flex-col items-center">
      
      <Navbar></Navbar>
      
      <Filter filterData={filterData} setcategory={setcategory}></Filter>

      {loading ? <Spinner/> : <Cards data={data} category={category}/>};
     
     </div>
  );
};

export default App;
