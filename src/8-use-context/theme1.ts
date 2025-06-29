
type CssProperties = {
    main: string,
    text: string
}

type Theme1 = {
    primary: CssProperties,
    secondary: CssProperties
}

export const theme1: Theme1 = {
    primary: {
        main: '#3f51b6',
        text: '#fff'
    },
    secondary: {
        main: '#f50057',
        text: '#fff'
    }
}