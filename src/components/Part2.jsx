import { useState } from 'react';
import { styled } from 'styled-components';
import {
    降临SSR孔雀明王DetailsDesc,
    焕新新皮肤登场DetailsDesc,
    来袭大型版本活动DetailsDesc,
    携礼多重活动上线DetailsDesc,
} from '~/mock';
// 导入组件
import Backdrop from '~/common/Backdrop';
import Details from '~/common/Details';
// 导入图片
import 新版本情报 from '~/assets/新版本情报.webp';
import 了解更多 from '~/assets/了解更多.webp';
import info1 from '~/assets/info1.webp';
import info2 from '~/assets/info2.webp';
import info3 from '~/assets/info3.webp';
import info4 from '~/assets/info4.webp'
import SSR孔雀明王 from '~/assets/SSR孔雀明王.webp';
import 降临_SSR孔雀明王 from '~/assets/降临SSR孔雀明王.webp';
import 蝶栖羽衣 from '~/assets/蝶栖羽衣.webp';
import 焕新_新皮肤登场 from '~/assets/焕新新皮肤登场.webp';
import 春岁长闲 from '~/assets/春岁长闲.webp';
import 来袭大型版本活动 from '~/assets/来袭大型版本活动.webp';
import 晴明皮肤 from '~/assets/晴明皮肤.webp';
import 携礼多重活动上线 from '~/assets/携礼多重活动上线.webp';

// 包装器
const Wrapper = styled.div`
    width: 100%;
    height: 2121px;
    background-size: 1920px 100%;
    .list {
        width: 1303px;
        margin: 0 auto;
        padding-right: 45px;
    }
`;
// 标题组件
const Title = styled.div`
    width: 646px;
    height: 73px;
    margin: 0 auto;
    background: url(${新版本情报}) no-repeat center;
    background-size: 100%;
`;
// 了解更多按钮
const LearnMoreLink = styled.a`
    position: absolute;
    width: 194px;
    height: 46px;
    background: url(${了解更多}) no-repeat center;
    background-size: 100% 100%;
    z-index: 1;
    transition: .3s;
    &:hover {
        filter: brightness(130%);
        opacity: .8;
    }
`;

const Item = styled.li`
    position: relative;
    margin: 0 auto;
`;


const 降临 = {
    SSR孔雀明王: styled(Item)`
        width: 1238px;
        height: 675px;
        left: 50%;
        margin-left: -606px;
        margin-top: -9px;
        background: url(${info1}) no-repeat center;
        background-size: 100%;
        ${LearnMoreLink} {
            top: 420px;
            left: 628px;
        }
    `,
    components: {
        Image: styled.div`
            position: absolute;
            top: -133px;
            left: -125px;
            width: 895px;
            height: 901px;
            background: url(${SSR孔雀明王}) no-repeat center;
        `,
        Title: styled.h1`
            width: 532px;
            height: 120px;
            background: url(${降临_SSR孔雀明王}) no-repeat left;
            background-size: auto 100%;
            margin-top: 13px;
        `,
    },
    // eslint-disable-next-line react/prop-types
    Details({ onClose }) {
        const { Image, Title } = 降临.components;
        const [desc1, desc2] = 降临SSR孔雀明王DetailsDesc;
        return (
            <Details onClose={onClose} Image={Image}>
                <Title />
                <p className="desc bold">简介：全新SSR阶式神孔雀明王（CV：斋藤千和 / 钟可）降临平安京！</p>
                <br />
                <p className="desc bold">全新SSR孔雀明王（CV：斋藤千和（日）/ 钟可（中））降临平安京，多重召唤福利助力各位大人与新式神结缘！</p>
                {desc1.map(line => <p key={line} className="desc">{line}</p>)}
                <br />
                <br />
                <p className="desc bold">全平台新区「祈世之舞」开启</p>
                {desc2.map(line => <p key={line} className="desc">{line}</p>)}
            </Details>
        )
    },
};

const 焕新 = {
    新皮肤登场: styled(Item)`
        width: 1576px;
        height: 956px;
        background-size: 100% 100%;
        left: 50%;
        margin-left: -606px;
        margin-top: -419px;
        background: url(${info2}) no-repeat center;
        ${LearnMoreLink} {
            top: 619px;
            left: 100px;
        }
    `,
    components: {
        Image: styled.div`
            position: absolute;
            top: -269px;
            left: -215px;
            width: 1200px;
            height: 1020px;
            background: url(${蝶栖羽衣}) no-repeat center;
        `,
        Title: styled.h1`
            width: 352px;
            height: 133px;
            background: url(${焕新_新皮肤登场}) no-repeat left;
            background-size: auto 100%;
            margin-top: 13px;
        `
    },
    // eslint-disable-next-line react/prop-types
    Details({ onClose }) {
        const { Image, Title } = 焕新.components;
        const [desc1, desc2] = 焕新新皮肤登场DetailsDesc;
        return (
            <Details onClose={onClose} Image={Image}>
                <Title />
                <p className="desc bold">简介：蝶栖羽衣，式神新装登场！</p>
                <br />
                <p className="desc bold">空相面灵气典藏皮肤·双栖蝶 上架皮肤商店</p>
                {desc1.map(line => <p key={line} className="desc">{line}</p>)}
                <br />
                <br />
                <p className="desc bold">彼岸花皮肤·焚骨成蕊 上架皮肤商店</p>
                {desc2.map(line => <p key={line} className="desc">{line}</p>)}
            </Details>
        )
    }
};

