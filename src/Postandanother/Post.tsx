import { useState } from "react"

interface PostProps {
    title: string
    description: string
    imageUrl: string
    author: string 
  }
  export function Post(props: PostProps) {


    const [likes, setLikes] = useState(0)
    const [isLiked, setIsLiked] = useState(false)
    function checkLike() {
      if (!isLiked) {
        setLikes(likes + 1)
        setIsLiked(true)
      }
    }


    return (
      <div className="card">
        <h1>{props.title}</h1>
        
        <img src={props.imageUrl}/>
        <p>{props.description}</p>
        <p>Автор: {props.author}</p>
        <p>Лайки: {likes}</p>
        <button onClick={checkLike} disabled={isLiked}>

          {(() => {
            if (isLiked) {
              return "Лайк поставлен"
            } else {
              return "Поставить лайк"
            }
          })()}
        </button>


      </div>
    )
  }
