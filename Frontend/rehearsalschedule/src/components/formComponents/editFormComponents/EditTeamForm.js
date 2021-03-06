import React from 'react';

const EditTeamForm = (props) =>{

    if(!props.team){
        return null;
    }

    // const options = props.projects.map((project, index) =>{
    //     return  <option
    //                 key={project.id}
    //                 value={project._links.self.href}>
    //                     {project.name}
    //             </option>
    // });

    function handleSubmit(event){
        event.preventDefault();
        const team = {
            "name": event.target.name.value,
            "project": "",
            "members": []
        };
        props.handleTeamPut(team);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Edit team</h1>
                <label htmlFor="name">Edit team's name:</label>
                    <input type="text" id="name" name="name" defaultValue={props.team.name}/>
                <p>Project: {props.team._embedded.project.name}</p>
                {/*<select name="project">*/}
                    {/*<option*/}
                        {/*value={props.team._embedded.project._links.self.href}*/}
                        {/*selected>*/}
                            {/*{props.team._embedded.project.name}*/}
                    {/*</option>*/}
                    {/*{options}*/}
                {/*</select>*/}
                <button type="submit">Save</button>
            </form>
        </div>
    )
};

export default EditTeamForm;
