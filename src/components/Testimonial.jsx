"use client";

import React from 'react';
import { ChevronLeft, ChevronRight, Star, Building2, Briefcase } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const reviews = [
    {
        id: 1,
        role: "Business Owner",
        review: "The digital marketing transformation we experienced was remarkable. Our online visibility increased by 200% within months, leading to a significant boost in qualified leads. The ROI exceeded our expectations!",
        rating: 5,
        industry: "Architecture & Design"
    },
    {
        id: 2,
        role: "Marketing Director",
        review: "Their data-driven approach to digital marketing set them apart. We saw immediate improvements in our conversion rates and customer engagement. The strategic insights provided were invaluable to our growth.",
        rating: 5,
        industry: "Technology"
    },
    {
        id: 3,
        role: "CEO",
        review: "Working with this team has been transformative for our business. Their comprehensive digital strategy helped us establish a strong online presence and connect with our target audience effectively.",
        rating: 5,
        industry: "Infrastructure"
    }
];



const Testimonial = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const ReviewCard = ({ review }) => (
        <div className="flex flex-col items-center bg-transparent rounded-2xl p-4 sm:p-8 mx-2 sm:mx-4 my-4 sm:my-8 select-none">
            <div className="mb-4 sm:mb-6 w-full">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        {review.industry === "Architecture & Design" ? (
                            <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        ) : (
                            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        )}
                    </div>
                    <div className="text-left">
                        <p className="font-semibold text-gray-800 text-sm sm:text-base">{review.role}</p>
                        <p className="text-xs sm:text-sm text-gray-500">{review.industry}</p>
                    </div>
                </div>
            </div>

            <div className="relative mb-4 sm:mb-6">
                <span className="absolute -left-2 -top-4 text-blue-200 font-serif text-4xl sm:text-6xl">
                    "
                </span>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed px-4 sm:px-8">
                    {review.review}
                </p>
                <span className="absolute -right-2 bottom-0 text-blue-200 font-serif text-4xl sm:text-6xl">
                    "
                </span>
            </div>

            <div className="flex gap-1 sm:gap-2">
                {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />
                ))}
            </div>
        </div>
    );

    return (
        <div className="w-full py-8 sm:py-16">
            <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
                <div className="text-center mb-8 sm:mb-12">
                    <span className="block text-xs sm:text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">
                        Testimonials
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        What Our Clients Say
                    </h2>
                    <div className="w-12 sm:w-16 h-1 bg-blue-600 mx-auto rounded-full" />
                </div>

                <div className="relative group">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {reviews.map((review) => (
                                <div className="flex-[0_0_100%] min-w-0" key={review.id}>
                                    <ReviewCard review={review} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={scrollPrev}
                        className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 p-1 sm:p-2 md:p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all z-10 hidden group-hover:block"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 p-1 sm:p-2 md:p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all z-10 hidden group-hover:block"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;