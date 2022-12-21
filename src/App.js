
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddService from './component/Pages/AddService/AddService';
import Blogs from './component/Pages/Blogs/Blogs';
import Home from './component/Pages/Home/Home';
import LogIn from './component/Pages/LogIn/LogIn';
import MyReview from './component/Pages/MyReview/MyReview';
import ServiceDetails from './component/Pages/ServiceDetails/ServiceDetails';
import Services from './component/Pages/Services/Services';
import SignUp from './component/Pages/SignUp/SignUp';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Update from './component/Update/Update';
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
          element: <PrivateRoute><MyReview></MyReview></PrivateRoute>

        },
        {
          path: '/addservice',
          element: <PrivateRoute><AddService></AddService></PrivateRoute>

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
        },
        {
          path: '/services',
          loader: () => fetch('https://70-assignment-server.vercel.app/services'),
          element: <Services></Services>
        },
        {
          path: '/services/:id',
          loader: ({ params }) => {
            return fetch(`https://70-assignment-server.vercel.app/services/${params.id}`)
          },
          element: <ServiceDetails></ServiceDetails>
        },
        {
          path: 'myreview/update/:id',
          loader: ({ params }) => fetch(`https://70-assignment-server.vercel.app/review/${params.id}`),
          element: <Update></Update>
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
