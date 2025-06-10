
type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type Toast1Props = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}

export default function Toast1({position}: Toast1Props) {

    return (
        <div>
            toast notification position - {position}
        </div>
    )

}