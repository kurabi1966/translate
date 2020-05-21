import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {
  static contextType = LanguageContext;

  render = () => {
    let labelText = '';
    switch (this.context) {
      case 'english':
        labelText = 'Submit';
        break;
      case 'italian':
        labelText = 'Nome';
        break;
      default:
        labelText = 'Submit';
        break;
    }
    return (
      <div className="ui field">
        <label>{labelText}</label>
        <input />
      </div>
    );
  };
}

export default Field;
