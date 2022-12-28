import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import BreadCrumb from '../../comps/BreadCrumb/BreadCrumb';
import useWebTItle from '../../hooks/useWebTItle';

const AddTask = () => {
    useWebTItle('Add A Task')
    const breadCrumb = [
        {
            id: '1',
            name1: 'home',
            link1: '/',
            name2: 'Add-Task',
            link2: '/add-task',
        },
    ]
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
                <div>
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
                        <h1 className='text-3xl text-black font-bold uppercase'>[ Add A Task Or Schedule ]</h1>
                    </div>

                    <div className="flex items-center justify-center p-12 mb-20 xs:mb-5">
                        <div className="mx-auto w-full max-w-[550px]">
                            <form>
                                <div className="-mx-3 flex flex-wrap">
                                    <div className="w-full px-3 sm:w-3/3">
                                        <div className="mb-5">
                                            <label
                                                for="fName"
                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                                Title
                                            </label>
                                            <input
                                                type="text"
                                                name="fName"
                                                id="fName"
                                                placeholder="Title here"
                                                className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out
                                m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="-mx-3 flex flex-wrap">
                                    <div className="w-full px-3 sm:w-3/3">
                                        <div className="mb-5">
                                            <label
                                                for="fName"
                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                                Task
                                            </label>
                                            <textarea className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out
m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                                rows="3"
                                                placeholder="Your message"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="-mx-3 flex flex-wrap">
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">
                                            <label
                                                for="date"
                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                                Date
                                            </label>
                                            <input
                                                type="date"
                                                name="date"
                                                id="date"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">
                                            <label
                                                for="time"
                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                                Time
                                            </label>
                                            <input
                                                type="time"
                                                name="time"
                                                id="time"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* 
                <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Are you coming to the event?
                    </label>
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                name="radio1"
                                id="radioButton1"
                                className="h-5 w-5"
                            />
                            <label
                                for="radioButton1"
                                className="pl-3 text-base font-medium text-[#07074D]"
                            >
                                Yes
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                name="radio1"
                                id="radioButton2"
                                className="h-5 w-5"
                            />
                            <label
                                for="radioButton2"
                                className="pl-3 text-base font-medium text-[#07074D]"
                            >
                                No
                            </label>
                        </div>
                    </div>
                </div> */}

                                <div className='flex justify-center'>
                                    <button
                                        className="primary_btn w-full"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>}

        </div>
    );
};

export default AddTask;