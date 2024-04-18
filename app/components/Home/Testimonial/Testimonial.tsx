import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
    const testimonialSet1 = [
        {
            image: "/img/Director 1.jpg",
            name: "Nishanth Rao",
            position: "Director",
            text: "Being part of the IEEE Student Branch has been an incredible experience. The opportunities for networking, learning, and professional development are unparalleled. I've made lifelong friends and gained invaluable skills that have helped me in my academic and professional journey."
        },
        {
            image: "/img/Chairperson 1.png",
            name: "Rohan Kumar",
            position: "Chairperson",
            text: "The IEEE Student Branch has been my home away from home throughout my college journey. The friendships I've formed and the experiences I've gained through my involvement in the branch will always hold a special place in my heart. I'm grateful for the memories and opportunities that the branch has provided me."
        }
    ];

    const testimonialSet2 = [
        {
            image: "/img/Joint-Secretary 1.png",
            name: "Dipanwita Saha",
            position: "Joint Secretary",
            text: "Being actively involved in the IEEE Student Branch has not only expanded my technical knowledge but also improved my leadership and communication skills. The supportive environment within the branch encourages members to step out of their comfort zones and pursue their passions."
        },
        {
            image: "/img/Secretary 1.png",
            name: "Sampurna Sahoo",
            position: "Secretary",
            text: "The IEEE Student Branch has provided me with a platform to connect with peers who share similar interests and ambitions. Through collaborative projects and discussions, I've gained a deeper understanding of complex technical concepts and developed a network of contacts that will benefit me in my future career."
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="max-w-screen-2xl mx-auto px-4 py-6 md:px-6 md:py-8 xl:px-8 xl:py-10">
            <Slider {...settings}>
                <div>
                    <motion.div 
                        className="bg-zinc-200 dark:bg-black rounded-lg px-8 py-6 md:p-12 flex flex-col justify-start items-start gap-5"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div 
                            className="text-black dark:text-white text-2xl font-bold font-cinzel leading-[30px]"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            TESTIMONIALS
                        </motion.div>
                        {/* Testimonials SET1 */}
                        <div className="flex flex-col md:flex-row justify-start items-start gap-5">
                            {testimonialSet1.map((testimonial, index) => (
                                <motion.div 
                                    key={index}
                                    className="w-full p-6 bg-white bg-opacity-0 flex flex-col justify-start items-center gap-5"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 * (index + 1), duration: 0.5 }}
                                >
                                    <div className="relative w-[120px] h-[120px]">
                                        <div className="absolute w-full h-full bg-gray-300 rounded-full" />
                                        <img className="absolute w-full h-full object-cover rounded-full" src={testimonial.image} alt="Profile Picture" />
                                    </div>
                                    <div className="text-right">
                                        <span className="text-black dark:text-white text-base font-normal font-sora leading-[30px]">- {testimonial.name}<br /></span>
                                        <span className="text-black dark:text-white text-base font-semibold font-sora leading-[30px]">{testimonial.position}</span>
                                    </div>
                                    <div className="text-justify text-black dark:text-white text-base font-normal font-sora leading-[30px]">
                                        "{testimonial.text}"
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
                <div>
                    <motion.div 
                        className="bg-zinc-200 dark:bg-black rounded-lg px-8 py-6 md:p-12 flex flex-col justify-start items-start gap-5"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Testimonials SET2 */}
                        <div className="flex flex-col md:flex-row justify-start items-start gap-5">
                            {testimonialSet2.map((testimonial, index) => (
                                <motion.div 
                                    key={index}
                                    className="w-full p-6 bg-white bg-opacity-0 flex flex-col justify-start items-center gap-5"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 * (index + 1), duration: 0.5 }}
                                >
                                    <div className="relative w-[120px] h-[120px]">
                                        <div className="absolute w-full h-full bg-gray-300 rounded-full" />
                                        <img className="absolute w-full h-full object-cover rounded-full" src={testimonial.image} alt="Profile Picture" />
                                    </div>
                                    <div className="text-right">
                                        <span className="text-black dark:text-white text-base font-normal font-sora leading-[30px]">- {testimonial.name}<br /></span>
                                        <span className="text-black dark:text-white text-base font-semibold font-sora leading-[30px]">{testimonial.position}</span>
                                    </div>
                                    <div className="text-justify text-black dark:text-white text-base font-normal font-sora leading-[30px]">
                                        "{testimonial.text}"
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Slider>
        </div>
    );
};

export default Testimonial;














