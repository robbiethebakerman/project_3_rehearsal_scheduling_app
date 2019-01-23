import React, {Component} from 'react';

class ProjectDeleteButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleDeleteClick(this.props.project);
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Delete Project</button>
            </div>
        )
    }

}

export default ProjectDeleteButton;
