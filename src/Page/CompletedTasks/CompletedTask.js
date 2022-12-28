import React, { useState } from 'react';
import BreadCrumb from '../../comps/BreadCrumb/BreadCrumb';
import useWebTItle from '../../hooks/useWebTItle';

const CompletedTask = () => {
    const [important, setImportant] = useState(false)
    useWebTItle('My Completed Task');
    const handleClick = () => {
        setImportant(true);
    }

    const breadCrumb = [
        {
            id: '1',
            name1: 'home',
            link1: '/',
            name2: 'Completed Task',
            link2: '/completed-task',
        },
    ]
    const tasks = [
        {
            id: '1',
            name: 'Design Tools',
            task: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!',
            profile_link: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
        },
        {
            id: '2',
            name: 'Design Tools',
            task: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!',
            profile_link: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
        },
        {
            id: '3',
            name: 'Design Tools',
            task: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!',
            profile_link: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
        },
        {
            id: '4',
            name: 'Design Tools',
            task: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!',
            profile_link: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
        },
        {
            id: '5',
            name: 'Design Tools',
            task: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!',
            profile_link: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
        },
        {
            id: '6',
            name: 'Design Tools',
            task: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!',
            profile_link: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
        },
    ]

    return (
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
            <div className='text-start p-5'>
                <h1 className='text-3xl text-black font-bold uppercase'>[ All Completed Task ]</h1>
            </div>
            <div className='task_container'>
                {
                    tasks.map((item) => <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                        <div className="flex justify-center md:justify-end -mt-16">
                            <img className="w-20 h-20 object-cover rounded-full border-2  drop-shadow-lg" src={item.profile_link} alt='' />
                        </div>
                        <div>
                            <h2 className="text-gray-800 text-3xl font-semibold">{item.name}</h2>
                            <p className="mt-2 text-gray-600">{item.task}</p>
                        </div>
                        <div className="flex justify-center mt-4">

                            {important ?
                                <div>
                                    <button className='primary_btn bg-red' style={{ backgroundColor: "black", color: 'white' }}>Remove</button>

                                </div>
                                : <div>
                                    <button className='primary_btn ml-2' onClick={handleClick}>Important</button>
                                    <button className='primary_btn ml-2' >Remove</button>
                                </div>
                            }
                        </div>
                    </div>
                    )
                }
            </div>
        </section>
    );
};

export default CompletedTask;