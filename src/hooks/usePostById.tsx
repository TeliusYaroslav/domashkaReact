import { useEffect, useState } from "react"

interface Post {
  author: string
  description: string;
  name: string
  body_markdown: string;
  
}

export function usePostById(id: string) {
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true)
        const response = await fetch(`http://localhost:8001/api/posts/${id}`)
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`)
        }
        const data = await response.json()
        setPost(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Неизвестная ошибка")
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchPost()
    }
  }, [id])

  return { post, loading, error }
}
