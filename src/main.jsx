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
    path: '/score/:pageNumber',
    element: <HomePage />,
  },
  {
    path: '/date/:pageNumber',
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
