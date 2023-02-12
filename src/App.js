import {createBrowserRouter, RouterProvider, Route, Outlet} from 'react-router-dom';
import New from './pages/New';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Post from './pages/Post';
import Register from './pages/Register';
import './style.scss';

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
        path: '/post/:id',
        element: <Post />,
      },

      {
        path: '/new',
        element: <New />,
      },
    ]
  },

  {
    path: '/new',
    element: <New />
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
    <div className = 'app'>
      <div className = 'container'>
        <RouterProvider router = {router} />
      </div>
    </div>
  );
}

export default App;
