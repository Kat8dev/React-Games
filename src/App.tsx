import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Home from "./page/Home";
import { MemoryGame, QuizGame, Witchcraft } from "./games";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/memory-game",
    element: <MemoryGame />,
  },
  {
    path: "/quiz-game",
    element: <QuizGame />,
  },
  {
    path: "/witchcraft",
    element: <Witchcraft />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
