import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './config/router';
import SCSS from './assets/style.scss';
class App extends React.Component{
  render(){
    return(
      <div>
        <Routes />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
