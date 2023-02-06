import Home from "../../components/pages/Home";
import CategoryProduct from "../../components/pages/CategoryProduct";
import News from "../../components/pages/News";
import Cart from "../../components/pages/Cart";
import Favourite from "../../components/pages/Favourite";
import Login from "../../components/pages/Login";
import Register from "../../components/pages/Register";
import Search from "../../components/pages/Search";
import Product from "../../components/pages/Product";
import Checkout from "../../components/pages/CheckOut";
import SearchName from "../../components/pages/Search/SearchName";

import { DefaultLayout, HeaderSlider, HeaderBanner } from "../Layout";

const publicRoutes = [
  { path: "/", component: Home, layout: HeaderSlider },
  { path: "/:id", component: CategoryProduct, layout: DefaultLayout },
  { path: "/news", component: News, layout: HeaderSlider },
  { path: "/cart", component: Cart, layout: HeaderBanner },
  { path: "/favourite", component: Favourite, layout: HeaderBanner },
  { path: "/search", component: Search, layout: HeaderBanner },
  { path: "/product/:id", component: Product, layout: HeaderBanner },
  { path: "/account/login", component: Login, layout: HeaderBanner },
  { path: "/account/register", component: Register, layout: HeaderBanner },
  { path: "/checkout", component: Checkout, layout: null },
  { path: "/search/:name", component: SearchName, layout: HeaderBanner },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
