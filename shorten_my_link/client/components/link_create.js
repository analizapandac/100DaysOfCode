import React, { Component } from 'react';

class LinkCreate extends Component {

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label>Link to Shorten</label>
                    <input ref="link" className="form-control" />
                </div>
                <button className="btn btn-primary">Shorten!</button>
            </form>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.refs.link.value);
    }
}

export default LinkCreate;
