import React from 'react';

function CatsAdoptionListItem(props) {
    console.log(props);
    return (
        <>
            <h2>{props.name}</h2>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.breed}</p>
            <p>{props.description}</p>
            <p>{props.gender}</p>
            <p>{props.story}</p>
            <img src={props.imageURL} alt={props.name} />

        </>
    );
};

export default CatsAdoptionListItem;