import React from 'react'
import Card from './Card';

const Cards = ({data,category}) => {

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
    <div className='flex flex-wrap '>
        {
            
            getcategory().map((card)=>(
                <Card card={card}/>
            ))
        }
    </div>
  )
}

export default Cards