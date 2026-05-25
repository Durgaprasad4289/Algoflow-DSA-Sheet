import React from 'react'

import Home from './components/Home'
import Problems from './components/Problems'
import Profile from './components/Profile'
import Notfound from './components/Notfound'
import Login from './components/Login'
import ProblemType from './components/ProblemType'
import ProtectedRoute from './components/ProtectedRoute'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: "/problems",
          element: <Problems />
        },
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: "/problems/:slug",
          element: <ProblemType />
        }
      ]
    },

    {
      path: "/login",
      element: <Login />
    },

    {
      path: "*",
      element: <Notfound />
    }
  ], {
    basename: import.meta.env.BASE_URL
  });

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}
