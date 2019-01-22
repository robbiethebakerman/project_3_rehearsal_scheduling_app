import React from 'react';

const EditMemberForm = (props) =>{

    if(!props.member){
        return null;
    }

    // const options = props.teams.map((team, index) =>{
    //     return <option key={team.id} value={team._links.self.href}>{team.name}</option>
    // })

    function handleSubmit(event) {
        event.preventDefault();

        let submittedName = null;
        if (!event.target.name.value) {
            submittedName = props.member.name;
        } else {
            submittedName = event.target.name.value;
        }

        let submittedEmail = null;
        if (!event.target.email.value) {
            submittedEmail = props.member.email;
        } else {
            submittedEmail = event.target.email.value;
        }

        const member = {
            "name": submittedName,
            "email": submittedEmail,
            "team": ""
        };
        props.handleMemberPut(member);
    }

    return(
        <div>
            <h1>Edit Member</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Edit member's name:</label>
                <input type="text" name="name" id="name" placeholder={props.member.name}/>
                <label htmlFor="email">Edit member's email:</label>
                <input type="text" name="email" id="email" placeholder={props.member.email}/>
                <p>Team: {props.member._embedded.team.name}</p>
                {/*<select name="team">*/}
                    {/*<option value="" disabled selected>Select a Team</option>*/}
                    {/*{options}*/}
                {/*</select>*/}
                <button type="submit" onSubmit={handleSubmit}>Save</button>
            </form>
        </div>
    )

};

export default EditMemberForm;
