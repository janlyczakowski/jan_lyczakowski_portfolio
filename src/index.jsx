import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Credits from './pages/Credits';
import MyProject from './components/MyProject';
import {
  PORTFOLIO_PAGE_9,
  PORTFOLIO_PAGE_8,
  PORTFOLIO_PAGE_7,
  PORTFOLIO_PAGE_6,
  PORTFOLIO_PAGE_5,
  PORTFOLIO_PAGE_4,
  PORTFOLIO_PAGE_3,
  PORTFOLIO_PAGE_2,
  PORTFOLIO_PAGE_1,
} from './utils/constants';

const router = createBrowserRouter([
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
    path: 'contact',
    element: <Contact />,
  },
  {
    path: 'credits',
    element: <Credits />,
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
  {
    path: 'mywork/earthquakes',
    element: <MyProject content={PORTFOLIO_PAGE_4} />,
  },
  {
    path: 'mywork/notebook',
    element: <MyProject content={PORTFOLIO_PAGE_3} />,
  },
  {
    path: 'mywork/jazz_club',
    element: <MyProject content={PORTFOLIO_PAGE_2} />,
  },
  {
    path: 'mywork/gliders',
    element: <MyProject content={PORTFOLIO_PAGE_1} />,
  },
  {
    path: 'credits',
    element: <Credits />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} basename="/jan_lyczakowski_portfolio" />
  </React.StrictMode>
);
