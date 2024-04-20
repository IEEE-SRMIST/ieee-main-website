
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';

import "react-vertical-timeline-component/style.min.css";
import './EventTimeline.css';

const timelineElements = [ 
    {
        id: 1,
        title: "Frontend Developer",
        location: "New Delhi, India",
        description: "Lorem25",
        buttonText: "View Frontend Projects",
        date: "August 2019 - present",
        icon: "work",
        imgURL: "https://s3-alpha-sig.figma.com/img/e597/60c8/1700b52b1cc37565886284ce7c1256d9?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZZu4iSjY1weahdltJnYjmUh9NExOsWl8wuDhjbxO35WLdfiXbbq8~DJTtqg9jsN5FHMWNxF52bOm~Jak2dSZCiqako7ApsN0cTsQXc5R1wXsNfTxLgBQpQ5ndsyTlaCWJu8dkXByref2iaOQlnc5cCQgkgmvr-Wmzm6zFvxcBDVH~26ulUWKS2hWWz0-fE~jmVEcDAkKS-8B1pxTLmc1hDfTbyfo9jGAujJ19d5uuS9P2rKUzlanECn-1peGPMTBhZf6GjO6JgsCA8xMK0O4Q~~-WGLmXJ2O0pJ4kxWspv2PFy34p6JNFNQCT-f8kdWDmOSYDuwFR4htsJsTC~HBA__",
    },
    {
        id: 2,
        title: "Frontend Developer",
        location: "New Delhi, India",
        description: "Lorem25",
        buttonText: "View Frontend Projects",
        date: "August 2019 - present",
        icon: "work",
        imgURL: "https://s3-alpha-sig.figma.com/img/e597/60c8/1700b52b1cc37565886284ce7c1256d9?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZZu4iSjY1weahdltJnYjmUh9NExOsWl8wuDhjbxO35WLdfiXbbq8~DJTtqg9jsN5FHMWNxF52bOm~Jak2dSZCiqako7ApsN0cTsQXc5R1wXsNfTxLgBQpQ5ndsyTlaCWJu8dkXByref2iaOQlnc5cCQgkgmvr-Wmzm6zFvxcBDVH~26ulUWKS2hWWz0-fE~jmVEcDAkKS-8B1pxTLmc1hDfTbyfo9jGAujJ19d5uuS9P2rKUzlanECn-1peGPMTBhZf6GjO6JgsCA8xMK0O4Q~~-WGLmXJ2O0pJ4kxWspv2PFy34p6JNFNQCT-f8kdWDmOSYDuwFR4htsJsTC~HBA__",
    },
    {
        id: 3,
        title: "Frontend Developer",
        location: "New Delhi, India",
        description: "Lorem25",
        buttonText: "View Frontend Projects",
        date: "August 2019 - present",
        icon: "work",
        imgURL: "https://s3-alpha-sig.figma.com/img/e597/60c8/1700b52b1cc37565886284ce7c1256d9?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZZu4iSjY1weahdltJnYjmUh9NExOsWl8wuDhjbxO35WLdfiXbbq8~DJTtqg9jsN5FHMWNxF52bOm~Jak2dSZCiqako7ApsN0cTsQXc5R1wXsNfTxLgBQpQ5ndsyTlaCWJu8dkXByref2iaOQlnc5cCQgkgmvr-Wmzm6zFvxcBDVH~26ulUWKS2hWWz0-fE~jmVEcDAkKS-8B1pxTLmc1hDfTbyfo9jGAujJ19d5uuS9P2rKUzlanECn-1peGPMTBhZf6GjO6JgsCA8xMK0O4Q~~-WGLmXJ2O0pJ4kxWspv2PFy34p6JNFNQCT-f8kdWDmOSYDuwFR4htsJsTC~HBA__",
    },
    {
        id: 4,
        title: "Frontend Developer",
        location: "New Delhi, India",
        description: "Lorem25",
        buttonText: "View Frontend Projects",
        date: "August 2019 - present",
        icon: "work",
        imgURL: "https://s3-alpha-sig.figma.com/img/e597/60c8/1700b52b1cc37565886284ce7c1256d9?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZZu4iSjY1weahdltJnYjmUh9NExOsWl8wuDhjbxO35WLdfiXbbq8~DJTtqg9jsN5FHMWNxF52bOm~Jak2dSZCiqako7ApsN0cTsQXc5R1wXsNfTxLgBQpQ5ndsyTlaCWJu8dkXByref2iaOQlnc5cCQgkgmvr-Wmzm6zFvxcBDVH~26ulUWKS2hWWz0-fE~jmVEcDAkKS-8B1pxTLmc1hDfTbyfo9jGAujJ19d5uuS9P2rKUzlanECn-1peGPMTBhZf6GjO6JgsCA8xMK0O4Q~~-WGLmXJ2O0pJ4kxWspv2PFy34p6JNFNQCT-f8kdWDmOSYDuwFR4htsJsTC~HBA__",
    },
];

const EventTimeline = () => {
    return (
        <section className="max-w-screen-2xl mx-auto px-4 py-6 md:px-6 md:py-8 xl:px-8 xl:py-10 events-section">
            <div className="events-container">
                <header className='text-5xl font-bold tracking-wider heading px-4 py-6 md:px-6 md:py-8 xl:px-8 xl:py-10'>EVENTS</header> 
                <div className="mx-auto mb-10 items-center justify-center text-center px-4 py-6 md:px-6 md:py-8 xl:px-8 xl:py-10 events-main">
                    <p className="mx-auto max-w-[64rem] font-sans font-normal text-sm sm:text-lg">
                    Welcome to the IEEE SRM SB Blog! Here, you'll find a collection of insightful articles, informative posts, and thought-provoking content curated by our members and contributors. Our blog covers a wide range of topics related to electrical engineering, electronics, computer science, and technology trends. Whether you're a student, professional, or simply curious about the latest advancements in the field, we invite you to explore our blog and join the conversation!
                    </p>
                </div>
                <VerticalTimeline>
                    {timelineElements.map(element => (
                        <VerticalTimelineElement 
                            key={element.id} 
                            date={element.date}
                            dateClassName="date">
                            
                            <img src={element.imgURL} alt={element.description}/>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    );
};

export default EventTimeline;