import { useState } from 'react'
import './App.scss'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar/Navbar'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Gigs from './pages/gigs/Gigs'
import Gig from './pages/gig/Gig'
import Order from './pages/orders/Order'
import MyGigs from './pages/myGigs/MyGigs'
import Add from './pages/add/Add'
import Messages from './pages/messages/Messages'
import Message from './pages/message/Message'
function App() {

  const Layout = () => {
    return (
      <div className='app'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/gigs",
          element: <Gigs/>
        },
        {
          path: "/gig/:id",
          element: <Gig/>
        },
        {
          path: "/orders",
          element: <Order/>
        },
        {
          path: "/myGigs",
          element: <MyGigs/>
        },
        {
          path: "/add",
          element: <Add/>
        },
        {
          path: "/messages",
          element: <Messages/>
        },
        {
          path: "/message/:id",
          element: <Message/>
        },

      ]
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
