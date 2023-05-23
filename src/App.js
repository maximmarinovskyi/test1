import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: "Maxim",
      name2: "Olga",
      name3: "Maria",
      name4: "Andrii"
    }
  }

  changeName = () => {
    console.log(`You`)
    this.setState({ name1: "M", name2: "O", name3: "M", name4: "A" })

  }
  render() {
    return (
      <div className="App">
        <ul>
          {Object.values(this.state).map(item => <li>{item}</li>)}
        </ul>
        <button onClick={this.changeName}>Change</button>
      </div>
    );
  }
}
export default App;
