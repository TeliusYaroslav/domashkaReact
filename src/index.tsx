import {createRoot} from "react-dom/client"
import { App } from "./pages/MainPage/APPP/App"

const rootElement = document.getElementById("root") as HTMLElement
const root = createRoot(rootElement)

root.render(<App></App>)