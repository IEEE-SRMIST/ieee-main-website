import React from 'react';

const Testimonial = () => {
    return (
        <section className="bg-dfe3e9">
            <div className="max-w-screen-2xl mx-auto px-4 py-6 md:px-6 md:py-8 xl:px-8 xl:py-10">
                <div className="bg-cfd4de rounded-lg overflow-hidden">
                    <h3 className="mb-2 sm:mb-4 font-semibold text-blue-800 text-xs lg:text-base text-center pt-4">
                        TESTIMONIALS
                    </h3>
                    <h2 className="mb-4 md:mb-6 font-bold text-black text-2xl sm:text-4xl text-center">
                        Know more about us
                    </h2>
                    <p className="mx-auto max-w-[64rem] font-normal text-black text-sm sm:text-lg text-center pb-6 px-4">
                        Join a community of more than 450,000 technology and engineering professionals united by a common desire to continuously learn, interact, collaborate, and innovate
                    </p>
                </div>
                <div className="mt-8 flex flex-col gap-8 md:flex-row md:justify-center">
                    <div className="w-full md:w-1/2 group">
                        <blockquote className="testimonial-blockquote rounded-lg bg-cfd4de p-6 shadow-md flex flex-col md:flex-row items-center transition duration-300 ease-in-out transform group-hover:shadow-lg">
                            <img
                                alt="Man"
                                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                className="h-40 w-40 rounded-full object-cover mb-6 md:mb-0 md:mr-6"
                            />
                            <div>
                                <p className="mt-0.5 font-normal text-black text-sm sm:text-base">Paul Starr</p>
                                <p className="mt-2 font-normal text-black text-xs sm:text-sm text-justify">
                                    Being part of the IEEE Student Branch has been an incredible experience. The opportunities for networking, learning, and professional development are unparalleled. I've made lifelong friends and gained invaluable skills that have helped me in my academic and professional journey.
                                </p>
                            </div>
                        </blockquote>
                    </div>
                    <div className="w-full md:w-1/2 group">
                        <blockquote className="testimonial-blockquote rounded-lg bg-cfd4de p-6 shadow-md flex flex-col md:flex-row items-center transition duration-300 ease-in-out transform group-hover:shadow-lg">
                            <img
                                alt="Man"
                                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                className="h-40 w-40 rounded-full object-cover mb-6 md:mb-0 md:mr-6"
                            />
                            <div>
                                <p className="mt-0.5 font-normal text-black text-sm sm:text-base">Paul Starr</p>
                                <p className="mt-2 font-normal text-black text-xs sm:text-sm text-justify">
                                    Joining the IEEE Student Branch was one of the best decisions I made in college. The events, workshops, and seminars organized by the branch have broadened my understanding of various technical topics and allowed me to stay updated with the latest trends in my field.
                                </p>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
