import {Component} from 'react';
import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Spinner from "react-bootstrap/esm/Spinner";
import Search from "./Search";
import BrowserTitle from "./BrowserTitle";
import {querySpotify} from "../lib/spotify";
import Alert from "react-bootstrap/esm/Alert";
import Results from "./Results";

export default class Spotify extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            isError: false,
            formData:
                {
                    "type": [
                        "track","artist","album","playlist"
                    ],
                    "released": "any_time",
                    "query": "queen"
                },
            results: [],
            title: "",
        };
        this.submitSearch = this.submitSearch.bind(this);
    }

    async submitSearch(jsonFormData) {
        if (this.state.isLoading) return;
        let formData = jsonFormData.formData;
        this.setState({isLoading: true, isError: false, formData, title: "Searching Spotify..."});
        try {
            let title = `Search results for ${formData.query}`,
                results = await querySpotify(formData);

            this.setState({results, title});
        } catch (e) {
            this.setState({isError: true, title: "An error occurred"});
        }
        this.setState({isLoading: false});
    }

    render() {
        const {title, results, formData, isLoading, isError} = this.state;
        return <React.Fragment>
            <BrowserTitle title={title}/>
            <Row>
                <Col sm={12} className="text-left">
                    <Search onSubmit={this.submitSearch} formData={formData} isLoading={isLoading}/>
                </Col>
            </Row>
            {isLoading && <Spinner animation="border" variant="success"/>}
            {isError && <Alert variant="danger">
                {{title}}
            </Alert>}

            <Row>
                <Col sm={12} className="text-left">
                    {!isError && !isLoading && results && <Results results={results}/>}
                </Col>
            </Row>
        </React.Fragment>
    }
}