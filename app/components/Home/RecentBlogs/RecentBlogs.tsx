import Link from 'next/link'
import React from 'react'

import './RecentBlogs.css';

function RecentBlogs(): React.JSX.Element {
    return (
        <div className='blog-container'>
            <div className="max-w-screen-2xl mx-auto px-4 py-6 md:px-6 md:py-8 xl:px-8 xl:py-10">
                <h1 className='text-5xl font-bold tracking-wider heading'>BLOGS</h1>
                <div className="mx-auto mb-10 items-center justify-center text-center blog-main">
                    <h4 className="mx-auto max-w-[64rem] font-sans font-normal text-sm sm:text-lg">
                        Welcome to the IEEE SRM SB Blog! Here, you'll find a collection of insightful articles, informative posts, and thought-provoking content curated by our members and contributors. Our blog covers a wide range of topics related to electrical engineering, electronics, computer science, and technology trends. Whether you're a student, professional, or simply curious about the latest advancements in the field, we invite you to explore our blog and join the conversation!
                    </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 card-container">
                    <div className="card">
                        <img src="https://s3-alpha-sig.figma.com/img/5c43/af27/2a2e77cf32f173044ed3cf2165ee1326?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nYPI8aph6rQxV1QiDLEjcgaK7gamSOYTCJiiZuVPY2kZwl0-UQghHkvb~mSKGIVxmplnYW6UapvHAn2ox41b7Itjiyr8vMs633qrYlfSnF0BUalFCu9lSbzRsqbBJkC-5M6ajwl-KJY9JLjAfcPWx1EAdWk1xY0B9aGJToo8Z3qbLMoC1tZuky281xME165axllCEvjtY6puB138HudfNDu1NZaKgXcMwuf5jlCsX7XR8nEIM4wCU0JFkjswN5gcIkmYzMk9fsvgy~ynOY9Lwv7fskRYf3epcvV8I4RdWAqT303rntSjPWSzOuKIdY~s3L92iS-kpJayT3ChmhB8AA__" alt="" className="w-full h-40 object-cover rounded-lg" />
                        <h2 className="text-xl font-bold mt-4">Embracing the Future: The Power of Adaptive AI</h2>
                        <p className="text-gray-600 mt-2">Artificial Intelligence has reached a remarkable inflection point with the emergence of Adaptive AI. Unlike its conventional counterparts, Adaptive AI possesses the remarkable ability to learn, evolve, and adjust in real-time based on changing data and circumstances. This groundbreaking technology is poised to revolutionize industries, elevate user experiences, and usher in a new era of intelligent automation. In this article, we will delve into the fascinating world of Adaptive AI, exploring its fundamental concepts and the transformative implications it holds for our future.</p>
                        <br />
                        <a href="https://example.com/blog/2" className="text-blue-600 hover:underline mt-4"> Read More</a>
                    </div>
                    
                    <div className="card">
                        <img src="https://s3-alpha-sig.figma.com/img/826a/668f/780dfb9b6095381a40c33da086d336f9?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g5JFHGkRFxrWZzzd5AC5xA5w6qnrxtsQgarLjhLOt6ya6L-bfQ5C~pw~4XUeDYMLOIv~npi4Xt72XwW~cNIe9PKLAi5MG-4txdus96RgCMCXHO8q8uQE9VjV8WEbAfY3bqtcb0wYBNzefWfbqzIHbb-r7xFN0c2VYN~e04J2QkYM4hpQlsqySguoQ3kiOmAuUGIlri3UUj9CLb~Sujncwief0FndE3OpXtzZUs4e--qp2DfUI1adJcwh7WJdGyLjKpHupUX2-fUy4EE3jyPEf6XvPfbRKv18GBf-tTWpi0sZnB4hhmuN89k8rw2K5XASRC90PiXbvf6YWEDWL1E~Mg__" alt="" className="w-full h-40 object-cover rounded-t-lg" />
                        <h2 className="text-xl font-bold mt-4">Understanding Quantum Dots, the Award-Winning Work of the 2023 Chemistry — Nobel </h2>
                        <p className="text-gray-600 mt-2">In a groundbreaking announcement, the 2023 Chemistry Nobel Prize was awarded to a distinguished team of researchers for their pioneering work on Quantum Dots. These nano-sized semiconductor particles have redefined the boundaries of science and technology, ushering in a new era of possibilities across various industries.</p>
                        <br />
                        <br />
                        <a href="https://example.com/blog/2" className="text-blue-600 hover:underline mt-4"> Read More</a>
                    </div>

                    <div className="card">
                        <img src="https://s3-alpha-sig.figma.com/img/826a/668f/780dfb9b6095381a40c33da086d336f9?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g5JFHGkRFxrWZzzd5AC5xA5w6qnrxtsQgarLjhLOt6ya6L-bfQ5C~pw~4XUeDYMLOIv~npi4Xt72XwW~cNIe9PKLAi5MG-4txdus96RgCMCXHO8q8uQE9VjV8WEbAfY3bqtcb0wYBNzefWfbqzIHbb-r7xFN0c2VYN~e04J2QkYM4hpQlsqySguoQ3kiOmAuUGIlri3UUj9CLb~Sujncwief0FndE3OpXtzZUs4e--qp2DfUI1adJcwh7WJdGyLjKpHupUX2-fUy4EE3jyPEf6XvPfbRKv18GBf-tTWpi0sZnB4hhmuN89k8rw2K5XASRC90PiXbvf6YWEDWL1E~Mg__" alt="" className="w-full h-40 object-cover rounded-t-lg" />
                        <h2 className="text-xl font-bold mt-4">Understanding Quantum Dots, the Award-Winning Work of the 2023 Chemistry — Nobel </h2>
                        <p className="text-white-600 mt-2">In a groundbreaking announcement, the 2023 Chemistry Nobel Prize was awarded to a distinguished team of researchers for their pioneering work on Quantum Dots. These nano-sized semiconductor particles have redefined the boundaries of science and technology, ushering in a new era of possibilities across various industries.</p>
                        <br />
                        <br />
                        <a href="https://example.com/blog/2" className="text-blue-600 hover:underline mt-4"> Read More</a>
                    </div>

                    <div className="card">
                        <img src="https://s3-alpha-sig.figma.com/img/5c43/af27/2a2e77cf32f173044ed3cf2165ee1326?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nYPI8aph6rQxV1QiDLEjcgaK7gamSOYTCJiiZuVPY2kZwl0-UQghHkvb~mSKGIVxmplnYW6UapvHAn2ox41b7Itjiyr8vMs633qrYlfSnF0BUalFCu9lSbzRsqbBJkC-5M6ajwl-KJY9JLjAfcPWx1EAdWk1xY0B9aGJToo8Z3qbLMoC1tZuky281xME165axllCEvjtY6puB138HudfNDu1NZaKgXcMwuf5jlCsX7XR8nEIM4wCU0JFkjswN5gcIkmYzMk9fsvgy~ynOY9Lwv7fskRYf3epcvV8I4RdWAqT303rntSjPWSzOuKIdY~s3L92iS-kpJayT3ChmhB8AA__" alt="" className="w-full h-40 object-cover rounded-lg" />
                        <h2 className="text-xl font-bold mt-4">Embracing the Future: The Power of Adaptive AI</h2>
                        <p className="text-gray-600 mt-2">Artificial Intelligence has reached a remarkable inflection point with the emergence of Adaptive AI. Unlike its conventional counterparts, Adaptive AI possesses the remarkable ability to learn, evolve, and adjust in real-time based on changing data and circumstances. This groundbreaking technology is poised to revolutionize industries, elevate user experiences, and usher in a new era of intelligent automation. In this article, we will delve into the fascinating world of Adaptive AI, exploring its fundamental concepts and the transformative implications it holds for our future.</p>
                        <br />
                        <a href="https://example.com/blog/2" className="text-blue-600 hover:underline mt-4"> Read More</a>
                    </div>
                    
                </div>

            </div>
        </div>
    );
}

export default RecentBlogs