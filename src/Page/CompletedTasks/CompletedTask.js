import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';
import BreadCrumb from '../../comps/BreadCrumb/BreadCrumb';
import useWebTItle from '../../hooks/useWebTItle';
import { FcCalendar, FcAlarmClock, FcEmptyTrash, FcApproval } from "react-icons/fc";
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const CompletedTask = () => {
    useWebTItle('My Completed Task');
    const { user } = useContext(AuthContext)

    const breadCrumb = [
        {
            id: '1',
            name1: 'home',
            link1: '/',
            name2: 'Completed Task',
            link2: '/completed-task',
        },
    ]
    const url = `https://mytask-server.vercel.app/mycomplete?email=${user?.email}`;
    const { data: tasks = [], refetch, } = useQuery({
        queryKey: ['alltask'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 1000)
    }, [])



    const taskRemove = id => {
        console.log(id)
        const proceed = window.confirm('Confirm Delete This Order')
        if (proceed) {
            fetch(`https://mytask-server.vercel.app/complete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        refetch('');
                        toast.success('Delete Successfully')
                    }
                })
                .catch(error => console.error(error))
        }
    }

    return (
        <div>
            {loading ?
                <div className='mx-w-full-xl mx-auto'>
                    <div class="grid grid-cols-1 place-items-center">
                        <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                            <PuffLoader color={'#000'} loading={loading} size={150} />
                        </div>
                    </div>
                </div>
                :
                <section className='mx-w-full-xl'>
                    <div className="py-6 dark:bg-gray-900 dark:text-black">
                        <div className=" container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
                            <div className=''>
                                {breadCrumb.map((item) => (
                                    <BreadCrumb key={item.id} item={item}></BreadCrumb>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='text-start p-5 dark:bg-gray-900 '>
                        <h1 className='text-3xl text-center text-black font-bold uppercase'>{tasks.length === 0 ? '[ 0 Task Available ]' : '[ My Complete Task ]'}</h1>
                    </div>
                    <div className='task_container mb-5 dark:bg-gray-900'>
                        {
                            tasks.map((item) =>
                                <div class="flex justify-center items-center mb-20 dark:bg-gray-900">
                                    <div class="max-w-xs container bg-white  rounded-xl shadow-lg transform transition duration-500  hover:shadow-2xl">
                                        <div>
                                            <div className='flex justify-between align-middle '>
                                                <h1 class="text-2xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">{item.title}</h1>
                                                <div>
                                                    {item.postStatus === 'complete' &&
                                                        <>
                                                            <button style={{ backgroundColor: "red " }} class="primary-btn px-2 py-2 rounded-full bg-red shadow hover:bg-black  hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                                                                disabled>
                                                                <div class="group flex relative">
                                                                    <FcApproval></FcApproval>
                                                                    <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Complete</span>
                                                                </div>
                                                            </button>
                                                        </>
                                                    }

                                                    <button onClick={() => taskRemove(item._id)} class="primary-btn px-2 py-2 rounded-full shadow hover:bg-black  hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                                                    >
                                                        <div class="group flex relative">
                                                            <FcEmptyTrash></FcEmptyTrash>
                                                            <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Delete</span>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>

                                            <img class="w-full cursor-pointer" src={item.img} alt="" />
                                            <p class="ml-4 mt-1 mb-2 text-gray-700 hover:underline cursor-pointer">{item.task}</p>
                                        </div>

                                        <div class="flex p-4 justify-between">
                                            <div class="flex items-center space-x-2">
                                                <img class="w-10 rounded-full" src={item.userPhoto} alt="sara" />
                                                <h2 class="text-gray-800 font-bold cursor-pointer">{item.userName}</h2>
                                            </div>
                                            <div class="flex space-x-2">
                                                <div class="flex space-x-1 items-center">
                                                    <span>
                                                        <FcAlarmClock></FcAlarmClock>
                                                    </span>
                                                    <span>{item.time}</span>
                                                </div>
                                                <div class="flex space-x-1 items-center">
                                                    <span>
                                                        <FcCalendar></FcCalendar>
                                                    </span>
                                                    <span>{item.date.slice(2,)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </div>
                </section>}
        </div>
    );
};

export default CompletedTask;