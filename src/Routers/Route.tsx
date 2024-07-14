import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout"
import Homepage from "../Pages/Homepage";
import Chat from "../Pages/Chat";
import LiveFlow from "../Pages/LiveFlow";
import Post from "../Pages/Post";
import Profile from "../Pages/Profile";
import Settings from "../components/Settings";
import AuthPage from "../Pages/AuthPage";
import About from "../components/About";
import Posts from "../components/Posts";
import Following from "../components/Following";
import Followers from "../components/Followers";

const MainRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // MainLayout as the layout
    children: [
      {
        index: true,
        path: '/',
        element: <Homepage />
      },
      {
        path: 'chat',
        element: <Chat />
      },
      {
        index: true,
        path: 'liveflow',
        element: <LiveFlow />,
      },
      {
        path: `post/:postId`,
        element: <Post />
      },
      {
        path: 'auth',
        element: <AuthPage />
      },
      {
        path: 'profile',
        element: <Profile />,
        children: [
          {
            index: true,
            element: <Posts />
          },
          {
            path: 'settings',
            element: <Settings />
          },
          {
            path: 'followers',
            element: <Followers />
          },
          {
            path: 'following',
            element: <Following />
          },
          {
            path: 'about',
            element: <About />
          }
        ]
      }
    ]
  }
]);

export default MainRouter;