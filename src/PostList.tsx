import {Post} from './Post'

interface PostData {
  id: number
  imageUrl: string
  title: string
  description: string
  author: string
}

interface PostListProps {
  posts: PostData[]
}

export function PostList(props: PostListProps) {
  return (
    <div>
      {props.posts.map((post) => (
        <Post
          key={post.id}
          imageUrl={post.imageUrl}
          title={post.title}
          description={post.description}
          author={post.author}
        />
      ))}
    </div>
  )
}