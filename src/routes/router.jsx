
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root.jsx';
import Home from '../pages/Home/Home.jsx';
import Register from '../pages/Register/Register.jsx';
import Login from '../pages/Login/Login.jsx';
import ErrorPage from '../pages/ErrorPage/ErrorPage.jsx';
import FindPlace from '../components/homeComponent/DreamPlace/FindPlace.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('/country.json'),
        },
        {
            path:"/place/:id",
            element:<FindPlace></FindPlace>,
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
      ]
    },
  ]);

export default router;