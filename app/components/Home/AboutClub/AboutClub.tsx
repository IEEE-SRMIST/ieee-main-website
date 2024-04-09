import React from 'react'

const AboutClub = () => {
    return (
        <div className="bg-blue-100 max-w-screen-2xl mx-auto px-4 py-6 md:px-6 md:py-8 xl:px-8 xl:py-10">
            <div className="aspect-w-16 aspect-h-9">
                <img
                    className="w-full object-cover rounded-xl"
                    src="/assets/img/HomePage/IMG_2304.jpg"
                    alt="Image Description"
                />
            </div>

            <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-1">
                    <h2 className="mb-4 md:mb-6 font-sans font-bold text-black text-2xl sm:text-4xl">
                        About IEEE SRM
                    </h2>
                    <h4 className="font-sans font-normal text-black text-sm sm:text-lg text-justify">
                        Explore our exciting lineup of events designed to foster innovation, learning, and collaboration within the tech community.
                    </h4>
                </div>
                <div className="bg-red-100 lg:col-span-2">
                    <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                        <div className="flex gap-x-5">
                            <svg
                                className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500"
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
                                <rect width={18} height={10} x={3} y={11} rx={2} />
                                <circle cx={12} cy={5} r={2} />
                                <path d="M12 7v4" />
                                <line x1={8} x2={8} y1={16} y2={16} />
                                <line x1={16} x2={16} y1={16} y2={16} />
                            </svg>
                            <div className="grow">
                                <h3 className="font-sans font-semibold text-black text-lg lg:text-2xl">
                                    Club
                                </h3>
                                <p className="mt-1 font-sans font-normal text-black text-justify">
                                    IEEE SRMIST provides a supportive community where beginners learn alongside professionals, fostering continuous learning and growth.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-x-5">
                            <svg
                                className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500"
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
                                <rect width={18} height={10} x={3} y={11} rx={2} />
                                <circle cx={12} cy={5} r={2} />
                                <path d="M12 7v4" />
                                <line x1={8} x2={8} y1={16} y2={16} />
                                <line x1={16} x2={16} y1={16} y2={16} />
                            </svg>
                            <div className="grow">
                                <h3 className="font-sans font-semibold text-black text-lg lg:text-2xl">
                                    Mission
                                </h3>
                                <p className="mt-1 font-sans font-normal text-black text-justify">
                                    We empower students with ongoing opportunities, teaching advanced concepts to keep them ahead in the tech world.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-x-5">
                            <svg
                                className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500"
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
                                <rect width={18} height={10} x={3} y={11} rx={2} />
                                <circle cx={12} cy={5} r={2} />
                                <path d="M12 7v4" />
                                <line x1={8} x2={8} y1={16} y2={16} />
                                <line x1={16} x2={16} y1={16} y2={16} />
                            </svg>
                            <div className="grow">
                                <h3 className="font-sans font-semibold text-black text-lg lg:text-2xl">
                                    History
                                </h3>
                                <p className="mt-1 font-sans font-normal text-black text-justify">
                                    Established in 2017, IEEE SRM SB has grown to 125 members, conducting diverse activities including workshops, outreach, and collaborations with other IEEE groups.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-x-5">
                            <svg
                                className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500"
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
                                <rect width={18} height={10} x={3} y={11} rx={2} />
                                <circle cx={12} cy={5} r={2} />
                                <path d="M12 7v4" />
                                <line x1={8} x2={8} y1={16} y2={16} />
                                <line x1={16} x2={16} y1={16} y2={16} />
                            </svg>
                            <div className="grow">
                                <h3 className="font-sans font-semibold text-black text-lg lg:text-2xl">
                                    Goal
                                </h3>
                                <p className="mt-1 font-sans font-normal text-black text-justify">
                                    Offering opportunities in various fields, from women empowerment to exploring new technologies, catering to diverse interests of students.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutClub