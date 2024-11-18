import React from 'react'

const Card = ({card,likedcourse,setlikedcourses}) => {
 
  function hearthandler()
  {
    if(likedcourse.include(card.id))
    {
      setlikedcourses(prev=>prev.filter(cid=>cid!==card.id))
      toast.warning("liked remove")
    }
    else
    {
      if(likedcourse.length === 0)
      {
        setlikedcourses([card.id]);
      }
      else
      {
        setlikedcourses(prev =>)
      }
    }
  }

  return (
    <div>
         <img src={card.image.url}/>
         <button onClick={()=>{hearthandler}}></button>
         <div>{card.title}</div>
         <div>{card.description.length >100 ? (card.description.substr(0,100)) + "...":(card.description)}</div>
    </div>
  )
}

export default Card