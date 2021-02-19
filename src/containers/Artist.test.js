import React from 'react';
import renderer from 'react-test-renderer';
import Artist from './Artist';

const item = {
    "external_urls": {
        "spotify": "https://open.spotify.com/artist/5m7wCUhYhBh7A3A3YMxrbt"
    },
    "followers": {
        "href": null,
        "total": 113805
    },
    "genres": [
        "conscious hip hop",
        "east coast hip hop",
        "hip hop",
        "hip pop",
        "new jersey rap"
    ],
    "href": "https://api.spotify.com/v1/artists/5m7wCUhYhBh7A3A3YMxrbt",
    "id": "5m7wCUhYhBh7A3A3YMxrbt",
    "images": [
        {
            "height": 980,
            "url": "https://i.scdn.co/image/8f0b1267ee4a84e260991c25d136ed4be13a8cbe",
            "width": 1000
        },
        {
            "height": 627,
            "url": "https://i.scdn.co/image/bd0d30004390383f4f272f4735386c851171bdb4",
            "width": 640
        },
        {
            "height": 196,
            "url": "https://i.scdn.co/image/014595f259c417b2ee3bd7164f61f21b0e4c3cd4",
            "width": 200
        },
        {
            "height": 63,
            "url": "https://i.scdn.co/image/280a4d9a38af33c661bcb1be9bbd00091850f5df",
            "width": 64
        }
    ],
    "name": "Queen Latifah",
    "popularity": 60,
    "type": "artist",
    "uri": "spotify:artist:5m7wCUhYhBh7A3A3YMxrbt"
};

test('Displays Artist Correctly', () => {


    const component = renderer.create(
        <Artist item={item}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
