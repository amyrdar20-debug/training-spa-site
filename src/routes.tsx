import ArticleSummary from "./components/ArticleSummary";
import About from "./pages/About";
import ArticlePage from "./pages/ArticlePage";
import Blog from "./pages/Blog";
import CoursePage from "./pages/CoursePage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Panel from "./pages/Panel";
import Products from "./pages/Products";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
    {
        path: "/blog",
        element: <Blog />,
        children: [{ path: ":id", element: <ArticleSummary /> }],
    },
    { path: "/about", element: <About /> },
    { path: "/panel", element: <Panel /> },
    { path: "/login", element: <Login /> },
    { path: "/products/:id", element: <CoursePage /> },
    { path: "/blog/articles/:to", element: <ArticlePage /> },
];

export default routes;
