import React from 'react';

import Navbar from '@/app/components/Home/Navbar/Navbar';
import Footer from '@/app/components/Home/Footer/Footer';

import DomainOverview from '@/app/components/Domains/DomainOverview/DomainOverview';
import OurSociety from '@/app/components/Domains/OurSociety/OurSociety';
import DomainFAQ from '@/app/components/Domains/DomainFAQ/DomainFAQ';
import DomainRecruitment from '@/app/components/Domains/DomainRecruitment/DomainRecruitment';

import '../app/globals.css';

const DomainPage: React.FC = () => {
    return (
        <div>
            <Navbar />

            {/* Hero */}
            <div className="relative overflow-hidden mt-32 mb-24">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="max-w-2xl text-center mx-auto">
                        <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">
                            The Collective Spirit of{" "}
                            <span className="text-blue-600">IEEE</span>
                        </h1>
                        <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
                            Explore the diverse realms of our club, where innovation, creativity, and collaboration converge to create an extraordinary tapestry.                        </p>
                    </div>
                </div>
            </div>
            {/* End Hero */}

            <DomainOverview />
            <OurSociety />
            <DomainRecruitment />
            <DomainFAQ />

            <Footer />
        </div>
    );
};

export default DomainPage;