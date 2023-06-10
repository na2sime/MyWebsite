import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import NotFound from './pages/notfound/NotFound';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: "*",
    element: <NotFound/>
  },
  {
    path: "/notfound",
    element: <NotFound/>
  }
]);

function App() {
  return (
      <>
        <RouterProvider router={router}/>
      </>
  );
}

export default App;
