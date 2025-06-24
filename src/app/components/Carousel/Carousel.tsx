"use client"

import Image, {StaticImageData} from "next/image";
import useEmblaCarousel from 'embla-carousel-react'

import { PrevButton, NextButton, usePrevNextButtons } from './ArrowButtons'
import './Carousel.scss'

export interface CarouselSlide {
    id: string
    src: StaticImageData
    alt: string
}

export interface CarouselProps {
    width?: number
    slides: CarouselSlide[]
}

export const Carousel = ({ slides, width = 200 }: CarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel()

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla" style={{ width: width + 'px' }}>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map(({ id, src, alt }) => (
                        <div className="embla__slide" key={id}>
                            <Image src={src} alt={alt} width={width} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </section>
    )
}
