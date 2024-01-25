import React from "react";

import {  Routes, Route, } from "react-router-dom";

//pages
import { PageOne } from '../Pages/index';

export const AppRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="/" element= { <PageOne></PageOne> }></Route>

            </Routes>
        
        </>
    )
}