import React, { Component } from 'react';
import CatAdoptionQueue from '../components/CatAdoptionQueue';
import DogAdoptionQueue from '../components/DogAdoptionQueue';
import FosterParentEnqueue from '../components/FosterParentEnqueue';
import FosterParentsList from '../components/FosterParentsList';

class AdoptionPage extends Component {
    state = {
        adopted: null,
        demo: null,
        cats: [],
        dogs: [],
        fosterParents: [],
        error: null,
    };

    handleFosterParentEnqueue = (e) => {
        e.preventDefault();

        const newFosterParent = e.target.newFosterParent.value;
        window.localStorage.setItem('foster_parent', newFosterParent);

        fetch(`http://localhost:8000/people`, {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify({newFosterParent})
        })
            .then(response => response.json())
            .then(response => {
                const newFosterParents = [...this.state.fosterParents, newFosterParent];
                this.setState({fosterParents: newFosterParents});
            })
            .catch(error => this.setState({...error}));
    };

    handleFosterParentEnqueueDemo = (secondIntervalID, name) => {
        const newFosterParent = name;

        fetch(`http://localhost:8000/people`, {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify({newFosterParent})
        })
            .then(response => response.json())
            .then(response => {
                const newFosterParents = [...this.state.fosterParents, newFosterParent];
                this.setState({
                    demo: null,
                    fosterParents: newFosterParents
                });
            })
            .then(() => {
                if(this.state.fosterParents.length === 5) {
                    clearInterval(secondIntervalID);
                    console.log('Cleared second interval!')
                };
            })
            .catch(error => this.setState({...error}));
    };

    handleAdopt = (e, type) => {
        e.preventDefault();

        fetch(`http://localhost:8000/pets`, {
            'method': 'DELETE',
            'headers': {
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify({type})
        })
            .then(response => response.json())
            .then(response => {
                window.localStorage.removeItem('foster_parent');

                let newCats = this.state.cats;
                let newDogs = this.state.dogs;
                let newFosterParents = this.state.fosterParents;
                
                newCats.shift();
                newDogs.shift();
                newFosterParents.shift();

                this.setState({
                    adopted: response.adopted,
                    cats: newCats,
                    dogs: newDogs,
                    fosterParents: newFosterParents,
                });
            })
            .catch(error => this.setState({...error}));
    };

    handleAdoptDemo = (intervalID) => {
        fetch(`http://localhost:8000/pets`, {
            'method': 'DELETE',
            'headers': {
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify({type: 'all'})
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                let newCats = this.state.cats;
                let newDogs = this.state.dogs;
                let newFosterParents = this.state.fosterParents;

                newCats.shift();
                newDogs.shift();
                newFosterParents.shift();

                this.setState({
                    demo: `${response.fosterParent} just adopted ${response.adopted.cats.name} & ${response.adopted.dogs.name}!`,
                    cats: newCats,
                    dogs: newDogs,
                    fosterParents: newFosterParents,
                });
            })
            .then(() => {
                if(this.state.fosterParents[0] === window.localStorage.getItem('foster_parent') || !this.state.fosterParents.length) {
                    clearInterval(intervalID);
                    console.log('Starting second interval!');
                    const fosterParentsDemoNames = ['Wes', 'Minh', 'Joshy', 'Muhajir', 'Chatchi'];
                    let index = 0;
                    const secondIntervalID = setInterval(() => {
                        this.handleFosterParentEnqueueDemo(secondIntervalID, fosterParentsDemoNames[index]);
                        index++;
                    }, 5000);
                }
            })
            .catch(error => this.setState({...error}))
    };

    componentDidMount() { 
        let cats;
        let dogs;
        let fosterParents;

        fetch(`http://localhost:8000/pets`)
            .then(response => response.json())
            .then(response => {
                cats = response.cats;
                dogs = response.dogs;
            })
            .then(
                fetch(`http://localhost:8000/people`)
                    .then(response => response.json())
                    .then(response => {
                        fosterParents = response;
                        this.setState({
                            demo: 'Buckle up! Demo starts in 15 secs. Put your name in and let the magic unfold!',
                            cats,
                            dogs,
                            fosterParents,
                        })
                    })
                    .then(() => {
                        console.log('Demo starts in 15 secs')
                        setTimeout(() => {
                            const intervalID = setInterval(() => this.handleAdoptDemo(intervalID), 5000)
                        }, 15000)
                        
                    })
                    .catch(error => this.setState({...error}))
            )
            .catch(error => this.setState({...error}));
    };

    render() {
        const { adopted = null, demo = null, cats = [], dogs = [], fosterParents = [] } = this.state;
        return (
            <>
                <h2>Adoption Page</h2>
                {(adopted ? <p>Congratulations! You have just adopted {adopted.name}, the {adopted.description}</p>: '')}
                {(demo ? <p>{demo}</p>: '')}
                <CatAdoptionQueue {...cats[0]} fosterParents={fosterParents} handleAdopt={this.handleAdopt} />
                <DogAdoptionQueue {...dogs[0]} fosterParents={fosterParents} handleAdopt={this.handleAdopt} />
                <FosterParentEnqueue handleFosterParentEnqueue={this.handleFosterParentEnqueue} />
                <FosterParentsList fosterParents={fosterParents} />
            </>
        );
    };
};

export default AdoptionPage;