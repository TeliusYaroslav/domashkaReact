import { useEffect, useState } from "react"

interface CategoryData {
  id: number
  name: string
}

export function useCategories() {
  const [categories, setCategories] = useState<CategoryData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true)
        const response = await fetch("http://localhost:8001/api/categories/all")
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`)
        }
        const data = await response.json()
        const formattedCategories = data.map((category: any) => ({
          id: category.id,
          name: category.name || "Без названия", 
        }));

        setCategories(formattedCategories)
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Неизвестная ошибка")
        }
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return { categories, loading, error }
}
