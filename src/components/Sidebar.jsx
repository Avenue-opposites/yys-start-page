import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import sidebarSpread from '~/assets/sidebarSpread.webp';
import sidebarFold from '~/assets/sidebarFold.webp';
import qrcode from '~/assets/qrcode.png';
import line from '~/assets/line.webp';
import iosDownload from '~/assets/iosDownload.webp';
import androidDownload from '~/assets/androidDownload.webp';
import ageReminder from '~/assets/ageReminder.webp';
import voucharCenter from '~/assets/voucharCenter.webp';
// 用于实现二维码扫描的上下移动动画
const move = keyframes`
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(100px);
    }
`;
// 用于实现按钮的缩放动画
const scale = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.1);
    }
`;
// 侧边栏包装组件
const Wrapper = styled.div`
    background: url(${({ spread }) => (spread ? sidebarFold : sidebarSpread)}) no-repeat center;
    position: fixed;
    top: 200px;
    right: ${({ spread }) => spread ? '0' : '-147px'};
    width: 208px;
    height: 584px;
    background-size: 100% 100%;
    transition: .3s;
    pointer-events: visible;
    transform: scale(0.9);
    z-index: 9999;
    transform-origin: right center;
`;
// 侧边栏按钮组件
const Button = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 100px;
    cursor: pointer;
`;
// 下载软件包装组件
const DownloadWrapper = styled.div`
    position: relative;
    overflow: ${({ spread }) => spread ? 'visible' : 'hidden'};
    float: right;
    width: 160px;
    height: 100%;
`;
// 二维码包装组件
const QRCodeWrapper = styled.div`
    width: 120px;
    height: 143px;
    box-sizing: border-box;
    margin: 20px 0 0 22px;
    padding: 8px 8px 32px;
    background: #fff;
    position: relative;
    &::before {
        content: '游戏下载';
        position: absolute;
        bottom: 6px;
        width: 103px;
        text-align: center;
        color: #000;
        font-size: 15.5px;
        font-weight: 700;
    }
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 10px;
        background: url(${line}) no-repeat center;
        background-size: 100% 100%;
        animation: ${move} 1.5s .2s linear infinite alternate;
    }
`;
// 二维码组件
const QRCode = styled.img.attrs({
    src: qrcode
})`
    width: 100%;
`;
// 按钮包装组件
const ButtonWrapper = styled.div`
    width: 120px;
    margin: 20px 0 0 22px;
`;
// 苹果下载按钮组件
const AppleLink = styled.a.attrs({
    href: 'https://adl.netease.com/d/g/yys/c/fabpcb?type=ios'
})`
    background: url(${iosDownload}) no-repeat center;
    display: block;
    width: 120px;
    height: 40px;
    background-size: 100% 100%;
    transition: .2s;
    &:hover {
        transform: scale(1.05);
    }
`;
// 安卓下载按钮组件
const AndroidLink = styled(AppleLink).attrs({
    href: 'https://adl.netease.com/d/g/yys/c/fabpcb?type=android'
})`
    margin: 10px auto;
    background: url(${androidDownload}) no-repeat center;
`;
// 年龄提醒组件
const AgeReminder = styled.div`
    margin: 20px 0 0 22px;
    width: 120px;
    height: 157px;
    cursor: pointer;
    transition: all .3s ease;
    background: url(${ageReminder}) no-repeat center;
    background-size: 100%;
    &:hover {
        transform: scale(1.05);
    }
`;
// 充值中心组件
const VoucharCenterLink = styled.a.attrs({
    href: 'https://gamepay.163.com/yys?channel=mkt_yx_cps_dev.gw'
})`
    display: block;
    margin: 15px 0 0 -21px;
    width: 160px;
    height: 80px;
    background-size: 100%;
    background: url(${voucharCenter}) no-repeat center;
    animation: ${scale} 2s .2s linear infinite alternate;
    &:hover {
        animation-play-state: paused;
    }
`;
// 侧边栏组件
function Sidebar() {
    // 表示侧边栏是否展开的状态
    const [spread, setSpread] = useState(false);
    // 点击按钮时触发的事件, 用于改变侧边栏展开状态
    const clickHandler = () => setSpread(!spread);

    return (
        <Wrapper spread={Number(spread)}>
            <Button onClick={clickHandler} />
            <DownloadWrapper spread={Number(spread)}>
                <QRCodeWrapper>
                    <QRCode />
                </QRCodeWrapper>
                <ButtonWrapper>
                    <AppleLink />
                    <AndroidLink />
                </ButtonWrapper>
                <AgeReminder />
                <VoucharCenterLink />
            </DownloadWrapper>
        </Wrapper>
    )
}

export default Sidebar;