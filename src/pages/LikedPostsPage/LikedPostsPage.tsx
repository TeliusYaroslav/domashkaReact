import { useLikedPosts } from "../../context/LikedPostsContext"
import { usePosts } from "../../hooks/usePosts" 
import { PostCard } from "../../shared/PostList/PostCard/PostCard"

export function LikedPostsPage() {
  const { likedPosts } = useLikedPosts()
  const { posts, loading, error } = usePosts() 

  if (loading) return <div>Загрузка...</div>
  if (error) return <div>Ошибка: {error}</div>

  const likedPostsList = posts.filter(post => likedPosts.includes(post.id))

  return (
    <div>
      <h1>Избранные посты</h1>
      {likedPostsList.length === 0 ? (
        <p>У вас нет избранных постов.</p>
      ) : (
        likedPostsList.map(post => (
          <PostCard key={post.id} {...post} />
        ))
      )}
    </div>
  )
}
