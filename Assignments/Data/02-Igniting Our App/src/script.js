import React, { lazy, useState } from "react";
import UserContext from "./utils/UserContext";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
const Instamart = lazy(() => import("./components/Instamart"));
import Loader from "./components/Loader";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import store from "./utils/store";
function AppLayout() {
  const [user, setUser] = useState({
    name: "Aman",
    place: "Ashta",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />

        <Outlet />

        <Footer />
      </UserContext.Provider>
    </Provider>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/Instamart",
        element: (
          <supense fallback={<Loader />}>
            <Instamart />
          </supense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
