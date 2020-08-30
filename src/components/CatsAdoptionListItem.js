import React from 'react';

function CatsAdoptionListItem(props) {
    return (
        <article className='group-pet-info'>
            <h2>{props.name}</h2>
            <img src={props.imageURL} alt={props.name} />
            <p>Age: {props.age}</p>
            <p>Breed: {props.breed}</p>
            <p>Description: {props.description}</p>
            <p>Gender: {props.gender}</p>
            <p>Story: {props.story}</p>
        </article>
    );
};

export default CatsAdoptionListItem;