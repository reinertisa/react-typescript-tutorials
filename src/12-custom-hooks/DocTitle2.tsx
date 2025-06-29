import useDocTitle1 from "./useDocTitle1.ts";

export default function DocTitle2() {
    const {count, handleIncrement} = useDocTitle1(10);

    return (
        <div>
            <button onClick={handleIncrement}>Count - {count}</button>
        </div>
    )
}