import {createBrowserRouter, RouterProvider, Route, Outlet} from 'react-router-dom';
import Create from './pages/Create';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Post from './pages/Post';
import Register from './pages/Register';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/post',
        element: <Post />,
      },

      {
        path: '/create',
        element: <Create />,
      },
    ]
  },

  {
    path: '/create',
    element: <Create />
  },

  {
    path: '/home',
    element: <Home />
  },

  {
    path: '/login',
    element: <Login />
  },

  {
    path: '/post',
    element: <Post />
  },

  {
    path: '/register',
    element: <Register />
  },
]);

function App() {
  return (
    <div>
        <RouterProvider router = {router} />
    </div>
  );
}

export default App;
