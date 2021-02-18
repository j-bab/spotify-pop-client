import React from "react";
import Card from "react-bootstrap/esm/Card";
import CardColumns from "react-bootstrap/esm/CardColumns";

function Album(props) {
    const {artists, images, name, release_date, total_tracks} = props.item;
    let artistNames = artists.map(function (artist, index) {
        return <span key={index}>{artist.name}</span>;
    });
    return <Card>
        <Card.Img variant="top" src={images[0].url}/>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>by {artistNames}
                <br/>
                {total_tracks} Tracks<br/>
                Released <em>{release_date}</em>
            </Card.Text>
        </Card.Body>
    </Card>;
}

export function Albums(props) {
    let {items} = props;
    return <CardColumns>
        {items.map(function (item, index) {
            return <Album key={index} item={item}/>;
        })}
    </CardColumns>
}