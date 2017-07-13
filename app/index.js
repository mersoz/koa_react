import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './components/chat/chat';
import SCSS from './assets/style.scss';
class App extends React.Component{
  render(){
    return(<div>
      <Chat />
      </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
