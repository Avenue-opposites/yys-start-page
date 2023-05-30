import styled from 'styled-components';
import * as ScrollArea from '@radix-ui/react-scroll-area';

const Wrapper = styled.div`
    position: absolute;
    top: 75px;
    right: 95px;
    width: 600px;
    height: 484px;
    font-size: 18px;
    color: #fff;
    padding-right: 20px;
    overflow: hidden;
    outline: none;
    .scrollArea-root {
        width: 100%;
        height: 100%;
        .scrollArea-viewport {
            width: 100%;
            height: 100%;
        }
        .scrollArea-scrollbar {
            --radix-scroll-area-thumb-width: 9px;
            width: var(--radix-scroll-area-thumb-width);
            background: rgb(20, 51, 72);
            cursor: default;
            right: -20px !important;
            height: 484px;
            border-radius: 5px;
            .scrollArea-thumb {
                width: var(--radix-scroll-area-thumb-width);
                height: var(--radix-scroll-area-thumb-height);
                background-color: rgb(255, 255, 255);
                border-radius: inherit;
                cursor: pointer;
            }
        }
    }
`;

// eslint-disable-next-line react/prop-types
function Description({ children }) {
    return (
        <Wrapper>
            <ScrollArea.Root className="scrollArea-root" type="always" scrollHideDelay={0}>
                <ScrollArea.Viewport className="scrollArea-viewport">
                    {children}
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar className="scrollArea-scrollbar">
                    <ScrollArea.Thumb className="scrollArea-thumb" />
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>
        </Wrapper>
    )
}

export default Description;