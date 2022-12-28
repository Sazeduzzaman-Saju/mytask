import React, { useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';
import BreadCrumb from '../../comps/BreadCrumb/BreadCrumb';
import useWebTItle from '../../hooks/useWebTItle';

const Important = () => {
    const [important, setImportant] = useState(false)
    useWebTItle('Important Task');
    const handleClick = () => {
        setImportant(true);
    }

    const breadCrumb = [
        {
            id: '1',
            name1: 'home',
            link1: '/',
            name2: 'Important Task',
            link2: '/important-task',
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
                        <h1 className='text-3xl text-black font-bold uppercase'>[ All Important Task ]</h1>
                    </div>
                    <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                        <div class="flex justify-center md:justify-end -mt-16">
                            <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt='' />
                        </div>
                        <div>
                            <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
                            <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                        </div>
                        <div class="flex justify-center mt-4">

                            {important ?
                                <div>
                                    <button className='primary_btn bg-red' style={{ backgroundColor: "black", color: 'white' }}>Remove</button>

                                </div>
                                : <div>
                                    <button className='primary_btn ml-2' onClick={handleClick}>Important</button>
                                    <button className='primary_btn ml-2' >Remove</button>
                                    <button className='primary_btn ml-2' >Replace</button>
                                </div>
                            }
                        </div>
                    </div>
                </section>}
        </div>

    );
};

export default Important;