import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import CalcProvider, {CalcContext} from "./context/CalcContext";
import {useContext, useEffect} from "react";


const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
    ["Save"]
];
const API_BASE = "http://localhost:9090"


function App() {

    const {calc, setCalc} = useContext(CalcContext)
    useEffect(() => {

        fetch(`${API_BASE}/saved`)
            .then(response => response.json())
            .then(data => {
                console.log("...", data)
                setCalc({...calc,  num : data.value})
            });
    }, [])
    return (
        <Wrapper>
            <Screen/>
            <ButtonBox>
                {btnValues.flat().map((btn, i)=>(
                    <Button
                     value = {btn}
                     key = {i}
                    />
                ) )}
            </ButtonBox>
        </Wrapper>
  );
}

export default App;
