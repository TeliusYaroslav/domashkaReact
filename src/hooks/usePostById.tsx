import { useEffect, useState } from "react"

// Переделать типизацию на то, что приходит с твоей API
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
    // здесь лучше сделать if (!id) return
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
    // Стильнее сделать инвертированный if
    // и перенести его до объявления функции
    if (id) {
      fetchPost()
    }
  }, [id])

  return { post, loading, error }
}
