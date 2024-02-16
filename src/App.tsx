import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Home from "./page/Home";
import MemoryGame from "./games/memoryGame";
import QuizGame from './games/quiz';

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
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
