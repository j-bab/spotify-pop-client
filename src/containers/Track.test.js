import React from 'react';
import renderer from 'react-test-renderer';
import Track from './Track';

const item = {
    "album": {
        "album_type": "single",
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/5dMnvpYEfXvSexjwnSRH5n"
                },
                "href": "https://api.spotify.com/v1/artists/5dMnvpYEfXvSexjwnSRH5n",
                "id": "5dMnvpYEfXvSexjwnSRH5n",
                "name": "RaeLynn",
                "type": "artist",
                "uri": "spotify:artist:5dMnvpYEfXvSexjwnSRH5n"
            }
        ],
        "available_markets": [
            "AD",
            "AE",
            "AL",
            "AR",
            "AT",
            "AU",
            "BA",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "BY",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HR",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KR",
            "KW",
            "KZ",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MD",
            "ME",
            "MK",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "RS",
            "RU",
            "SA",
            "SE",
            "SG",
            "SI",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "UA",
            "US",
            "UY",
            "VN",
            "XK",
            "ZA"
        ],
        "external_urls": {
            "spotify": "https://open.spotify.com/album/7KoovpscXVlfyQdklbirMC"
        },
        "href": "https://api.spotify.com/v1/albums/7KoovpscXVlfyQdklbirMC",
        "id": "7KoovpscXVlfyQdklbirMC",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2730c0a772280a9a4e85669e9f8",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e020c0a772280a9a4e85669e9f8",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048510c0a772280a9a4e85669e9f8",
                "width": 64
            }
        ],
        "name": "Queens Don't",
        "release_date": "2018-03-16",
        "release_date_precision": "day",
        "total_tracks": 1,
        "type": "album",
        "uri": "spotify:album:7KoovpscXVlfyQdklbirMC"
    },
    "artists": [
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/5dMnvpYEfXvSexjwnSRH5n"
            },
            "href": "https://api.spotify.com/v1/artists/5dMnvpYEfXvSexjwnSRH5n",
            "id": "5dMnvpYEfXvSexjwnSRH5n",
            "name": "RaeLynn",
            "type": "artist",
            "uri": "spotify:artist:5dMnvpYEfXvSexjwnSRH5n"
        }
    ],
    "available_markets": [
        "AD",
        "AE",
        "AL",
        "AR",
        "AT",
        "AU",
        "BA",
        "BE",
        "BG",
        "BH",
        "BO",
        "BR",
        "BY",
        "CA",
        "CH",
        "CL",
        "CO",
        "CR",
        "CY",
        "CZ",
        "DE",
        "DK",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FR",
        "GB",
        "GR",
        "GT",
        "HK",
        "HN",
        "HR",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IS",
        "IT",
        "JO",
        "JP",
        "KR",
        "KW",
        "KZ",
        "LB",
        "LI",
        "LT",
        "LU",
        "LV",
        "MA",
        "MC",
        "MD",
        "ME",
        "MK",
        "MT",
        "MX",
        "MY",
        "NI",
        "NL",
        "NO",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PH",
        "PL",
        "PS",
        "PT",
        "PY",
        "QA",
        "RO",
        "RS",
        "RU",
        "SA",
        "SE",
        "SG",
        "SI",
        "SK",
        "SV",
        "TH",
        "TN",
        "TR",
        "TW",
        "UA",
        "US",
        "UY",
        "VN",
        "XK",
        "ZA"
    ],
    "disc_number": 1,
    "duration_ms": 185586,
    "explicit": false,
    "external_ids": {
        "isrc": "USWB11800463"
    },
    "external_urls": {
        "spotify": "https://open.spotify.com/track/0ExiKxfY5rHBW06TcV1xXU"
    },
    "href": "https://api.spotify.com/v1/tracks/0ExiKxfY5rHBW06TcV1xXU",
    "id": "0ExiKxfY5rHBW06TcV1xXU",
    "is_local": false,
    "name": "Queens Don't",
    "popularity": 60,
    "preview_url": "https://p.scdn.co/mp3-preview/d735798799224f1a8f25a3c296ea3d51b4f29ca2?cid=beb884d9f66d4bd6a7f6a945ccb671e1",
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:0ExiKxfY5rHBW06TcV1xXU"
};

test('Displays Track Correctly', () => {


    const component = renderer.create(
        <Track item={item}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
