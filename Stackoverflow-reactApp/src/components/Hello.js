import React from 'react'

function Hello(props)  {  //hook
    
    return (
        <div>
            <button className="btn btn-primary">Count {props.name} {props.age}</button>
            
        </div>
        
    )
}

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          date: new Date(),
          name:"vrund"
        };
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <h3>{this.state.name}</h3>
        </div>
      );
    }
  }
  
export default Hello
