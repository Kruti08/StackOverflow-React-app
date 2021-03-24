import { Component, React } from "react";
import {ReactDOM} from "react-dom";


class Greet extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            name: 'vrund'
        };
    }
    changename(){
        this.setState({
            name:'bansi'
        })
    }
    
    render(){
        return (
            <div>
                {this.state.name}
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <button onClick={ () => this.changename()} >Subscribe</button>
            </div>
            

        )

  }


}    

export default Greet;