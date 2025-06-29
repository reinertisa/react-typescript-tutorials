import Counter1 from "./Counter1.tsx";
import Counter2 from "./Counter2.tsx";
import {useContext} from "react";
import {CountContext} from "./CountContext.tsx";

export default function Counter() {
    const {count} = useContext(CountContext);
    return (
        <div>
            <h2>Count - {count}</h2>
            <Counter1 />
            <Counter2 />
        </div>
    )
}