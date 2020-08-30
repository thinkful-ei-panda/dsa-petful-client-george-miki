import React from 'react';
import CatsAdoptionListItem from './CatsAdoptionListItem';

function CatsAdoptionList(props) {
    const catsAdoptionList = props.cats.map((cat, i) => <CatsAdoptionListItem key={i} {...cat} />)

    return (
        <section className='group-column'>
            <h2>Cats Adoption List</h2>
            {catsAdoptionList}
        </section>
    );
};

export default CatsAdoptionList;