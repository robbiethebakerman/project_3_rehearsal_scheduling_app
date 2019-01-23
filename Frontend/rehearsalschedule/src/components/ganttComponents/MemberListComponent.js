import React from 'react'
const MemberListComponent = (props) => {


    if(!props.members) {
        return null
    }

    console.log(props);
    for(let parentArray of props.members){
        for(let item of parentArray){
            console.log(item[0]);
            for(let names of parentArray[1]){
                console.log(names)
            }
        }
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