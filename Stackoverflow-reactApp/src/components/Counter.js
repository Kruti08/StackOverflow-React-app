import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
     incrementCounter(){
        
        this.setState((prevState,props)=> ({
          count:prevState.count+1
        }),
        () => {
            console.log(this.state.count);
        }
        )
       
    }
    render() {
        return (
            <div>
                count - {this.state.count}
                <button onClick={ () => this.incrementCounter()}>Counter++</button>
            </div>
        )
    }
}

export default Counter
