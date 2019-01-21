import React from 'react'
const MemberListComponent = (props) => {


    if(!props.members){
        return null
    }


    return (
        <div>
            <h3>
                Members Required At Rehearsal:
            <br/>
            </h3>
            <h5>
            {props.members.join(", ")}
            </h5>
        </div>
    )
};

export default MemberListComponent