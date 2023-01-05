import React from 'react';
import './style.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      click: 0
    }
  }

  Increment = ()=>{
    this.setState({click: this.state.click + 1})
  }
  Decrement = () =>{
    this.setState({click: this.state.click - 1})
  }

  render() {
    return (
      <div>
        <button className='button' onClick={this.Increment}>Increment Count</button>
        <button className='button' onClick={this.Decrement}>Decrement Count</button>
         <h2 className='p'>{ this.state.click }</h2>
      </div>
    );
  }
}

export default App;
