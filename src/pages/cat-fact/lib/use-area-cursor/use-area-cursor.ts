import { useRef } from 'react';

export const useAreaCursor = () => {
    const ref = useRef<HTMLTextAreaElement>(null);

    const setCursor = () => {
        if (ref.current) {
            const areaNode = ref.current;
            const value = areaNode.value;

            if(!value) return;

            const idx = value.indexOf(' ');
            const cursorPos = idx > -1 ? idx : value.length;

            areaNode.focus();
            areaNode.setSelectionRange(cursorPos, cursorPos);

        }
    };

    return { ref, setCursor };
};
