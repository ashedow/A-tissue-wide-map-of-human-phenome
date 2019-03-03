import React, { Component } from 'react';
import {csv} from 'd3-fetch';
import ToggleDisplay from 'react-toggle-display';
import Sidebar from './Sidebar';
import HumanDisplay from './HumanDisplay';


class Docular extends React.Component {
    constructor () {
        super();
        // Initial state
        this.state = {
            data: undefined,
            phenotype: [],
            tissue: [],
        }
    }

    componentDidMount() {
        csv('data/data.csv').then((data) => {
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
            height: "100%",
            margin: "0 auto",
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

export default Docular;