import React, { Component } from 'react';

class FosterParentEnqueue extends Component {
    render () {
        return (
            <>
                <h2>Foster Parent Enqueue</h2>
                <form onSubmit={(e) => this.props.handleFosterParentEnqueue(e)}>
                    <label htmlFor='newFosterParent'>New Foster Parent Name: </label>
                    <input id='newFosterParent' type='text'></input>
                    <button>Enqueue!</button>
                </form>
                
            </>
        );
    }
};

export default FosterParentEnqueue;