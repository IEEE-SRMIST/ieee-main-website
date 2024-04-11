import React, { useState } from 'react';

const FAQ = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <div style={{ background: '#dfe3e9' }}>
            <div className="max-w-screen-2xl mx-auto px-4 py-6 md:px-6 md:py-8 xl:px-8 xl:py-10">
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
                                <div key={index} className="hs-accordion pt-6 pb-3" style={{ background: '#cfd4de', borderRadius: '10px', boxShadow: activeAccordion === index ? '0 0 10px rgba(0, 0, 255, 0.5)' : 'none' }}>
                                    <button
                                        className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        aria-controls={`accordion-content-${index}`}
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        {item.question}
                                        <svg
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
                                        >
                                            <path d="m18 15-6-6-6 6" />
                                        </svg>
                                    </button>
                                    <div
                                        id={`accordion-content-${index}`}
                                        className={`hs-accordion-content ${activeAccordion === index ? 'block' : 'hidden'} w-full overflow-hidden transition-[height] duration-300`}
                                        aria-labelledby={`accordion-heading-${index}`}
                                    >
                                        <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const faqData = [
    {
        question: "Can I cancel at anytime?",
        answer: "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback."
    },
    {
        question: "My team has credits. How do we use them?",
        answer: "Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details."
    },
    {
        question: "How does Preline's pricing work?",
        answer: "Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key."
    },
    {
        question: "How secure is Preline?",
        answer: "Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion."
    },
    {
        question: "How do I get access to a theme I purchased?",
        answer: "If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with."
    },
    {
        question: "Upgrade License Type",
        answer: "There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase."
    }
];

export default FAQ;
