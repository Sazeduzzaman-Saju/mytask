import React, { useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';
import BreadCrumb from '../../comps/BreadCrumb/BreadCrumb';
import Comments from '../../comps/Comments/Comments';
import useWebTItle from '../../hooks/useWebTItle';
import './AllTask.scss'


const AllTask = () => {

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
    }, [])
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
                    <div className="py-6 dark:bg-black dark:text-black">
                        <div className=" container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
                            <div className=''>
                                {breadCrumb.map((item) => (
                                    <BreadCrumb key={item.id} item={item}></BreadCrumb>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='text-center p-5'>
                        <h1 className='text-3xl text-black font-bold uppercase'>[ All User Task Here ]</h1>
                    </div>
                    <div class="text-gray-600 body-font">
                        <div class="container  py-24 mx-auto">
                            <div class="flex flex-wrap -m-4">
                                <div class="p-4 lg:w-1/3">
                                    <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-5 pb-5 rounded-lg overflow-hidden text-center relative">
                                        <div class="flex justify-center ml-3">
                                            <div class="mr-3">
                                                <img src="http://picsum.photos/50" alt="" class="rounded-full" />
                                            </div>
                                            <div>
                                                <h1 class="font-semibold">Itay Buyoy</h1>
                                                <p class="text-xs text-gray-500">2 April 2022</p>
                                            </div>

                                        </div>
                                        <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        <p class="text-indigo-500 inline-flex items-center">Leave A Comment
                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </p>

                                        <Comments></Comments>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>}
        </div>

    );
};

export default AllTask;