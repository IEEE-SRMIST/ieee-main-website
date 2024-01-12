import React from 'react'

const CodingChallenges = () => {
    return (
        <div>

            <article className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto rounded-xl bg-white ring ring-indigo-50 mb-12">
                <div className="flex flex-col sm:flex-row items-start sm:gap-8">
                    <div className="sm:w-20 sm:h-20 sm:shrink-0 sm:rounded-full sm:border-2 sm:border-indigo-500 overflow-hidden">
                        <div className="flex items-center justify-center h-full">
                            <svg
                                className="h-8 w-8 text-indigo-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="mt-4 sm:mt-0">
                        <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
                            Upcoming Competition
                        </strong>
                        <h3 className="mt-4 text-lg font-medium sm:text-xl">HITCODE-24</h3>
                        <p className="mt-1 text-sm text-gray-700">
                            Join us for the HITCODE-24 coding competition and showcase your coding skills. Compete
                            with talented developers, solve challenging problems, and win exciting prizes.
                        </p>
                        <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                            <div className="flex items-center gap-1 text-gray-500">
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <p className="text-xs font-medium">Date: November 15, 2024</p>
                            </div>
                            <span className="hidden sm:block" aria-hidden="true">
                                ·
                            </span>
                            <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                                Prize Pool: $10,000
                            </p>
                        </div>
                        <div className="mt-4">
                            <h4 className="text-sm font-medium text-gray-700">Sample Problem Details:</h4>
                            <p className="mt-2 text-xs text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nulla quis
                                lorem vehicula scelerisque.
                            </p>
                        </div>
                        <div className="mt-4">
                            <h4 className="text-sm font-medium text-gray-700">Registration Fee:</h4>
                            <p className="mt-2 text-xs text-gray-500">$20 per participant</p>
                        </div>
                        <div className="mt-4 sm:flex items-center gap-4">
                            <a href="#" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">
                                Register Now
                            </a>
                            <a href="#" className="text-indigo-500 hover:underline">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </article>

        </div>
    )
}

export default CodingChallenges