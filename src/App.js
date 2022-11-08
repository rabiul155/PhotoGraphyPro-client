
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddService from './component/Pages/AddService/AddService';
import Blogs from './component/Pages/Blogs/Blogs';
import Home from './component/Pages/Home/Home';
import LogIn from './component/Pages/LogIn/LogIn';
import MyReview from './component/Pages/MyReview/MyReview';
import SignUp from './component/Pages/SignUp/SignUp';
import Main from './layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/myreview',
          element: <MyReview></MyReview>

        },
        {
          path: '/addservice',
          element: <AddService></AddService>

        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>

        },

        {
          path: '/login',
          element: <LogIn></LogIn>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        }
      ]
    }
  ])

  return (
    <div>

      <RouterProvider router={router}>

      </RouterProvider>

    </div>
  );
}

export default App;
