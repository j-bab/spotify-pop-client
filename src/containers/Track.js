import React from "react";
import Card from "react-bootstrap/esm/Card";

const Track = (props) => {
    const {artists, name, album, popularity, explicit, preview_url} = props.item;
    let artistNames = artists.map(function (artist, index) {
        return <strong key={index}>{artist.name}</strong>;
    });
    let audio = new Audio(preview_url);

    return <Card>
        {album.images && album.images.length > 0
        &&
        <Card.Img variant="top" src={album.images[0].url}
                  onMouseEnter={() => preview_url && audio.play()} onMouseLeave={() => preview_url && audio.pause()}
        />}
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>by <strong>{artistNames}</strong>
                <br/>
                {album && album.name && `From the album ${album.name}`}
                {preview_url && <p>Hover on image to preview</p>}
                {explicit && <p>EXPLICIT CONTENT</p>}
            </Card.Text>
        </Card.Body>
        {popularity && popularity > 70 && <Card.Header as="h5">Popularity: {popularity}</Card.Header>}
    </Card>;
};
export default Track;
