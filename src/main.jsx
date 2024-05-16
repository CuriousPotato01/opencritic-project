import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './HomePage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import Details from './Details';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },

  {
    path: '/page/2',
    element: <SecondPage />,
  },

  {
    path: '/page/3',
    element: <ThirdPage />,
  },

  {
    path: '/details/:id',
    element: <Details />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
