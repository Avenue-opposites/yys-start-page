import styled from 'styled-components';
import infoBg from '~/assets/infoBg.webp';
import infoCloseBtn from '~/assets/infoCloseBtn.webp';
import Description from '~/common/Description';
// 详情包装组件
const DetailsWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    box-sizing: border-box;
    padding-top: .1px;
    width: 1359px;
    height: 671px;
    background: url(${infoBg}) no-repeat center / 100% 100%;
    .desc {
        font-size: 18px;
        margin-top: 15px;
    }
    .bold{
        font-size: 22px;
    }
`;
// 关闭按钮
const CloseButton = styled.div`
    position: absolute;
    top: -3px;
    right: 12px;
    width: 73px;
    height: 75px;
    background: url(${infoCloseBtn}) no-repeat center;
    background-size: 100% 100%;
    cursor: pointer;
    transition: .3s;
    &:hover {
        transform: scale(1.05);
    }
`;

// eslint-disable-next-line react/prop-types
function Details({ onClose, Image, children }) {
    return (
        <DetailsWrapper>
            <CloseButton onClick={onClose} />
            <Image />
            <Description>
                {children}
            </Description>
        </DetailsWrapper>
    )
}

export default Details;