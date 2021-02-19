import React from 'react';
import renderer from 'react-test-renderer';
import Playlist from './Playlist';

const item = {
    "collaborative": false,
    "description": "",
    "external_urls": {
        "spotify": "https://open.spotify.com/playlist/3NyBIm1EB7yQWZN91nS7hd"
    },
    "href": "https://api.spotify.com/v1/playlists/3NyBIm1EB7yQWZN91nS7hd",
    "id": "3NyBIm1EB7yQWZN91nS7hd",
    "images": [
        {
            "height": 640,
            "url": "https://mosaic.scdn.co/640/ab67616d0000b2733ac318439ae56ce048d7bf5dab67616d0000b2734b0bf4cad684e0b9edc932eaab67616d0000b27368384dd85fd5e95831252f60ab67616d0000b273f6954c1f074f66907a8c5483",
            "width": 640
        },
        {
            "height": 300,
            "url": "https://mosaic.scdn.co/300/ab67616d0000b2733ac318439ae56ce048d7bf5dab67616d0000b2734b0bf4cad684e0b9edc932eaab67616d0000b27368384dd85fd5e95831252f60ab67616d0000b273f6954c1f074f66907a8c5483",
            "width": 300
        },
        {
            "height": 60,
            "url": "https://mosaic.scdn.co/60/ab67616d0000b2733ac318439ae56ce048d7bf5dab67616d0000b2734b0bf4cad684e0b9edc932eaab67616d0000b27368384dd85fd5e95831252f60ab67616d0000b273f6954c1f074f66907a8c5483",
            "width": 60
        }
    ],
    "name": "Queen radio station",
    "owner": {
        "display_name": "Humberto Ortiz",
        "external_urls": {
            "spotify": "https://open.spotify.com/user/12160619828"
        },
        "href": "https://api.spotify.com/v1/users/12160619828",
        "id": "12160619828",
        "type": "user",
        "uri": "spotify:user:12160619828"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MTE0LDk1ZmZmMDVkMGI2YzcxZDI1YzY5NmRhZTRhNTVmZGY5MDMwZjYxMTE=",
    "tracks": {
        "href": "https://api.spotify.com/v1/playlists/3NyBIm1EB7yQWZN91nS7hd/tracks",
        "total": 110
    },
    "type": "playlist",
    "uri": "spotify:playlist:3NyBIm1EB7yQWZN91nS7hd"
};

test('Displays Playlist Correctly', () => {


    const component = renderer.create(
        <Playlist item={item}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
