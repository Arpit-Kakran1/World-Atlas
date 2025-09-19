import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Components/appLayout/AppLayout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Country from './pages/Country'
import ErrorPage from './pages/ErrorPage'
import './App.css'
import { CountryDetails } from './Components/appLayout/CountryDetails'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      // This Children will let the header and footer to their place and render the content of about and
      children: [{
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: 'country',
        element: <Country />
      },
      {
        path: 'country/:id',
        element: <CountryDetails />
      },
      {
        path: 'about',
        element: <About />
      }]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}
export default App
