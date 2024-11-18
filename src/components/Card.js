import React from 'react'
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = ({card,likedcourse,setlikedcourses}) => {
 
  function hearthandler()
  {
    if(likedcourse.includes(card.id))
    {
      setlikedcourses(prev=>prev.filter(cid=>cid!==card.id))
      // toast.error("liked remove")
      toast('Liked removed',
        {
          icon: '❌',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            width:'200px'
          },
        }
      )
    }
    else
    {
      if(likedcourse.length === 0)
      {
        setlikedcourses([card.id]);
      }
      else
      {
        setlikedcourses(prev =>[...prev,card.id])
      }
      toast('Liked successfull',
        {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            width:'200px'
          },
        }
      )
    }
  }

  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80  rounded-md flex flex-col gap-1.5 relative'>
         <img src={card.image.url} className='rounded-md'/>
         <button onClick={hearthandler} className='absolute bg-white p-[.4rem] rounded-full right-1 top-[8rem]'>{likedcourse.includes(card.id) ? <FcLike fontSize='1.75rem'/>:<FcLikePlaceholder fontSize='1.75rem'/>}</button>
         <div className='w-[60%] mx-2 font-medium text-white leading-5'>{card.title}</div>
         <div className='mx-2 mb-2 text-white leading-4'>{card.description.length >100 ? (card.description.substr(0,100)) + "...":(card.description)}</div>
    </div>
  )
}

export default Card