import React, {Component} from 'react';
import ProjectDeleteWarningMessage from './ProjectDeleteWarningMessage';

class ProjectDeleteButton extends Component {
    constructor(props) {
        super(props);
        this.state = {warningMessage: null};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState({
          warningMessage: <ProjectDeleteWarningMessage
              handleDelete={this.props.handleDelete}
              project={this.props.project}
          />
      })
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Delete Project</button>
                {this.state.warningMessage}
            </div>
        )
    }

};

export default ProjectDeleteButton;
