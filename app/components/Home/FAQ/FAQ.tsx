import React, { useState } from 'react';

const FAQ = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <div className="w-[1376px] h-[915px] px-8 py-[52px] bg-zinc-200 rounded-[60px] justify-start items-start gap-[37px] inline-flex">
            <div className="w-[344px] h-[233px]">
                <span className="text-black text-2xl font-black font-Cinzel leading-10">Frequently <br/>Asked Questions<br/></span>
                <span className="text-black text-lg font-normal font-Sora capitalize leading-10">A</span>
                <span className="text-black text-lg font-normal font-Sora lowercase leading-10">nswers to the most <br/></span>
                <span className="text-black text-lg font-normal font-Sora lowercase leading-[30px]">frequently asked questions</span>
            </div>
            <div className="p-2.5 flex-col justify-start items-start gap-[29px] inline-flex">
                {faqData.map((item, index) => (
                    <div key={index} className="w-[919px] p-2.5 bg-gray-300 rounded-[10px] shadow">
                        <button
                            className="text-lg font-semibold font-Sora leading-[30px] w-full text-left"
                            onClick={() => toggleAccordion(index)}
                        >
                            {item.question}
                        </button>
                        <div className={activeAccordion === index ? "block" : "hidden"}>
                            <p className="text-base font-normal font-Sora leading-[25px]">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const faqData = [
    {
        question: "What is IEEE?",
        answer: "IEEE stands for the Institute of Electrical and Electronics Engineers. It's a professional association for electrical, electronic, and computing technologies, dedicated to advancing innovation and technological excellence."
    },
    {
        question: "Who can join the IEEE SRM SB?",
        answer: "Any student enrolled in SRMIST with an interest in electrical, electronic, or computing engineering fields can join the IEEE SRM SB."
    },
    // Add more FAQ items here
];

export default FAQ;

