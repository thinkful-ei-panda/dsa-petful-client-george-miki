import React, { Component } from 'react';

class FosterParentsList extends Component {
    render () {
        const { fosterParents = [] } = this.props;
        const fosterParentsList = (fosterParents.length ? fosterParents.map((item, i) => <li key={i}>{item}</li>) : '');
        
        return (
            <article className='group-foster-parents-list'>
                <h2>Foster Parents List</h2>
                <form onSubmit={(e) => this.props.handleFosterParentEnqueue(e)}>
                    <input id='newFosterParent' placeholder='Enqueue your name!' type='text'></input>
                    <button>Enqueue!</button>
                </form>
                <ol>
                    {fosterParentsList}
                </ol>
            </article>
        );
    };
};

export default FosterParentsList;