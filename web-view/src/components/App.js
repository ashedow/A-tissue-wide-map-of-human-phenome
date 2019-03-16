import React, { Component } from 'react';
import {csv} from 'd3-fetch';
import Sidebar from './Sidebar';
import HumanDisplay from './HumanDisplay';
import Data from "../data/data.csv";


class App extends Component {
    constructor () {
        super();
        this.state = {
            data: undefined,
            phenotype: [],
            tissue: [],
        }
    }

    componentDidMount() {
        csv(Data).then((data) => {
            this.setState({
                data: data
            })
            this.setState({
                tissue: data.columns
            })
            this.setState({
                phenotype: data.map(function(d){
                    return d.Phenotype
                })
            })
        }).catch(function(err) {
            throw err;
        })
    }

    render () {
        let DocularStyle = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            // flexFlow: "row wrap",
            fontFamily: "Okomito Light"

        }

        const {data, phenotype, tissue} = this.state;

        return (
            <div
                className="docular"
                style={DocularStyle}>
                
                <Sidebar phenotype={phenotype}
                    data={data} />

                <HumanDisplay 
                    data={data}
                    tissue={tissue}/>
            </div>
        );
    };
}

export default App;