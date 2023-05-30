import styled, { keyframes } from 'styled-components'
import logo from '~/assets/logo.webp';
import join from '~/assets/join.webp';
import buttonBg from '~/assets/buttonBg.webp';
import joinCommunityDetails from '~/assets/joinCommunityDetails.webp';
import 起舞唤神 from '~/assets/起舞唤神.webp';
import 孔雀明王CV from '~/assets/孔雀明王CV.webp';
import iconDrop from '~/assets/iconDrop.webp';
import video from '~/assets/video.mp4';
import official from '~/assets/official.webp';
import feather from '~/assets/feather.webp';

const float = keyframes`
    from {
        transform: translateY(0%);
    }
    to {
        transform: translateY(10%);
    }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 1080px;
  &::after {
    content: '';
    width: 100%;
    height: 723px;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 99;
    pointer-events: none;
    background: url(${feather}) no-repeat center bottom;
  }
`;

// 视频包装组件
const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  video {
    width: 1920px;
    height: 1080px;
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -960px;
  }
`;
// logo组件
const Logo = styled.a`
  position: absolute;
  top: 15px;
  left: 20px;
  background: url(${logo}) no-repeat;
  background-size: auto 100%;
  width: 84px;
  height: 247px;
`;
// 按钮包装组件
const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 20px;
  width: 343px;
  height: 47px;
`;
// 加入社区组件
const JoinCommunity = styled.div`
  position: relative;
  width: 171px;
  height: 47px;
  transition: .2s;
  background: url(${join}) no-repeat center;
  &::after {
    content: '';
    transition: opacity .3s ease;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: -111%;
    width: 545px;
    height: 170px;
    background: url(${joinCommunityDetails}) no-repeat center;
  }
  &:hover::after {
    opacity: 1;
    visibility: visible;
  }
`;
// 进入官方按钮组件
const JoinOfficial = styled.a`
  position: relative;
  background: url(${buttonBg}) no-repeat center;
  display: inline-block;
  width: 172px;
  height: 47px;
  > img {
    position: absolute;
    top: 10px;
    left: 50%;
    margin-left: -24px;
    transition: transform .3s ease;
  }
  &:hover {
    > img {
      transform: scale(1.1);
    }
  }
`;
// 内容包装组件
const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
// 口号组件
const Slogan = styled.div`
    position: absolute;
    background: url(${起舞唤神}) no-repeat center;
    background-size: 100%;
    top: 0;
    margin-right: 300px;
    right: 50%;
    width: 368px;
    height: 866px;
`;
// CV组件
const CV = styled.div`
    position: absolute;
    top: 210px;
    left: 50%;
    margin-left: 510px;
    width: 146px;
    height: 359px;
    background: url(${孔雀明王CV}) no-repeat center;
    background-size: 100%;
`;
// 水滴组件
const Drop = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: 166px;
    width: 213px;
    height: 134px;
    margin-left: -106.5px;
    background: url(${iconDrop}) no-repeat center;
    animation: ${float} 1s ease-in infinite alternate;
`;
// 头部组件
function Header() {
  return (
    <Wrapper>
      <VideoWrapper>
        <video muted autoPlay loop disablePictureInPicture controlsList="nodownload">
          <source src={video} type="video/mp4" />
        </video>
      </VideoWrapper>
      <Logo />
      <ButtonWrapper>
        <JoinCommunity />
        <JoinOfficial>
          <img src={official} alt="" />
        </JoinOfficial>
      </ButtonWrapper>
      <ContentWrapper>
        <Slogan />
        <CV />
        <Drop />
      </ContentWrapper>
    </Wrapper>
  )
}

export default Header;