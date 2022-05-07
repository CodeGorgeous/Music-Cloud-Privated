import { Routes, Route } from 'react-router-dom';
import { IRouter } from '../types/router';

export function getRouteReacts(routes: IRouter[], basePath="") {
    const routeList = routes.map((item, index) => {
        const { children, path, component:Component, redirect, ...rest } = item;
        return (<Route
                    {...rest}
                    path={basePath + path}
                    key={index}
                    element={function() {
                        if (children) {
                            return <Component>
                                {getRouteReacts(children, basePath + path)}
                            </Component>;
                        } else {
                            return <Component />;
                        }
                    }()}
                />)
    });

    return (
        <Routes>
            {routeList}
        </Routes>
    )
};