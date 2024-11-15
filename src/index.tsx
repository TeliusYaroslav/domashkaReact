import {createRoot} from "react-dom/client"
import { ComponentApp } from "./App"

const rootElement = document.getElementById("root") as HTMLElement
const root = createRoot(rootElement)

root.render(<ComponentApp></ComponentApp>)