import React from 'react';

const Testimonial = () => {
    return (
        <>
            <div className="hidden md:block w-[1496px] h-[722px] px-8 py-[52px] bg-zinc-200 dark:bg-black rounded-[60px] flex flex-col justify-start items-start gap-5">
                <div className="w-[335px] h-[102px] text-black dark:text-white text-2xl font-bold font-cinzel leading-[30px]">
                    TESTIMONIALS
                </div>
                <div className="w-[1368px] h-[496px] px-1.5 py-[52px] bg-white dark:bg-black rounded-[30px] shadow border-8 border-gray-300 dark:border-gray-400 border-opacity-95 flex justify-center items-center gap-[30px]">
                    <div className="w-[200px] h-[272px] p-[10px] bg-white bg-opacity-0 flex flex-col justify-start items-center gap-2.5">
                        <div className="w-[174.50px] h-[174.50px] relative">
                            <div className="w-[174.50px] h-[174.50px] left-0 top-0 absolute bg-gray-300 rounded-full" />
                            <img className="w-[173px] h-[220px] left-0 top-[-27px] absolute rounded-full" src="" alt="." />
                        </div>
                        <div className="w-[185px] h-[77px] text-right">
                            <span className="text-black dark:text-white text-base font-normal font-sora leading-[30px]">- Nishanth Rao<br /></span>
                            <span className="text-black dark:text-white text-base font-semibold font-sora leading-[30px]">Director</span>
                        </div>
                    </div>
                    <div className="w-[390px] h-[315px] p-[15px] dark:bg-gray-900 bg-gray-300 rounded-[10px] shadow border-2 border-white dark:border-gray-500 justify-center items-start gap-2.5 flex">
                        <div className="w-[370px] h-[247px] text-justify text-black dark:text-white text-base font-normal font-sora leading-[30px]">
                            "Being part of the IEEE Student Branch has been an incredible experience. The opportunities for networking, learning, and professional development are unparalleled. I've made lifelong friends and gained invaluable skills that have helped me in my academic and professional journey."
                        </div>
                    </div>
                    <div className="w-[390px] h-[315px] p-[15px] dark:bg-gray-900 bg-gray-300 rounded-[10px] shadow border-2 border-white dark:border-gray-500 justify-center items-start gap-2.5 flex">
                        <div className="w-[370px] h-[239px] text-black dark:text-white text-base font-normal font-sora leading-[30px]">
                            The IEEE Student Branch has been my home away from home throughout my college journey. The friendships I've formed and the experiences I've gained through my involvement in the branch will always hold a special place in my heart. I'm grateful for the memories and opportunities that the branch has provided me.
                        </div>
                    </div>
                    <div className="w-[200px] h-[272px] p-[15px]  bg-white bg-opacity-0 flex flex-col justify-start items-center gap-2.5">
                        <div className="w-[174.50px] h-[174.50px] relative">
                            <div className="w-[174.50px] h-[174.50px] left-0 top-0 absolute bg-gray-300 rounded-full" />
                            <img className="w-[173px] h-[220px] left-[-26px]  top-[-27px] absolute rounded-full" src="" alt="." />
                        </div>
                        <div className="w-[185px] h-[77px] text-right">
                            <span className="text-black dark:text-white text-base font-normal font-sora leading-[30px]">-Rohan Kumar<br /></span>
                            <span className="text-black dark:text-white text-base font-semibold font-sora leading-[30px]">Chairperson</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block md:hidden w-[395px] h-[861px] px-8 py-[52px] bg-zinc-200 rounded-[30px] flex-col justify-start items-center gap-5 inline-flex">
                <div className="w-[335px] h-[41px] text-black text-xl font-bold font-cinzel leading-[30px]">TESTIMONIALS</div>
                <div className="w-[335px] h-[661px] px-2.5 py-[26px] bg-white rounded-[30px] shadow border-8 border-gray-300 border-opacity-95 flex-col justify-center items-center gap-[15px] flex">
                    <div className="w-[136px] h-[169px] p-[15px] bg-white bg-opacity-0 flex-col justify-start items-center gap-2.5 flex">
                        <div className="w-28 h-[113px] relative">
                            <div className="w-28 h-[113px] left-0 top-0 absolute bg-gray-300 rounded-full" />
                            <img className="w-[135px] h-[174px] left-0 top-[-26px] absolute" src="" alt="."/>
                        </div>
                        <div className="w-[135px] h-[47px] text-center"><span className="text-black text-[8px] font-normal font-sora leading-[15px]">- Nishanth Rao<br/></span><span className="text-black text-[8px] font-semibold font-sora leading-[15px]">Director</span></div>
                    </div>
                    <div className="w-[266px] h-[123px] p-[15px] bg-gray-300 rounded-[10px] shadow border-2 border-white justify-center items-start gap-2.5 inline-flex">
                        <div className="w-[236px] h-[247px] text-justify text-black text-[8px] font-normal font-sora leading-[15px]">"Being part of the IEEE Student Branch has been an incredible experience. The opportunities for networking, learning, and professional development are unparalleled. I've made lifelong friends and gained invaluable skills that have helped me in my academic and professional journey."        </div>
                    </div>
                    <div className="w-[266px] h-[123px] p-[15px] bg-gray-300 rounded-[10px] shadow border-2 border-white justify-center items-start gap-2.5 inline-flex">
                        <div className="w-[237px] h-[239px] text-justify text-black text-[8px] font-normal font-sora leading-[15px]">The IEEE Student Branch has been my home away from home throughout my college journey. The friendships I've formed and the experiences I've gained through my involvement in the branch will always hold a special place in my heart. I'm grateful for the memories and opportunities that the branch has provided me        </div>
                    </div>
                    <div className="w-[136px] h-[173px] p-[15px] bg-white bg-opacity-0 flex-col justify-start items-center gap-2.5 flex">
                        <div className="w-28 h-28 relative">
                            <div className="w-28 h-28 left-0 top-0 absolute bg-gray-300 rounded-full" />
                            <img className="w-[230px] h-[294px] left-[-59px] top-[-35px] absolute" src="" alt="." />
                        </div>
                        <div className="w-[185px] h-[77px] text-center"><span className="text-black text-[8px] font-normal font-sora leading-[15px]">-Rohan Kumar<br/></span><span className="text-black text-[8px] font-semibold font-sora leading-[15px]">Chairperson</span></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;











