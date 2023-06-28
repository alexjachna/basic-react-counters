import { useEffect, useState } from "react"

export function Card(props) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("The " + props.value + " Counter has been clicked. Total: " + (counter + props.default))
    }, [counter])

    function changeCount() {
        setCounter(counter + props.value)
    }

    return (
        <div className="card">
            <span>{counter + props.default}</span>
            <button onClick={changeCount}>Increment</button>
            <h1>+{props.value}</h1>
        </div>
    )
}