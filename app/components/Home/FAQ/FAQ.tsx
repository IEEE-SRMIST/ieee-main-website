import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <div className={`dark:bg-black bg-gray-300`}>
           <motion.div 
                className="max-w-screen-2xl mx-auto px-4 py-6 md:px-6 md:py-8 xl:px-8 xl:py-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="grid md:grid-cols-5 gap-10">
                    <div className="md:col-span-2">
                        <div className="max-w-xs">
                            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                                Frequently
                                <br />
                                asked questions
                            </h2>
                            <p className="mt-1 hidden md:block text-gray-600 dark:text-gray-400">
                                Answers to the most frequently asked questions.
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-gray-700">
                            {faqData.map((item, index) => (
                               <motion.div 
                                    key={index} 
                                    className="hs-accordion pt-6 pb-3 mb-4 dark:bg-black bg-[#cfd4de]" 
                                    style={{ borderRadius: '10px', padding: '20px', overflow: 'hidden' }}
                                    initial={{ opacity: 0, y: 20 * index }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <button
                                        className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-700 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        aria-controls={`accordion-content-${index}`}
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        {item.question}
                                        <motion.svg
                                            className={`hs-accordion-active:${activeAccordion === index ? 'block' : 'hidden'} flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            initial={{ rotate: 0 }}
                                            animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <path d="m18 15-6-6-6 6" />
                                        </motion.svg>
                                    </button>
                                    <motion.div
                                        id={`accordion-content-${index}`}
                                        className={`hs-accordion-content ${activeAccordion === index ? 'block' : 'hidden'} w-full overflow-hidden transition-[height] duration-300`}
                                        aria-labelledby={`accordion-heading-${index}`}
                                    >
                                        <p className="text-gray-600 dark:text-gray-400 mx-1 md:mx-2 lg:mx-3">{item.answer}</p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const faqData = [
    {
        question: "What is IEEE ?",
        answer: "IEEE stands for the Institute of Electrical and Electronics Engineers. It's a professional association for electrical, electronic, and computing technologies, dedicated to advancing innovation and technological excellence."
    },
    {
        question: "Who can join the IEEE SRM SB?  ",
        answer: "Any student enrolled in SRMIST with an interest in electrical, electronic, or computing engineering fields can join the IEEE SRM SB."
    },
    {
        question: "What are the benefits of joining the IEEE SRM SB?  ",
        answer: "Joining IEEE provides access to a vast network of professionals and resources, including technical publications, conferences, workshops, and career development opportunities."
    },
    {
        question: "Does the IEEE student branch collaborate with other student organizations?  ",
        answer: "Yes, we actively collaborate with other student organizations on campus and in the community to organize joint events, share resources, and foster interdisciplinary collaborations.  "
    },
    {
        question: "Are there any membership fees for joining the IEEE SRM SB?",
        answer: "No, there is no membership fees associated with joining IEEE SRM Student Branch."
    },
    {
        question: "Are there any membership fees for joining the IEEE SRM SB?  ",
        answer: "No, there is no membership fees associated with joining IEEE SRM Student Branch."
    },
    {
        question: "Are there any membership fees for joining the IEEE SRM SB?",
        answer: "No, there is no membership fees associated with joining IEEE SRM Student Branch."
    },
    {
        question: "How can I get involved in the activities of the IEEE SRM SB?",
        answer: "You can get involved by attending events, volunteering to organize activities, joining committees, or running for leadership positions within the SRM SB."
    },
    {
        question: "Does the IEEE SRM SB offer any scholarships or grants?",
        answer: "Yes, IEEE offers various scholarships, awards, and grants to support students in their academic and professional endeavors."
    },
    {
        question: "How can I contact the IEEE student branch for inquiries or assistance?",
        answer: "You can contact us through the contact information provided on our website or reach out to us via email or social media channels."
    },
    {
        question: "How can I stay updated with the events and activities of the IEEE SRM SB?",
        answer: "You can stay updated by regularly visiting our website, following us on social media platforms, and subscribing to our newsletter for announcements about upcoming events and activities."
    }
];

export default FAQ;
