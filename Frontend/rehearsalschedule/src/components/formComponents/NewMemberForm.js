import React from 'react';

const NewMemberForm = (props) =>{

  const options = props.teams.map((team, index) =>{
    return <option key={team.id} value={team._links.self.href}>{team.name}</option>
  })

  function handleSubmit(event){
    event.preventDefault();
    console.log(event);
    const member = {
      "name": event.target.name.value,
      "email": event.target.email.value,
      "team": event.target.team.value,
    }
    props.handleMemberPost(member);
  }

  function handleClick(event){
    event.preventDefault();
    console.log(event);
    console.log(props);
    props.handleMemberClick();
  }

  return(
    <div>
    <h1>Create a Member</h1>
    <form onSubmit={handleSubmit}>
    <label for="name">Enter member's name:</label>
    <input type="text" name="name" id="name"/>
    <p></p>
    <label for="email">Enter member's email:</label>
    <input type="text" name="email" id="email" />
    <p></p>
    <select name="team">
    <option value="" disabled selected>Select a Team</option>
    {options}
    </select>
    <p></p>
    <button type="submit" onSubmit={handleSubmit}>Save</button>
    <p></p>
    <label for="next">Click next to create Rehearsal</label>
    <button id="next" onClick={handleClick}>Next</button>
    </form>
    </div>
  )

}

export default NewMemberForm;
