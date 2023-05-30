import styled from 'styled-components';
import { createPortal } from 'react-dom';
import OnClickOutside from '~/common/OnClickOutside';

const Wrapper = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(1,1,1,.8);
    z-index: 10000;
    opacity: ${({ open }) => open ? 1 : 0};
    visibility: ${({ open }) => open ? 'visible' : 'hidden'};
    transition: .4s;
`;
// 背景组件
function Backdrop({ open, children, onClickOutside }) {
    return (
        createPortal(
            <Wrapper open={open}>
                <OnClickOutside trigger={onClickOutside}>
                    {children}
                </OnClickOutside>
            </Wrapper>,
            document.body
        )
    )
}

export default Backdrop;