import {Component} from 'react';
import React from "react";
import PropTypes from 'prop-types';
import Tabs from "react-bootstrap/esm/Tabs";
import Tab from "react-bootstrap/esm/Tab";
import {Artists} from "./Artists";
import {Playlists} from "./Playlists";
import {Tracks} from "./Tracks";
import {Albums} from "./Albums";


export default class Results extends Component {
    static propTypes = {
        results: PropTypes.object.isRequired,
    };

    render() {
        const {tracks, artists, playlists, albums} = this.props.results;
        let activeTab = Object.keys(this.props.results)[0];
        return <React.Fragment>
            <Tabs defaultActiveKey={activeTab}>
                <Tab eventKey="albums" title="Albums" disabled={!albums || albums.items.length === 0}>
                    {albums && albums.items.length > 0 && <Albums items={albums.items}/>}
                </Tab>
                <Tab eventKey="artists" title="Artists" disabled={!artists || artists.items.length === 0}>
                    {artists && artists.items.length > 0 && <Artists items={artists.items}/>}
                </Tab>
                <Tab eventKey="tracks" title="Songs" disabled={!tracks || tracks.items.length === 0}>
                    {tracks && tracks.items.length > 0 && <Tracks items={tracks.items}/>}
                </Tab>
                <Tab eventKey="playlists" title="Playlists" disabled={!playlists || playlists.items.length === 0}>
                    {playlists && playlists.items.length > 0 && <Playlists items={playlists.items}/>}
                </Tab>
            </Tabs>
        </React.Fragment>
    }
}
