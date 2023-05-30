import { useEffect, useRef } from 'react';
// 用于处理点击元素外部的事件
function useClickOutside(ref, handler, events = ['mousedown', 'touchstart']) {
    // 保存处理函数
    const savedHandler = useRef(handler);
    // 当处理函数改变时，更新保存的处理函数
    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);
    // 绑定事件
    useEffect(() => {
        const { current: el } = ref;
        const listener = event => {
            // console.log(el, event.target);
            // 如果元素不存在，或者元素包含了事件的目标元素，则返回
            if (!el || el.contains(event.target)) {
                return;
            }
            typeof savedHandler.current === 'function' && savedHandler.current(event);
        };
        // 绑定事件
        for (const event of events) {
            document.addEventListener(event, listener);
        }
        //当组件卸载时，解绑事件
        return () => {
            for (const event of events) {
                document.removeEventListener(event, listener);
            }
        };
    }, [ref, events]);
}

export default useClickOutside;