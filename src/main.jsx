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
    path: '/opencritic-project',
    element: <HomePage />,
  },
  {
    path: '/opencritic-project/score/:pageNumber',
    element: <HomePage />,
  },
  {
    path: '/opencritic-project/date/:pageNumber',
    element: <HomePage />,
  },
  {
    path: '/opencritic-project/details/:id',
    element: <Details />,
  },
  {
    path: '/opencritic-project/search/',
    element: <SearchResultsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
