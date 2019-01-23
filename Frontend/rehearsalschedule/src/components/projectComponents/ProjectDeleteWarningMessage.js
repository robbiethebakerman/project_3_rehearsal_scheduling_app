import React, {Component} from 'react';

class ProjectDeleteWarningMessage extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleReject = this.handleReject.bind(this);
    }

    handleDelete() {
        this.props.handleDeleteConfirm(this.props.project.id);
    };

    handleReject() {
        this.props.handleDeleteReject();
    }

    render() {
        return (
            <div>
                <p>I'm a warning message</p>
                <button onClick={this.handleDelete}>Yes, Delete</button>
                <button onClick={this.handleReject}>No, don't delete!</button>
            </div>
        )
    }

}

export default ProjectDeleteWarningMessage;
