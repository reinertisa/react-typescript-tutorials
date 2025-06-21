import React from 'react';

import Login from "./Login.tsx";
import type {ProfileProps} from "./Profile.tsx";

type PrivateProps = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfileProps>
}

export default function Private({isLoggedIn, component: Component}: PrivateProps) {

    if (isLoggedIn) {
        return <Component name="Sade Miller"/>
    } else {
        return <Login />
    }
}