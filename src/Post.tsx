interface PostProps {
    title: string
    description: string
    imageUrl: string
    author: string 
  }
  
  export function Post(props: PostProps) {
    return (
      <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <img src={props.imageUrl} alt={props.title} />
        <p>Автор: {props.author}</p>
      </div>
    )
  }