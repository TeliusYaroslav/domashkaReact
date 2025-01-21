import { useLikedPosts } from "../../../pages/MainPage/APPP/App"


interface PostProps {
  id: number
  title: string
  description: string
  imageUrl: string
  author: string
}

export function PostCard({ id, title, description, imageUrl, author }: PostProps) {
  const { likedPosts, switchLike } = useLikedPosts()

  const isLiked = likedPosts.includes(id)
  return (
    <div className="card">
      <h1>{title}</h1>
      <img src={imageUrl} alt={title} />
      <p>{description}</p>
      <p>Автор: {author}</p>
      <button onClick={() => switchLike(id)}>
        {isLiked ? "Убрать из любимых" : "Добавить в любимые"}
      </button>
    </div>
  )
}
