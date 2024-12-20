import { useParams } from "react-router-dom"
import { usePostById } from "../../hooks/usePostById"

export function PostPage() {
  const params = useParams<{ id: string }>()
  const id = params && params.id ? params.id : ""
  const { post, loading, error } = usePostById(id)

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
      <h1>{post.title}</h1>
      {post.cover_image && (
        <img src={post.cover_image} alt={post.title} className="post-image" />
      )}
      <div
        className="post-body"
        dangerouslySetInnerHTML={{ __html: post.body_markdown }}
      ></div>
    </div>
  )
}
