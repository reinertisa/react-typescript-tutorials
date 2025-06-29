type RandomNumber4 = {value: number}

type PositiveNumber = RandomNumber4 & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

type NegativeNumber = RandomNumber4 & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}

type Zero = RandomNumber4 & {
    isZero: boolean
    isPositive?: never
    isNegative?: never
}

type RandomNumber4Props = PositiveNumber | NegativeNumber | Zero;


export default function RandomNumber4({value, isPositive, isNegative, isZero}: RandomNumber4Props) {

    return (
        <div>
            <h1>{value} is {isPositive && 'Positive'} {isNegative && 'Negative'} {isZero && 'Zero'}</h1>
        </div>
    )
}