import React from 'react';

import Login1 from "./Login1.tsx";
import type {ProfileProps} from "./Profile1.tsx";

type PrivateProps = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfileProps>
}
export default function Private1({isLoggedIn, component: Component}: PrivateProps) {
    if (isLoggedIn) {
        return <Component name="Sade"/>
    } else {
        return <Login1 />
    }
}