import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { PuffLoader } from 'react-spinners';
import BreadCrumb from '../../comps/BreadCrumb/BreadCrumb';
import { AuthContext } from '../../context/AuthProvider';
import useWebTItle from '../../hooks/useWebTItle';

const AddTask = () => {
    useWebTItle('Add A Task');
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


    // post a task start
    const { user } = useContext(AuthContext);
    console.log(user)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const imgHostBB = process.env.REACT_APP_imgBB_key;


    const handleTaskPost = (data) => {

        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?&key=${imgHostBB}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData.data.url)
                if (imgData.success) {
                    console.log(data)
                    saveTask(
                        data.title,
                        imgData.data.url,
                        data.date,
                        data.task,
                        data.time,
                        user.photoURL,
                        user.displayName,
                        user.email
                    )
                }
            })
            .catch(err => console.error(err))
    }

    const saveTask = (title, img, date, task, time, photoURL, displayName, email) => {

        const sellerPost = { title, img, date, task, time, photoURL, displayName, email, postStatus: 'new post' };


        fetch('http://localhost:5000/alltask', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sellerPost)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    reset();
                    alert('Car Details Added')

                }
            })
        console.log('sellerPost', sellerPost)
    }
    // post a task end
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
                            <form onSubmit={handleSubmit(handleTaskPost)}>
                                {/* title */}
                                <div className="-mx-3 flex flex-wrap">
                                    <div className="w-full px-3 sm:w-3/3">
                                        <div className="mb-5">
                                            <label

                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                                Title
                                            </label>
                                            <input
                                                {...register("title", {
                                                    required: 'Title is Required'
                                                })}
                                                type="text"
                                                name="title"
                                                placeholder="Title here"
                                                className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out
                                m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            />
                                            {errors.title && <p className='text-danger mb-5'>{errors.title?.message}</p>}
                                        </div>
                                    </div>
                                </div>
                                {/* Task */}
                                <div className="-mx-3 flex flex-wrap">
                                    <div className="w-full px-3 sm:w-3/3">
                                        <div className="mb-5">
                                            <label

                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                                Task
                                            </label>
                                            <textarea
                                                {...register("task", {
                                                    required: 'Title is Required'
                                                })}
                                                className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out
m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                                rows="3"
                                                placeholder="Your task"
                                            ></textarea>
                                            {errors.task && <p className='text-danger mb-5'>{errors.task?.message}</p>}
                                        </div>
                                    </div>
                                </div>
                                {/* File */}
                                <div className="-mx-3 flex flex-wrap">
                                    <div className="w-full px-3 sm:w-3/3">
                                        <div className="mb-5">
                                            <label

                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                                Add Media
                                            </label>
                                            <input
                                                {...register("img", {
                                                    required: 'Title is Required'
                                                })}
                                                className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out
m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                                type='file'
                                                rows="3"
                                                placeholder="Your file"
                                            />
                                            {errors.img && <p className='text-danger mb-5'>{errors.img?.message}</p>}
                                        </div>
                                    </div>
                                </div>
                                {/* date  & Time*/}
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
                                                {...register("date", {
                                                    required: 'Date is Required'
                                                })}
                                                type="date"
                                                name="date"
                                                id="date"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                            {errors.date && <p className='text-danger mb-5'>{errors.date?.message}</p>}
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
                                                {...register("time", {
                                                    required: 'Title is Required'
                                                })}
                                                type="time"
                                                name="time"
                                                id="time"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                            {errors.time && <p className='text-danger mb-5'>{errors.time?.message}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <button
                                        className="primary_btn w-full"
                                    >
                                        Add Task
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