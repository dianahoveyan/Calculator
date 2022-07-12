import React, {useContext} from "react";
import {CalcContext} from "../context/CalcContext.js";
import { Textfit } from "react-textfit"

const Screen = () => {
    const calculator = useContext(CalcContext);
    return(
        <Textfit className="screen" max={70} mode='single'> {calculator.calc.num ? calculator.calc.num : calculator.calc.res}</Textfit>
    )

}
export default Screen
