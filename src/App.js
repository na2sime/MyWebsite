import Home from './pages/home/Home';
import NotFound from './pages/notfound/NotFound';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
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
