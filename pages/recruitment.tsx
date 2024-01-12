import React from 'react';

import Navbar from '@/app/components/Home/Navbar/Navbar';
import Footer from '@/app/components/Home/Footer/Footer';

import RecruitmentClosed from '@/app/components/Recruitment/RecruitmentClosed/RecruitmentClosed';
import GetNotified from '@/app/components/Recruitment/GetNotified/GetNotified';

import '../app/globals.css';

const RecruitmentPage: React.FC = () => {
    return (
        <div>
            <Navbar />

            <RecruitmentClosed />
            <GetNotified />

            <Footer />
        </div>
    );
};

export default RecruitmentPage;