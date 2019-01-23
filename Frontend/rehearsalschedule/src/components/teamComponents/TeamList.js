import React from 'react';
import Team from './Team.js';

const TeamList = (props) => {

  const teams = props.teams.map((team) => {
      return (
          <li key={team.id} className="component-item">
				<Team
                    team={team}
                    handleEditClick={props.handleEditClick}
                    handleDeleteClick={props.handleDeleteClick}
                />
          </li>
		)
  });


  return (
    <div>
      <ul className="component-list">
        {teams}
      </ul>
    </div>
  )


}


export default TeamList;
