import { Link } from "react-router-dom"
import { usePosts } from "../../hooks/usePosts"


export function PostList() {
  const { posts, loading, error } = usePosts()

  if (loading) {
    return <div>Загрузка...</div>
  }

  if (error) {
    return <div>Ошибка: {error}</div>
  }

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
