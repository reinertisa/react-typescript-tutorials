import {useRef, useEffect} from 'react';

export default function FocusInput1() {
    const inputRef = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <input ref={inputRef} type="text" />
    )

}