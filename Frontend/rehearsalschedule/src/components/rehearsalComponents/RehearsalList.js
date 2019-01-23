import React from 'react';
import Rehearsal from './Rehearsal.js';



const RehearsalList = (props) => {

  const rehearsals = props.rehearsals.map((rehearsal) => {
		 	return (<li key={rehearsal.id} className="component-item">
				<Rehearsal rehearsal={rehearsal} handleEditClick={props.handleEditClick} />
			</li>
		)
		})


  return (
    <div>
      <ul className="component-list">
        {rehearsals}
        </ul>
    </div>
  )


}


export default RehearsalList;
