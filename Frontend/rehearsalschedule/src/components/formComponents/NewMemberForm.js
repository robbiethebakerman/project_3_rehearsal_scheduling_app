import React from 'react';

const NewMemberForm = (props) =>{

  const options = props.teams.map((team, index) =>{
    return <option key={team.id}>{team.name}</option>
  })

  function handleSubmit(event){
    event.preventDefault();
    const member = {
      "name": event.target.name.value,
      "email": event.target.email.value,
      "team": event.target.team.value,
    }
    props.handleMemberPost(member);
  }

  return(
    <div>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Name" name="name" />
    <input type="text" placeholder="eMail" name="email" />
    <select name="team">
    {options}
    </select>
    <button type="submit">Save</button>
    </form>
    </div>
  )

}

export default NewMemberForm;
