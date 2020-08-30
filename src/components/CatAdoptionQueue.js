import React, { Component } from 'react';

class CatAdoptionQueue extends Component {
    displayAdoptButton = () => {
        if(this.props.fosterParents[0] === window.localStorage.getItem('foster_parent')) {
            return (
                <button onClick={(e) => this.props.handleAdopt(e, 'cats')}>Adopt Me</button>
            );
        };
    };

    render () {
        return (
            <>
                <h2>Cat Adoption Queue</h2>
                <h3>{this.props.name}</h3>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
                <p>{this.props.breed}</p>
                <p>{this.props.description}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.story}</p>
                <img src={this.props.imageURL} alt={this.props.name} />
                {this.displayAdoptButton()}
            </>
        );
    }
};

export default CatAdoptionQueue;