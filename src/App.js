import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import CalcProvider from "./context/CalcContext";
import {useEffect} from "react";


const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="]
];
const API_BASE = "http://localhost:9090"


function App() {
    useEffect(() => {
        fetch(`${API_BASE}/url`)
            .then(response => response.json())
            .then(data => console.log(data));
    })
    return (
    <CalcProvider>
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
    </CalcProvider>
  );
}

export default App;
