
type HorizontalTypes = 'left' | 'center' | 'right';
type VerticalTypes = 'top' | 'center' | 'bottom';

type Toast3Props = {
    position: Exclude<`${HorizontalTypes} - ${VerticalTypes}`, 'center-center'> | 'center';
}

export default function Toast3({position}: Toast3Props) {

    return (
        <div>
            {position}
        </div>
    )
}