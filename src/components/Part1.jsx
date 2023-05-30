import { Fragment } from 'react';
import styled from 'styled-components';
import Backdrop from '~/common/Backdrop';
import 新服集结 from '~/assets/新服集结.webp';
import part1Bg from '~/assets/part1Bg.webp';
import title from '~/assets/title.webp';
import 已开服 from '~/assets/已开服.webp';
import serverIcon from '~/assets/serverIcon.webp';
import date from '~/assets/date.webp';
import description1 from '~/assets/description1.webp';
import description2 from '~/assets/description2.webp';
import description3 from '~/assets/description3.webp';
import icon1 from '~/assets/icon1.webp';
import icon2 from '~/assets/icon2.webp';
import icon3 from '~/assets/icon3.webp';
import icon4 from '~/assets/icon4.webp';
import icon5 from '~/assets/icon5.webp';
import 预约抽卡 from '~/assets/预约抽卡.webp';
import qrcodeBg from '~/assets/qrcodeBg.webp';
import qc_code from '~/assets/qc_code.webp';
import closeBtn from '~/assets/closeBtn1.webp';

import Step from '~/common/Step';
import { useState } from 'react';

const Wrapper = styled.div`
    width: 100%;
    height: 460px;
    margin-bottom: 140px;
    background-size: 1920px 100%;
    margin-top: 60px;
    .container {
        width: 1399px;
        height: 352px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 45px 20px;
        background: url(${part1Bg}) no-repeat left top;
    }
`;
// 新服集结包装组件
const NewServiceWrapper = styled.div`
    width: 378px;
    height: 265px;
    position: relative;
    > p {
        font-size: 0;
        width: 308px;
        height: 40px;
        margin: 14px auto;
        background: url(${title}) no-repeat left top;
    }
`;
// 新服集结标题组件
const Title = styled.div`
    width: 646px;
    height: 73px;
    margin: 23px auto 36px;
    background: url(${新服集结}) no-repeat center;
    background-size: 100%;
`;
//  集结预约组件
const Link = styled.a.attrs({
    href: '#'
})`
    pointer-events: none;
    position: relative;
    display: block;
    font-size: 0;
    margin: 24px auto -7px;
    width: 354px;
    height: 110px;
    color: #fff;
    transition: all .2s ease;
    > span {
        position: relative;
        top: -6px;
        display: block;
        padding-left: 110px;
        font-size: 28px;
        text-align: center;
        color: #fffffe;
        letter-spacing: 3px;
        font-weight: 700;
    }
    strong {
        position: relative;
        top: -10px;
        display: block;
        font-size: 24px;
        width: 215px;
        height: 50px;
        margin-left: 124px;
        margin-top: 11px;
        background: url(${已开服}) no-repeat;
        background-size: 100%;
        pointer-events: none;
    }
    &::before {
        content: "";
        position: absolute;
        left: 20px;
        top: 0;
        display: block;
        width: 88px;
        height: 87px;
        background: url(${serverIcon}) no-repeat;
        background-size: 100%;
    }
`;
// 集结预约日期组件
const Date = styled.p`
    width: 352px;
    height: 85px;
    margin-top: 5px;
    margin-left: 5px;
    background: url(${date}) no-repeat center;
`;
// 集结预约进度组件
const ProgressPart = styled.div`
    width: 941px;
    position: relative;
    margin-top: 24px;
    .prizes {
        margin-left: 0;
        margin-top: 130px;
        width: 110%;
    }
`;
// 描述内容包装组件
const DescriptionWrapper = styled.div`
    width: 928px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: -2px;
    left: 14px;
`;
// 描述内容组件
const Description = styled.div`
    width: ${props => props.width}px;
    background: url(${props => props.url}) no-repeat center;
    height: 122px;
    box-sizing: border-box;
    padding: 6px;
`;
// 进度条组件
const ProgressLine = styled.div`
    position: absolute;
    top: 173px;
    left: 93px;
    width: 590px;
    height: 6px;
    background: #fcefd9;
    border: 1px solid #db939d;
    > span {
        display: block;
        width: 590px;
        height: 6px;
        background-color: #f0576e;   
    }
`;
// 小程序按钮组件
const MiniProgramButton = styled.div`
    position: absolute;
    z-index: 4;
    top: 158px;
    right: 8px;
    width: 160px;
    height: 86px;
    cursor: pointer;
    background: url(${预约抽卡}) no-repeat;
    transition: all .3s;
    &:hover {
        filter: brightness(120%);
        opacity: .8;
    }
`;
// 预约二维码组件
const YYSQRCode = styled.div`
    position: relative;
    width: 165px;
    height: 217px;
    background-size: 100%;
    background: url(${qrcodeBg}) no-repeat center;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 12px;
    .qrcode {
        display: block;
        width: 129px;
    }
`;
// 关闭按钮组件
const CloseButton = styled.div`
    position: absolute;
    top: -13px;
    right: -13px;
    width: 26px;
    height: 26px;
    background: url(${closeBtn}) no-repeat center;
    background-size: 100%;
    cursor: pointer;
`;

// 第一部分组件(新服集结)
function Part1() {
    const [show, setShow] = useState(false);
    const open = () => setShow(true);
    const close = () => setShow(false);
    // 阶段礼包数据
    const steps = [
        {
            title: '祝福礼包',
            url: icon1,
            number: 100000,
            prize: '神秘的符咒*1，体力*100',
            isReached: true
        },
        {
            title: '皮肤礼包',
            url: icon2,
            number: 300000,
            prize: '皮肤券*100，金币*5000',
            isReached: true
        },
        {
            title: '勾玉礼包',
            url: icon3,
            number: 500000,
            prize: '勾玉*100，50%经验加成 （3天）',
            isReached: true
        },
        {
            title: '神秘礼包',
            url: icon4,
            number: 800000,
            prize: '神秘的符咒*2（开服后连续5天发放）',
            isReached: true
        },
        {
            title: '限定礼包',
            url: icon5,
            number: 1000000,
            prize: '招福达摩*3，奉为达摩*2，御行达摩*1，雪女皮肤·月见之樱*1',
            isReached: true
        },
    ];

    return (
        <Fragment>
            <Wrapper>
                <Title />
                <div className="container">
                    <NewServiceWrapper>
                        <p>新区集结预约豪礼</p>
                        <Link>
                            <span>祈世之舞</span>
                            <strong />
                        </Link>
                        <Date />
                    </NewServiceWrapper>
                    <ProgressPart>
                        <DescriptionWrapper>
                            <Description width={377} url={description1} />
                            <Description width={290} url={description2} />
                            <Description width={236} url={description3} />
                        </DescriptionWrapper>
                        <ProgressLine>
                            <span />
                        </ProgressLine>
                        <ul className="prizes">
                            {steps.map((step) => <Step key={step.title} {...step} />)}
                        </ul>
                        <MiniProgramButton onClick={open} />
                    </ProgressPart>
                </div>
            </Wrapper>
            <Backdrop open={show} onClickOutside={close}>
                <YYSQRCode>
                    <CloseButton onClick={close} />
                    <img className="qrcode" src={qc_code} alt="" />
                </YYSQRCode>
            </Backdrop>
        </Fragment>
    )
}

export default Part1;