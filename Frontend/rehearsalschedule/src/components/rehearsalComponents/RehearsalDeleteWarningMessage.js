import React from 'react';

const RehearsalDeleteWarningMessage = (props) => {

  const handleDelete = function(){
    props.handleDeleteConfirm(props.rehearsal.id);
  };

  const handleReject = function(){
    props.handleDeleteReject();
  };

  return (
    <div className="delete-warning-message">
      <p>Careful!</p>
      <p>Deleting a rehearsal deletes all related tasks!</p>
    <button onClick={handleDelete}>Yes, Delete</button>
    <button onClick={handleReject}>No, don't delete!</button>
    </div>
  )
};

export default RehearsalDeleteWarningMessage;
