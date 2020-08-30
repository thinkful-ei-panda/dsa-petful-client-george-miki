import React, { Component } from 'react';

class FosterParentsList extends Component {
    render () {
        const { fosterParents = [] } = this.props;
        const fosterParentsList = (fosterParents.length ? fosterParents.map((item, i) => <li key={i}>{item}</li>) : '');
        return (
            <>
                <h2>Foster Parents List</h2>
                <ul>
                    {fosterParentsList}
                </ul>
            </>
        );
    };
};

export default FosterParentsList;