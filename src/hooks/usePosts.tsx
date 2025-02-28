import { useEffect, useState } from "react"

// Переделать типизацию на то, что приходит с твоей API
interface PostData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
}

export function usePosts() {
  const [posts, setPosts] = useState<PostData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        const response = await fetch("http://localhost:8001/api/posts/all")
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`)
        }
        const data = await response.json()
        const formattedPosts = data.map((article: any) => ({
          id: article.id,
          title: article.title,
          description: article.description || "No description available",// тоже замена проверки если нет описания
          imageUrl: article.cover_image || "https://via.placeholder.com/150",  // штука что если у поста нет картинки будет просто квадрат(что бы не делать нудных проверок на наличие картинки)
          author: article.user?.username,
        }))
        setPosts(formattedPosts)
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError("Неизвестная ошибка")
        }
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return { posts, loading, error }
}
