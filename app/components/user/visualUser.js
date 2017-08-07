import React from 'react';
import {Link} from 'react-router-dom';

const VisualUser = (props) => {
  return(
    props.user ? ( <div>
      <h1>{props.user.username}</h1>
      <p><strong>emal: {props.user.email}</strong></p>
      <Link to={`/profile/${props.user._id}/edit`}><button>Edit</button></Link>
      <button onClick={props.removeUser}>Delete</button>
    </div> ): (<div>Loading..</div>)
  );
};

export default VisualUser;
