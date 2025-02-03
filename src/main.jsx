import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { createHashRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github, { gitHubInfoLoader } from './components/GIthub/Github'
import User from './components/User/User'



const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route loader={gitHubInfoLoader} path='github' element={<Github />} />
      <Route path='user' element={<User />}>
        <Route path=':userid' element={<User />} />
      </Route>
    </Route>
  ),
  {
    basename: '/react-router-mini-project/'
  }
)

ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)