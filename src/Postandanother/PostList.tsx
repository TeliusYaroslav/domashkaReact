import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

interface PostData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
}

export function PostList() {
  const [posts, setPosts] = useState<PostData[]>([])

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => {
        const formattedPosts = data.map((article: any) => ({
          id: article.id,
          title: article.title,
          description: article.description || "No description available",       // тоже замена проверки если нет описания
          imageUrl: article.cover_image || "https://via.placeholder.com/150",   // штука что если у поста нет картинки будет просто квадрат(что бы не делать нудных проверок на наличие картинки)
          author: article.user.username
        }))
        setPosts(formattedPosts)
      })
      .catch((error) => console.error("Error fetching posts:", error))
  }, [])

  return (
    <div className="central-container">
      <div className="container">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <Link to={`/post/${post.id}`}>
              <img src={post.imageUrl} alt={post.title} />
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <p>Автор: {post.author}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
