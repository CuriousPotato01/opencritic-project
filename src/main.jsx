import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './HomePage';
import Details from './Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css';
import SearchResultsPage from './SearchResultsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/score/1',
    element: <HomePage />,
  },
  {
    path: '/score/2',
    element: <HomePage />,
  },

  {
    path: '/score/3',
    element: <HomePage />,
  },
  {
    path: '/score/4',
    element: <HomePage />,
  },
  {
    path: '/date/1',
    element: <HomePage />,
  },
  {
    path: '/date/2',
    element: <HomePage />,
  },
  {
    path: '/date/3',
    element: <HomePage />,
  },
  {
    path: '/date/4',
    element: <HomePage />,
  },

  {
    path: '/details/:id',
    element: <Details />,
  },
  {
    path: '/search/',
    element: <SearchResultsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
