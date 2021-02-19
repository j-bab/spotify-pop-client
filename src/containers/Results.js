import {Component} from 'react';
import React from "react";
import PropTypes from 'prop-types';
import Tabs from "react-bootstrap/esm/Tabs";
import Tab from "react-bootstrap/esm/Tab";
import ResultItems from "./ResultItems";


export default class Results extends Component {
    static propTypes = {
        results: PropTypes.object.isRequired,
    };

    render() {
        const {tracks, artists, playlists, albums} = this.props.results;
        let activeTab = Object.keys(this.props.results)[0],
            albumItems = (albums && albums.items.length > 0) ? albums.items : [],
            artistItems = (artists && artists.items.length > 0) ? artists.items : [],
            trackItems = (tracks && tracks.items.length > 0) ? tracks.items : [],
            playlistItems = (playlists && playlists.items.length > 0) ? playlists.items : [];
        return <React.Fragment>
            <Tabs defaultActiveKey={activeTab}>
                <Tab eventKey="albums" title="Albums" disabled={albumItems.length === 0}>
                    <ResultItems eventKey="albums" title="Albums" items={albumItems}/>
                </Tab>
                <Tab eventKey="artists" title="Artists" disabled={artistItems.length === 0}>
                    <ResultItems items={artistItems}/>
                </Tab>
                <Tab eventKey="tracks" title="Songs" disabled={trackItems.length === 0}>
                    <ResultItems items={trackItems}/>
                </Tab>
                <Tab eventKey="playlists" title="Playlists" disabled={playlistItems.length === 0}>
                    <ResultItems items={playlistItems}/>
                </Tab>
            </Tabs>
        </React.Fragment>
    }
}
