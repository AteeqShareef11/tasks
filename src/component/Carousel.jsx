import React, { useState, useEffect, useRef } from 'react';

const Carousel = ({ carouselId, slides, enablePagination = true }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const totalSlides = slides.length;
    const carouselRef = useRef(null);

    useEffect(() => {
        const handlePrevBtnClick = () => moveSlide('prev');
        const handleNextBtnClick = () => moveSlide('next');
        const prevBtn = carouselRef.current.querySelector('.carousel-btn--prev');
        const nextBtn = carouselRef.current.querySelector('.carousel-btn--next');

        prevBtn.addEventListener('click', handlePrevBtnClick);
        nextBtn.addEventListener('click', handleNextBtnClick);

        return () => {
            prevBtn.removeEventListener('click', handlePrevBtnClick);
            nextBtn.removeEventListener('click', handleNextBtnClick);
        };
    }, [currentSlideIndex]);

    const moveSlide = (direction) => {
        setCurrentSlideIndex((prevIndex) => {
            if (direction === 'next') {
                return (prevIndex + 1) % totalSlides;
            } else {
                return (prevIndex - 1 + totalSlides) % totalSlides;
            }
        });
    };

    const handlePaginationBtnClick = (index) => {
        setCurrentSlideIndex(index);
    };

    const renderSlides = () => {
        const slidesCopy = [...slides];
        const midIndex = currentSlideIndex % totalSlides;
        const slidesToShow = [
            slidesCopy[(midIndex + totalSlides - 1) % totalSlides],
            slidesCopy[midIndex],
            slidesCopy[(midIndex + 1) % totalSlides]
        ];

        return slidesToShow.map((slide, index) => (
            <div className={`item ${index === 1 ? 'item-large' : 'item-small'}`} key={index}>
                <img src={slide.imgSrc} alt={slide.altText} />
            </div>
        ));
    };

    return (
        <div id={carouselId} className="carousel" role="region" aria-labelledby={`${carouselId}-title`} ref={carouselRef}>

            <div className="carousel-inner">
                <div className="slide-track">{renderSlides()}</div>
                <button
                    className="carousel-btn carousel-btn--prev-next carousel-btn--prev"
                    aria-label="Previous Slide"
                >
                    &lt;
                </button>
                <button
                    className="carousel-btn carousel-btn--prev-next carousel-btn--next"
                    aria-label="Next Slide"
                >
                    &gt;
                </button>
                {enablePagination && (
                    <nav className="carousel-pagination" role="tablist">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                className={`carousel-btn caroursel-btn--${index + 1} ${index === currentSlideIndex ? 'carousel-btn--active' : ''}`}
                                role="tab"
                                aria-selected={index === currentSlideIndex}
                                onClick={() => handlePaginationBtnClick(index)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </nav>
                )}
            </div>
        </div>
    );
};


export default Carousel