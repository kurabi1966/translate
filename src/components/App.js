import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

class App extends Component {
  state = { language: 'english' };
  onLanguageChange = (language) => {
    this.setState({ language });
  };
  render = () => {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="ui flag us"
            onClick={() => this.onLanguageChange('english')}
          />
          <i
            className="ui flag it"
            onClick={() => this.onLanguageChange('italian')}
          />
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </div>
      </div>
    );
  };
}
export default App;
