 
import { Route,  RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import Missing from './components/Missing'
import Layout from './components/Layout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route path="*" element={<Missing />} />
        </Route>
  )
)
function App() {
   
  return (
    <div className=' font-montserrat text-primary'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
