import useDocTitle1 from "./useDocTitle1.ts";

export default function DocTitle1() {
    const {count, handleIncrement} = useDocTitle1(0)
    return (
        <div>
            <button onClick={handleIncrement}>Increment one - {count}</button>
        </div>
    )
}