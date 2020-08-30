import React, { Component } from 'react';
import config from '../config';
import CatAdoptionQueue from '../components/CatAdoptionQueue';
import DogAdoptionQueue from '../components/DogAdoptionQueue';
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
        e.target.newFosterParent.value = '';
        window.localStorage.setItem('foster_parent', newFosterParent);

        fetch(`${config.API_ENDPOINT}people`, {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify({newFosterParent})
        })
            .then(response => {
                if(!response.ok) {
                    return response.json().then(e => Promise.reject(e))
                };
                return response.json();
            })
            .then(() => {
                const newFosterParents = [...this.state.fosterParents, newFosterParent];
                this.setState({fosterParents: newFosterParents});
            })
            .catch(error => this.setState({...error}));
    };

    handleAdopt = (e, type) => {
        e.preventDefault();

        fetch(`${config.API_ENDPOINT}pets`, {
            'method': 'DELETE',
            'headers': {
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify({type})
        })
            .then(response => {
                if(!response.ok) {
                    return response.json().then(e => Promise.reject(e))
                };
                return response.json();
            })
            .then(response => {
                window.localStorage.removeItem('foster_parent');

                let newCats = this.state.cats;
                let newDogs = this.state.dogs;
                let newFosterParents = this.state.fosterParents;
                
                if(type === 'cats') {
                    newCats.shift();
                };

                if(type === 'dogs') {
                    newDogs.shift();
                };
                
                newFosterParents.shift();

                this.setState({
                    adopted: response.adopted,
                    cats: newCats,
                    dogs: newDogs,
                    fosterParents: newFosterParents,
                });
            })
            .catch(error => {
                this.setState({...error}
            )});
    };

    // Demo Code

    handlePageDemo = () => {
        this.setState({adopted: null, demo: 'Demo starts in a few'}, () => {
                setTimeout(() => {
                const intervalID = setInterval(() => this.handleAdoptDemo(intervalID), 1000)
                }, 1000)}
        );
    };

    handleAdoptDemo = (intervalID) => {
        fetch(`${config.API_ENDPOINT}pets`, {
            'method': 'DELETE',
            'headers': {
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify({type: 'all'})
        })
            .then(response => {
                if(!response.ok) {
                    return response.json().then(e => Promise.reject(e))
                };
                return response.json();
            })
            .then(response => {
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

                return response;

            })
            .then(() => {
                const { fosterParents = [] } = this.state;

                if(fosterParents[0] === window.localStorage.getItem('foster_parent') || !fosterParents.length) {
                    clearInterval(intervalID);

                    const fosterParentsDemoNames = ['Wes', 'Minh', 'Joshy', 'Muhajir', 'Chatchi'];
                    let index = 0;
                    const secondIntervalID = setInterval(() => {
                        this.handleFosterParentEnqueueDemo(secondIntervalID, fosterParentsDemoNames[index]);
                        index++;
                    }, 5000);
                }
            })
            .catch(error => {
                clearInterval(intervalID);
                this.setState({...error});
            })
    };

    handleFosterParentEnqueueDemo = (secondIntervalID, name) => {
        const newFosterParent = name;

        if(this.state.fosterParents.length >= 5) {
            clearInterval(secondIntervalID);
            return;
        };

        fetch(`${config.API_ENDPOINT}people`, {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify({newFosterParent})
        })
            .then(response => response.json())
            .then(() => {
                const newFosterParents = [...this.state.fosterParents, newFosterParent];
                this.setState({
                    demo: 'Populating foster parents list...',
                    fosterParents: newFosterParents
                });
            })
            .then(() => {
                if(this.state.fosterParents.length >= 5) {
                    clearInterval(secondIntervalID);
                    this.setState({
                        demo: null,
                    });
                    return;
                };
            })
            .catch(error => this.setState({...error}));
    };

    componentDidMount() { 
        let cats;
        let dogs;

        // Change to Promise.all
        fetch(`${config.API_ENDPOINT}pets`)
            .then(response => {
                if(!response.ok) {
                    return response.json().then(e => Promise.reject(e));
                }
                return response.json();
            })
            .then(response => {
                cats = response.cats;
                dogs = response.dogs;
            })
            .then(
                fetch(`${config.API_ENDPOINT}people`)
                    .then(response => {
                        if(!response.ok) {
                            return response.json().then(e => Promise.reject(e));
                        }
                        return response.json();
                    })
                    .then(response => {
                        this.setState({
                            cats,
                            dogs,
                            fosterParents: response,
                        })
                    })
                    .catch(error => {
                        this.setState({...error});
                    })
            )
            .catch(error => this.setState({...error}));
    };

    render() {
        const { adopted = null, demo = null, cats = [], dogs = [], fosterParents = [] } = this.state;
        return (
            <>
                <div className='group-column'>
                    <h2>Adoption Page</h2>
                    {(demo ? <p className='align-self-center'>{demo}</p>: <button onClick={() => this.handlePageDemo()}>Start Demo</button>)}
                    {(adopted ? <p className='align-self-center'>Congratulations! You have just adopted {adopted.name}, the {adopted.description}</p>: '')}
                </div>

                <div className='group'>
                    <section className='group-column'>
                        <CatAdoptionQueue {...cats[0]} fosterParents={fosterParents} handleAdopt={this.handleAdopt} />
                        <DogAdoptionQueue {...dogs[0]} fosterParents={fosterParents} handleAdopt={this.handleAdopt} />
                    </section>

                    <section className='group-column'>
                        {/* <FosterParentEnqueue handleFosterParentEnqueue={this.handleFosterParentEnqueue} /> */}
                        <FosterParentsList fosterParents={fosterParents} handleFosterParentEnqueue={this.handleFosterParentEnqueue}/>
                    </section>
                </div> 
            </>
        );
    };
};

export default AdoptionPage;