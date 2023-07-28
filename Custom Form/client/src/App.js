import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset1 from './components/Reset1';
import PageNotFound from './components/PageNotFound';



/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth'


const router=createBrowserRouter([
    {
        path:'/',
        element:<Username></Username>
    },
    {
        path:'/Register',
        element : <Register></Register>
    },
    {
        path:'/password',
        element :  <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path:'/profile',
        element : <AuthorizeUser><Profile /></AuthorizeUser>
    },
    {
        path:'/Recovery',
        element : <Recovery></Recovery>
    },
    {
        path:'Reset1',
        element : <Reset1></Reset1>
    },
    {
        path:'*',
        element : <PageNotFound></PageNotFound>
    },
])

export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
