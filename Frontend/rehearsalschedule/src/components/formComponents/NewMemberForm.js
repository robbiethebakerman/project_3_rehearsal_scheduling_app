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

  // function handleClick(event){
  //   event.preventDefault();
  //   console.log(event);
  //   const member = {
  //     "name": event.target.name.value,
  //     "email": event.target.email.value,
  //     "team": event.target.team.value,
  //   }
  //   props.handleMemberClick(member);
  // }

  return(
    <div>
    <p>Create a Member</p>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Name" name="name" />
    <input type="text" placeholder="eMail" name="email" />
    <select name="team">
    <option value="" disabled selected>Select a Team</option>
    {options}
    </select>

    <button type="submit" onSubmit={handleSubmit}>Save</button>
    </form>
    </div>
  )

}

export default NewMemberForm;
