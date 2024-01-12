import React from 'react';

import Navbar from '@/app/components/Home/Navbar/Navbar';
import Footer from '@/app/components/Home/Footer/Footer';

import ContactForm from '@/app/components/Contact/ContactForm/ContactForm';

import '../app/globals.css';

const ContactPage: React.FC = () => {
    return (
        <div>
            <Navbar />

            <ContactForm />

            <Footer />
        </div>
    );
};

export default ContactPage;