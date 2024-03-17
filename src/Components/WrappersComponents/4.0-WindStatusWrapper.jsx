import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';

//childs
import { WindStatus } from './4.1-WindStatus';
import { Humidity  } from './4.2-Humidity';

//styles


export const WindStatusWrapper = () => {

          
    return (
       <div>
            <WindStatus></WindStatus>

            <Humidity></Humidity>

       </div>
    );  

    



}