import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout"
import Homepage from "../Pages/Homepage";
import Chat from "../Pages/Chat";
import LiveFlow from "../Pages/LiveFlow";
import Post from "../Pages/Post";
import Profile from "../Pages/Profile";
import {Settings} from "../Pages/Profile/Settings";
import {AuthPage} from "../Pages/AuthPage";
import {About} from "../components/About";
import {Posts} from "../components/Posts";
import {Following} from "../components/Following";
import {Followers} from "../components/Followers";

const UserInRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // MainLayout as the layout
    children: [
      {
        path: 'homepage',
        element: <Homepage />
      },
      {
        path: 'chat',
        element: <Chat />
      },
      {
        path: 'liveflow',
        element: <LiveFlow />
      },
      {
        path: 'post',
        element: <Post />
      },
      {
        path: 'profile',
        element: <Profile />,
        children: [
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
            path: 'userpost',
            element: <Posts />
          },
          {
            path: 'about',
            element: <About />
          }
        ]
      },
      {
        path: 'auth',
        element: <AuthPage />
      },
    ]
  }
]);

export default UserInRouter;