import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./Components/PrivateRoute";
import Main from "./Layouts/Main";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: (
            <PrivateRoute>
              <Home></Home>
            </PrivateRoute>
          ),
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <Signup></Signup>,
        },
      ],
    },
  ]);
  return (
    <div className="p-5">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
