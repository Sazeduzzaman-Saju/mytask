import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';
import BreadCrumb from '../../comps/BreadCrumb/BreadCrumb';
import Comments from '../../comps/Comments/Comments';
import { AuthContext } from '../../context/AuthProvider';
import useWebTItle from '../../hooks/useWebTItle';
import './AllTask.scss'


const AllTask = () => {
    const { user } = useContext(AuthContext)
    const breadCrumb = [
        {
            id: '1',
            name1: 'home',
            link1: '/',
            name2: 'All Task',
            link2: '/all-task',
        },
    ]

    useWebTItle('All Task');

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 1000)
    }, []);

    const url = `https://mytask-server.vercel.app/alltask`;

    const { data: alltask = [], } = useQuery({
        queryKey: ['alltask'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    console.log(url)
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
                    <div className="py-6 dark:bg-gray-900  dark:text-white">
                        <div className=" container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
                            <div className='dark:bg-gray-900'>
                                {breadCrumb.map((item) => (
                                    <BreadCrumb key={item.id} item={item}></BreadCrumb>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='text-center p-5 dark:bg-slate-900 '>
                        <h1 className='text-3xl text-black font-bold uppercase'>{alltask.length === 0 ? '[ 0 Task Available ]' : '[ ALl User Task ]'}</h1>
                    </div>
                    <div class="text-gray-600  body-font dark:bg-gray-900">
                        <div class="container  py-24 mx-auto">
                            <div class="flex flex-wrap -m-4">
                                <div class="task_container">
                                    {alltask.map((item) =>
                                        <div class=" bg-gray-100 dark:bg-gray-900 bg-opacity-75 px-8 pt-5 pb-5 rounded-lg overflow-hidden text-center relative">
                                            <div class="flex justify-between rounded-md text-white ml-3 bg-black p-2">
                                                <div class="mr-3">
                                                    <img src={item.photoURL} alt="" class="rounded-full w-8 h-8 border-2" />
                                                </div>
                                                <div>
                                                    <h1 class="font-semibold">{item.displayName}</h1>
                                                    <p class="text-xs text-gray-500">{item.date}</p>
                                                </div>

                                            </div>
                                            <p class="leading-relaxed mb-3">{item.task}</p>
                                            <p class="text-indigo-500 inline-flex items-center">Leave A Comment
                                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </p>

                                            <Comments></Comments>

                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>}
        </div>

    );
};

export default AllTask;