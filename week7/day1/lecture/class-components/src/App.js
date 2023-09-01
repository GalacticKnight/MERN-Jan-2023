import React, {Component} from 'react'

import './App.css';
import PlayerForm from './components/PlayerForm';

class App extends Component {

  state = {
    players: [{name:'Kevin Durant', position:'Small Forward'}, {name:'Kyrie Irving', position:'Guard'}]
  }

  addNewPlayer = (newPlayer) => {
    this.setState({players: [...this.state.players, newPlayer]})
  }

  render(){
    return (
      <div className="App">
        <h2>Hello World</h2>
        <PlayerForm addNewPlayer={this.addNewPlayer}/>
        {
          this.state.players.map((player, idx) => (
            <div key={idx}>
              <p>Name: {player.name}</p>
              <p>Position: {player.position}</p>
              
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
