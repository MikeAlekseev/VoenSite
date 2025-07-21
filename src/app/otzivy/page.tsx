import './page.otzivy.css'

import {Lables} from "@/app/components/Lables";

import {Carousel, CarouselSlide} from "@/app/components/Carousel";

import feedback1Img from "@/app/otzivy/resources/feedback1.jpg";
import feedback2Img from "@/app/otzivy/resources/feedback2.jpg";
import feedback3Img from "@/app/otzivy/resources/feedback3.jpg";
import feedback4Img from "@/app/otzivy/resources/feedback4.jpg";
import feedback5Img from "@/app/otzivy/resources/feedback5.jpg";
import feedback6Img from "@/app/otzivy/resources/feedback6.jpg";


import ranenieCase1Img from '@/app/otzivy/resources/1sbor.jpg'
import ranenieCase2Img from '@/app/otzivy/resources/2sbor.jpg'
import ranenieCase3Img from '@/app/otzivy/resources/3sbor.jpg'

const feedbackSlides: CarouselSlide[] = [
    { id: '1', src: feedback1Img, alt: 'Отзыв' },
    { id: '2', src: feedback2Img, alt: 'Отзыв' },
    { id: '3', src: feedback3Img, alt: 'Отзыв' },
    { id: '4', src: feedback4Img, alt: 'Отзыв' },
    { id: '5', src: feedback5Img, alt: 'Отзыв' },
    { id: '6', src: feedback6Img, alt: 'Отзыв' },
]

const ranenieSlides: CarouselSlide[] = [
    {id: '1',src: ranenieCase1Img, alt: 'ранение скрин1'},
    {id: '2',src: ranenieCase2Img, alt: 'ранение скрин2'},
    {id: '3',src: ranenieCase3Img, alt: 'ранение скрин3'}
]

export default function Home(){
    return (
        <>
            <Lables />
            <div className="top__otzivy">
                <div className="otzivy">
                    <h2 className="otzivy__header">
                        Отзывы о консультациях ВПБ &ldquo;Юстиция&rdquo;
                    </h2>
                    <Carousel slides={feedbackSlides} width={300} btnColor="white"/>
                    <h2 className="otzivy__header">
                        Выплаты по ранению, кейсы:
                    </h2>
                    <Carousel slides={ranenieSlides} width={600} btnColor="white"/>
                </div>
            </div>
        </>
    )
}