"use client"

import { useMemo } from "react"
import Image, {StaticImageData} from "next/image"
import {EmblaOptionsType} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

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
    loop?: boolean
    playOnInit?: boolean
    delay?: number
    btnColor?: string
}

export const Carousel = ({ slides, width = 200, loop = true, playOnInit = true, delay = 3000, btnColor }: CarouselProps) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const options = useMemo<EmblaOptionsType>(() => ({ loop }), [])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const plugins = useMemo(() => ([Autoplay({ playOnInit, delay })]), [])
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins)

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
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} style={{ color: btnColor }} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} style={{ color: btnColor }} />
                </div>
            </div>
        </section>
    )
}
