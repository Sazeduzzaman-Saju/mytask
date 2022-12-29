import React from 'react';
import Carousel from './Carousel';

const Steps = () => {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="max-w-6xl px-6 py-10 mx-auto">
                <p class="text-xl font-medium text-blue-500 ">Testimonials</p>

                <h1 class="mt-2 text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                    What clients saying
                </h1>

                <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                    <div class="absolute w-full bg-blue-400 dark:bg-blue-900 -z-10 md:h-96 rounded-2xl"></div>
                    <div class="w-full p-6 bg-white  md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                        <img class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="calient" />
                        <Carousel></Carousel>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default Steps;