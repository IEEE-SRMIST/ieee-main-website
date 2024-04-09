import Link from 'next/link'
import React from 'react'

const RecentBlogs = () => {
    return (
        <div>


            <div className="bg-green-100 max-w-screen-2xl mx-auto px-4 py-6 md:px-6 md:py-8 xl:px-8 xl:py-10">

                <div className="bg-gray-200 mx-auto mb-10 items-center justify-center text-center">
                    <h3 className="mb-2 sm:mb-4 font-sans font-semibold text-blue-800 text-xs lg:text-base">
                        BLOGS
                    </h3>
                    <h2 className="mb-4 md:mb-6 font-sans font-bold text-black text-2xl sm:text-4xl">
                        Know more about us
                    </h2>
                    <h4 className="mx-auto max-w-[64rem] font-sans font-normal text-black text-sm sm:text-lg">
                        Join a community of more than 450,000 technology and engineering professionals united by a common desire to continuously learn, interact, collaborate, and innovate
                    </h4>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">

                    <a
                        className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="#"
                    >
                        <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                            <img
                                className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                                src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
                                alt="Image Description"
                            />

                        </div>
                        <div className="mt-7">
                            <h3 className="font-sans font-semibold text-black text-xl sm:text-2xl group-hover:text-gray-600 dark:text-gray-200">
                                Award-Winning Work of the 2023 Chemistry:Nobel Prize
                            </h3>
                            <p className="mt-3 font-sans font-normal text-black text-justify lg:text-base">
                                In a groundbreaking announcement, the 2023 Chemistry Nobel Prize was awarded to a
                                distinguished team of researchers for their pioneering work on Quantum Dots. These nano-sized
                                semiconductor particles have redefined the boundaries of science and technology, ushering in a new era
                                of possibilities across various industries.
                            </p>
                            <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                                <Link href="https://ieeesrm.medium.com/understanding-quantum-dots-the-award-winning-work-of-the-2023-chemistry-nobel-prize-503fd6ece551">Read more</Link>

                                <svg
                                    className="flex-shrink-0 w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </p>
                        </div>
                    </a>

                    <a
                        className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="#"
                    >
                        <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                            <img
                                className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                                src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                alt="Image Description"
                            />
                        </div>
                        <div className="mt-7">
                            <h3 className="font-sans font-semibold text-black text-xl sm:text-2xl group-hover:text-gray-600 dark:text-gray-200">
                                Embracing the Future: The Power of Adaptive AI
                            </h3>
                            <p className="mt-3 font-sans font-normal text-black text-justify lg:text-base">
                                Artificial Intelligence has reached a remarkable inflection point with the emergence of
                                Adaptive AI. Unlike its conventional counterparts, Adaptive AI possesses the remarkable ability to learn,
                                evolve, and adjust in real-time based on changing data and circumstances. This groundbreaking
                                technology is poised to revolutionize industries and elevate user experiences.
                            </p>

                            <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                                <Link href="https://ieeesrm.medium.com/embracing-the-future-the-power-of-adaptive-ai-892137b3bfc6">Read more</Link>
                                <svg
                                    className="flex-shrink-0 w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </p>
                        </div>
                    </a>


                </div>

            </div>


        </div>
    )
}

export default RecentBlogs