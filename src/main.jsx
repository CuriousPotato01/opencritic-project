import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './HomePage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import Details from './Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css';
import SortedByDate from './SortedByDate';
import SortedByDate2 from './SortedByDate2';
import SortedByDate3 from './SortedByDate3';
import SearchResultsPage from './SearchResultsPage';

const router = createBrowserRouter([
  {
    path: '/score',
    element: <HomePage />,
  },
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/date',
    element: <SortedByDate />,
  },
  {
    path: '/date/2',
    element: <SortedByDate2 />,
  },
  {
    path: '/date/3',
    element: <SortedByDate3 />,
  },

  {
    path: '/score/2',
    element: <SecondPage />,
  },

  {
    path: '/score/3',
    element: <ThirdPage />,
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
