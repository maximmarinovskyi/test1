import React from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const contacts = {
  phone: "Phone",
  email: "Email",
  adress: "Adress"
}

const famOld = ["Maxim", "Olga", "Maria", "Andrii", "Shusha"]

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main family={famOld} />
        <Footer contacts={contacts} />
      </div>
    );
  }
}
export default App;
