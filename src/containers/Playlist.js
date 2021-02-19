import React from "react";
import Card from "react-bootstrap/esm/Card";

const Playlist = (props) => {
    const {tracks, images, name, owner} = props.item;

    return <Card>
        {images && images.length > 0 && <Card.Img variant="top" src={images[0].url}/>}
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {owner && owner.display_name && <p>By <strong>{owner.display_name}</strong></p>}
            </Card.Text>
        </Card.Body>
        <Card.Header as="h5">{tracks.total} Tracks</Card.Header>
    </Card>;
};
export default Playlist;