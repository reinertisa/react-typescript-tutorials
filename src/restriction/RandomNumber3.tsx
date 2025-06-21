type NumberProps = {
    value: number
}

type PositiveNumberProps = NumberProps & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

type NegativeNumberProps = NumberProps & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}

type ZeroProps = NumberProps & {
    isZero: boolean
    isPositive?: never
    isNegative?: never
}

type RandomNumber3Props = PositiveNumberProps | NegativeNumberProps | ZeroProps;

export default function RandomNumber3({value, isNegative, isPositive, isZero}: RandomNumber3Props) {
    return (
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'negative'}
            {' '}{isZero && 'zero'}
        </div>
    )
}