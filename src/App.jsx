import Header from "./components/Header";
import ResContainer from "./components/ResContainer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./components/About";
import Contact from "./components/Contact";
import ResDetails from "./components/ResDetails";


const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

const router =createBrowserRouter([
      {
        path:'/',
        element:<Home />,
        children: [
          {
            path:'/',
            element:<ResContainer />
          },
          {
            path:'about',
            element:<About />
          }
          ,{
            path:'contact',
            element:<Contact />
          }
          ,{
            path:'restaurant/:resId',  //: dynamic
            element:<ResDetails />
          }
        ]
      }
  ])

const App = () => {
  console.log('inside App');
  return (
    <RouterProvider router={router} />
  )
}

export default App