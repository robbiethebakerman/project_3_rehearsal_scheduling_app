import React from 'react';

const EditRehearsalForm = (props) =>{

    if(!props.rehearsal){
        return null;
    }

    // const options = props.projects.map((project, index) =>{
    //     return <option key={project.id} value={project._links.self.href}>{project.name}</option>
    // })

    function handleSubmit(event){
        event.preventDefault();

        const rehearsal = {
            "startTime": event.target.startTime.value,
            "endTime": event.target.endTime.value,
            "project": "",
            "name": event.target.name.value
        };
        props.handleRehearsalPut(rehearsal);
    }

    return(
        <div>
            <h1>Edit rehearsal</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Edit Rehearsal Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={props.rehearsal.name}/>
                <label htmlFor="startTime">Edit start time:</label>
                    <input
                        type="datetime-local"
                        id="startTime"
                        name="startTime"
                        defaultValue={props.rehearsal.startTime.slice(0, 19)}/>
                <label htmlFor="endTime">Edit end time:</label>
                    <input
                        type="datetime-local"
                        id="endTime"
                        name="endTime"
                        defaultValue={props.rehearsal.endTime.slice(0, 19)}/>
                <p>Project: {props.rehearsal._embedded.project.name}</p>
                {/*<select name="project">*/}
                    {/*<option value="" disabled selected>Select a Project</option>*/}
                    {/*{options}*/}
                {/*</select>*/}
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default EditRehearsalForm;
