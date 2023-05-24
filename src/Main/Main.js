import React from 'react';
import './Main.css';

let fam = {
  phone: "Phone",
  adress: "Adress",
  email: "Email"
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = fam
  }

  change = () => {
    this.setState({
      phone: "phone",
      adress: "adress",
      email: "email"
    })
    console.log(`Chenged`)
  }

  render() {
    return (
      <div className="Main">
        {Object.values(this.state).map(item => <li>{item}</li>)}
        <button type='button' onClick={this.change}>Button</button>
        {console.log(`Rendered`)}
      </div>
    );
  }
}
export default Main;
