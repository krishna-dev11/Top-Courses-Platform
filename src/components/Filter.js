import React from 'react'

const Filter = ({filterData,catergory,setcategory}) => {
  return (
 
      <div className='py-[1.2rem] bg-bgDark2 w-screen flex '>
        <div className='flex w-[35%] justify-evenly gap-3 mx-auto'>
        {
            filterData.map((data)=>{
                return(
                    <button className='bg-black px-[.5rem] py-[.3rem] rounded-md font-medium text-white hover:bg-opacity-50 border-2 transition-all duration-300 ${category === data.title ? 
            "bg-opacity-60 border-white" :
            "bg-opacity-40 border-transparent"}' onClick={()=>{setcategory(data.title)}}>{data.title}</button>
                    )
            })
        }
    </div>
      </div>

  )
}

export default Filter