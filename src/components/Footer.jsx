import { Fragment } from 'react';
import styled from 'styled-components';
import WX from '~/assets/微信.svg';
import 微博 from '~/assets/微博.svg';
import QQ from '~/assets/QQ.svg';
import QQ空间 from '~/assets/QQ空间.svg';
import 网易 from '~/assets/网易.webp';
import 网易游戏 from '~/assets/网易游戏.webp';
import 文 from '~/assets/文.webp';
import 文2 from '~/assets/文2.png';

const Wrapper = styled.div`
    width: 100%;
    padding: 0 0 16px;
    z-index: 99;
    text-align: center;
    color: #c89e53;
    background: none;
    position: relative;
`;

const ShareWrapper = styled.div`
    margin: 0 auto;
    width: 230px;
    text-align: center;
    color: #fff;
    display: flex;
    .share-txt {
        display: inline-block;
        margin-left: 4px;
        margin-right: 12px;
        height: 34px;
        line-height: 34px;
        font-family: 'Microsoft YaHei';
        font-size: 14px;
    }
    .button-group {
        display: inline-flex;
        align-items: center;
        li {
            margin-right: 7px;
        }
    }
`;

const ShareLink = styled.a.attrs({ href: '#' })`
    display: block;
    width: 26px;
    height: 26px;
    color: #fff;
    background-size: 100% !important;
    transition: opacity .3s;
    &:hover{
        opacity: .8;
    }
`;

const ShareToWXLink = styled(ShareLink)`
    background: url(${WX}) no-repeat center;
`;

const ShareTo微博Link = styled(ShareLink)`
    background: url(${微博}) no-repeat center;
`;

const ShareToQQ空间Link = styled(ShareLink)`
    background: url(${QQ空间}) no-repeat center;
`;

const ShareToQQLink = styled(ShareLink)`
    background: url(${QQ}) no-repeat center;
`;

const Copyright = styled.div`
    width: 925px;
    overflow: hidden;
    text-align: left;
    margin: 0 auto;
    padding: 15px 0 10px;
    font-size: 12px;
    line-height: 20px;
    color: #fff;
`;

const LogoWrapper = styled.span`
    display: inline-block;
    vertical-align: middle;
    height: 48px;
    min-width: 300px;
    overflow: hidden;
    a {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-right: 15px;
    }
`;

const Nav = styled.span`
    display: inline-block;
    vertical-align: top;
    position: relative;
    z-index: 1;
    a {
        color: #fff;
        &:hover {
            text-decoration: underline;
        }
    }
`;

function Footer() {
    const images = [网易, 网易游戏, 文, 文2];
    const renderImages = () => images.map(image => (
        <a key={image} href="#">
            <img src={image} alt="" />
        </a>
    ));
    const renderLinks = () => {
        let links = [
            '公司简介',
            '客户服务',
            '网易游戏隐私政策及儿童个人信息保护规则',
            '网易游戏',
            '联系我们',
            '商务合作',
            '加入我们',
            '用户协议'
        ];
        return links.map((line, i) => (
            i === links.length - 1
                ? <a key={line} href="#">{line}</a>
                : <Fragment key={line}>
                    <a href="#">{line}</a>
                    &nbsp;-&nbsp;
                </Fragment>
        ));
    }

    return (
        <Wrapper>
            <ShareWrapper>
                <span className="share-txt">分享到:</span>
                <ul className="button-group">
                    <li>
                        <ShareToWXLink />
                    </li>
                    <li>
                        <ShareTo微博Link />
                    </li>
                    <li>
                        <ShareToQQ空间Link />
                    </li>
                    <li>
                        <ShareToQQLink />
                    </li>
                </ul>
            </ShareWrapper>
            <Copyright>
                <LogoWrapper>
                    {renderImages()}
                </LogoWrapper>
                <Nav>
                    <p>{renderLinks()}</p>
                    网易公司版权所有 ©1997-2023
                    <a href="#">网络游戏行业防沉迷自律公约</a>
                    <a style={{ float: 'right' }} href="#">点击查看家长关爱平台 &gt; </a>
                </Nav>
            </Copyright>
        </Wrapper>
    )
}

export default Footer;