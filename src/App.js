
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LogIn from './component/Pages/LogIn/LogIn';
import SignUp from './component/Pages/SignUp/SignUp';
import Main from './layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
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
