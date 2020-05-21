import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
  static contextType = LanguageContext;

  render = () => {
    let buttonText = '';
    switch (this.context) {
      case 'english':
        buttonText = 'Submit';
        break;
      case 'italian':
        buttonText = 'Invia';
        break;
      default:
        buttonText = 'Submit';
        break;
    }
    return <button className="ui button primary">{buttonText}</button>;
  };
}

export default Button;
