import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    render () {
        return (
            <article className='group-pet-info'>
                <h2>Welcome</h2>
                <img src={require('../images/human-and-pet.jpg')} alt='Human and His Pet' />
                <p>Petsy is a unique, first-come-first-served, first-in-first-out pet adoption site, which utilizes a queue data structure.</p>

                <h3 className='left'>How It Works:</h3>
                <ol>
                    <li>A user may only adopt a cat or a dog that have been in the shelter the longest and at his turn.</li>
                    <li>To see a full list of pets for adoption, the user may navigate to the adoption list page.</li>
                    <li>To begin the adoption process, the user may navigate to the adoption page, where the current cat and dog for adoption are shown.</li>
                    <li>For a chance to adopt, the user must enqueue his name onto the list.</li>
                    <li>When it is his turn, an adopt button will appear on the screen next to each pet.</li>
                </ol>
                <Link to={'/adoptionpage'}><button>Start Button</button></Link>
            </article>
        );
    };
};

export default LandingPage;