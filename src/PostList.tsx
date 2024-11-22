import {Post} from './Post'

interface PostData {
  id: number
  title: string
  description: string
  imageUrl: string
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
          title={post.title}
          description={post.description}
          imageUrl={post.imageUrl}
          author={post.author}
        />
      ))}
    </div>
  )
}