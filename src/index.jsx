import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import MyProject from './components/MyProject';
import Map from './pages/Map';
import {
  PORTFOLIO_PAGE_10,
  PORTFOLIO_PAGE_9,
  PORTFOLIO_PAGE_8,
  PORTFOLIO_PAGE_7,
  PORTFOLIO_PAGE_6,
  PORTFOLIO_PAGE_5,
  // PORTFOLIO_PAGE_4,
  PORTFOLIO_PAGE_3,
  // PORTFOLIO_PAGE_2,
  PORTFOLIO_PAGE_1,
} from './utils/constants';

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
    // errorElement: <ErrorPage />
  },
  {
    path: 'about_me',
    element: <AboutMe />,
  },
  {
    path: 'map',
    element: <Map />,
  },
  {
    path: 'mywork/context_awareness',
    element: <MyProject content={PORTFOLIO_PAGE_10} />,
  },
  {
    path: 'mywork/mayor_enigma',
    element: <MyProject content={PORTFOLIO_PAGE_9} />,
  },
  {
    path: 'mywork/crowded_space',
    element: <MyProject content={PORTFOLIO_PAGE_8} />,
  },
  {
    path: 'mywork/corsica',
    element: <MyProject content={PORTFOLIO_PAGE_7} />,
  },
  {
    path: 'mywork/hogwarts',
    element: <MyProject content={PORTFOLIO_PAGE_6} />,
  },
  {
    path: 'mywork/datalab_milan',
    element: <MyProject content={PORTFOLIO_PAGE_5} />,
  },
  // {
  //   path: 'mywork/earthquakes',
  //   element: <MyProject content={PORTFOLIO_PAGE_4} />,
  // },
  {
    path: 'mywork/notebook',
    element: <MyProject content={PORTFOLIO_PAGE_3} />,
  },
  // {
  //   path: 'mywork/jazz_club',
  //   element: <MyProject content={PORTFOLIO_PAGE_2} />,
  // },
  {
    path: 'mywork/gliders',
    element: <MyProject content={PORTFOLIO_PAGE_1} />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} basename="/jan_lyczakowski_portfolio" />
  </React.StrictMode>
);
