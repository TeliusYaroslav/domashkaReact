import {createRoot} from "react-dom/client"
import { AppPosts } from "./App"

const rootElement = document.getElementById("root") as HTMLElement
const root = createRoot(rootElement)

root.render(<AppPosts></AppPosts>)