import React from 'react'
const MemberListComponent = (props) => {


    if(!props.members) {
        return null
    }
     // else if (props.members.length === 0){
    //     return <div>
    //         <h1>
    //             No members required at this rehearsal!
    //         </h1>
    //     </div>
    // }


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