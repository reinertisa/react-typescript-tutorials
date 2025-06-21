
type Toast2Props = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}

type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom';

export default function Toast2({position}: Toast2Props) {
    return (
        <div className={position}>
            {position}
        </div>
    )
}