import React, {useState} from 'react';

type InputReturnTypes = [string, BindTypes, () => void]

type BindTypes = {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function useInput1(initialValue: string): InputReturnTypes {
    const [value, setValue] = useState<string>(initialValue);
    const reset = (): void => setValue(initialValue);

    const bind: BindTypes = {
        value,
        onChange: (e): void => setValue(e.target.value),
    }

    return [value, bind, reset];
}