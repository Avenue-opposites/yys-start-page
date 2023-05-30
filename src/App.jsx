import { createPortal } from 'react-dom';
import styled from 'styled-components'
import background from '~/assets/background.jpg';
import Header from '~/components/Header';
import Part1 from '~/components/Part1';
import Part2 from '~/components/Part2';
import Part3 from '~/components/Part3';
import Sidebar from '~/components/Sidebar';
import Footer from '~/components/Footer';

// 包装组件
const Wrapper = styled.main`
  position: relative;
  margin: 0 auto;
  max-width: 1920px;
  min-width: 1400px;
  width: 100%;
  overflow: hidden;
`;
// 背景图片包装组件
const BackgroundImageWrapper = styled.div`
  position: relative;
  background: url(${background}) no-repeat center 1080px;
`;
function App() {
  return (
    <Wrapper>
      <BackgroundImageWrapper>
        <Header />
        <Part1 />
        <Part2 />
        <Part3 />
        <Footer />
        {createPortal(<Sidebar />, document.body)}
      </BackgroundImageWrapper>
    </Wrapper>
  )
}

export default App
