import React from 'react';
import DogsAdoptionListItem from './DogsAdoptionListItem';

function DogsAdoptionList(props) {
    const dogsAdoptionList = props.dogs.map((dog, i) => <DogsAdoptionListItem key={i} {...dog} />)
    return (
        <section className='group-column'>
            <h2>Dogs Adoption List</h2>
            {dogsAdoptionList}
        </section>
    );
};

export default DogsAdoptionList;