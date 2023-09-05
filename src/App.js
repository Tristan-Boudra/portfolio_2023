import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/project',
    element: <Project />,
  },
  {
    path: '/contact',
    element: <Contact />,
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App;