import React from "react";
import Card from "react-bootstrap/esm/Card";
import CardColumns from "react-bootstrap/esm/CardColumns";

function Artist(props) {
    const {followers, images, name, genres, popularity} = props.item;

    return <Card>
        {images && images.length > 0 && <Card.Img variant="top" src={images[0].url}/>}
        <Card.Body>
            <Card.Title><span>{name}</span></Card.Title>
            <Card.Text>{genres && genres.length > 0 && `Genres: ${genres.join(', ')}`}
                <br/>
                <em>{followers.total} Followers</em>
            </Card.Text>
        </Card.Body>
        {popularity && popularity > 70 && <Card.Header as="h5">Popularity: {popularity}</Card.Header>}
    </Card>;
}


export function Artists(props) {
    let {items} = props;
    return <CardColumns>
        {items.map(function (item, index) {
            return <Artist key={index} item={item}/>;
        })}
    </CardColumns>
}