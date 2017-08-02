import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Chat from '../components/chat/chat';
import Nav from '../components/nav/nav';
import User from '../components/user/user';
import UserEdit from '../components/user/userEdit';
import Login from '../components/login/login';

export default class Routes extends React.Component{
  render(){
    return(
      <Router>
        <div>
          <Nav />
          <Route exact path="/chat" component={Chat}/ >
          <Route path="/login" component={Login} />
          <Route exact path="/profile/:id" component={User} />
          <Route path="/profile/:id/edit" component={UserEdit} />
        </div>
      </Router>
    );
  }
}
