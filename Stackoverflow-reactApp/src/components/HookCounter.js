import React,{useState} from 'react'

function HookCounter() {
    const [count, setCount] = useState(0);
    const five = e => {
        for(let i=0;i<5;i++) {
           setCount(prev => {return (prev+1)})
        }
    }
    return (
        <div>
            <button className="btn btn-primary"onClick={ five }>Count {count}</button>
        </div>
    )
}

export default HookCounter
