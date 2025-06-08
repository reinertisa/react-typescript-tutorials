import {useRef, useEffect} from 'react';

export default function DomRef2() {
    const inputRef = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        inputRef.current.focus()
    }, [])


    return (
        <input ref={inputRef} type="text" />
    )

}