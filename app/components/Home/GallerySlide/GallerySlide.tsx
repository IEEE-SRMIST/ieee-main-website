import React from 'react';

const GallerySlide: React.FC = () => {
    return (
        <div className="w-full px-4 py-16 justify-center items-start">
            {/* Desktop Layout */}
            <div className="hidden sm:flex">
                <div className="w-[400px] h-[500px] relative border-8 border-white">
                    <img className="w-full h-full object-cover" src="https://via.placeholder.com/400x500" alt="Gallery Image 1" />
                </div>
                <div className="w-[400px] h-[500px] relative border-8 border-white">
                    <img className="w-full h-full object-cover" src="https://via.placeholder.com/400x500" alt="Gallery Image 2" />
                </div>
                <div className="w-[400px] h-[500px] relative border-8 border-white">
                    <img className="w-full h-full object-cover" src="https://via.placeholder.com/400x500" alt="Gallery Image 3" />
                </div>
                <div className="w-[400px] h-[500px] relative border-8 border-white">
                    <img className="w-full h-full object-cover" src="https://via.placeholder.com/400x500" alt="Gallery Image 4" />
                </div>
            </div>

            {/* Mobile Layout (below 640px) */}
            <div className="sm:hidden flex overflow-x-auto space-x-0">
                <div className="w-[400px] max-w-[400px] h-[512px] max-h-[512px] relative border-8 border-white">
                    <img className="w-full h-full object-cover" src="https://via.placeholder.com/400x512" alt="Gallery Image 1" />
                </div>
                <div className="w-[400px] max-w-[400px] h-[512px] max-h-[512px] relative border-8 border-white">
                    <img className="w-full h-full object-cover" src="https://via.placeholder.com/400x512" alt="Gallery Image 2" />
                </div>
                <div className="w-[400px] max-w-[400px] h-[512px] max-h-[512px] relative border-8 border-white">
                    <img className="w-full h-full object-cover" src="https://via.placeholder.com/400x512" alt="Gallery Image 3" />
                </div>
                <div className="w-[400px] max-w-[400px] h-[512px] max-h-[512px] relative border-8 border-white">
                    <img className="w-full h-full object-cover" src="https://via.placeholder.com/400x512" alt="Gallery Image 4" />
                </div>
            </div>
        </div>
    );
};

export default GallerySlide;
