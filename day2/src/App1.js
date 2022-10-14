import React, { PureComponent } from 'react'
import AddButton from './Components/AddButton'
import Counter from './Components/Counter';
// import "antd/dist/antd.css";
import './App.css';

class App1 extends PureComponent {

    constructor(){
        super();
        this.state = {
            counter: 0
        }
    }

    incrementCounter = () => {
        let newCounter = this.state.counter + 1;
        this.setState({counter : newCounter});
    }
    render() {
    return <div>
        <AddButton incrementCounter1 = {this.incrementCounter} />
        <Counter counter = {this.state.counter} />
      </div>
  }
}

export default App1;