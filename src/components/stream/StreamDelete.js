import React from 'react';
import Modal from '../modal';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {
    componentDidMount () {
        console.log(this.props.match.params.id);
    }
    render () {
        const action = (
            <React.Fragment>
                <button className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        )
        return (
            <div>
                <Modal title="Delete Stream" content="Are you sure" action={ action }/>
            </div>
        );
    }
};
export default StreamDelete;