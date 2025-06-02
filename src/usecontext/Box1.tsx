import {useContext} from 'react';
import {ThemeContext1} from './ThemeContext1.tsx'

export default function Box1() {
    const theme = useContext(ThemeContext1)

    return (
        <div style={{background: theme.primary.main, color: theme.primary.text}}>Box</div>
    )
}