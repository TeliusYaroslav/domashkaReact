import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "../Layouts/Layout.css"

interface Post {
  title: string
  cover_image: string
  body_markdown: string
}

export function PostPage() {
  const { id } = useParams<{ id: string }>()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true)
        const response = await fetch(`https://dev.to/api/articles/${id}`)
        const data = await response.json()
        setPost(data)
      } catch (error) {
        console.error("Ошибка загрузки поста:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])
  if (loading) {
    return <div>Загрузка...</div>
  }
  if (!post) {
    return <div>Пост не найден.</div>
  }
  return (
    <div className="post-page">
      <h1>{post.title}</h1>
      {post.cover_image && (<img src={post.cover_image} alt={post.title} className="post-image" />)}
      <div
        className="post-body"
        dangerouslySetInnerHTML={{ __html: post.body_markdown }}
      ></div>
    </div>
  );
}
