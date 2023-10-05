/* eslint-disable prettier/prettier */
import React,{createContext, useReducer,} from "react";
import { counterReducer, initialSate } from "./counterReduce";

export const CounterContext = createContext();

export const CounterProvider =({children}) =>{
    const [state,dispatch] = useReducer(counterReducer,initialSate);

    return(
        <CounterContext.Provider value={{state,dispatch}}>
            {children}
        </CounterContext.Provider>
    )
}

