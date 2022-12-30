import React from 'react';
import s from './Button.module.css'

type ButtonProps = {
    nameInc: string
    nameReset: string
    incHandler: () => void
    resetHandler: () => void
    counter: number
}
export const Buttons: React.FC<ButtonProps> = (props) => {
    const {nameInc, nameReset, incHandler, resetHandler, counter} = props
    return (
        <div>
            <button className={s.inc} onClick={incHandler} disabled={counter >= 5}>{nameInc}</button>
            <button className={s.reset} onClick={resetHandler} disabled={counter <= 0}>{nameReset}</button>
        </div>
    )
}
