import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Chat from "../Pages/Chat";
import LiveFlow from "../Pages/LiveFlow";
import Post from "../Pages/Post";
import Profile from "../Pages/Profile";
import { Settings } from "../Pages/Profile/Settings";

const MainRouter = createBrowserRouter([
    {
        path:'/',
        element: <Homepage />
    },
    {
        path:'/chat',
        element: <Chat />
    },
    {
        path:'/liveflow',
        element: <LiveFlow />
    },
    {
        path:'/post',
        element: <Post />
    },
    {
        path:'/profile',
        element: <Profile />,
        children: [
            {
                path: '/profile/settings',
                element: <Settings />
            }
        ]
    }
])

export default MainRouter;