import { createContext, useState, useContext, ReactNode } from "react"

interface LikedPostsContextType {
  likedPosts: number[]
  switchLike: (id: number) => void
}

const LikedPostsContext = createContext<LikedPostsContextType>({likedPosts: [],switchLike: () => {},})

export const useLikedPosts = () => useContext(LikedPostsContext)
export function LikedPostsProvider({children}:{children:ReactNode}) {
  const [likedPosts, setLikedPosts] = useState<number[]>([])
  const switchLike = (id:number) => {
    setLikedPosts(lukas =>lukas.includes(id) ? lukas.filter(postId => postId !== id) : [...lukas, id])
  }

  return (
    <LikedPostsContext.Provider value={{ likedPosts, switchLike }}>
      {children}
    </LikedPostsContext.Provider>
  )
}