const 来袭 = {
    大型版本活动: styled(Item)`
        width: 1238px;
        height: 509px;
        background: url(${info3}) no-repeat center;
        background-size: 100% 100%;
        left: 50%;
        margin-left: -606px;
        margin-top: -219px;
        ${LearnMoreLink} {
            top: 335px;
            left: 626px;
        }
    `,
    components: {
        Image: styled.div`
            position: absolute;
            top: 4px;
            left: -15px;
            width: 641px;
            height: 741px;
            background: url(${春岁长闲}) no-repeat center;
        `,
        Title: styled.h1`
            width: 332px;
            height: 133px;
            background: url(${来袭大型版本活动}) no-repeat left;
            background-size: auto 100%;
            margin-top: 13px;
        `
    },
    // eslint-disable-next-line react/prop-types
    Details({ onClose }) {
        const { Image, Title } = 来袭.components;
        const [desc] = 来袭大型版本活动DetailsDesc;
        return (
            <Details onClose={onClose} Image={Image}>
                <Title />
                <p className="desc bold">简介：歌舞盛会，祈神迎战！随机SP/SSR、式神新皮肤等丰厚奖励待兑换！</p>
                <br />
                <p className="desc bold">大型版本活动-「祈舞唤神」开启！</p>
                {desc.map(line => <p key={line} className="desc">{line}</p>)}
            </Details>
        )
    }
};

const 携礼 = {
    多重活动上线: styled(Item)`
        width: 1238px;
        height: 457px;
        background: url(${info4}) no-repeat center;
        background-size: 100% 100%;
        left: 50%;
        margin-left: -606px;
        margin-top: -42px;
        ${LearnMoreLink} {
            top: 318px;
            left: 99px;
        }
    `,
    components: {
        Image: styled.div`
            position: absolute;
            top: 50px;
            left: 67px;
            width: 518px;
            height: 624px;
            background: url(${晴明皮肤}) no-repeat center;
        `,
        Title: styled.h1`
            width: 352px;
            height: 133px;
            background: url(${携礼多重活动上线}) no-repeat left;
            background-size: auto 100%;
            margin-top: 13px;
        `
    },
    // eslint-disable-next-line react/prop-types
    Details({ onClose }) {
        const { Image, Title } = 携礼.components;
        const [desc1, desc2, desc3, desc4] = 携礼多重活动上线DetailsDesc;
        return (
            <Details onClose={onClose} Image={Image}>
                <Title />
                <p className="desc bold">简介：520游戏热爱日来临，签到奖励等多重福利奉上！</p>
                <br />
                <p className="desc bold">游戏热爱日，福利大派送！</p>
                {desc1.map(line => <p key={line} className="desc">{line}</p>)}
                <br />
                <br />
                <p className="desc bold">「相逢之约」活动限时开启！</p>
                {desc2.map(line => <p key={line} className="desc">{line}</p>)}
                <br />
                <br />
                <p className="desc bold">典藏皮肤限时折扣</p>
                {desc3.map(line => <p key={line} className="desc">{line}</p>)}
                <br />
                <br />
                <p className="desc bold">「雀舞惊鸿」活动开启！</p>
                {desc4.map(line => <p key={line} className="desc">{line}</p>)}
            </Details>
        )
    }
};

function Part2() {
    const [component, setComponent] = useState(null);
    const close = () => setComponent(null);
    const createClickHandler = (Component) => {
        return () => setComponent(<Component onClose={close} />);
    };
    return (
        <Wrapper>
            <Title />
            <ul className="list">
                <降临.SSR孔雀明王>
                    <LearnMoreLink onClick={createClickHandler(降临.Details)} />
                </降临.SSR孔雀明王>
                <焕新.新皮肤登场>
                    <LearnMoreLink onClick={createClickHandler(焕新.Details)} />
                </焕新.新皮肤登场>
                <来袭.大型版本活动>
                    <LearnMoreLink onClick={createClickHandler(来袭.Details)} />
                </来袭.大型版本活动>
                <携礼.多重活动上线>
                    <LearnMoreLink onClick={createClickHandler(携礼.Details)} />
                </携礼.多重活动上线>
            </ul>
            <Backdrop open={Boolean(component)} onClickOutside={close}>
                {component}
            </Backdrop>
        </Wrapper>
    )
}

export default Part2;