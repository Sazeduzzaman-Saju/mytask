import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AddTask from "../Page/Add Task/AddTask";
import CompletedTask from "../Page/CompletedTasks/CompletedTask";
import Home from "../Page/Home/Home";
import MyTask from "../Page/My Task/MyTask";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import AllTask from "../Page/All Task/AllTask";
import Login from "../Page/Login/Login";
import SignUp from "../Page/Register/SignUp";
import Important from "../Page/Important/Important";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/add-task', element: <PrivateRoutes><AddTask></AddTask> </PrivateRoutes> },
            { path: '/my-task', element: <MyTask></MyTask> },
            { path: '/completed-task', element: <CompletedTask></CompletedTask> },
            { path: '/all-task', element: <AllTask></AllTask> },
            { path: '/important-task', element: <Important></Important> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <SignUp></SignUp> },

        ]
    },
])

export default router;