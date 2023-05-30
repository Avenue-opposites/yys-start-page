import { useState } from 'react';
import styled from 'styled-components';
import pop from '~/assets/pop.webp';
import 已达成 from '~/assets/已达成.webp';
import numBg from '~/assets/numBg.webp';
import numIcon from '~/assets/numIcon.webp';
import activeIcon from '~/assets/activeIcon.webp';

const Wrapper = styled.li`
    z-index: 3;
    float: left;
    width: 155px;
    height: 100%;
    position: relative;
`;
// 详细信息组件
const Details = styled.div`
    background: url(${pop}) no-repeat left top;
    position: absolute;
    z-index: 2;
    width: 312px;
    height: 199px;
    top: -176px;
    left: 70px;
    opacity: ${({ show }) => show};
    visibility: ${({ show }) => show ? 'visible' : 'hidden'};
    transition: all .3s;
    pointer-events: none;
    > h3 {
        padding-top: 24px;
        padding-bottom: 10px;
        color: #000;
        font-size: 22px;
        font-weight: 700;
        width: 264px;
        border-bottom: 1px dashed #333;
        margin: 0 auto;
        margin-bottom: 5px; 
    }
    p {
        width: 264px;
        margin: 0 auto;
        color: #000;
        font-size: 14px;
        line-height: 27px;
    }
`;
// 礼包组件
const GiftPack = styled.a.attrs({ href: '#' })`
    display: block;
    margin: 0 auto 15px;
    position: relative;
`;
// 已达成图标组件
const ReachedIcon = styled.span`
    display: block;
    position: absolute;
    width: 95px;
    height: 83px;
    background: url(${已达成}) 0 0 no-repeat;
    background-size: 100%;
    top: 30%;
    left: 50%;
    margin: -41.5px 0 0 -47.5px;
    z-index: 2;
    pointer-events: none;
`;
// 礼包图标组件
const GiftPackIcon = styled.span`
    width: 86px;
    height: 84px;
    background: url(${props => props.url}) 0 0 no-repeat;
    background-size: 100% 100%;
    display: block;
    margin: 0 auto;
    position: relative;
    user-select: none;
`;
// 礼包名组件
const GiftPackName = styled.p`
    position: relative;
    top: 16px;
    color: #e9c474;
    font-size: 20px;
    text-align: center;
    margin-top: -11px;
    font-weight: 700;
`;
// 预约人数组件
const PersonNumber = styled.p`
    background: url(${numBg}) no-repeat left top;
    box-sizing: border-box;
    margin-top: 6px;
    width: 158px;
    height: 28px;
    padding-left: 30px;
    padding-top: 4px;
    transform: scale(0.89) translateY(16px);
    .num {
        float: left;
        font-size: 16px;
        font-weight: 700;
        color: #feedd5;
        user-select: none;
    }
`;
// 预约人数图标组件
const PersonIcon = styled.em`
    margin-right: 2px;
    float: left;
    width: 20px;
    height: 20px;
    transform: scale(0.8);
    background: url(${numIcon}) no-repeat left top;
    background-size: 100%;
    font-weight: 700;
`;

// 已达成阶段图标组件
const ActiveIcon = styled.span`
    position: absolute;
    width: 5px;
    height: 12px;
    right: -5px;
    top: 40px;
    background: url(${activeIcon}) no-repeat left top;
`;

// eslint-disable-next-line react/prop-types
function Step({ title, url, number, prize, isReached }) {
    // 表示是否显示详细信息,默认不显示
    const [show, setShow] = useState(false);
    // 鼠标进入事件,鼠标进入后显示详细信息
    const handleMouseEnter = () => setShow(true);
    // 鼠标离开事件,鼠标离开后隐藏详细信息
    const handleMouseLeave = () => setShow(false);

    return (
        <Wrapper>
            <Details show={Number(show)}>
                <h3>{title}</h3>
                <p>
                    预约人数达到{number}，可获得礼包：
                    <br />
                    {prize}
                </p>
            </Details>
            <GiftPack
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {isReached && <ReachedIcon />}
                <GiftPackIcon url={url} />
                <GiftPackName>{title}</GiftPackName>
                <PersonNumber>
                    <PersonIcon />
                    <span className="num">{number}</span>
                </PersonNumber>
                <ActiveIcon />
            </GiftPack>
        </Wrapper>
    )
}

export default Step;