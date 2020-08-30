import React, { Component } from 'react';

class FosterParentEnqueue extends Component {
    render () {
        return (
            <>
                <h2>Foster Parent Enqueue</h2>
                <form onSubmit={(e) => this.props.handleFosterParentEnqueue(e)}>
                    <input id='newFosterParent' placeholder='Enqueue your name!' type='text'></input>
                    <button>Enqueue!</button>
                </form>
                
            </>
        );
    }
};

export default FosterParentEnqueue;