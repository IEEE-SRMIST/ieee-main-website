import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Testimonial = () => {
    const [showTestimonialSet1, setShowTestimonialSet1] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowTestimonialSet1(prevState => !prevState);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="max-w-screen-2xl mx-auto px-4 py-6 md:px-6 md:py-8 xl:px-8 xl:py-10">
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
                
                {showTestimonialSet1 ? (
                    <TestimonialSet1 />
                ) : (
                    <TestimonialSet2 />
                )}
                
            </motion.div>
        </div>
    );
};

const TestimonialSet1 = () => {
    return (
        <div className="flex flex-col md:flex-row justify-start items-start gap-5">
            {/* Nishant's Profile Picture */}
            <motion.div 
                className="w-full p-6 bg-white bg-opacity-0 flex flex-col justify-start items-center gap-5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <div className="relative w-[120px] h-[120px]">
                    <div className="absolute w-full h-full bg-gray-300 rounded-full" />
                    <img className="absolute w-full h-full object-cover rounded-full" src="/img/Director 1.jpg" alt="Profile Picture" />
                </div>
                <div className="text-right">
                    <span className="text-black dark:text-white text-base font-normal font-sora leading-[30px]">- Nishanth Rao<br /></span>
                    <span className="text-black dark:text-white text-base font-semibold font-sora leading-[30px]">Director</span>
                </div>
            </motion.div>
            {/* Nishant's Testimonial */}
            <motion.div 
                className="w-full p-6 bg-gray-300 rounded-lg shadow border-2 border-white dark:border-gray-500 justify-center items-start gap-5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
            >
                <div className="text-justify text-black dark:text-white text-base font-normal font-sora leading-[30px]">
                    "Being part of the IEEE Student Branch has been an incredible experience. The opportunities for networking, learning, and professional development are unparalleled. I've made lifelong friends and gained invaluable skills that have helped me in my academic and professional journey."
                </div>
            </motion.div>
            {/* Rohan's Testimonial */}
            <motion.div 
                className="w-full p-6 bg-gray-300 rounded-lg shadow border-2 border-white dark:border-gray-500 justify-center items-start gap-5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
            >
                <div className="text-black dark:text-white text-base font-normal font-sora leading-[30px]">
                The IEEE Student Branch has been my home away from home throughout my college journey. The friendships I've formed and the experiences I've gained through my involvement in the branch will always hold a special place in my heart. I'm grateful for the memories and opportunities that the branch has provided me.
                </div>
            </motion.div>
            {/* Rohan's Profile Picture */}
            <motion.div 
                className="w-full p-6 bg-white bg-opacity-0 flex flex-col justify-start items-center gap-5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
            >
                <div className="relative w-[120px] h-[120px]">
                    <div className="absolute w-full h-full bg-gray-300 rounded-full" />
                    <img className="absolute w-full h-full object-cover rounded-full" src="/img/Chairperson 1.png" alt="Profile Picture" />
                </div>
                <div className="text-right">
                    <span className="text-black dark:text-white text-base font-normal font-sora leading-[30px]">-Rohan Kumar<br /></span>
                    <span className="text-black dark:text-white text-base font-semibold font-sora leading-[30px]">Chairperson</span>
                </div>
            </motion.div>
        </div>
    );
};

const TestimonialSet2 = () => {
    return (
        <div className="flex flex-col md:flex-row justify-start items-start gap-5">
            {/* Dipanwita's Profile Picture */}
            <motion.div 
                className="w-full p-6 bg-white bg-opacity-0 flex flex-col justify-start items-center gap-5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <div className="relative w-[120px] h-[120px]">
                    <div className="absolute w-full h-full bg-gray-300 rounded-full" />
                    <img className="absolute w-full h-full object-cover rounded-full" src="/img/Joint-Secretary 1.png" alt="Profile Picture" />
                </div>
                <div className="text-right">
                    <span className="text-black dark:text-white text-base font-normal font-sora leading-[30px]">- Dipanwita Saha<br /></span>
                    <span className="text-black dark:text-white text-base font-semibold font-sora leading-[30px]">Joint Secretary</span>
                </div>
            </motion.div>
            {/* Dipanwita's Testimonial */}
            <motion.div 
                className="w-full p-6 bg-gray-300 rounded-lg shadow border-2 border-white dark:border-gray-500 justify-center items-start gap-5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
            >
                <div className="text-justify text-black dark:text-white text-base font-normal font-sora leading-[30px]">
                    "Being actively involved in the IEEE Student Branch has not only expanded my technical knowledge but also improved my leadership and communication skills. The supportive environment within the branch encourages members to step out of their comfort zones and pursue their passions."
                </div>
            </motion.div>
            {/* Sampurna's Testimonial */}
            <motion.div 
                className="w-full p-6 bg-gray-300 rounded-lg shadow border-2 border-white dark:border-gray-500 justify-center items-start gap-5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
            >
                <div className="text-black dark:text-white text-base font-normal font-sora leading-[30px]">
                    "The IEEE Student Branch has provided me with a platform to connect with peers who share similar interests and ambitions. Through collaborative projects and discussions, I've gained a deeper understanding of complex technical concepts and developed a network of contacts that will benefit me in my future career."
                </div>
            </motion.div>
            {/* Sampurna's Profile Picture */}
            <motion.div 
                className="w-full p-6 bg-white bg-opacity-0 flex flex-col justify-start items-center gap-5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
            >
                <div className="relative w-[120px] h-[120px]">
                    <div className="absolute w-full h-full bg-gray-300 rounded-full" />
                    <img className="absolute w-full h-full object-cover rounded-full" src="/img/Secretary 1.png" alt="Profile Picture" />
                </div>
                <div className="text-right">
                    <span className="text-black dark:text-white text-base font-normal font-sora leading-[30px]">-Sampurna Sahoo<br /></span>
                    <span className="text-black dark:text-white text-base font-semibold font-sora leading-[30px]">Secretary</span>
                </div>
            </motion.div>
        </div>
    );
};

export default Testimonial;






















