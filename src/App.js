import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/esm/Container";
import React from "react";
import Spotify from "./containers/Spotify";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function App() {
    return <div className="App">
        <Container fluid>
            <Row>
                <Col sm={3}/>
                <Col>
                    <h2 className="text-center">Search Spotify</h2>
                    <h4 className="text-center"> quick POC with a serverless backend</h4>
                    <hr/>
                    <Spotify/>
                </Col>
                <Col sm={3}/>
            </Row>
        </Container>
    </div>;
}

export default App;
