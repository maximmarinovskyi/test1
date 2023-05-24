import React from 'react';
import './Footer.css';



class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <ul>
          {Object.values(this.props.contacts).map(item => <li>{item}</li>)}
        </ul>
      </div>
    );
  }
}
export default Footer;
