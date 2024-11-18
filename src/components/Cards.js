import React, { useState } from 'react'
import Card from './Card';

const Cards = ({data,category}) => {

    const[likedcourse,setlikedcourses]=useState([])

    function getcategory()
    {
        if(category === "All")
        {   
            let allcoursesarray = [];

            Object.values(data).forEach((categorywisedata)=>{
                categorywisedata.forEach((particulacarddata)=>{
                    allcoursesarray.push(particulacarddata)
                })
            })
            // console.log(allcoursesarray) 
            return allcoursesarray;
            
        }
        else
        {   console.log(data[category])
            return data[category]
            
        }
    }

  return (
    <div className='w-screen  bg-bgDark2 flex items-center justify-center'>
        <div className='flex flex-wrap gap-4 w-[73%] '>
        {
            getcategory().map((card)=>(
                <Card card={card} likedcourse={likedcourse}  setlikedcourses={setlikedcourses}/>
            ))
        }
    </div>
    </div>
  )
}

export default Cards