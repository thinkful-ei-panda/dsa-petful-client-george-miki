import React from 'react';
import DogsAdoptionListItem from './DogsAdoptionListItem';

function DogsAdoptionList(props) {
    const dogsAdoptionList = props.dogs.map((dog, i) => <DogsAdoptionListItem key={i} {...dog} />)
    return (
        <>
            <h2>Dogs Adoption List</h2>
            {dogsAdoptionList}
        </>
    );
};

export default DogsAdoptionList;