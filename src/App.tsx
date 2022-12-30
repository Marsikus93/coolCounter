import React, {useState} from 'react';
import s from './App.module.css';
import {Buttons} from "./components/Button";

export const MAX_COUNTER_VALUE = 5
export const INITIAL_VALUE = 0
export const INCREMENT = 1


function App() {
    const [counter, setCounter] = useState<number>(INITIAL_VALUE)
    const incHandler = () => {
        if (counter < MAX_COUNTER_VALUE) {
            setCounter(counter + INCREMENT)
        }
    }
    const resetHandler = () => {
        if (counter !== INITIAL_VALUE) {
            setCounter(INITIAL_VALUE)
        }
    }
    const spanStyle = counter < MAX_COUNTER_VALUE ? s.default : s.max

    return (
        <div>
            <div className={s.app}>
                <div className={s.table}><span className={spanStyle}>{counter}</span></div>
                <div className={s.console}>
                    <Buttons counter={counter} nameInc={"inc"} nameReset={"reset"} incHandler={incHandler}
                             resetHandler={resetHandler}/>
                </div>
            </div>

        </div>
    );
}

export default App;
