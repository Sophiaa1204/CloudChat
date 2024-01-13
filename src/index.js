import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import OauthPage from './Pages/OauthPage'
import AuthLayout from './Layouts/AuthLayout'
import ChatPanel from './Pages/ChatPanel'
import PublicLayout from './Layouts/PublicLayout'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
const router = createHashRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        path: '',
        element: <ChatPanel />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'oauth2',
        element: <OauthPage />,
      },
    ],
  },
])
root.render(
  <RouterProvider router={router} />,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
