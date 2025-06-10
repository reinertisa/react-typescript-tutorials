
type RandomNumberType = {
    value: number
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

type NegativeNumber = RandomNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}

type Zero = RandomNumberType & {
    isZero: boolean
    isPositive?: never
    isNegative?: never
}



type RandomNumber2Props = PositiveNumber | NegativeNumber | Zero

export default function RandomNumber2({value, isPositive, isNegative, isZero}: RandomNumber2Props) {

    return (
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'negative'} {isZero && 'zero'}
        </div>
    )
}