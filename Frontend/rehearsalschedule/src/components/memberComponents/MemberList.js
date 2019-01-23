import React from 'react';
import Member from './Member.js';



const MemberList = (props) => {

  const members = props.members.map((member) => {
		 	return (<li key={member.id} className="component-item">
				<Member member={member} />
			</li>
		)
		})


  return (
    <div>
      <ul className="component-list">
        {members}
        </ul>
    </div>
  )


}


export default MemberList;