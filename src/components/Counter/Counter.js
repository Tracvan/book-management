import {useState} from "react";

function Counter() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("Luan");

    const handlerClick = () => {
        // cap nhat lai gia tri state -> rerender
        setCount(count + 1);
    }

    const handlerShowName = (name) => {
        console.log(name);
    }

    const handlerHover = () => {
        console.log("Hover");
    }

    const handlerOut = () => {
        console.log()
        console.log("Out");
    }

    return (
        <>
            <h2>Name: {name}</h2>
            <h2>Counter: {count}</h2>
            <button onClick={handlerClick}>Click</button>
        </>
    )
}

export default Counter;