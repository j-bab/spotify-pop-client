import {Component} from 'react';
import React from "react";
import PropTypes from 'prop-types';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "@rjsf/core";
import LayoutField from "react-jsonschema-form-layout-2"
import UISchema from "../data/ui_schema/Search"
import JsonSchema from "../data/json_schema/Search"

export default class Search extends Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        formData: PropTypes.object.isRequired,
        isLoading: PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {
            formData: {}
        };
    }

    render() {
        let {onSubmit, formData, isLoading} = this.props,
            fields = {
                layout: LayoutField
            };
        return <React.Fragment>
            <Row>
                <Col sm={12} className="text-left">
                    <Form schema={JsonSchema}
                          uiSchema={UISchema}
                          formData={formData}
                          fields={fields}
                          disabled={isLoading}
                          onSubmit={onSubmit}
                    />
                </Col>
            </Row>
        </React.Fragment>
    }
}