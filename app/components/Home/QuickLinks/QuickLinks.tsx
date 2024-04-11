import React from 'react'

interface socialProps {
    imageSrc: string,
    name: string,
    desp: string,
    link: string
}

const Social: React.FC<socialProps> = ({imageSrc, name, desp, link}) => {
    return (
        <div className="relative bg-gray-100 rounded-lg overflow-hidden">
            <div className="flex flex-col justify-center items-center bg-white p-4">
                <img src="/socials/group.png" alt="Logo" className="h-8" />
                <a href="#" className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 block mt-2 text-lg">
                    {name}
                </a>
                <p className="text-sm text-gray-500 lg:text-base mt-1">
                    {desp}
                </p>
            </div>
        </div>
    )
}

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
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                            Quick Links
                        </h2>
                    </div>
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