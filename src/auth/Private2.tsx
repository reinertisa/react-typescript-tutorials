import React from 'react';
import Login2 from "./Login2.tsx";
import type {Profile2Props} from "./Profile2.tsx";

type Private2Props = {
    isLoggedIn: boolean
    component: React.ComponentType<Profile2Props>
}

export default function Private2({isLoggedIn, component: Component}: Private2Props) {
    if (isLoggedIn) {
        return <Component name="Inigo and Fezzik" />
    } else {
        return <Login2 />
    }
}