import {useEffect, useState} from "react";

function Timer() {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState({
        username: "user",
        password: "123"
    });

    // useEffect = componentDidMount
    useEffect(() => {
        // componentDidMount
        console.log("Viet Nam")
        console.log("Xin chao")
        return () => {
            // componentWillUnmount
            console.log("Goodbye")
        }
    }, [])

    // useEffect = componentDidMount
    useEffect(() => {
        console.log("Hi")
    }, [count]);

    // useEffect = componentDidMount
    useEffect(() => {
        console.log("Hi")
    }, [user]);

    const changTime = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={changTime}>+</button>
        </div>
    )
}

export default Timer;