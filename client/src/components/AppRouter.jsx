// import { observe } from 'mobx';
import React, { useContext } from 'react'
// import { Routes, Navigate, BrowserRouter, Route } from 'react-router-dom'
import { Routes, Navigate, Route } from 'react-router-dom'

import { Context } from '../index.js';
import { authRoutes, publicRoutes } from '../routes';
// import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite'
const AppRouter = observer(
    () => {
        const { user } = useContext(Context)
        console.log(user);
        return (
            <Routes>
                {user.isAuth && authRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />} exact />
                )}
                {publicRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />} exact />
                )}
                <Route path="*" element={<Navigate to="/" />} />

            </Routes>

        );
    }
)

export default AppRouter