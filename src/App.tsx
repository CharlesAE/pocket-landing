 
import { Route,  RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Missing from './components/Missing'
import Layout from './components/Layout'
import Hero from './components/Hero'
import Privacy from './components/Privacy'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<Missing />} />
        </Route>
  )
)
function App() {
   
  return (
    <div className=' '>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
