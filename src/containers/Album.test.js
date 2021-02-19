import React from 'react';
import renderer from 'react-test-renderer';
import Album from './Album';


const item = {
    "album_type": "album",
    "artists": [
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"
            },
            "href": "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
            "id": "1dfeR4HaWDbWqFHLkxsg1d",
            "name": "Queen",
            "type": "artist",
            "uri": "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"
        }
    ],
    "available_markets": [
        "CA",
        "US"
    ],
    "external_urls": {
        "spotify": "https://open.spotify.com/album/21HMAUrbbYSj9NiPPlGumy"
    },
    "href": "https://api.spotify.com/v1/albums/21HMAUrbbYSj9NiPPlGumy",
    "id": "21HMAUrbbYSj9NiPPlGumy",
    "images": [
        {
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273008b06ec71019afd70153889",
            "width": 640
        },
        {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02008b06ec71019afd70153889",
            "width": 300
        },
        {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851008b06ec71019afd70153889",
            "width": 64
        }
    ],
    "name": "Jazz (Deluxe Remastered Version)",
    "release_date": "1978-11-10",
    "release_date_precision": "day",
    "total_tracks": 18,
    "type": "album",
    "uri": "spotify:album:21HMAUrbbYSj9NiPPlGumy"
};

test('Displays Album Correctly', () => {

    const component = renderer.create(
        <Album item={item}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});