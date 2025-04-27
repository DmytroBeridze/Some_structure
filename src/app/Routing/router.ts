import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../../pages/Home";
import { PostPage } from "../../pages/PostsPage";
import { Root } from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "home", Component: HomePage },
      { path: "postpage", Component: PostPage },
      //   {
      //     path: "auth",
      //     Component: AuthLayout,
      //     children: [
      //       { path: "login", Component: Login },
      //       { path: "register", Component: Register },
      //     ],
      //   },
    ],
  },
]);
