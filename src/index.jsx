import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './style.css';
import Header from './components/Header/index.';
import Footer from './components/Footer';
import TrainingPage from './pages/TrainingPage';
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'


const App = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/lessons',
        element: <TrainingPage/>,
      },
  
    ]
  },

]);
createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router} />);
