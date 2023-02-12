import {createBrowserRouter, RouterProvider, Route,} from 'react-router-dom';
import Create from './pages/Create';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>
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
