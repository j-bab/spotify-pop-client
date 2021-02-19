import React from "react";
import CardColumns from "react-bootstrap/esm/CardColumns";
import {Artist} from "./Artist";
import {Playlist} from "./Playlist";
import {Track} from "./Track";
import {Album} from "./Album";


export const ResultItems = (props) => <CardColumns>
    {props.items.map(function (item, index) {
        switch (item.type) {
            case 'album':
                return <Album key={index} item={item}/>;
            case 'artist':
                return <Artist key={index} item={item}/>;
            case 'track':
                return <Track key={index} item={item}/>;
            case 'playlist':
                return <Playlist key={index} item={item}/>;
        }
    })}
</CardColumns>;
