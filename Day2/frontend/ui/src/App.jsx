
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Homepage from "./components/Homepage"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  }, 
  {
    path: "/homePage",
    element: <Homepage />
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
