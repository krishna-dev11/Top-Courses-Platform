import React from 'react'

const Filter = ({filterData,setcategory}) => {
  return (
    <div className='flex gap-[5rem] h-[4rem] w-[] justify-center items-center'>
        {
            filterData.map((data)=>{
                return(
                    <button className='px-[1rem] py-[.5rem] bg-gray-50 border' onClick={()=>{setcategory(data.title)}}>{data.title}</button>
                    )
            })
        }
    </div>
  )
}

export default Filter