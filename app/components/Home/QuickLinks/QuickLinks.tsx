import React, { useState } from 'react';

interface SocialProps {
    imageSrc: string;
    name: string;
    desp: string;
    link: string;
}

const Social: React.FC<SocialProps> = ({ imageSrc, name, desp, link }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div
            className={`relative rounded-lg overflow-hidden mx-10 bg-gray-300 ${
                isHovered ? 'transform scale-100' : 'transform scale-110'
            } h-56 transition-all duration-300 ease-in-out cursor-pointer`}
            style={{
                background: '#DFE3E9',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                transition: 'transform 0.4s ease-in-out',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex flex-col justify-center items-center p-4">
                <img
                    src={imageSrc}
                    alt="Logo"
                    className={`${isHovered ? 'grayscale-0 h-7' : 'grayscale h-12'} transition-all duration-400`}
                />
                <h3 className={`font-bold text-gray-800 block mt-3 ${ isHovered ? 'text-base' : 'text-lg'} transition-all duration-400`}>
                    {name}
                </h3>
                
                <p
                    className={`text-sm text-gray-500 lg:text-base mt-2 ${
                        isHovered ? 'opacity-100' : 'opacity-0 h-0'
                    } transition-all duration-600 ease-in-out`}
                >
                    {desp}
                </p>
            </div>
        </div>
    );
};

const QuickLinks = () => {

    const socials = [
        {
            imageSrc: "/socials/group.png",
            name: "IEEE Membership",
            desp: "Join a Community of more than 450,000 technology and engineering professionals",
            link: "#"
        },
        {
            imageSrc: "/socials/instagram.png",
            name: "Instagram",
            desp: "Visit our Instagram Page and get latest updates about IEEE SRM",
            link: "#"
        },
        {
            imageSrc: "/socials/linkedin.png",
            name: "Linkedin",
            desp: "Join us on LinkedIn and find a place to connect with like minded individuals",
            link: "#"
        },
        {
            imageSrc: "/socials/threads.png",
            name: "Threads",
            desp: "Connect with IEEE SRM on threads",
            link: "#"
        }
    ];

    return (
        <div className="bg-green-100 max-w-screen-2xl mx-auto px-4 py-6 md:px-6 md:py-8 xl:px-8 xl:py-10">
            <div className="bg-py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <h2 className="text-center text-3xl font-cinzel font-bold text-gray-800 mb-10 md:mb-16 lg:text-5xl">
                        Quick Links
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {socials.map((social, index) => (
                            <Social key={index} imageSrc={social.imageSrc} name={social.name} desp={social.desp} link={social.link} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickLinks