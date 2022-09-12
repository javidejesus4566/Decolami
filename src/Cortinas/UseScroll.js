import { useRef } from 'react';
export const ScrollView = () => {

    const Scroll = (id) => {
        const myRef = useRef(String(id));
        setTimeout(() => {
            window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop })
        }, 250)
    }
    return (id) => Scroll(id);
}