import React, {Component} from 'react';
import Peoples from './components/peoples';
import Starships from './components/starships';
import Navbar from './common/navbar';
import Loader from './common/loader';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: null,
            peoples: [],
            starships: [],
            formattedPeoples: [],
            formattedStarships: [],
            peoplesLeftCounter: 0,
            peoplesRightCounter: 0,
            starshipsLeftCounter: 0,
            starshipsRightCounter: 0,
        };
    };

    activateTab = (tabNumber) => {
        this.setState({ activeTab: tabNumber });
    };

    findBiggerElement = (targetArray, dataType) => {
        if (dataType === 'formattedPeoples') {
            if (Number(targetArray[0].mass) >= Number(targetArray[1].mass)) {
                targetArray[0].winner = true;
                targetArray[1].winner = false;

                this.setState({ peoplesLeftCounter: this.state.peoplesLeftCounter + 1 });
            } else {
                targetArray[0].winner = false;
                targetArray[1].winner = true;

                this.setState({ peoplesRightCounter: this.state.peoplesRightCounter + 1 });
            }
        } else {
            if (Number(targetArray[0].mass) >= Number(targetArray[1].mass)) {
                targetArray[0].winner = true;
                targetArray[1].winner = false;

                this.setState({ starshipsLeftCounter: this.state.starshipsLeftCounter + 1 });
            } else {
                targetArray[0].winner = false;
                targetArray[1].winner = true;

                this.setState({ starshipsRightCounter: this.state.starshipsRightCounter + 1 });
            }
        }
    };

    formarArray = (targetArray, stateTarget) => {
        const result = [];

        for (var i = 0; i < 2; i++) {
            result.push(targetArray[Math.floor(Math.random() * targetArray.length)]);
        }

        this.findBiggerElement(result, stateTarget);

        this.setState({ [stateTarget]: result });
    };

    render() {
        return (
            <>
                <Navbar
                    title="Star Pension"
                    links={[
                        {title: 'People'},
                        {title: 'Starships'}
                    ]}
                    blockMenu={this.state.peoples.length + this.state.starships.length}
                    clickHandler={this.activateTab}
                    activeTab={this.state.activeTab}
                />
                <div className="container">
                    {this.state.peoples.length + this.state.starships.length < 1 && <Loader />}
                    {this.state.activeTab === 0 &&
                        <Peoples
                            peoples={this.state.formattedPeoples}
                            leftCount={this.state.peoplesLeftCounter}
                            rightCount={this.state.peoplesRightCounter}
                            replayAction={() => this.formarArray(this.state.peoples, 'formattedPeoples')}
                        />
                    }
                    {this.state.activeTab === 1 &&
                        <Starships
                            starships={this.state.formattedStarships}
                            leftCount={this.state.starshipsLeftCounter}
                            rightCount={this.state.starshipsRightCounter}
                            replayAction={() => this.formarArray(this.state.peoples, 'formattedStarships')}
                        />
                    }
                </div>
            </>
        )
    }

    componentDidMount() {
        fetch(`https://swapi.co/api/people`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ peoples: data.results });
                this.formarArray(this.state.peoples, 'formattedPeoples');
            })
            .catch(console.log);

        fetch(`https://swapi.co/api/starships`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ starships: data.results });
                this.formarArray(this.state.starships, 'formattedStarships');
            })
            .catch(console.log);
    };
}

export default App;
