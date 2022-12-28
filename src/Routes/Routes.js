import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AddTask from "../Page/Add Task/AddTask";
import CompletedTask from "../Page/CompletedTasks/CompletedTask";
import Home from "../Page/Home/Home";
import MyTask from "../Page/My Task/MyTask";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import AllTask from "../Page/All Task/AllTask";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/add-task', element: <AddTask></AddTask> },
            { path: '/add-task', element: <MyTask></MyTask> },
            { path: '/add-task', element: <CompletedTask></CompletedTask> },
            { path: '/add-task', element: <AllTask></AllTask> },

        ]
    },
])

export default router;