
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AdminRoute from './component/AdminRoute/AdminRoute';
import AddService from './component/Pages/AddService/AddService';
import Blogs from './component/Pages/Blogs/Blogs';
import Booking from './component/Pages/Booking/Booking';
import CustomerOrder from './component/Pages/CustomerOrder/CustomerOrder';
import Error from './component/Pages/Error/Error';
import Home from './component/Pages/Home/Home';
import LogIn from './component/Pages/LogIn/LogIn';
import MyReview from './component/Pages/MyReview/MyReview';
import MyServices from './component/Pages/MyServices/MyServices';
import ServiceDetails from './component/Pages/ServiceDetails/ServiceDetails';
import Services from './component/Pages/Services/Services';
import SignUp from './component/Pages/SignUp/SignUp';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Update from './component/Update/Update';
import Dashbord from './layout/Dashbord';

import Main from './layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
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
          path: '/booking',
          element: <PrivateRoute><Booking></Booking></PrivateRoute>

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
          element: <Services></Services>
        },
        {
          path: '/services/:id',
          loader: ({ params }) => {
            return fetch(`http://localhost:5000/services/${params.id}`)
          },
          element: <ServiceDetails></ServiceDetails>
        },
        {
          path: 'myreview/update/:id',
          loader: ({ params }) => fetch(`http://localhost:5000/review/${params.id}`),
          element: <PrivateRoute><Update></Update></PrivateRoute>
        }
      ]
    },
    {
      path: "/dashbord",
      element: <AdminRoute><Dashbord></Dashbord></AdminRoute>,
      errorElement: <Error></Error>,
      children: [
        {
          path: 'dashbord/addservice',
          element: <AdminRoute><AddService></AddService></AdminRoute>

        },
        {
          path: 'dashbord/customerOrder',
          element: <AdminRoute><CustomerOrder></CustomerOrder></AdminRoute>
        },
        {
          path: 'dashbord/myServices',
          element: <AdminRoute><MyServices></MyServices></AdminRoute>
        }
      ]
    }
  ])

  return (
    <div className=' max-w-screen-xl mx-auto'>

      <RouterProvider router={router}>

      </RouterProvider>

    </div>
  );
}

export default App;
