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
                    <li>A user may only adopt a cat or a dog that has been in the shelter the longest and at his turn.</li>
                    <li>To see a full list of pets for adoption, the user may navigate to the adoption list page.</li>
                    <li>To begin the adoption process, the user may navigate to the adoption page, where the pets in front of the adoption queue are shown.</li>
                    <li>For a chance to adopt, the user must enqueue his name onto the list.</li>
                    <li>When it is his turn, an adopt button will appear on the screen next to each pet.</li>
                </ol>

                <h3 className='left'>How the Demo Works:</h3>
                <ol>
                    <li>To see a demo of this site, please click the 'Start Demo' demo on the adoption page.</li>
                    <li>There is a 15-second grace period to enqueue your name. Please do so!</li>
                    <li>As soon as the grace period ends, both pets on queue will be 'adopted' by the person on top of the Foster Parent List.</li>
                    <li>When it is your turn, you may choose to adopt any of the pets. See the list populate with names until it reaches a length of 5.</li>
                </ol>
                <Link to={'/adoptionpage'}><button>Start Button</button></Link>
            </article>
        );
    };
};

export default LandingPage;