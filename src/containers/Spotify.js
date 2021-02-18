import {Component} from 'react';
import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Spinner from "react-bootstrap/esm/Spinner";
import Search from "./Search";
import {invokeApi} from "../lib/api";
import BrowserTitle from "./BrowserTitle";

export default class Spotify extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            formData: {},
            results: [],
            title: "",
        };
        this.submitSearch = this.submitSearch.bind(this);
    }

    async submitSearch(jsonFormData) {
        if (this.state.isLoading) return;
        let formData = jsonFormData.formData;
        this.setState({isLoading: true, formData, title: "Searching Spotify..."});
        console.log(jsonFormData.formData);
        try {
            let results = await invokeApi({method: "POST", path: "/search", body: formData});
            console.log(results);
            this.setState({results});
        } catch (e) {
            alert(e);
        }
        this.setState({isLoading: false});
    }

    //add form data parsing to create a sentence describing search that's testable


    render() {
        const {title, results, formData, isLoading} = this.state;
        return <React.Fragment>
            <BrowserTitle title={title}/>
            <Row>
                <Col sm={12} className="text-left">
                    <Search onSubmit={this.submitSearch} formData={formData} isLoading={isLoading}/>
                </Col>
            </Row>
            {isLoading ? <Spinner animation="border" variant="success"/> : "resuts here"}


            <pre>{JSON.stringify(results, null, 2)}</pre>
            <pre>{JSON.stringify(formData, null, 2)}</pre>


        </React.Fragment>
    }
}