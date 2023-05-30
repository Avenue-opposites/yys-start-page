import styled from 'styled-components';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
// 导入图片
import 游戏特色 from '~/assets/游戏特色.webp';
import one from '~/assets/1.jpg';
import two from '~/assets/2.jpg';
import three from '~/assets/3.jpg';
import four from '~/assets/4.jpg';
import five from '~/assets/5.jpg';
import prev from '~/assets/prev.webp';
import next from '~/assets/next.webp';

const Wrapper = styled.div`
    width: 100%;
    min-height: 605px;
    background-size: 1920px 100%;
    margin-top: -66px;
    .splide {
        width: 1200px;
        height: 400px;
        margin: 55px auto 0;
        pointer-events: visible;
        .splide-slide {
            width: 800px !important;
            height: 392px;
            overflow: hidden;
            border: 1px solid #ad9770;
            transform-style: preserve-3d;
            transform: .4s;
            > img {
                position: absolute;
                width: 100%;
                height: 100%;
                object-fit: cover;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            &::before {
                content: '';
                position: absolute;
                z-index: 1;
                display: block;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                transition: .4s;
                background-color: rgba(1,1,1,.8);
            }
        }
        .swiper-slide-active {
            &::before {
                background-color: transparent;
            }
        }
    }
`;

const Title = styled.div`
    width: 646px;
    height: 73px;
    background: url(${游戏特色}) no-repeat center;
    background-size: 100% 100%;
    margin: 0 auto;
`;
const Arrow = styled.div`
    button {
        position: absolute;
        z-index: 9999;
        top: 50%;
        transform: translateY(-50%);
        outline: none;
        border: none;
        background: transparent;
        transition: .3s;
        pointer-events: auto;
        cursor: pointer;
        width: 44px;
        height: 80px;
        background-size: 100%;
        &:hover {
            filter: brightness(130%);
            opacity: .8;
        }
    }
    .prev {
        left: 50px;
        background: url(${prev}) no-repeat center;
    }
    .next {
        right: 50px;
        background: url(${next}) no-repeat center;
    }
`;
function Part3() {
    const images = [one, two, three, four, five];
    const swiperOptions = {
        modules: [Autoplay, Navigation, EffectCoverflow],
        coverflowEffect: {
            depth: 300,
            rotate: 20,
        },
        effect: 'coverflow',
        centeredSlides: true,
        centeredSlidesBounds: true,
        centerInsufficientSlides: true,
        loop: true,
        autoplay: true,
        navigation: {
            prevEl: '.prev',
            nextEl: '.next'
        },
        slidesPerView: 'auto'
    };

    return (
        <Wrapper>
            <Title />
            <Swiper className="splide" {...swiperOptions}>
                {
                    images.map(item => (
                        <SwiperSlide className="splide-slide" key={item}>
                            <img src={item} alt="" />
                        </SwiperSlide>
                    ))
                }
                <Arrow slot="container-end">
                    <button className="prev" />
                    <button className="next" />
                </Arrow>
            </Swiper>
        </Wrapper>
    )
}

export default Part3;