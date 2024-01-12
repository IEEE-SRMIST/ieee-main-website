import React from 'react';

import Navbar from '@/app/components/Home/Navbar/Navbar';
import Footer from '@/app/components/Home/Footer/Footer';

import FeaturedSponsors from '@/app/components/Sponsors/FeaturedSponsors/FeaturedSponsors';
import SponsorshipOpportunities from '@/app/components/Sponsors/SponsorshipOpportunities/SponsorshipOpportunities';
import WhySponsorUs from '@/app/components/Sponsors/WhySponsorUs/WhySponsorUs';
import BecomeSponsor from '@/app/components/Sponsors/BecomeSponsor/BecomeSponsor';
import SponsorTestimonial from '@/app/components/Sponsors/SponsorTestimonial/SponsorTestimonial';

import '../app/globals.css';

const SponsorPage: React.FC = () => {
    return (
        <div>
            <Navbar />

            {/* Hero */}
            <div className="relative overflow-hidden">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="max-w-2xl text-center mx-auto">
                        <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">
                            Designed for you to get more{" "}
                            <span className="text-blue-600">simple</span>
                        </h1>
                        <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
                            Build your business here. Take it anywhere.
                        </p>
                    </div>
                </div>
            </div>
            {/* End Hero */}

            <FeaturedSponsors />
            <SponsorshipOpportunities />
            <WhySponsorUs />
            <BecomeSponsor />
            <SponsorTestimonial />

            <Footer />
        </div>
    );
};

export default SponsorPage;