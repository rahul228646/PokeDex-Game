import React, { Component } from 'react';
import Pokegame from './Pokegame';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {count: 0, show: (<Pokegame/>)}
    this.restartApp = this.restartApp.bind(this)
  }
  restartApp(event){
    this.setState({count: this.state.count + 1, show: (<Pokegame/>)})
  }
	render() {
		return (
			<div className="App">
        {this.state.count === 0 ? <h1 className="App-title">Pokedex</h1> : null}
        <button onClick={this.restartApp} className="App-button">Play</button>
        {this.state.count === 0 ? null : <Pokegame/>}
			</div>
		);
	}
}

export default App;
