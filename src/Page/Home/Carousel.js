import React, { useContext, useEffect, useState } from "react";
import "./Steps.scss"
import {
    CarouselProvider,
    CarouselContext,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FcApproval, FcLeft, FcRight } from "react-icons/fc";

function CarouselWithContext() {
    const carouselContext = useContext(CarouselContext);
    const [currentSlide, setCurrentSlide] = useState(
        carouselContext.state.currentSlide
    );
    useEffect(() => {
        function onChange() {
            setCurrentSlide(carouselContext.state.currentSlide);
        }

        carouselContext.subscribe(onChange);
        return () => carouselContext.unsubscribe(onChange);
    }, [carouselContext]);
    return currentSlide;
}

export default function Carousel() {
    const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    const Carousel = () => (

        // {
        //     id: 1,
        //     name: "sazu",
        //     say: "very helpfull site In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        // },
        <CarouselProvider
            naturalSlideWidth={50}
            naturalSlideHeight={100}
            isIntrinsicHeight={true}
            totalSlides={slides.length}
            visibleSlides={1}
            dragStep={1}
            step={3}
        >
            <Slider className="w-96">
                {slides.map((item, idx) => (
                    <Slide index={idx} key={idx} >

                        <div className="flex flex-col">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                                class="rounded-full w-32 shadow-lg mx-auto"
                                alt="Avatar"
                            />
                            <p className="text-white">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas obcaecati nihil consectetur quia fugiat saepe laborum culpa sit corporis temporibus.
                            </p>
                        </div>
                    </Slide>
                ))}
            </Slider>
            <br />
            <div className="text-white">
                <ButtonNext className="primary_btn px-2 py-2 rounded-full shadow hover:bg-black  hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"><FcLeft></FcLeft></ButtonNext>
                <ButtonNext className="primary_btn px-2 py-2 rounded-full shadow hover:bg-black  hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"><FcRight></FcRight></ButtonNext>
            </div>
        </CarouselProvider>
    );

    return (
        <div className="App">
            <Carousel />
        </div>
    );
}
