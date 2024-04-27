import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Button } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

// import { useLoaderData } from "react-router-dom"
function Slider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    //  const data = useLoaderData();
    //  const card = data.data
    return (
        <>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper  mt-2 rounded-3xl h-[390px] w-[320px] md:h-[500px] md:w-[720px] lg:h-[600px] lg:w-[1280px] mx-auto overflow-hidden"
            >


                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/fGq7p6M/image.png)` }} id="001" className='item-end w-full '>
                    {/* <div className='flex flex-col  mx-auto lg:flex-row justify-between w-5/6 ' >
                        <div className=' bg-[#ffffffcc] bg-blur  w-80 p-4 text-start rounded-lg border border-black h-96'>
                            <h1 className='text-2xl font-semibold'>
                                Modern Apartment
                            </h1>
                            <h4>

                                Los Angeles, CA
                            </h4>
                            <p>
                                Contemporary apartment in a prime location
                            </p>
                            <ul className="list-disc p-4">
                                <li>living room</li>
                                <li>swimming</li>
                                <li>kitchen</li>
                            </ul>
                            <div className='flex flex-row justify-between mt-4'>
                                <p>
                                    Price: $1,500,000
                                </p>
                                <p >
                                    For: Sale
                                </p>
                            </div>

                            <NavLink to={`/card-details/001`}>
                                <Button size="lg" className=" w-full mt-4 ">View Details
                                </Button>
                            </NavLink>
                        </div>

                    </div> */}


                </SwiperSlide>
                
                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/kmf1jKw/image.png)` }} id="006" className='item-end w-full '>
                    <div className='flex flex-col  mx-auto lg:flex-row-reverse justify-between w-5/6' >
                        {/* <div className=' bg-[#ffffffcc] bg-blur  w-80 p-4 text-start rounded-lg border border-black h-96'>
                            <h1 className='text-2xl font-semibold'>
                                Beachfront Vacation
                            </h1>
                            <h4>

                                Miami Beach, FL
                            </h4>
                            <p>
                                beachfront rental for the perfect getaway
                            </p>
                            <ul className="list-disc p-4">
                                <li>ocean view</li>
                                <li>private</li>
                                <li>terrace</li>
                            </ul>
                            <div className='flex flex-row justify-between mt-4'>
                                <p>
                                    Price: $300/night
                                </p>
                                <p >
                                    For: Rent
                                </p>
                            </div>
                            <NavLink to={`/card-details/006`}>
                                <Button size="lg" className=" w-full mt-4  ">View Details
                                </Button>
                            </NavLink>
                        </div> */}

                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/GnkV4RY/image.png)` }} id="006" className='item-end w-full '>
                    {/* <div className='flex flex-col  mx-auto lg:flex-row-reverse justify-between w-5/6' >
                        <div className=' bg-[#ffffffcc] bg-blur  w-80 p-4 text-start rounded-lg border border-black h-96'>
                            <h1 className='text-2xl font-semibold'>
                                Beachfront Vacation
                            </h1>
                            <h4>

                                Miami Beach, FL
                            </h4>
                            <p>
                                beachfront rental for the perfect getaway
                            </p>
                            <ul className="list-disc p-4">
                                <li>ocean view</li>
                                <li>private</li>
                                <li>terrace</li>
                            </ul>
                            <div className='flex flex-row justify-between mt-4'>
                                <p>
                                    Price: $300/night
                                </p>
                                <p >
                                    For: Rent
                                </p>
                            </div>
                            <NavLink to={`/card-details/006`}>
                                <Button size="lg" className=" w-full mt-4  ">View Details
                                </Button>
                            </NavLink>
                        </div>

                    </div> */}
                </SwiperSlide>
        
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
            
        </>
    );
}


export default Slider;