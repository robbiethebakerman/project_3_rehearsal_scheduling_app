import React, {Component} from 'react';

class ProjectDeleteWarningMessage extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.handleDeleteConfirm(this.props.project.id);
    };

    render() {
        return (
            <div>
                <p>I'm a warning message</p>
                <button onClick={this.handleDelete}>Yes, Delete</button>
            </div>
        )
    }

}

export default ProjectDeleteWarningMessage;
