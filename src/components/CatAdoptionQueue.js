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
            <article className='group-pet-info'>
                <h2>Cat Adoption Queue</h2>
                <h3>{this.props.name}</h3>
                <img src={this.props.imageURL} alt={this.props.name} />
                <p>Age: {this.props.age}</p>
                <p>Breed: {this.props.breed}</p>
                <p>Description: {this.props.description}</p>
                <p>Gender: {this.props.gender}</p>
                <p>Story: {this.props.story}</p>
                {this.displayAdoptButton()}
            </article>
        );
    }
};

export default CatAdoptionQueue;