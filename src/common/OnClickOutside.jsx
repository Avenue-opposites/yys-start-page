import { useRef } from 'react';
import useClickOutside from '~/hooks/useClickOutside';

// eslint-disable-next-line react/prop-types
function OnClickOutsize({ children, trigger }) {
    const ref = useRef(null);
    useClickOutside(ref, trigger);
    return (
        <span ref={ref}>{children}</span>
    )
}

export default OnClickOutsize;