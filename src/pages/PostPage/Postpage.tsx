import { useParams } from "react-router-dom"
import { usePostById } from "../../hooks/usePostById"

import "./PostPage.css"
import { useLikedPosts } from "../../context/LikedPostsContext"

export function PostPage() {
  const params = useParams<{ id: string }>()
  const id = params && params.id ? params.id : ""
  const { post, loading, error } = usePostById(id)

  const { likedPosts, switchLike } = useLikedPosts()
  const isLiked = id && likedPosts.includes(Number(id))

  if (loading) {
    return <div>Загрузка...</div>
  }

  if (error) {
    return <div>Ошибка: {error}</div>
  }

  if (!post) {
    return <div>Пост не найден.</div>
  }

  return (
    <div className="post-page">
      <h1>{post.name}</h1>
      <h1>{post.description}</h1>
      <div
        className="post-body"
        dangerouslySetInnerHTML={{ __html: post.body_markdown }}
      ></div>
      <h1>Author: {post.author}</h1>
      <button onClick={() => switchLike(Number(id))}>
        {isLiked ? "Убрать из любимых" : "Добавить в любимые"}
      </button>
    </div>
  )
}
