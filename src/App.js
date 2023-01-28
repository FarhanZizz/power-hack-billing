import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layouts/Main";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
      ],
    },
  ]);
  return (
    <div className="p-5">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
