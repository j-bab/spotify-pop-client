import React from 'react';
import renderer from 'react-test-renderer';
import Results from './Results';

const results = {
    "albums": {
        "href": "https://api.spotify.com/v1/search?query=queen&type=album&offset=0&limit=20",
        "items": [{
            "album_type": "album",
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/0hCNtLu0JehylgoiP8L4Gh"},
                "href": "https://api.spotify.com/v1/artists/0hCNtLu0JehylgoiP8L4Gh",
                "id": "0hCNtLu0JehylgoiP8L4Gh",
                "name": "Nicki Minaj",
                "type": "artist",
                "uri": "spotify:artist:0hCNtLu0JehylgoiP8L4Gh"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "external_urls": {"spotify": "https://open.spotify.com/album/2acDkDTWdNFie1HjcFa4Ny"},
            "href": "https://api.spotify.com/v1/albums/2acDkDTWdNFie1HjcFa4Ny",
            "id": "2acDkDTWdNFie1HjcFa4Ny",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273540ab7c149079184e8724dc4",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02540ab7c149079184e8724dc4",
                "width": 300
            }, {"height": 64, "url": "https://i.scdn.co/image/ab67616d00004851540ab7c149079184e8724dc4", "width": 64}],
            "name": "Queen",
            "release_date": "2018-08-10",
            "release_date_precision": "day",
            "total_tracks": 19,
            "type": "album",
            "uri": "spotify:album:2acDkDTWdNFie1HjcFa4Ny"
        }, {
            "album_type": "album",
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/4NHQUGzhtTLFvgF5SZesLK"},
                "href": "https://api.spotify.com/v1/artists/4NHQUGzhtTLFvgF5SZesLK",
                "id": "4NHQUGzhtTLFvgF5SZesLK",
                "name": "Tove Lo",
                "type": "artist",
                "uri": "spotify:artist:4NHQUGzhtTLFvgF5SZesLK"
            }],
            "available_markets": ["AU", "CA", "MX", "NZ", "US"],
            "external_urls": {"spotify": "https://open.spotify.com/album/47C7w4o1resDhr7jvYEpxE"},
            "href": "https://api.spotify.com/v1/albums/47C7w4o1resDhr7jvYEpxE",
            "id": "47C7w4o1resDhr7jvYEpxE",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273edbdf62135e9112a98bffa0c",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02edbdf62135e9112a98bffa0c",
                "width": 300
            }, {"height": 64, "url": "https://i.scdn.co/image/ab67616d00004851edbdf62135e9112a98bffa0c", "width": 64}],
            "name": "Queen Of The Clouds",
            "release_date": "2014-01-01",
            "release_date_precision": "day",
            "total_tracks": 16,
            "type": "album",
            "uri": "spotify:album:47C7w4o1resDhr7jvYEpxE"
        }, {
            "album_type": "single",
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/2vnB6tuQMaQpORiRdvXF9H"},
                "href": "https://api.spotify.com/v1/artists/2vnB6tuQMaQpORiRdvXF9H",
                "id": "2vnB6tuQMaQpORiRdvXF9H",
                "name": "Beach Bunny",
                "type": "artist",
                "uri": "spotify:artist:2vnB6tuQMaQpORiRdvXF9H"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "external_urls": {"spotify": "https://open.spotify.com/album/1lgr82yCJYR5lgsSyxXgBH"},
            "href": "https://api.spotify.com/v1/albums/1lgr82yCJYR5lgsSyxXgBH",
            "id": "1lgr82yCJYR5lgsSyxXgBH",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2730ec9ae111708f4b8be932d8b",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e020ec9ae111708f4b8be932d8b",
                "width": 300
            }, {"height": 64, "url": "https://i.scdn.co/image/ab67616d000048510ec9ae111708f4b8be932d8b", "width": 64}],
            "name": "Prom Queen",
            "release_date": "2018-08-10",
            "release_date_precision": "day",
            "total_tracks": 5,
            "type": "album",
            "uri": "spotify:album:1lgr82yCJYR5lgsSyxXgBH"
        }, {
            "album_type": "album",
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/3MdXrJWsbVzdn6fe5JYkSQ"},
                "href": "https://api.spotify.com/v1/artists/3MdXrJWsbVzdn6fe5JYkSQ",
                "id": "3MdXrJWsbVzdn6fe5JYkSQ",
                "name": "Mulatto",
                "type": "artist",
                "uri": "spotify:artist:3MdXrJWsbVzdn6fe5JYkSQ"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "external_urls": {"spotify": "https://open.spotify.com/album/4A7UKf6fz7Vn7jxWE5OYXv"},
            "href": "https://api.spotify.com/v1/albums/4A7UKf6fz7Vn7jxWE5OYXv",
            "id": "4A7UKf6fz7Vn7jxWE5OYXv",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2733c0c7e372cb2de077a7ce789",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e023c0c7e372cb2de077a7ce789",
                "width": 300
            }, {"height": 64, "url": "https://i.scdn.co/image/ab67616d000048513c0c7e372cb2de077a7ce789", "width": 64}],
            "name": "Queen of Da Souf (Extended Version) [Deluxe Version]",
            "release_date": "2020-12-11",
            "release_date_precision": "day",
            "total_tracks": 18,
            "type": "album",
            "uri": "spotify:album:4A7UKf6fz7Vn7jxWE5OYXv"
        }, {
            "album_type": "album",
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"},
                "href": "https://api.spotify.com/v1/artists/6vWDO969PvNqNYHIOW5v0m",
                "id": "6vWDO969PvNqNYHIOW5v0m",
                "name": "Beyoncé",
                "type": "artist",
                "uri": "spotify:artist:6vWDO969PvNqNYHIOW5v0m"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "external_urls": {"spotify": "https://open.spotify.com/album/7dK54iZuOxXFarGhXwEXfF"},
            "href": "https://api.spotify.com/v1/albums/7dK54iZuOxXFarGhXwEXfF",
            "id": "7dK54iZuOxXFarGhXwEXfF",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27389992f4d7d4ab94937bf9e23",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0289992f4d7d4ab94937bf9e23",
                "width": 300
            }, {"height": 64, "url": "https://i.scdn.co/image/ab67616d0000485189992f4d7d4ab94937bf9e23", "width": 64}],
            "name": "Lemonade",
            "release_date": "2016-04-23",
            "release_date_precision": "day",
            "total_tracks": 13,
            "type": "album",
            "uri": "spotify:album:7dK54iZuOxXFarGhXwEXfF"
        }, {
            "album_type": "album",
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/3MdXrJWsbVzdn6fe5JYkSQ"},
                "href": "https://api.spotify.com/v1/artists/3MdXrJWsbVzdn6fe5JYkSQ",
                "id": "3MdXrJWsbVzdn6fe5JYkSQ",
                "name": "Mulatto",
                "type": "artist",
                "uri": "spotify:artist:3MdXrJWsbVzdn6fe5JYkSQ"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "external_urls": {"spotify": "https://open.spotify.com/album/1HOYLdaWocKi1YGveli9kF"},
            "href": "https://api.spotify.com/v1/albums/1HOYLdaWocKi1YGveli9kF",
            "id": "1HOYLdaWocKi1YGveli9kF",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273a9aa254633575862d7605207",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02a9aa254633575862d7605207",
                "width": 300
            }, {"height": 64, "url": "https://i.scdn.co/image/ab67616d00004851a9aa254633575862d7605207", "width": 64}],
            "name": "Queen of Da Souf",
            "release_date": "2020-08-21",
            "release_date_precision": "day",
            "total_tracks": 13,
            "type": "album",
            "uri": "spotify:album:1HOYLdaWocKi1YGveli9kF"
        }, {
            "album_type": "album",
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"},
                "href": "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
                "id": "1dfeR4HaWDbWqFHLkxsg1d",
                "name": "Queen",
                "type": "artist",
                "uri": "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"
            }],
            "available_markets": ["CA", "US"],
            "external_urls": {"spotify": "https://open.spotify.com/album/6X9k3hSsvQck2OfKYdBbXr"},
            "href": "https://api.spotify.com/v1/albums/6X9k3hSsvQck2OfKYdBbXr",
            "id": "6X9k3hSsvQck2OfKYdBbXr",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273ce4f1737bc8a646c8c4bd25a",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ce4f1737bc8a646c8c4bd25a",
                "width": 300
            }, {"height": 64, "url": "https://i.scdn.co/image/ab67616d00004851ce4f1737bc8a646c8c4bd25a", "width": 64}],
            "name": "A Night At The Opera (Deluxe Remastered Version)",
            "release_date": "1975-11-21",
            "release_date_precision": "day",
            "total_tracks": 18,
            "type": "album",
            "uri": "spotify:album:6X9k3hSsvQck2OfKYdBbXr"
        }, {
            "album_type": "album",
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/0hCNtLu0JehylgoiP8L4Gh"},
                "href": "https://api.spotify.com/v1/artists/0hCNtLu0JehylgoiP8L4Gh",
                "id": "0hCNtLu0JehylgoiP8L4Gh",
                "name": "Nicki Minaj",
                "type": "artist",
                "uri": "spotify:artist:0hCNtLu0JehylgoiP8L4Gh"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "external_urls": {"spotify": "https://open.spotify.com/album/6zA5X3CQ5rgLKhTobyV5Id"},
            "href": "https://api.spotify.com/v1/albums/6zA5X3CQ5rgLKhTobyV5Id",
            "id": "6zA5X3CQ5rgLKhTobyV5Id",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273fc8c64bfc4323ff7ce68fea8",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02fc8c64bfc4323ff7ce68fea8",
                "width": 300
            }, {"height": 64, "url": "https://i.scdn.co/image/ab67616d00004851fc8c64bfc4323ff7ce68fea8", "width": 64}],
            "name": "Queen (Deluxe)",
            "release_date": "2018-11-29",
            "release_date_precision": "day",
            "total_tracks": 20,
            "type": "album",
            "uri": "spotify:album:6zA5X3CQ5rgLKhTobyV5Id"
        }, {
            "album_type": "album",
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"},
                "href": "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
                "id": "1dfeR4HaWDbWqFHLkxsg1d",
                "name": "Queen",
                "type": "artist",
                "uri": "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"
            }],
            "available_markets": ["CA", "US"],
            "external_urls": {"spotify": "https://open.spotify.com/album/21HMAUrbbYSj9NiPPlGumy"},
            "href": "https://api.spotify.com/v1/albums/21HMAUrbbYSj9NiPPlGumy",
            "id": "21HMAUrbbYSj9NiPPlGumy",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273008b06ec71019afd70153889",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02008b06ec71019afd70153889",
                "width": 300
            }, {"height": 64, "url": "https://i.scdn.co/image/ab67616d00004851008b06ec71019afd70153889", "width": 64}],
            "name": "Jazz (Deluxe Remastered Version)",
            "release_date": "1978-11-10",
            "release_date_precision": "day",
            "total_tracks": 18,
            "type": "album",
            "uri": "spotify:album:21HMAUrbbYSj9NiPPlGumy"
        }, {
            "album_type": "single",
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/3nViOFa3kZW8OMSNOzwr98"},
                "href": "https://api.spotify.com/v1/artists/3nViOFa3kZW8OMSNOzwr98",
                "id": "3nViOFa3kZW8OMSNOzwr98",
                "name": "Queen Naija",
                "type": "artist",
                "uri": "spotify:artist:3nViOFa3kZW8OMSNOzwr98"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "external_urls": {"spotify": "https://open.spotify.com/album/6NjMLOTy7deZD4WfpVt3RL"},
            "href": "https://api.spotify.com/v1/albums/6NjMLOTy7deZD4WfpVt3RL",
            "id": "6NjMLOTy7deZD4WfpVt3RL",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2730c81460f642e658a1c654a12",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e020c81460f642e658a1c654a12",
                "width": 300
            }, {"height": 64, "url": "https://i.scdn.co/image/ab67616d000048510c81460f642e658a1c654a12", "width": 64}],
            "name": "Queen Naija",
            "release_date": "2018-07-27",
            "release_date_precision": "day",
            "total_tracks": 5,
            "type": "album",
            "uri": "spotify:album:6NjMLOTy7deZD4WfpVt3RL"
        }, {
            "album_type": "album",
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"},
                "href": "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
                "id": "1dfeR4HaWDbWqFHLkxsg1d",
                "name": "Queen",
                "type": "artist",
                "uri": "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"
            }],
            "available_markets": ["CA", "US"],
            "external_urls": {"spotify": "https://open.spotify.com/album/6wPXUmYJ9mOWrKlLzZ5cCa"},
            "href": "https://api.spotify.com/v1/albums/6wPXUmYJ9mOWrKlLzZ5cCa",
            "id": "6wPXUmYJ9mOWrKlLzZ5cCa",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27307744e2ed983efa3e6620a47",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0207744e2ed983efa3e6620a47",
                "width": 300
            }, {"height": 64, "url": "https://i.scdn.co/image/ab67616d0000485107744e2ed983efa3e6620a47", "width": 64}],
            "name": "The Game (Deluxe Remastered Version)",
            "release_date": "1980-06-27",
            "release_date_precision": "day",
            "total_tracks": 15,
            "type": "album",
            "uri": "spotify:album:6wPXUmYJ9mOWrKlLzZ5cCa"
        }, {
            "album_type": "album",
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"},
                "href": "https://api.spotify.com/v1/artists/6vWDO969PvNqNYHIOW5v0m",
                "id": "6vWDO969PvNqNYHIOW5v0m",
                "name": "Beyoncé",
                "type": "artist",
                "uri": "spotify:artist:6vWDO969PvNqNYHIOW5v0m"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "external_urls": {"spotify": "https://open.spotify.com/album/2UJwKSBUz6rtW4QLK74kQu"},
            "href": "https://api.spotify.com/v1/albums/2UJwKSBUz6rtW4QLK74kQu",
            "id": "2UJwKSBUz6rtW4QLK74kQu",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2730d1d6e9325275f104f8e33f3",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e020d1d6e9325275f104f8e33f3",
                "width": 300
            }, {"height": 64, "url": "https://i.scdn.co/image/ab67616d000048510d1d6e9325275f104f8e33f3", "width": 64}],
            "name": "BEYONCÉ [Platinum Edition]",
            "release_date": "2014-11-24",
            "release_date_precision": "day",
            "total_tracks": 20,
            "type": "album",
            "uri": "spotify:album:2UJwKSBUz6rtW4QLK74kQu"
        }, {
            "album_type": "album",
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"},
                "href": "https://api.spotify.com/v1/artists/6vWDO969PvNqNYHIOW5v0m",
                "id": "6vWDO969PvNqNYHIOW5v0m",
                "name": "Beyoncé",
                "type": "artist",
                "uri": "spotify:artist:6vWDO969PvNqNYHIOW5v0m"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "external_urls": {"spotify": "https://open.spotify.com/album/1gIC63gC3B7o7FfpPACZQJ"},
            "href": "https://api.spotify.com/v1/albums/1gIC63gC3B7o7FfpPACZQJ",
            "id": "1gIC63gC3B7o7FfpPACZQJ",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273ff5429125128b43572dbdccd",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ff5429125128b43572dbdccd",
                "width": 300
            }, {"height": 64, "url": "https://i.scdn.co/image/ab67616d00004851ff5429125128b43572dbdccd", "width": 64}],
            "name": "4",
            "release_date": "2011-06-24",
            "release_date_precision": "day",
            "total_tracks": 14,
            "type": "album",
            "uri": "spotify:album:1gIC63gC3B7o7FfpPACZQJ"
        }, {
            "album_type": "single",
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/3MbrazQE12UdSdFunXcft1"},
                "href": "https://api.spotify.com/v1/artists/3MbrazQE12UdSdFunXcft1",
                "id": "3MbrazQE12UdSdFunXcft1",
                "name": "Loren Gray",
                "type": "artist",
                "uri": "spotify:artist:3MbrazQE12UdSdFunXcft1"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "external_urls": {"spotify": "https://open.spotify.com/album/5acYgqkqRhxgbeRzHqIIqv"},
            "href": "https://api.spotify.com/v1/albums/5acYgqkqRhxgbeRzHqIIqv",
            "id": "5acYgqkqRhxgbeRzHqIIqv",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273b1f28bbbca75aecc31bdd306",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02b1f28bbbca75aecc31bdd306",
                "width": 300
            }, {"height": 64, "url": "https://i.scdn.co/image/ab67616d00004851b1f28bbbca75aecc31bdd306", "width": 64}],
            "name": "Queen",
            "release_date": "2018-12-21",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:5acYgqkqRhxgbeRzHqIIqv"
        }, {
            "album_type": "album",
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/34jw2BbxjoYalTp8cJFCPv"},
                "href": "https://api.spotify.com/v1/artists/34jw2BbxjoYalTp8cJFCPv",
                "id": "34jw2BbxjoYalTp8cJFCPv",
                "name": "Heart",
                "type": "artist",
                "uri": "spotify:artist:34jw2BbxjoYalTp8cJFCPv"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "external_urls": {"spotify": "https://open.spotify.com/album/1LaeNhiUpL3X6N0LcFvuDF"},
            "href": "https://api.spotify.com/v1/albums/1LaeNhiUpL3X6N0LcFvuDF",
            "id": "1LaeNhiUpL3X6N0LcFvuDF",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273546d1165b994a8b3449b8cd7",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02546d1165b994a8b3449b8cd7",
                "width": 300
            }, {"height": 64, "url": "https://i.scdn.co/image/ab67616d00004851546d1165b994a8b3449b8cd7", "width": 64}],
            "name": "Little Queen",
            "release_date": "1977-05-14",
            "release_date_precision": "day",
            "total_tracks": 10,
            "type": "album",
            "uri": "spotify:album:1LaeNhiUpL3X6N0LcFvuDF"
        }, {
            "album_type": "single",
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/5dMnvpYEfXvSexjwnSRH5n"},
                "href": "https://api.spotify.com/v1/artists/5dMnvpYEfXvSexjwnSRH5n",
                "id": "5dMnvpYEfXvSexjwnSRH5n",
                "name": "RaeLynn",
                "type": "artist",
                "uri": "spotify:artist:5dMnvpYEfXvSexjwnSRH5n"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "external_urls": {"spotify": "https://open.spotify.com/album/7KoovpscXVlfyQdklbirMC"},
            "href": "https://api.spotify.com/v1/albums/7KoovpscXVlfyQdklbirMC",
            "id": "7KoovpscXVlfyQdklbirMC",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2730c0a772280a9a4e85669e9f8",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e020c0a772280a9a4e85669e9f8",
                "width": 300
            }, {"height": 64, "url": "https://i.scdn.co/image/ab67616d000048510c0a772280a9a4e85669e9f8", "width": 64}],
            "name": "Queens Don't",
            "release_date": "2018-03-16",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:7KoovpscXVlfyQdklbirMC"
        }, {
            "album_type": "album",
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/3yY2gUcIsjMr8hjo51PoJ8"},
                "href": "https://api.spotify.com/v1/artists/3yY2gUcIsjMr8hjo51PoJ8",
                "id": "3yY2gUcIsjMr8hjo51PoJ8",
                "name": "The Smiths",
                "type": "artist",
                "uri": "spotify:artist:3yY2gUcIsjMr8hjo51PoJ8"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "external_urls": {"spotify": "https://open.spotify.com/album/5Y0p2XCgRRIjna91aQE8q7"},
            "href": "https://api.spotify.com/v1/albums/5Y0p2XCgRRIjna91aQE8q7",
            "id": "5Y0p2XCgRRIjna91aQE8q7",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273ada101c2e9e97feb8fae37a9",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ada101c2e9e97feb8fae37a9",
                "width": 300
            }, {"height": 64, "url": "https://i.scdn.co/image/ab67616d00004851ada101c2e9e97feb8fae37a9", "width": 64}],
            "name": "The Queen Is Dead",
            "release_date": "1986-06-16",
            "release_date_precision": "day",
            "total_tracks": 10,
            "type": "album",
            "uri": "spotify:album:5Y0p2XCgRRIjna91aQE8q7"
        }, {
            "album_type": "compilation",
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"},
                "href": "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
                "id": "1dfeR4HaWDbWqFHLkxsg1d",
                "name": "Queen",
                "type": "artist",
                "uri": "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"
            }],
            "available_markets": ["CA", "US"],
            "external_urls": {"spotify": "https://open.spotify.com/album/1Q9NOisnaTULM5CZD4rIgZ"},
            "href": "https://api.spotify.com/v1/albums/1Q9NOisnaTULM5CZD4rIgZ",
            "id": "1Q9NOisnaTULM5CZD4rIgZ",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273f7b6f1d6b235e8e70ecc4407",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02f7b6f1d6b235e8e70ecc4407",
                "width": 300
            }, {"height": 64, "url": "https://i.scdn.co/image/ab67616d00004851f7b6f1d6b235e8e70ecc4407", "width": 64}],
            "name": "Queen 40 Limited Edition Collector's Box Set",
            "release_date": "2011-01-01",
            "release_date_precision": "day",
            "total_tracks": 83,
            "type": "album",
            "uri": "spotify:album:1Q9NOisnaTULM5CZD4rIgZ"
        }, {
            "album_type": "album",
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"},
                "href": "https://api.spotify.com/v1/artists/6vWDO969PvNqNYHIOW5v0m",
                "id": "6vWDO969PvNqNYHIOW5v0m",
                "name": "Beyoncé",
                "type": "artist",
                "uri": "spotify:artist:6vWDO969PvNqNYHIOW5v0m"
            }],
            "available_markets": ["AD", "AL", "AR", "AT", "BA", "BG", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HN", "HR", "HU", "IE", "IL", "IS", "IT", "JP", "KZ", "LI", "LT", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "NI", "NO", "NZ", "PA", "PE", "PL", "PT", "PY", "RO", "RS", "RU", "SE", "SI", "SK", "SV", "TN", "TR", "UA", "US", "UY", "XK", "ZA"],
            "external_urls": {"spotify": "https://open.spotify.com/album/23Y5wdyP5byMFktZf8AcWU"},
            "href": "https://api.spotify.com/v1/albums/23Y5wdyP5byMFktZf8AcWU",
            "id": "23Y5wdyP5byMFktZf8AcWU",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273e13de7b8662b085b0885ffef",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02e13de7b8662b085b0885ffef",
                "width": 300
            }, {"height": 64, "url": "https://i.scdn.co/image/ab67616d00004851e13de7b8662b085b0885ffef", "width": 64}],
            "name": "I AM...SASHA FIERCE",
            "release_date": "2008-11-14",
            "release_date_precision": "day",
            "total_tracks": 16,
            "type": "album",
            "uri": "spotify:album:23Y5wdyP5byMFktZf8AcWU"
        }, {
            "album_type": "album",
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"},
                "href": "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
                "id": "1dfeR4HaWDbWqFHLkxsg1d",
                "name": "Queen",
                "type": "artist",
                "uri": "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"
            }],
            "available_markets": ["CA", "US"],
            "external_urls": {"spotify": "https://open.spotify.com/album/6Di4m5k1BtMJ0R44bWNutu"},
            "href": "https://api.spotify.com/v1/albums/6Di4m5k1BtMJ0R44bWNutu",
            "id": "6Di4m5k1BtMJ0R44bWNutu",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27393c65b02f4a72cd6eccf446d",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0293c65b02f4a72cd6eccf446d",
                "width": 300
            }, {"height": 64, "url": "https://i.scdn.co/image/ab67616d0000485193c65b02f4a72cd6eccf446d", "width": 64}],
            "name": "News Of The World (Deluxe Remastered Version)",
            "release_date": "1977-10-28",
            "release_date_precision": "day",
            "total_tracks": 16,
            "type": "album",
            "uri": "spotify:album:6Di4m5k1BtMJ0R44bWNutu"
        }],
        "limit": 20,
        "next": "https://api.spotify.com/v1/search?query=queen&type=album&offset=20&limit=20",
        "offset": 0,
        "previous": null,
        "total": 10010
    },
    "artists": {
        "href": "https://api.spotify.com/v1/search?query=queen&type=artist&offset=0&limit=20",
        "items": [{
            "external_urls": {"spotify": "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"},
            "followers": {"href": null, "total": 32168666},
            "genres": ["classic rock", "glam rock", "rock"],
            "href": "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
            "id": "1dfeR4HaWDbWqFHLkxsg1d",
            "images": [{
                "height": 806,
                "url": "https://i.scdn.co/image/b040846ceba13c3e9c125d68389491094e7f2982",
                "width": 999
            }, {
                "height": 516,
                "url": "https://i.scdn.co/image/af2b8e57f6d7b5d43a616bd1e27ba552cd8bfd42",
                "width": 640
            }, {
                "height": 161,
                "url": "https://i.scdn.co/image/c06971e9ff81696699b829484e3be165f4e64368",
                "width": 200
            }, {"height": 52, "url": "https://i.scdn.co/image/6dd0ffd270903d1884edf9058c49f58b03db893d", "width": 64}],
            "name": "Queen",
            "popularity": 90,
            "type": "artist",
            "uri": "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"
        }, {
            "external_urls": {"spotify": "https://open.spotify.com/artist/3nViOFa3kZW8OMSNOzwr98"},
            "followers": {"href": null, "total": 1758243},
            "genres": ["dance pop", "pop", "pop r&b", "r&b", "urban contemporary"],
            "href": "https://api.spotify.com/v1/artists/3nViOFa3kZW8OMSNOzwr98",
            "id": "3nViOFa3kZW8OMSNOzwr98",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/d36cd1848e9a4cdd5cf17a256e138370d02b1f14",
                "width": 640
            }, {
                "height": 320,
                "url": "https://i.scdn.co/image/0ed0fade75b99337c612b532e27d9286301b60a1",
                "width": 320
            }, {
                "height": 160,
                "url": "https://i.scdn.co/image/3a7ad35de5bdbc72133c95268203775354ba7b4f",
                "width": 160
            }],
            "name": "Queen Naija",
            "popularity": 70,
            "type": "artist",
            "uri": "spotify:artist:3nViOFa3kZW8OMSNOzwr98"
        }, {
            "external_urls": {"spotify": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"},
            "followers": {"href": null, "total": 26137387},
            "genres": ["dance pop", "pop", "pop dance", "post-teen pop", "r&b"],
            "href": "https://api.spotify.com/v1/artists/6vWDO969PvNqNYHIOW5v0m",
            "id": "6vWDO969PvNqNYHIOW5v0m",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ad8b0e5a18a5a443a2678768bd73f59833941abc",
                "width": 640
            }, {
                "height": 320,
                "url": "https://i.scdn.co/image/802895be7bc5339087ba36194b0b7307c467df96",
                "width": 320
            }, {
                "height": 160,
                "url": "https://i.scdn.co/image/a932ba0a31bd2807fe76c77b64c680bec2f3d14a",
                "width": 160
            }],
            "name": "Beyoncé",
            "popularity": 89,
            "type": "artist",
            "uri": "spotify:artist:6vWDO969PvNqNYHIOW5v0m"
        }, {
            "external_urls": {"spotify": "https://open.spotify.com/artist/4pejUc4iciQfgdX6OKulQn"},
            "followers": {"href": null, "total": 2572506},
            "genres": ["alternative metal", "alternative rock", "blues rock", "modern rock", "nu metal", "palm desert scene", "rock", "stoner metal", "stoner rock"],
            "href": "https://api.spotify.com/v1/artists/4pejUc4iciQfgdX6OKulQn",
            "id": "4pejUc4iciQfgdX6OKulQn",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/905233ed063a6350613c571e8508b65c3ae98080",
                "width": 640
            }, {
                "height": 320,
                "url": "https://i.scdn.co/image/bb87dad4464becc47d17eeeb1ccc0dd1d0bf22d9",
                "width": 320
            }, {
                "height": 160,
                "url": "https://i.scdn.co/image/e78c5b9700108b06482f7b1677120c6c565e8b0d",
                "width": 160
            }],
            "name": "Queens of the Stone Age",
            "popularity": 74,
            "type": "artist",
            "uri": "spotify:artist:4pejUc4iciQfgdX6OKulQn"
        }, {
            "external_urls": {"spotify": "https://open.spotify.com/artist/0VbIlorLz3I5SEtIsc5vAr"},
            "followers": {"href": null, "total": 18841},
            "genres": ["hip pop", "lgbtq+ hip hop"],
            "href": "https://api.spotify.com/v1/artists/0VbIlorLz3I5SEtIsc5vAr",
            "id": "0VbIlorLz3I5SEtIsc5vAr",
            "images": [{
                "height": 997,
                "url": "https://i.scdn.co/image/ff4eabfc6691a25a8b43782e80a0ba0781f09a68",
                "width": 1000
            }, {
                "height": 638,
                "url": "https://i.scdn.co/image/0a079ee27bb8e170fc2794fcdcffb0524b170d55",
                "width": 640
            }, {
                "height": 199,
                "url": "https://i.scdn.co/image/e987de87ded3c2d69167fb8ac4b09e11cdea2fa1",
                "width": 200
            }, {"height": 64, "url": "https://i.scdn.co/image/1cfb64008f4c1308fac4381b262a153d5c944ee3", "width": 64}],
            "name": "Queen Pen",
            "popularity": 63,
            "type": "artist",
            "uri": "spotify:artist:0VbIlorLz3I5SEtIsc5vAr"
        }, {
            "external_urls": {"spotify": "https://open.spotify.com/artist/6p2442ymrT9lZEuCZJdYcH"},
            "followers": {"href": null, "total": 1277549},
            "genres": ["latin", "latin hip hop", "rap latina", "reggaeton", "trap latino", "tropical"],
            "href": "https://api.spotify.com/v1/artists/6p2442ymrT9lZEuCZJdYcH",
            "id": "6p2442ymrT9lZEuCZJdYcH",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/e73d674299c80724ebd3f8e4374a4187073a01e3",
                "width": 640
            }, {
                "height": 320,
                "url": "https://i.scdn.co/image/efd36c31cbec16cc24bf2554ab26448115252f75",
                "width": 320
            }, {
                "height": 160,
                "url": "https://i.scdn.co/image/3e1add4753952a676c1d01726630bcc96080e2d9",
                "width": 160
            }],
            "name": "Ivy Queen",
            "popularity": 67,
            "type": "artist",
            "uri": "spotify:artist:6p2442ymrT9lZEuCZJdYcH"
        }, {
            "external_urls": {"spotify": "https://open.spotify.com/artist/5m7wCUhYhBh7A3A3YMxrbt"},
            "followers": {"href": null, "total": 113805},
            "genres": ["conscious hip hop", "east coast hip hop", "hip hop", "hip pop", "new jersey rap"],
            "href": "https://api.spotify.com/v1/artists/5m7wCUhYhBh7A3A3YMxrbt",
            "id": "5m7wCUhYhBh7A3A3YMxrbt",
            "images": [{
                "height": 980,
                "url": "https://i.scdn.co/image/8f0b1267ee4a84e260991c25d136ed4be13a8cbe",
                "width": 1000
            }, {
                "height": 627,
                "url": "https://i.scdn.co/image/bd0d30004390383f4f272f4735386c851171bdb4",
                "width": 640
            }, {
                "height": 196,
                "url": "https://i.scdn.co/image/014595f259c417b2ee3bd7164f61f21b0e4c3cd4",
                "width": 200
            }, {"height": 63, "url": "https://i.scdn.co/image/280a4d9a38af33c661bcb1be9bbd00091850f5df", "width": 64}],
            "name": "Queen Latifah",
            "popularity": 60,
            "type": "artist",
            "uri": "spotify:artist:5m7wCUhYhBh7A3A3YMxrbt"
        }, {
            "external_urls": {"spotify": "https://open.spotify.com/artist/2OgUPVlWYgGBGMefZgGvCO"},
            "followers": {"href": null, "total": 432108},
            "genres": ["album rock", "glam metal", "hard rock", "metal", "progressive metal", "rock", "us power metal"],
            "href": "https://api.spotify.com/v1/artists/2OgUPVlWYgGBGMefZgGvCO",
            "id": "2OgUPVlWYgGBGMefZgGvCO",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/f10041558d518ebb60798c570424d5e1e59b61bd",
                "width": 640
            }, {
                "height": 320,
                "url": "https://i.scdn.co/image/3304c3a736ab315103d5679cd14c7f99e325d6ff",
                "width": 320
            }, {
                "height": 160,
                "url": "https://i.scdn.co/image/c4fb13d9fd3c68ad3c59ffebbf8b7d2eb18a9849",
                "width": 160
            }],
            "name": "Queensrÿche",
            "popularity": 60,
            "type": "artist",
            "uri": "spotify:artist:2OgUPVlWYgGBGMefZgGvCO"
        }, {
            "external_urls": {"spotify": "https://open.spotify.com/artist/65TI81cGOUJx4OXM4VHTND"},
            "followers": {"href": null, "total": 903},
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/65TI81cGOUJx4OXM4VHTND",
            "id": "65TI81cGOUJx4OXM4VHTND",
            "images": [],
            "name": "Queendome Come",
            "popularity": 57,
            "type": "artist",
            "uri": "spotify:artist:65TI81cGOUJx4OXM4VHTND"
        }, {
            "external_urls": {"spotify": "https://open.spotify.com/artist/3IhYHKVt0Q9vxCCwiCHahR"},
            "followers": {"href": null, "total": 209366},
            "genres": ["pop r&b", "trap queen"],
            "href": "https://api.spotify.com/v1/artists/3IhYHKVt0Q9vxCCwiCHahR",
            "id": "3IhYHKVt0Q9vxCCwiCHahR",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/54c91273cb532ba799971af1c616a012bb8492d7",
                "width": 640
            }, {
                "height": 320,
                "url": "https://i.scdn.co/image/5967d152a7f5c35e77ef8fb84dee022ca1621f41",
                "width": 320
            }, {
                "height": 160,
                "url": "https://i.scdn.co/image/23820b3548dda6924922217d8334cbcc288e48c0",
                "width": 160
            }],
            "name": "Queen Key",
            "popularity": 51,
            "type": "artist",
            "uri": "spotify:artist:3IhYHKVt0Q9vxCCwiCHahR"
        }, {
            "external_urls": {"spotify": "https://open.spotify.com/artist/6whFEcaV75AmQMiwlfaxvc"},
            "followers": {"href": null, "total": 163741},
            "genres": ["anime rock", "j-pop", "j-poprock", "j-rock"],
            "href": "https://api.spotify.com/v1/artists/6whFEcaV75AmQMiwlfaxvc",
            "id": "6whFEcaV75AmQMiwlfaxvc",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/37e8072b65def61da8c9af4ea1ecff90e3c6e165",
                "width": 640
            }, {
                "height": 320,
                "url": "https://i.scdn.co/image/04c4d64ac489e8d52ad902c4c8f971aa739faa52",
                "width": 320
            }, {
                "height": 160,
                "url": "https://i.scdn.co/image/b0fb10583cbb519816c6a60a6909c3a45855996b",
                "width": 160
            }],
            "name": "QUEEN BEE",
            "popularity": 59,
            "type": "artist",
            "uri": "spotify:artist:6whFEcaV75AmQMiwlfaxvc"
        }, {
            "external_urls": {"spotify": "https://open.spotify.com/artist/04vj3iPUiVh5melWr0w3xT"},
            "followers": {"href": null, "total": 562250},
            "genres": ["art pop", "dance pop", "electro-pop francais", "electropop", "metropopolis", "shimmer pop"],
            "href": "https://api.spotify.com/v1/artists/04vj3iPUiVh5melWr0w3xT",
            "id": "04vj3iPUiVh5melWr0w3xT",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/90e99eebf5193a0ff86f0b68cfc4374709eb540a",
                "width": 640
            }, {
                "height": 320,
                "url": "https://i.scdn.co/image/bd5aec4a1aba424bb599e71941f8fe4509295669",
                "width": 320
            }, {
                "height": 160,
                "url": "https://i.scdn.co/image/71bd7d44e447646a877bb6c56b372ed39bfab4a5",
                "width": 160
            }],
            "name": "Christine and the Queens",
            "popularity": 67,
            "type": "artist",
            "uri": "spotify:artist:04vj3iPUiVh5melWr0w3xT"
        }, {
            "external_urls": {"spotify": "https://open.spotify.com/artist/0Y3JOSrAc9i7OZxgGQoz3U"},
            "followers": {"href": null, "total": 89},
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/0Y3JOSrAc9i7OZxgGQoz3U",
            "id": "0Y3JOSrAc9i7OZxgGQoz3U",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273e398805ffada496e656d51a3",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02e398805ffada496e656d51a3",
                "width": 300
            }, {"height": 64, "url": "https://i.scdn.co/image/ab67616d00004851e398805ffada496e656d51a3", "width": 64}],
            "name": "Queenie",
            "popularity": 38,
            "type": "artist",
            "uri": "spotify:artist:0Y3JOSrAc9i7OZxgGQoz3U"
        }, {
            "external_urls": {"spotify": "https://open.spotify.com/artist/0RroasuVqv02pTZhV83VRd"},
            "followers": {"href": null, "total": 36},
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/0RroasuVqv02pTZhV83VRd",
            "id": "0RroasuVqv02pTZhV83VRd",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab54b463ac51f7fb19d8b5d0a50d51684634aba3",
                "width": 640
            }, {
                "height": 320,
                "url": "https://i.scdn.co/image/e0452f715bfb68bdbbff6d74f4ca4be008f694bb",
                "width": 320
            }, {
                "height": 160,
                "url": "https://i.scdn.co/image/40081829f42ee74c3606297e1b2f9771a9bbaaee",
                "width": 160
            }],
            "name": "Queen Boss King Records",
            "popularity": 37,
            "type": "artist",
            "uri": "spotify:artist:0RroasuVqv02pTZhV83VRd"
        }, {
            "external_urls": {"spotify": "https://open.spotify.com/artist/5UzdIrAf2ErMBCl7tGTOke"},
            "followers": {"href": null, "total": 12219},
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/5UzdIrAf2ErMBCl7tGTOke",
            "id": "5UzdIrAf2ErMBCl7tGTOke",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273325d180daf039429547ee3fa",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02325d180daf039429547ee3fa",
                "width": 300
            }, {"height": 64, "url": "https://i.scdn.co/image/ab67616d00004851325d180daf039429547ee3fa", "width": 64}],
            "name": "QueenMo",
            "popularity": 35,
            "type": "artist",
            "uri": "spotify:artist:5UzdIrAf2ErMBCl7tGTOke"
        }, {
            "external_urls": {"spotify": "https://open.spotify.com/artist/4VqlewwKZJoIcA88PYHUDd"},
            "followers": {"href": null, "total": 8779},
            "genres": ["modern alternative pop", "uk pop"],
            "href": "https://api.spotify.com/v1/artists/4VqlewwKZJoIcA88PYHUDd",
            "id": "4VqlewwKZJoIcA88PYHUDd",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/392e0b1630e587480f802d7aa36b26263b5d8b66",
                "width": 640
            }, {
                "height": 320,
                "url": "https://i.scdn.co/image/48c4bf88f95f92710ef6c64caf561a4d89576c02",
                "width": 320
            }, {
                "height": 160,
                "url": "https://i.scdn.co/image/b0227d41b34b6771e944d04e78831ccc4faebda1",
                "width": 160
            }],
            "name": "Baby Queen",
            "popularity": 50,
            "type": "artist",
            "uri": "spotify:artist:4VqlewwKZJoIcA88PYHUDd"
        }, {
            "external_urls": {"spotify": "https://open.spotify.com/artist/6SpoPWwwrTSB4w0G0twAkv"},
            "followers": {"href": null, "total": 97},
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/6SpoPWwwrTSB4w0G0twAkv",
            "id": "6SpoPWwwrTSB4w0G0twAkv",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2732dda4c5c68e5f9c7a40be67a",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e022dda4c5c68e5f9c7a40be67a",
                "width": 300
            }, {"height": 64, "url": "https://i.scdn.co/image/ab67616d000048512dda4c5c68e5f9c7a40be67a", "width": 64}],
            "name": "Queen of Apostles",
            "popularity": 38,
            "type": "artist",
            "uri": "spotify:artist:6SpoPWwwrTSB4w0G0twAkv"
        }, {
            "external_urls": {"spotify": "https://open.spotify.com/artist/4o79bJJ2tBszgEDEvLhB2L"},
            "followers": {"href": null, "total": 8670},
            "genres": ["convent", "rosary"],
            "href": "https://api.spotify.com/v1/artists/4o79bJJ2tBszgEDEvLhB2L",
            "id": "4o79bJJ2tBszgEDEvLhB2L",
            "images": [{
                "height": 384,
                "url": "https://i.scdn.co/image/36cda49a9d35d009df7b9456ab687ec0757a37d8",
                "width": 1000
            }, {
                "height": 245,
                "url": "https://i.scdn.co/image/d8b2b1589c6e36ef4562ddf3f909cca5f155aec1",
                "width": 639
            }, {
                "height": 77,
                "url": "https://i.scdn.co/image/7a7b46ef27bb71dc5350fb67dcc348dd4f9136d8",
                "width": 200
            }, {"height": 25, "url": "https://i.scdn.co/image/8bea82d5113515b9477da86a8c10d78153c33412", "width": 64}],
            "name": "Benedictines Of Mary, Queen Of Apostles",
            "popularity": 45,
            "type": "artist",
            "uri": "spotify:artist:4o79bJJ2tBszgEDEvLhB2L"
        }, {
            "external_urls": {"spotify": "https://open.spotify.com/artist/5SK75gxwqKq5Zc1mdLfwv9"},
            "followers": {"href": null, "total": 75373},
            "genres": ["dancehall", "lovers rock", "modern reggae", "reggae fusion", "roots reggae"],
            "href": "https://api.spotify.com/v1/artists/5SK75gxwqKq5Zc1mdLfwv9",
            "id": "5SK75gxwqKq5Zc1mdLfwv9",
            "images": [{
                "height": 1000,
                "url": "https://i.scdn.co/image/d3a5325327534e042312622ea7b955ba45800260",
                "width": 1000
            }, {
                "height": 640,
                "url": "https://i.scdn.co/image/087d849a742d51b68e5bc53612a95423b16107ae",
                "width": 640
            }, {
                "height": 200,
                "url": "https://i.scdn.co/image/597cc9337e88dffbce7c449dab2ebed8be0337a9",
                "width": 200
            }, {"height": 64, "url": "https://i.scdn.co/image/a845be9f159f3d2b5a728ab5c58549c26ec5c361", "width": 64}],
            "name": "Queen Ifrica",
            "popularity": 44,
            "type": "artist",
            "uri": "spotify:artist:5SK75gxwqKq5Zc1mdLfwv9"
        }, {
            "external_urls": {"spotify": "https://open.spotify.com/artist/24Tv4phxgSYyLeybMCvMmO"},
            "followers": {"href": null, "total": 594},
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/24Tv4phxgSYyLeybMCvMmO",
            "id": "24Tv4phxgSYyLeybMCvMmO",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/a47fbff84010f853dea44bb169300f404563cc35",
                "width": 640
            }, {
                "height": 320,
                "url": "https://i.scdn.co/image/afd94638db601d2dbaa0db8bcbe18031f1c1072e",
                "width": 320
            }, {
                "height": 160,
                "url": "https://i.scdn.co/image/0b77bb4ef67f14ba1f193f9d8f8e4dc4dd455f26",
                "width": 160
            }],
            "name": "Queenie",
            "popularity": 36,
            "type": "artist",
            "uri": "spotify:artist:24Tv4phxgSYyLeybMCvMmO"
        }],
        "limit": 20,
        "next": "https://api.spotify.com/v1/search?query=queen&type=artist&offset=20&limit=20",
        "offset": 0,
        "previous": null,
        "total": 4047
    },
    "tracks": {
        "href": "https://api.spotify.com/v1/search?query=queen&type=track&offset=0&limit=20",
        "items": [{
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {"spotify": "https://open.spotify.com/artist/2cFrymmkijnjDg9SS92EPM"},
                    "href": "https://api.spotify.com/v1/artists/2cFrymmkijnjDg9SS92EPM",
                    "id": "2cFrymmkijnjDg9SS92EPM",
                    "name": "blackbear",
                    "type": "artist",
                    "uri": "spotify:artist:2cFrymmkijnjDg9SS92EPM"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {"spotify": "https://open.spotify.com/album/0fxhOwMkj9lfSIAyTJVnfc"},
                "href": "https://api.spotify.com/v1/albums/0fxhOwMkj9lfSIAyTJVnfc",
                "id": "0fxhOwMkj9lfSIAyTJVnfc",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2730b7c6d46885f7434c99e6d8b",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e020b7c6d46885f7434c99e6d8b",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048510b7c6d46885f7434c99e6d8b",
                    "width": 64
                }],
                "name": "everything means nothing",
                "release_date": "2020-08-21",
                "release_date_precision": "day",
                "total_tracks": 12,
                "type": "album",
                "uri": "spotify:album:0fxhOwMkj9lfSIAyTJVnfc"
            },
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/2cFrymmkijnjDg9SS92EPM"},
                "href": "https://api.spotify.com/v1/artists/2cFrymmkijnjDg9SS92EPM",
                "id": "2cFrymmkijnjDg9SS92EPM",
                "name": "blackbear",
                "type": "artist",
                "uri": "spotify:artist:2cFrymmkijnjDg9SS92EPM"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 171171,
            "explicit": true,
            "external_ids": {"isrc": "USUG12000337"},
            "external_urls": {"spotify": "https://open.spotify.com/track/1HKl3RJInVzf5ObVnM644j"},
            "href": "https://api.spotify.com/v1/tracks/1HKl3RJInVzf5ObVnM644j",
            "id": "1HKl3RJInVzf5ObVnM644j",
            "is_local": false,
            "name": "queen of broken hearts",
            "popularity": 72,
            "preview_url": null,
            "track_number": 3,
            "type": "track",
            "uri": "spotify:track:1HKl3RJInVzf5ObVnM644j"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {"spotify": "https://open.spotify.com/artist/4npEfmQ6YuiwW1GpUmaq3F"},
                    "href": "https://api.spotify.com/v1/artists/4npEfmQ6YuiwW1GpUmaq3F",
                    "id": "4npEfmQ6YuiwW1GpUmaq3F",
                    "name": "Ava Max",
                    "type": "artist",
                    "uri": "spotify:artist:4npEfmQ6YuiwW1GpUmaq3F"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {"spotify": "https://open.spotify.com/album/26c7MmQ4w8EAvVLb4jilaM"},
                "href": "https://api.spotify.com/v1/albums/26c7MmQ4w8EAvVLb4jilaM",
                "id": "26c7MmQ4w8EAvVLb4jilaM",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2739a95e89d24214b94de36ccf7",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e029a95e89d24214b94de36ccf7",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048519a95e89d24214b94de36ccf7",
                    "width": 64
                }],
                "name": "Heaven & Hell",
                "release_date": "2020-09-18",
                "release_date_precision": "day",
                "total_tracks": 16,
                "type": "album",
                "uri": "spotify:album:26c7MmQ4w8EAvVLb4jilaM"
            },
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/4npEfmQ6YuiwW1GpUmaq3F"},
                "href": "https://api.spotify.com/v1/artists/4npEfmQ6YuiwW1GpUmaq3F",
                "id": "4npEfmQ6YuiwW1GpUmaq3F",
                "name": "Ava Max",
                "type": "artist",
                "uri": "spotify:artist:4npEfmQ6YuiwW1GpUmaq3F"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 162398,
            "explicit": false,
            "external_ids": {"isrc": "USAT21906943"},
            "external_urls": {"spotify": "https://open.spotify.com/track/7a53HqqArd4b9NF4XAmlbI"},
            "href": "https://api.spotify.com/v1/tracks/7a53HqqArd4b9NF4XAmlbI",
            "id": "7a53HqqArd4b9NF4XAmlbI",
            "is_local": false,
            "name": "Kings & Queens",
            "popularity": 83,
            "preview_url": "https://p.scdn.co/mp3-preview/ba1e404e07ed5658ba7fe809919c2790b21033f6?cid=beb884d9f66d4bd6a7f6a945ccb671e1",
            "track_number": 3,
            "type": "track",
            "uri": "spotify:track:7a53HqqArd4b9NF4XAmlbI"
        }, {
            "album": {
                "album_type": "single",
                "artists": [{
                    "external_urls": {"spotify": "https://open.spotify.com/artist/3MbrazQE12UdSdFunXcft1"},
                    "href": "https://api.spotify.com/v1/artists/3MbrazQE12UdSdFunXcft1",
                    "id": "3MbrazQE12UdSdFunXcft1",
                    "name": "Loren Gray",
                    "type": "artist",
                    "uri": "spotify:artist:3MbrazQE12UdSdFunXcft1"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {"spotify": "https://open.spotify.com/album/5acYgqkqRhxgbeRzHqIIqv"},
                "href": "https://api.spotify.com/v1/albums/5acYgqkqRhxgbeRzHqIIqv",
                "id": "5acYgqkqRhxgbeRzHqIIqv",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273b1f28bbbca75aecc31bdd306",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02b1f28bbbca75aecc31bdd306",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851b1f28bbbca75aecc31bdd306",
                    "width": 64
                }],
                "name": "Queen",
                "release_date": "2018-12-21",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:5acYgqkqRhxgbeRzHqIIqv"
            },
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/3MbrazQE12UdSdFunXcft1"},
                "href": "https://api.spotify.com/v1/artists/3MbrazQE12UdSdFunXcft1",
                "id": "3MbrazQE12UdSdFunXcft1",
                "name": "Loren Gray",
                "type": "artist",
                "uri": "spotify:artist:3MbrazQE12UdSdFunXcft1"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 160444,
            "explicit": false,
            "external_ids": {"isrc": "USUM71821784"},
            "external_urls": {"spotify": "https://open.spotify.com/track/53b4d9jHQZq89EtQxwUURr"},
            "href": "https://api.spotify.com/v1/tracks/53b4d9jHQZq89EtQxwUURr",
            "id": "53b4d9jHQZq89EtQxwUURr",
            "is_local": false,
            "name": "Queen",
            "popularity": 63,
            "preview_url": null,
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:53b4d9jHQZq89EtQxwUURr"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {"spotify": "https://open.spotify.com/artist/6PXS4YHDkKvl1wkIl4V8DL"},
                    "href": "https://api.spotify.com/v1/artists/6PXS4YHDkKvl1wkIl4V8DL",
                    "id": "6PXS4YHDkKvl1wkIl4V8DL",
                    "name": "Fetty Wap",
                    "type": "artist",
                    "uri": "spotify:artist:6PXS4YHDkKvl1wkIl4V8DL"
                }],
                "available_markets": ["AE", "AL", "AR", "BA", "BG", "BH", "BO", "BR", "BY", "CA", "CL", "CO", "CR", "CZ", "DO", "DZ", "EC", "EE", "EG", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IL", "IN", "JO", "JP", "KR", "KW", "KZ", "LB", "LT", "LV", "MA", "MD", "MK", "MT", "MX", "MY", "NI", "OM", "PA", "PE", "PH", "PL", "PS", "PY", "QA", "RO", "RU", "SA", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA"],
                "external_urls": {"spotify": "https://open.spotify.com/album/2gKQvajkEEaDtkqJ8FJ4uw"},
                "href": "https://api.spotify.com/v1/albums/2gKQvajkEEaDtkqJ8FJ4uw",
                "id": "2gKQvajkEEaDtkqJ8FJ4uw",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273de6bd09b07e2b4af4e409f6c",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02de6bd09b07e2b4af4e409f6c",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851de6bd09b07e2b4af4e409f6c",
                    "width": 64
                }],
                "name": "Fetty Wap (Deluxe)",
                "release_date": "2015-09-25",
                "release_date_precision": "day",
                "total_tracks": 20,
                "type": "album",
                "uri": "spotify:album:2gKQvajkEEaDtkqJ8FJ4uw"
            },
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/6PXS4YHDkKvl1wkIl4V8DL"},
                "href": "https://api.spotify.com/v1/artists/6PXS4YHDkKvl1wkIl4V8DL",
                "id": "6PXS4YHDkKvl1wkIl4V8DL",
                "name": "Fetty Wap",
                "type": "artist",
                "uri": "spotify:artist:6PXS4YHDkKvl1wkIl4V8DL"
            }],
            "available_markets": ["AE", "AL", "AR", "BA", "BG", "BH", "BO", "BR", "BY", "CA", "CL", "CO", "CR", "CZ", "DO", "DZ", "EC", "EE", "EG", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IL", "IN", "JO", "JP", "KR", "KW", "KZ", "LB", "LT", "LV", "MA", "MD", "MK", "MT", "MX", "MY", "NI", "OM", "PA", "PE", "PH", "PL", "PS", "PY", "QA", "RO", "RU", "SA", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA"],
            "disc_number": 1,
            "duration_ms": 222093,
            "explicit": true,
            "external_ids": {"isrc": "QM7XC1400004"},
            "external_urls": {"spotify": "https://open.spotify.com/track/2d8JP84HNLKhmd6IYOoupQ"},
            "href": "https://api.spotify.com/v1/tracks/2d8JP84HNLKhmd6IYOoupQ",
            "id": "2d8JP84HNLKhmd6IYOoupQ",
            "is_local": false,
            "name": "Trap Queen",
            "popularity": 72,
            "preview_url": "https://p.scdn.co/mp3-preview/62bf932cdc4d351174128d974397f5093de4f994?cid=beb884d9f66d4bd6a7f6a945ccb671e1",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:2d8JP84HNLKhmd6IYOoupQ"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {"spotify": "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"},
                    "href": "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
                    "id": "1dfeR4HaWDbWqFHLkxsg1d",
                    "name": "Queen",
                    "type": "artist",
                    "uri": "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"
                }],
                "available_markets": ["CA", "US"],
                "external_urls": {"spotify": "https://open.spotify.com/album/6X9k3hSsvQck2OfKYdBbXr"},
                "href": "https://api.spotify.com/v1/albums/6X9k3hSsvQck2OfKYdBbXr",
                "id": "6X9k3hSsvQck2OfKYdBbXr",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273ce4f1737bc8a646c8c4bd25a",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02ce4f1737bc8a646c8c4bd25a",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851ce4f1737bc8a646c8c4bd25a",
                    "width": 64
                }],
                "name": "A Night At The Opera (Deluxe Remastered Version)",
                "release_date": "1975-11-21",
                "release_date_precision": "day",
                "total_tracks": 18,
                "type": "album",
                "uri": "spotify:album:6X9k3hSsvQck2OfKYdBbXr"
            },
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"},
                "href": "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
                "id": "1dfeR4HaWDbWqFHLkxsg1d",
                "name": "Queen",
                "type": "artist",
                "uri": "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"
            }],
            "available_markets": ["CA", "US"],
            "disc_number": 1,
            "duration_ms": 354320,
            "explicit": false,
            "external_ids": {"isrc": "GBUM71029604"},
            "external_urls": {"spotify": "https://open.spotify.com/track/7tFiyTwD0nx5a1eklYtX2J"},
            "href": "https://api.spotify.com/v1/tracks/7tFiyTwD0nx5a1eklYtX2J",
            "id": "7tFiyTwD0nx5a1eklYtX2J",
            "is_local": false,
            "name": "Bohemian Rhapsody - Remastered 2011",
            "popularity": 72,
            "preview_url": null,
            "track_number": 11,
            "type": "track",
            "uri": "spotify:track:7tFiyTwD0nx5a1eklYtX2J"
        }, {
            "album": {
                "album_type": "single",
                "artists": [{
                    "external_urls": {"spotify": "https://open.spotify.com/artist/2vnB6tuQMaQpORiRdvXF9H"},
                    "href": "https://api.spotify.com/v1/artists/2vnB6tuQMaQpORiRdvXF9H",
                    "id": "2vnB6tuQMaQpORiRdvXF9H",
                    "name": "Beach Bunny",
                    "type": "artist",
                    "uri": "spotify:artist:2vnB6tuQMaQpORiRdvXF9H"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {"spotify": "https://open.spotify.com/album/1lgr82yCJYR5lgsSyxXgBH"},
                "href": "https://api.spotify.com/v1/albums/1lgr82yCJYR5lgsSyxXgBH",
                "id": "1lgr82yCJYR5lgsSyxXgBH",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2730ec9ae111708f4b8be932d8b",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e020ec9ae111708f4b8be932d8b",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048510ec9ae111708f4b8be932d8b",
                    "width": 64
                }],
                "name": "Prom Queen",
                "release_date": "2018-08-10",
                "release_date_precision": "day",
                "total_tracks": 5,
                "type": "album",
                "uri": "spotify:album:1lgr82yCJYR5lgsSyxXgBH"
            },
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/2vnB6tuQMaQpORiRdvXF9H"},
                "href": "https://api.spotify.com/v1/artists/2vnB6tuQMaQpORiRdvXF9H",
                "id": "2vnB6tuQMaQpORiRdvXF9H",
                "name": "Beach Bunny",
                "type": "artist",
                "uri": "spotify:artist:2vnB6tuQMaQpORiRdvXF9H"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 136562,
            "explicit": false,
            "external_ids": {"isrc": "QZDA71885746"},
            "external_urls": {"spotify": "https://open.spotify.com/track/6MpCaSIOfqBqbMED4kXgNY"},
            "href": "https://api.spotify.com/v1/tracks/6MpCaSIOfqBqbMED4kXgNY",
            "id": "6MpCaSIOfqBqbMED4kXgNY",
            "is_local": false,
            "name": "Prom Queen",
            "popularity": 74,
            "preview_url": "https://p.scdn.co/mp3-preview/772d240efb0d28aaa581a646d2f62d9822c7fbf7?cid=beb884d9f66d4bd6a7f6a945ccb671e1",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:6MpCaSIOfqBqbMED4kXgNY"
        }, {
            "album": {
                "album_type": "single",
                "artists": [{
                    "external_urls": {"spotify": "https://open.spotify.com/artist/5dMnvpYEfXvSexjwnSRH5n"},
                    "href": "https://api.spotify.com/v1/artists/5dMnvpYEfXvSexjwnSRH5n",
                    "id": "5dMnvpYEfXvSexjwnSRH5n",
                    "name": "RaeLynn",
                    "type": "artist",
                    "uri": "spotify:artist:5dMnvpYEfXvSexjwnSRH5n"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {"spotify": "https://open.spotify.com/album/7KoovpscXVlfyQdklbirMC"},
                "href": "https://api.spotify.com/v1/albums/7KoovpscXVlfyQdklbirMC",
                "id": "7KoovpscXVlfyQdklbirMC",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2730c0a772280a9a4e85669e9f8",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e020c0a772280a9a4e85669e9f8",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048510c0a772280a9a4e85669e9f8",
                    "width": 64
                }],
                "name": "Queens Don't",
                "release_date": "2018-03-16",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:7KoovpscXVlfyQdklbirMC"
            },
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/5dMnvpYEfXvSexjwnSRH5n"},
                "href": "https://api.spotify.com/v1/artists/5dMnvpYEfXvSexjwnSRH5n",
                "id": "5dMnvpYEfXvSexjwnSRH5n",
                "name": "RaeLynn",
                "type": "artist",
                "uri": "spotify:artist:5dMnvpYEfXvSexjwnSRH5n"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 185586,
            "explicit": false,
            "external_ids": {"isrc": "USWB11800463"},
            "external_urls": {"spotify": "https://open.spotify.com/track/0ExiKxfY5rHBW06TcV1xXU"},
            "href": "https://api.spotify.com/v1/tracks/0ExiKxfY5rHBW06TcV1xXU",
            "id": "0ExiKxfY5rHBW06TcV1xXU",
            "is_local": false,
            "name": "Queens Don't",
            "popularity": 60,
            "preview_url": "https://p.scdn.co/mp3-preview/d735798799224f1a8f25a3c296ea3d51b4f29ca2?cid=beb884d9f66d4bd6a7f6a945ccb671e1",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:0ExiKxfY5rHBW06TcV1xXU"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {"spotify": "https://open.spotify.com/artist/0LcJLqbBmaGUft1e9Mm8HV"},
                    "href": "https://api.spotify.com/v1/artists/0LcJLqbBmaGUft1e9Mm8HV",
                    "id": "0LcJLqbBmaGUft1e9Mm8HV",
                    "name": "ABBA",
                    "type": "artist",
                    "uri": "spotify:artist:0LcJLqbBmaGUft1e9Mm8HV"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {"spotify": "https://open.spotify.com/album/1V6a99EbTTIegOhWoPxYI9"},
                "href": "https://api.spotify.com/v1/albums/1V6a99EbTTIegOhWoPxYI9",
                "id": "1V6a99EbTTIegOhWoPxYI9",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b27370f7a1b35d5165c85b95a0e0",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e0270f7a1b35d5165c85b95a0e0",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d0000485170f7a1b35d5165c85b95a0e0",
                    "width": 64
                }],
                "name": "Arrival",
                "release_date": "1976",
                "release_date_precision": "year",
                "total_tracks": 12,
                "type": "album",
                "uri": "spotify:album:1V6a99EbTTIegOhWoPxYI9"
            },
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/0LcJLqbBmaGUft1e9Mm8HV"},
                "href": "https://api.spotify.com/v1/artists/0LcJLqbBmaGUft1e9Mm8HV",
                "id": "0LcJLqbBmaGUft1e9Mm8HV",
                "name": "ABBA",
                "type": "artist",
                "uri": "spotify:artist:0LcJLqbBmaGUft1e9Mm8HV"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 230400,
            "explicit": false,
            "external_ids": {"isrc": "SEAYD7601020"},
            "external_urls": {"spotify": "https://open.spotify.com/track/0GjEhVFGZW8afUYGChu3Rr"},
            "href": "https://api.spotify.com/v1/tracks/0GjEhVFGZW8afUYGChu3Rr",
            "id": "0GjEhVFGZW8afUYGChu3Rr",
            "is_local": false,
            "name": "Dancing Queen",
            "popularity": 78,
            "preview_url": null,
            "track_number": 2,
            "type": "track",
            "uri": "spotify:track:0GjEhVFGZW8afUYGChu3Rr"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {"spotify": "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"},
                    "href": "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
                    "id": "1dfeR4HaWDbWqFHLkxsg1d",
                    "name": "Queen",
                    "type": "artist",
                    "uri": "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"
                }],
                "available_markets": ["CA", "US"],
                "external_urls": {"spotify": "https://open.spotify.com/album/21HMAUrbbYSj9NiPPlGumy"},
                "href": "https://api.spotify.com/v1/albums/21HMAUrbbYSj9NiPPlGumy",
                "id": "21HMAUrbbYSj9NiPPlGumy",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273008b06ec71019afd70153889",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02008b06ec71019afd70153889",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851008b06ec71019afd70153889",
                    "width": 64
                }],
                "name": "Jazz (Deluxe Remastered Version)",
                "release_date": "1978-11-10",
                "release_date_precision": "day",
                "total_tracks": 18,
                "type": "album",
                "uri": "spotify:album:21HMAUrbbYSj9NiPPlGumy"
            },
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"},
                "href": "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
                "id": "1dfeR4HaWDbWqFHLkxsg1d",
                "name": "Queen",
                "type": "artist",
                "uri": "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"
            }],
            "available_markets": ["CA", "US"],
            "disc_number": 1,
            "duration_ms": 209413,
            "explicit": false,
            "external_ids": {"isrc": "GBUM71029610"},
            "external_urls": {"spotify": "https://open.spotify.com/track/7hQJA50XrCWABAu5v6QZ4i"},
            "href": "https://api.spotify.com/v1/tracks/7hQJA50XrCWABAu5v6QZ4i",
            "id": "7hQJA50XrCWABAu5v6QZ4i",
            "is_local": false,
            "name": "Don't Stop Me Now - Remastered 2011",
            "popularity": 71,
            "preview_url": null,
            "track_number": 12,
            "type": "track",
            "uri": "spotify:track:7hQJA50XrCWABAu5v6QZ4i"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {"spotify": "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"},
                    "href": "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
                    "id": "1dfeR4HaWDbWqFHLkxsg1d",
                    "name": "Queen",
                    "type": "artist",
                    "uri": "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"
                }],
                "available_markets": ["CA", "US"],
                "external_urls": {"spotify": "https://open.spotify.com/album/6wPXUmYJ9mOWrKlLzZ5cCa"},
                "href": "https://api.spotify.com/v1/albums/6wPXUmYJ9mOWrKlLzZ5cCa",
                "id": "6wPXUmYJ9mOWrKlLzZ5cCa",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b27307744e2ed983efa3e6620a47",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e0207744e2ed983efa3e6620a47",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d0000485107744e2ed983efa3e6620a47",
                    "width": 64
                }],
                "name": "The Game (Deluxe Remastered Version)",
                "release_date": "1980-06-27",
                "release_date_precision": "day",
                "total_tracks": 15,
                "type": "album",
                "uri": "spotify:album:6wPXUmYJ9mOWrKlLzZ5cCa"
            },
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"},
                "href": "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
                "id": "1dfeR4HaWDbWqFHLkxsg1d",
                "name": "Queen",
                "type": "artist",
                "uri": "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"
            }],
            "available_markets": ["CA", "US"],
            "disc_number": 1,
            "duration_ms": 214653,
            "explicit": false,
            "external_ids": {"isrc": "GBUM71029605"},
            "external_urls": {"spotify": "https://open.spotify.com/track/57JVGBtBLCfHw2muk5416J"},
            "href": "https://api.spotify.com/v1/tracks/57JVGBtBLCfHw2muk5416J",
            "id": "57JVGBtBLCfHw2muk5416J",
            "is_local": false,
            "name": "Another One Bites The Dust - Remastered 2011",
            "popularity": 71,
            "preview_url": null,
            "track_number": 3,
            "type": "track",
            "uri": "spotify:track:57JVGBtBLCfHw2muk5416J"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {"spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"},
                    "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                    "id": "0LyfQWJT6nXafLPZqxe9Of",
                    "name": "Various Artists",
                    "type": "artist",
                    "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
                }],
                "available_markets": ["AE", "BG", "BH", "BY", "CY", "EE", "EG", "FI", "GR", "HK", "ID", "IL", "IN", "JO", "JP", "KR", "KW", "KZ", "LB", "LT", "LV", "MD", "MY", "OM", "PH", "PS", "QA", "RO", "RU", "SA", "SG", "TH", "TR", "TW", "UA", "VN", "ZA", "AD", "AL", "AT", "BA", "BE", "CH", "CZ", "DE", "DK", "DZ", "ES", "FR", "HR", "HU", "IT", "LI", "LU", "MA", "MC", "ME", "MK", "MT", "NL", "NO", "PL", "RS", "SE", "SI", "SK", "TN", "XK", "GB", "IE", "IS", "PT", "AR", "BR", "CL", "PY", "UY", "BO", "DO", "CA", "CO", "EC", "PA", "PE", "US", "CR", "GT", "HN", "MX", "NI", "SV"],
                "external_urls": {"spotify": "https://open.spotify.com/album/33tptLFuehpV5W8lzpvLlz"},
                "href": "https://api.spotify.com/v1/albums/33tptLFuehpV5W8lzpvLlz",
                "id": "33tptLFuehpV5W8lzpvLlz",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2738742ac1739fe46605ec2b735",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e028742ac1739fe46605ec2b735",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048518742ac1739fe46605ec2b735",
                    "width": 64
                }],
                "name": "Kings & Queens - Modern Pop Hits",
                "release_date": "2021-02-19",
                "release_date_precision": "day",
                "total_tracks": 50,
                "type": "album",
                "uri": "spotify:album:33tptLFuehpV5W8lzpvLlz"
            },
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V"},
                "href": "https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V",
                "id": "6eUKZXaKkcviH0Ku9w2n3V",
                "name": "Ed Sheeran",
                "type": "artist",
                "uri": "spotify:artist:6eUKZXaKkcviH0Ku9w2n3V"
            }],
            "available_markets": ["AE", "BG", "BH", "BY", "CY", "EE", "EG", "FI", "GR", "HK", "ID", "IL", "IN", "JO", "JP", "KR", "KW", "KZ", "LB", "LT", "LV", "MD", "MY", "OM", "PH", "PS", "QA", "RO", "RU", "SA", "SG", "TH", "TR", "TW", "UA", "VN", "ZA", "AD", "AL", "AT", "BA", "BE", "CH", "CZ", "DE", "DK", "DZ", "ES", "FR", "HR", "HU", "IT", "LI", "LU", "MA", "MC", "ME", "MK", "MT", "NL", "NO", "PL", "RS", "SE", "SI", "SK", "TN", "XK", "GB", "IE", "IS", "PT", "AR", "BR", "CL", "PY", "UY", "BO", "DO", "CA", "CO", "EC", "PA", "PE", "US", "CR", "GT", "HN", "MX", "NI", "SV"],
            "disc_number": 1,
            "duration_ms": 263400,
            "explicit": false,
            "external_ids": {"isrc": "GBAHS1700024"},
            "external_urls": {"spotify": "https://open.spotify.com/track/4DYvyfJ2snG3qY3FQQIOQZ"},
            "href": "https://api.spotify.com/v1/tracks/4DYvyfJ2snG3qY3FQQIOQZ",
            "id": "4DYvyfJ2snG3qY3FQQIOQZ",
            "is_local": false,
            "name": "Perfect",
            "popularity": 0,
            "preview_url": "https://p.scdn.co/mp3-preview/e532edcc9ecbae497a1639290b8d3f392028fa74?cid=beb884d9f66d4bd6a7f6a945ccb671e1",
            "track_number": 2,
            "type": "track",
            "uri": "spotify:track:4DYvyfJ2snG3qY3FQQIOQZ"
        }, {
            "album": {
                "album_type": "compilation",
                "artists": [{
                    "external_urls": {"spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"},
                    "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                    "id": "0LyfQWJT6nXafLPZqxe9Of",
                    "name": "Various Artists",
                    "type": "artist",
                    "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {"spotify": "https://open.spotify.com/album/1rDO59SgTsY1HV5ZBtl9Hy"},
                "href": "https://api.spotify.com/v1/albums/1rDO59SgTsY1HV5ZBtl9Hy",
                "id": "1rDO59SgTsY1HV5ZBtl9Hy",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273668a1a1e508d6406daa0179a",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02668a1a1e508d6406daa0179a",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851668a1a1e508d6406daa0179a",
                    "width": 64
                }],
                "name": "Descendants 3 (Original TV Movie Soundtrack)",
                "release_date": "2019-08-02",
                "release_date_precision": "day",
                "total_tracks": 13,
                "type": "album",
                "uri": "spotify:album:1rDO59SgTsY1HV5ZBtl9Hy"
            },
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/0uqrdF1UCmMshSk6veOa5K"},
                "href": "https://api.spotify.com/v1/artists/0uqrdF1UCmMshSk6veOa5K",
                "id": "0uqrdF1UCmMshSk6veOa5K",
                "name": "Sarah Jeffery",
                "type": "artist",
                "uri": "spotify:artist:0uqrdF1UCmMshSk6veOa5K"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 189397,
            "explicit": false,
            "external_ids": {"isrc": "USWD11993388"},
            "external_urls": {"spotify": "https://open.spotify.com/track/4o05DiC0RQ9DNtGJGauwna"},
            "href": "https://api.spotify.com/v1/tracks/4o05DiC0RQ9DNtGJGauwna",
            "id": "4o05DiC0RQ9DNtGJGauwna",
            "is_local": false,
            "name": "Queen of Mean",
            "popularity": 65,
            "preview_url": null,
            "track_number": 2,
            "type": "track",
            "uri": "spotify:track:4o05DiC0RQ9DNtGJGauwna"
        }, {
            "album": {
                "album_type": "single",
                "artists": [{
                    "external_urls": {"spotify": "https://open.spotify.com/artist/49q9nffJ66hti9t6TmO3wE"},
                    "href": "https://api.spotify.com/v1/artists/49q9nffJ66hti9t6TmO3wE",
                    "id": "49q9nffJ66hti9t6TmO3wE",
                    "name": "JBE Relax Music",
                    "type": "artist",
                    "uri": "spotify:artist:49q9nffJ66hti9t6TmO3wE"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {"spotify": "https://open.spotify.com/album/7GRYxhQ5v9BDoBskI3CNnK"},
                "href": "https://api.spotify.com/v1/albums/7GRYxhQ5v9BDoBskI3CNnK",
                "id": "7GRYxhQ5v9BDoBskI3CNnK",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2731d523f1dbe584779a4fe9c0f",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e021d523f1dbe584779a4fe9c0f",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048511d523f1dbe584779a4fe9c0f",
                    "width": 64
                }],
                "name": "Queen K",
                "release_date": "2020-11-09",
                "release_date_precision": "day",
                "total_tracks": 4,
                "type": "album",
                "uri": "spotify:album:7GRYxhQ5v9BDoBskI3CNnK"
            },
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/49q9nffJ66hti9t6TmO3wE"},
                "href": "https://api.spotify.com/v1/artists/49q9nffJ66hti9t6TmO3wE",
                "id": "49q9nffJ66hti9t6TmO3wE",
                "name": "JBE Relax Music",
                "type": "artist",
                "uri": "spotify:artist:49q9nffJ66hti9t6TmO3wE"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 238032,
            "explicit": false,
            "external_ids": {"isrc": "SE6RB2031401"},
            "external_urls": {"spotify": "https://open.spotify.com/track/2SiunxdR9ZuY676ZpuhTRb"},
            "href": "https://api.spotify.com/v1/tracks/2SiunxdR9ZuY676ZpuhTRb",
            "id": "2SiunxdR9ZuY676ZpuhTRb",
            "is_local": false,
            "name": "Queen K",
            "popularity": 59,
            "preview_url": "https://p.scdn.co/mp3-preview/0bffcc2a2726722d4f929c5b77697703cd08254f?cid=beb884d9f66d4bd6a7f6a945ccb671e1",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:2SiunxdR9ZuY676ZpuhTRb"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {"spotify": "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"},
                    "href": "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
                    "id": "1dfeR4HaWDbWqFHLkxsg1d",
                    "name": "Queen",
                    "type": "artist",
                    "uri": "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"
                }],
                "available_markets": ["CA", "US"],
                "external_urls": {"spotify": "https://open.spotify.com/album/0xc5IpJM39eEEYSKDrm5kf"},
                "href": "https://api.spotify.com/v1/albums/0xc5IpJM39eEEYSKDrm5kf",
                "id": "0xc5IpJM39eEEYSKDrm5kf",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273a1e05e1048e2cf2737adf742",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02a1e05e1048e2cf2737adf742",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851a1e05e1048e2cf2737adf742",
                    "width": 64
                }],
                "name": "Hot Space (Deluxe Remastered Version)",
                "release_date": "1982-05-03",
                "release_date_precision": "day",
                "total_tracks": 16,
                "type": "album",
                "uri": "spotify:album:0xc5IpJM39eEEYSKDrm5kf"
            },
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"},
                "href": "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
                "id": "1dfeR4HaWDbWqFHLkxsg1d",
                "name": "Queen",
                "type": "artist",
                "uri": "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"
            }, {
                "external_urls": {"spotify": "https://open.spotify.com/artist/0oSGxfWSnnOXhD2fKuz2Gy"},
                "href": "https://api.spotify.com/v1/artists/0oSGxfWSnnOXhD2fKuz2Gy",
                "id": "0oSGxfWSnnOXhD2fKuz2Gy",
                "name": "David Bowie",
                "type": "artist",
                "uri": "spotify:artist:0oSGxfWSnnOXhD2fKuz2Gy"
            }],
            "available_markets": ["CA", "US"],
            "disc_number": 1,
            "duration_ms": 248440,
            "explicit": false,
            "external_ids": {"isrc": "GBUM71029622"},
            "external_urls": {"spotify": "https://open.spotify.com/track/11IzgLRXV7Cgek3tEgGgjw"},
            "href": "https://api.spotify.com/v1/tracks/11IzgLRXV7Cgek3tEgGgjw",
            "id": "11IzgLRXV7Cgek3tEgGgjw",
            "is_local": false,
            "name": "Under Pressure - Remastered 2011",
            "popularity": 69,
            "preview_url": null,
            "track_number": 11,
            "type": "track",
            "uri": "spotify:track:11IzgLRXV7Cgek3tEgGgjw"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {"spotify": "https://open.spotify.com/artist/3tkZthBATD0S45hm1DmB2O"},
                    "href": "https://api.spotify.com/v1/artists/3tkZthBATD0S45hm1DmB2O",
                    "id": "3tkZthBATD0S45hm1DmB2O",
                    "name": "Sammy Kershaw",
                    "type": "artist",
                    "uri": "spotify:artist:3tkZthBATD0S45hm1DmB2O"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {"spotify": "https://open.spotify.com/album/30ORdfQ1Movxqmpf3qkrMQ"},
                "href": "https://api.spotify.com/v1/albums/30ORdfQ1Movxqmpf3qkrMQ",
                "id": "30ORdfQ1Movxqmpf3qkrMQ",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2735b82a639a05848f834f33c59",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e025b82a639a05848f834f33c59",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048515b82a639a05848f834f33c59",
                    "width": 64
                }],
                "name": "Haunted Heart",
                "release_date": "1993-03-09",
                "release_date_precision": "day",
                "total_tracks": 10,
                "type": "album",
                "uri": "spotify:album:30ORdfQ1Movxqmpf3qkrMQ"
            },
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/3tkZthBATD0S45hm1DmB2O"},
                "href": "https://api.spotify.com/v1/artists/3tkZthBATD0S45hm1DmB2O",
                "id": "3tkZthBATD0S45hm1DmB2O",
                "name": "Sammy Kershaw",
                "type": "artist",
                "uri": "spotify:artist:3tkZthBATD0S45hm1DmB2O"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 211200,
            "explicit": false,
            "external_ids": {"isrc": "USPR39302707"},
            "external_urls": {"spotify": "https://open.spotify.com/track/3Wz9Fm9ZyhpaRGxMlSR5G4"},
            "href": "https://api.spotify.com/v1/tracks/3Wz9Fm9ZyhpaRGxMlSR5G4",
            "id": "3Wz9Fm9ZyhpaRGxMlSR5G4",
            "is_local": false,
            "name": "Queen Of My Double Wide Trailer",
            "popularity": 55,
            "preview_url": null,
            "track_number": 2,
            "type": "track",
            "uri": "spotify:track:3Wz9Fm9ZyhpaRGxMlSR5G4"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {"spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"},
                    "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                    "id": "0LyfQWJT6nXafLPZqxe9Of",
                    "name": "Various Artists",
                    "type": "artist",
                    "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
                }],
                "available_markets": ["AE", "BG", "BH", "BY", "CY", "EE", "EG", "FI", "GR", "HK", "ID", "IL", "IN", "JO", "JP", "KR", "KW", "KZ", "LB", "LT", "LV", "MD", "MY", "OM", "PH", "PS", "QA", "RO", "RU", "SA", "SG", "TH", "TR", "TW", "UA", "VN", "ZA", "AD", "AL", "AT", "BA", "BE", "CH", "CZ", "DE", "DK", "DZ", "ES", "FR", "HR", "HU", "IT", "LI", "LU", "MA", "MC", "ME", "MK", "MT", "NL", "NO", "PL", "RS", "SE", "SI", "SK", "TN", "XK", "GB", "IE", "IS", "PT", "AR", "BR", "CL", "PY", "UY", "BO", "DO", "CA", "CO", "EC", "PA", "PE", "US", "CR", "GT", "HN", "MX", "NI", "SV"],
                "external_urls": {"spotify": "https://open.spotify.com/album/33tptLFuehpV5W8lzpvLlz"},
                "href": "https://api.spotify.com/v1/albums/33tptLFuehpV5W8lzpvLlz",
                "id": "33tptLFuehpV5W8lzpvLlz",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2738742ac1739fe46605ec2b735",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e028742ac1739fe46605ec2b735",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048518742ac1739fe46605ec2b735",
                    "width": 64
                }],
                "name": "Kings & Queens - Modern Pop Hits",
                "release_date": "2021-02-19",
                "release_date_precision": "day",
                "total_tracks": 50,
                "type": "album",
                "uri": "spotify:album:33tptLFuehpV5W8lzpvLlz"
            },
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/4npEfmQ6YuiwW1GpUmaq3F"},
                "href": "https://api.spotify.com/v1/artists/4npEfmQ6YuiwW1GpUmaq3F",
                "id": "4npEfmQ6YuiwW1GpUmaq3F",
                "name": "Ava Max",
                "type": "artist",
                "uri": "spotify:artist:4npEfmQ6YuiwW1GpUmaq3F"
            }],
            "available_markets": ["AE", "BG", "BH", "BY", "CY", "EE", "EG", "FI", "GR", "HK", "ID", "IL", "IN", "JO", "JP", "KR", "KW", "KZ", "LB", "LT", "LV", "MD", "MY", "OM", "PH", "PS", "QA", "RO", "RU", "SA", "SG", "TH", "TR", "TW", "UA", "VN", "ZA", "AD", "AL", "AT", "BA", "BE", "CH", "CZ", "DE", "DK", "DZ", "ES", "FR", "HR", "HU", "IT", "LI", "LU", "MA", "MC", "ME", "MK", "MT", "NL", "NO", "PL", "RS", "SE", "SI", "SK", "TN", "XK", "GB", "IE", "IS", "PT", "AR", "BR", "CL", "PY", "UY", "BO", "DO", "CA", "CO", "EC", "PA", "PE", "US", "CR", "GT", "HN", "MX", "NI", "SV"],
            "disc_number": 1,
            "duration_ms": 162398,
            "explicit": false,
            "external_ids": {"isrc": "USAT21906943"},
            "external_urls": {"spotify": "https://open.spotify.com/track/2s60x28mxF9OomryhfiFlr"},
            "href": "https://api.spotify.com/v1/tracks/2s60x28mxF9OomryhfiFlr",
            "id": "2s60x28mxF9OomryhfiFlr",
            "is_local": false,
            "name": "Kings & Queens",
            "popularity": 0,
            "preview_url": "https://p.scdn.co/mp3-preview/39b0927e713dda9b73859cb39850111d9cce163e?cid=beb884d9f66d4bd6a7f6a945ccb671e1",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:2s60x28mxF9OomryhfiFlr"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {"spotify": "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"},
                    "href": "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
                    "id": "1dfeR4HaWDbWqFHLkxsg1d",
                    "name": "Queen",
                    "type": "artist",
                    "uri": "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"
                }],
                "available_markets": ["CA", "US"],
                "external_urls": {"spotify": "https://open.spotify.com/album/6Di4m5k1BtMJ0R44bWNutu"},
                "href": "https://api.spotify.com/v1/albums/6Di4m5k1BtMJ0R44bWNutu",
                "id": "6Di4m5k1BtMJ0R44bWNutu",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b27393c65b02f4a72cd6eccf446d",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e0293c65b02f4a72cd6eccf446d",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d0000485193c65b02f4a72cd6eccf446d",
                    "width": 64
                }],
                "name": "News Of The World (Deluxe Remastered Version)",
                "release_date": "1977-10-28",
                "release_date_precision": "day",
                "total_tracks": 16,
                "type": "album",
                "uri": "spotify:album:6Di4m5k1BtMJ0R44bWNutu"
            },
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"},
                "href": "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
                "id": "1dfeR4HaWDbWqFHLkxsg1d",
                "name": "Queen",
                "type": "artist",
                "uri": "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"
            }],
            "available_markets": ["CA", "US"],
            "disc_number": 1,
            "duration_ms": 122066,
            "explicit": false,
            "external_ids": {"isrc": "GBUM71029618"},
            "external_urls": {"spotify": "https://open.spotify.com/track/54flyrjcdnQdco7300avMJ"},
            "href": "https://api.spotify.com/v1/tracks/54flyrjcdnQdco7300avMJ",
            "id": "54flyrjcdnQdco7300avMJ",
            "is_local": false,
            "name": "We Will Rock You - Remastered",
            "popularity": 67,
            "preview_url": null,
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:54flyrjcdnQdco7300avMJ"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {"spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"},
                    "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                    "id": "0LyfQWJT6nXafLPZqxe9Of",
                    "name": "Various Artists",
                    "type": "artist",
                    "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
                }],
                "available_markets": ["AE", "BG", "BH", "BY", "CY", "EE", "EG", "FI", "GR", "HK", "ID", "IL", "IN", "JO", "JP", "KR", "KW", "KZ", "LB", "LT", "LV", "MD", "MY", "OM", "PH", "PS", "QA", "RO", "RU", "SA", "SG", "TH", "TR", "TW", "UA", "VN", "ZA", "AD", "AL", "AT", "BA", "BE", "CH", "CZ", "DE", "DK", "DZ", "ES", "FR", "HR", "HU", "IT", "LI", "LU", "MA", "MC", "ME", "MK", "MT", "NL", "NO", "PL", "RS", "SE", "SI", "SK", "TN", "XK", "GB", "IE", "IS", "PT", "AR", "BR", "CL", "PY", "UY", "BO", "DO", "CA", "CO", "EC", "PA", "PE", "US", "CR", "GT", "HN", "MX", "NI", "SV"],
                "external_urls": {"spotify": "https://open.spotify.com/album/5AppoGtUk6EOptMDxx0UoH"},
                "href": "https://api.spotify.com/v1/albums/5AppoGtUk6EOptMDxx0UoH",
                "id": "5AppoGtUk6EOptMDxx0UoH",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273ae1f56dbc14d331f5ed454a5",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02ae1f56dbc14d331f5ed454a5",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851ae1f56dbc14d331f5ed454a5",
                    "width": 64
                }],
                "name": "A Sky Full of Stars - Modern Pop",
                "release_date": "2021-02-19",
                "release_date_precision": "day",
                "total_tracks": 64,
                "type": "album",
                "uri": "spotify:album:5AppoGtUk6EOptMDxx0UoH"
            },
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/4npEfmQ6YuiwW1GpUmaq3F"},
                "href": "https://api.spotify.com/v1/artists/4npEfmQ6YuiwW1GpUmaq3F",
                "id": "4npEfmQ6YuiwW1GpUmaq3F",
                "name": "Ava Max",
                "type": "artist",
                "uri": "spotify:artist:4npEfmQ6YuiwW1GpUmaq3F"
            }],
            "available_markets": ["AE", "BG", "BH", "BY", "CY", "EE", "EG", "FI", "GR", "HK", "ID", "IL", "IN", "JO", "JP", "KR", "KW", "KZ", "LB", "LT", "LV", "MD", "MY", "OM", "PH", "PS", "QA", "RO", "RU", "SA", "SG", "TH", "TR", "TW", "UA", "VN", "ZA", "AD", "AL", "AT", "BA", "BE", "CH", "CZ", "DE", "DK", "DZ", "ES", "FR", "HR", "HU", "IT", "LI", "LU", "MA", "MC", "ME", "MK", "MT", "NL", "NO", "PL", "RS", "SE", "SI", "SK", "TN", "XK", "GB", "IE", "IS", "PT", "AR", "BR", "CL", "PY", "UY", "BO", "DO", "CA", "CO", "EC", "PA", "PE", "US", "CR", "GT", "HN", "MX", "NI", "SV"],
            "disc_number": 1,
            "duration_ms": 162398,
            "explicit": false,
            "external_ids": {"isrc": "USAT21906943"},
            "external_urls": {"spotify": "https://open.spotify.com/track/2siENBD1kTUv2dvslXHeiZ"},
            "href": "https://api.spotify.com/v1/tracks/2siENBD1kTUv2dvslXHeiZ",
            "id": "2siENBD1kTUv2dvslXHeiZ",
            "is_local": false,
            "name": "Kings & Queens",
            "popularity": 0,
            "preview_url": "https://p.scdn.co/mp3-preview/4faf4556f81106caa7e7e2a016c4753b3f1f8150?cid=beb884d9f66d4bd6a7f6a945ccb671e1",
            "track_number": 9,
            "type": "track",
            "uri": "spotify:track:2siENBD1kTUv2dvslXHeiZ"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {"spotify": "https://open.spotify.com/artist/3ycxRkcZ67ALN3GQJ57Vig"},
                    "href": "https://api.spotify.com/v1/artists/3ycxRkcZ67ALN3GQJ57Vig",
                    "id": "3ycxRkcZ67ALN3GQJ57Vig",
                    "name": "Masego",
                    "type": "artist",
                    "uri": "spotify:artist:3ycxRkcZ67ALN3GQJ57Vig"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {"spotify": "https://open.spotify.com/album/2wqG59dVVQlJaxoO7N0LJt"},
                "href": "https://api.spotify.com/v1/albums/2wqG59dVVQlJaxoO7N0LJt",
                "id": "2wqG59dVVQlJaxoO7N0LJt",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273f1814f1b76df2fa196e4f45e",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02f1814f1b76df2fa196e4f45e",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851f1814f1b76df2fa196e4f45e",
                    "width": 64
                }],
                "name": "Lady Lady",
                "release_date": "2018-09-07",
                "release_date_precision": "day",
                "total_tracks": 14,
                "type": "album",
                "uri": "spotify:album:2wqG59dVVQlJaxoO7N0LJt"
            },
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/3ycxRkcZ67ALN3GQJ57Vig"},
                "href": "https://api.spotify.com/v1/artists/3ycxRkcZ67ALN3GQJ57Vig",
                "id": "3ycxRkcZ67ALN3GQJ57Vig",
                "name": "Masego",
                "type": "artist",
                "uri": "spotify:artist:3ycxRkcZ67ALN3GQJ57Vig"
            }, {
                "external_urls": {"spotify": "https://open.spotify.com/artist/2IEnjZsVDEPKUTxNinyqba"},
                "href": "https://api.spotify.com/v1/artists/2IEnjZsVDEPKUTxNinyqba",
                "id": "2IEnjZsVDEPKUTxNinyqba",
                "name": "Tiffany Gouché",
                "type": "artist",
                "uri": "spotify:artist:2IEnjZsVDEPKUTxNinyqba"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 188053,
            "explicit": false,
            "external_ids": {"isrc": "QZD5H1800023"},
            "external_urls": {"spotify": "https://open.spotify.com/track/5tkR9JkBj3Ueeo8W4k8IZD"},
            "href": "https://api.spotify.com/v1/tracks/5tkR9JkBj3Ueeo8W4k8IZD",
            "id": "5tkR9JkBj3Ueeo8W4k8IZD",
            "is_local": false,
            "name": "Queen Tings",
            "popularity": 60,
            "preview_url": null,
            "track_number": 7,
            "type": "track",
            "uri": "spotify:track:5tkR9JkBj3Ueeo8W4k8IZD"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {"spotify": "https://open.spotify.com/artist/4O15NlyKLIASxsJ0PrXPfz"},
                    "href": "https://api.spotify.com/v1/artists/4O15NlyKLIASxsJ0PrXPfz",
                    "id": "4O15NlyKLIASxsJ0PrXPfz",
                    "name": "Lil Uzi Vert",
                    "type": "artist",
                    "uri": "spotify:artist:4O15NlyKLIASxsJ0PrXPfz"
                }],
                "available_markets": ["AD", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JP", "KR", "KW", "KZ", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "RO", "RS", "RU", "SE", "SG", "SI", "SK", "SV", "TH", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {"spotify": "https://open.spotify.com/album/733e1ZfktLSwj96X5rsMeE"},
                "href": "https://api.spotify.com/v1/albums/733e1ZfktLSwj96X5rsMeE",
                "id": "733e1ZfktLSwj96X5rsMeE",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b27341b41e6f7924e530a9b00f9c",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e0241b41e6f7924e530a9b00f9c",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d0000485141b41e6f7924e530a9b00f9c",
                    "width": 64
                }],
                "name": "Luv Is Rage 2",
                "release_date": "2017-08-25",
                "release_date_precision": "day",
                "total_tracks": 16,
                "type": "album",
                "uri": "spotify:album:733e1ZfktLSwj96X5rsMeE"
            },
            "artists": [{
                "external_urls": {"spotify": "https://open.spotify.com/artist/4O15NlyKLIASxsJ0PrXPfz"},
                "href": "https://api.spotify.com/v1/artists/4O15NlyKLIASxsJ0PrXPfz",
                "id": "4O15NlyKLIASxsJ0PrXPfz",
                "name": "Lil Uzi Vert",
                "type": "artist",
                "uri": "spotify:artist:4O15NlyKLIASxsJ0PrXPfz"
            }],
            "available_markets": ["AD", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JP", "KR", "KW", "KZ", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "RO", "RS", "RU", "SE", "SG", "SI", "SK", "SV", "TH", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 173419,
            "explicit": true,
            "external_ids": {"isrc": "USAT21703439"},
            "external_urls": {"spotify": "https://open.spotify.com/track/2ZdCrBA52bb4pIG3tOOZiQ"},
            "href": "https://api.spotify.com/v1/tracks/2ZdCrBA52bb4pIG3tOOZiQ",
            "id": "2ZdCrBA52bb4pIG3tOOZiQ",
            "is_local": false,
            "name": "Dark Queen",
            "popularity": 67,
            "preview_url": "https://p.scdn.co/mp3-preview/f51933054640169a15eea5df714b25b7cb978c4d?cid=beb884d9f66d4bd6a7f6a945ccb671e1",
            "track_number": 15,
            "type": "track",
            "uri": "spotify:track:2ZdCrBA52bb4pIG3tOOZiQ"
        }],
        "limit": 20,
        "next": "https://api.spotify.com/v1/search?query=queen&type=track&offset=20&limit=20",
        "offset": 0,
        "previous": null,
        "total": 149581
    },
    "playlists": {
        "href": "https://api.spotify.com/v1/search?query=queen&type=playlist&offset=0&limit=20",
        "items": [{
            "collaborative": false,
            "description": "For the Queens by a Queen.  Curated by Keke Palmer.",
            "external_urls": {"spotify": "https://open.spotify.com/playlist/37i9dQZF1DWSIO2QWRavWZ"},
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSIO2QWRavWZ",
            "id": "37i9dQZF1DWSIO2QWRavWZ",
            "images": [{
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003dd5097b0bbfb59ad715c9749",
                "width": null
            }],
            "name": "Queen",
            "owner": {
                "display_name": "Spotify",
                "external_urls": {"spotify": "https://open.spotify.com/user/spotify"},
                "href": "https://api.spotify.com/v1/users/spotify",
                "id": "spotify",
                "type": "user",
                "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYxMjE2MTA0NCwwMDAwMDAxMTAwMDAwMTc3NWM0OTRmMTkwMDAwMDE3NzRmYTlkMzE1",
            "tracks": {"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSIO2QWRavWZ/tracks", "total": 34},
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWSIO2QWRavWZ"
        }, {
            "collaborative": false,
            "description": "Freddie, Brian, Roger, John and their biggest hits all in one playlist.",
            "external_urls": {"spotify": "https://open.spotify.com/playlist/37i9dQZF1DWSNC7AjZWNry"},
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSNC7AjZWNry",
            "id": "37i9dQZF1DWSNC7AjZWNry",
            "images": [{
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000036705dfb8f5445fa4fdddf374",
                "width": null
            }],
            "name": "This Is Queen",
            "owner": {
                "display_name": "Spotify",
                "external_urls": {"spotify": "https://open.spotify.com/user/spotify"},
                "href": "https://api.spotify.com/v1/users/spotify",
                "id": "spotify",
                "type": "user",
                "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYwNTU3NDcyOCwwMDAwMDAxZjAwMDAwMTc1ZDNiNjE5ZGMwMDAwMDE3MGM0OTZhYmM2",
            "tracks": {"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSNC7AjZWNry/tracks", "total": 62},
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWSNC7AjZWNry"
        }, {
            "collaborative": false,
            "description": "A collection of Queens greatest and most memorable songs",
            "external_urls": {"spotify": "https://open.spotify.com/playlist/4Yoh0n6jqcmXDMJ6yBLYb4"},
            "href": "https://api.spotify.com/v1/playlists/4Yoh0n6jqcmXDMJ6yBLYb4",
            "id": "4Yoh0n6jqcmXDMJ6yBLYb4",
            "images": [{
                "height": null,
                "url": "https://i.scdn.co/image/ab67706c0000bebb2b093c0a2bb91bbc37ab45fa",
                "width": null
            }],
            "name": "Queen Greatest Hits",
            "owner": {
                "display_name": "Lone Vilstrup",
                "external_urls": {"spotify": "https://open.spotify.com/user/vilstruplone"},
                "href": "https://api.spotify.com/v1/users/vilstruplone",
                "id": "vilstruplone",
                "type": "user",
                "uri": "spotify:user:vilstruplone"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MzksZWUwMjllNjAyNTE3YjdjNDkxYWJiOWM3YmJlMDA1YmE1MmY2NzNiYQ==",
            "tracks": {"href": "https://api.spotify.com/v1/playlists/4Yoh0n6jqcmXDMJ6yBLYb4/tracks", "total": 21},
            "type": "playlist",
            "uri": "spotify:playlist:4Yoh0n6jqcmXDMJ6yBLYb4"
        }, {
            "collaborative": false,
            "description": "The official Queen & Slim playlist.",
            "external_urls": {"spotify": "https://open.spotify.com/playlist/37i9dQZF1DXaia9KkgeyFc"},
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaia9KkgeyFc",
            "id": "37i9dQZF1DXaia9KkgeyFc",
            "images": [{
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003063fffd00db290e97668b527",
                "width": null
            }],
            "name": "Queen and Slim Soundtrack Playlist",
            "owner": {
                "display_name": "Spotify",
                "external_urls": {"spotify": "https://open.spotify.com/user/spotify"},
                "href": "https://api.spotify.com/v1/users/spotify",
                "id": "spotify",
                "type": "user",
                "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTU4Mzg1MDAzMiwwMDAwMDAwODAwMDAwMTZlOWY5ODE1MmEwMDAwMDE3MGM0ZDE4Y2Ix",
            "tracks": {"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaia9KkgeyFc/tracks", "total": 27},
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXaia9KkgeyFc"
        }, {
            "collaborative": false,
            "description": "The finest from one of the world's greatest bands. Visit the official site at <a href=\"http://www.queenonline.com\">www.queenonline.com</a> and the official store for exclusive merch, vinyl and lots more <a href=\"https://www.queenonlinestore.com/\">here</a> ",
            "external_urls": {"spotify": "https://open.spotify.com/playlist/595cY5S1FpMpiEIWsk6dG7"},
            "href": "https://api.spotify.com/v1/playlists/595cY5S1FpMpiEIWsk6dG7",
            "id": "595cY5S1FpMpiEIWsk6dG7",
            "images": [{
                "height": null,
                "url": "https://i.scdn.co/image/ab67706c0000bebbbbd26a0703e3ed4b7747cc37",
                "width": null
            }],
            "name": "Queen Best Of",
            "owner": {
                "display_name": "Queen",
                "external_urls": {"spotify": "https://open.spotify.com/user/queen_hwr"},
                "href": "https://api.spotify.com/v1/users/queen_hwr",
                "id": "queen_hwr",
                "type": "user",
                "uri": "spotify:user:queen_hwr"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "ODA5LDFiNzNkN2RlNmM2NjdkMWJiYzBkNzAxMTc0ZjQ2MzY4MzBjN2QxZDU=",
            "tracks": {"href": "https://api.spotify.com/v1/playlists/595cY5S1FpMpiEIWsk6dG7/tracks", "total": 72},
            "type": "playlist",
            "uri": "spotify:playlist:595cY5S1FpMpiEIWsk6dG7"
        }, {
            "collaborative": false,
            "description": "A salute to all of the women that like it loud & heavy. Cover: Icon For Hire",
            "external_urls": {"spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXDJDWnzE39E"},
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXDJDWnzE39E",
            "id": "37i9dQZF1DWXDJDWnzE39E",
            "images": [{
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000031e117034167831d5574aba62",
                "width": null
            }],
            "name": "Heavy Queens",
            "owner": {
                "display_name": "Spotify",
                "external_urls": {"spotify": "https://open.spotify.com/user/spotify"},
                "href": "https://api.spotify.com/v1/users/spotify",
                "id": "spotify",
                "type": "user",
                "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYxMzcxMDgwMCwwMDAwMDBlZjAwMDAwMTc3YjhhOGI1MTMwMDAwMDE3N2I1YzRlYjli",
            "tracks": {"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXDJDWnzE39E/tracks", "total": 100},
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWXDJDWnzE39E"
        }, {
            "collaborative": false,
            "description": "The best in dancehall vibes for the gyaldem! Cover: HoodCelebrityy",
            "external_urls": {"spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0cNYCfLOrsu"},
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0cNYCfLOrsu",
            "id": "37i9dQZF1DX0cNYCfLOrsu",
            "images": [{
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000368f901d33aecc52497b1433d",
                "width": null
            }],
            "name": "Dancehall Queen",
            "owner": {
                "display_name": "Spotify",
                "external_urls": {"spotify": "https://open.spotify.com/user/spotify"},
                "href": "https://api.spotify.com/v1/users/spotify",
                "id": "spotify",
                "type": "user",
                "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYxMzczODM4OCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0cNYCfLOrsu/tracks", "total": 75},
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX0cNYCfLOrsu"
        }, {
            "collaborative": false,
            "description": "",
            "external_urls": {"spotify": "https://open.spotify.com/playlist/3NyBIm1EB7yQWZN91nS7hd"},
            "href": "https://api.spotify.com/v1/playlists/3NyBIm1EB7yQWZN91nS7hd",
            "id": "3NyBIm1EB7yQWZN91nS7hd",
            "images": [{
                "height": 640,
                "url": "https://mosaic.scdn.co/640/ab67616d0000b2733ac318439ae56ce048d7bf5dab67616d0000b2734b0bf4cad684e0b9edc932eaab67616d0000b27368384dd85fd5e95831252f60ab67616d0000b273f6954c1f074f66907a8c5483",
                "width": 640
            }, {
                "height": 300,
                "url": "https://mosaic.scdn.co/300/ab67616d0000b2733ac318439ae56ce048d7bf5dab67616d0000b2734b0bf4cad684e0b9edc932eaab67616d0000b27368384dd85fd5e95831252f60ab67616d0000b273f6954c1f074f66907a8c5483",
                "width": 300
            }, {
                "height": 60,
                "url": "https://mosaic.scdn.co/60/ab67616d0000b2733ac318439ae56ce048d7bf5dab67616d0000b2734b0bf4cad684e0b9edc932eaab67616d0000b27368384dd85fd5e95831252f60ab67616d0000b273f6954c1f074f66907a8c5483",
                "width": 60
            }],
            "name": "Queen radio station",
            "owner": {
                "display_name": "Humberto Ortiz",
                "external_urls": {"spotify": "https://open.spotify.com/user/12160619828"},
                "href": "https://api.spotify.com/v1/users/12160619828",
                "id": "12160619828",
                "type": "user",
                "uri": "spotify:user:12160619828"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTE0LDk1ZmZmMDVkMGI2YzcxZDI1YzY5NmRhZTRhNTVmZGY5MDMwZjYxMTE=",
            "tracks": {"href": "https://api.spotify.com/v1/playlists/3NyBIm1EB7yQWZN91nS7hd/tracks", "total": 110},
            "type": "playlist",
            "uri": "spotify:playlist:3NyBIm1EB7yQWZN91nS7hd"
        }, {
            "collaborative": false,
            "description": "The most definitive female voices in Disco. Cover: Chaka Khan",
            "external_urls": {"spotify": "https://open.spotify.com/playlist/37i9dQZF1DXdJyxIBq7Xdy"},
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdJyxIBq7Xdy",
            "id": "37i9dQZF1DXdJyxIBq7Xdy",
            "images": [{
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000327d75fc67f6d2495f72f7d58",
                "width": null
            }],
            "name": "Queens of Disco",
            "owner": {
                "display_name": "Spotify",
                "external_urls": {"spotify": "https://open.spotify.com/user/spotify"},
                "href": "https://api.spotify.com/v1/users/spotify",
                "id": "spotify",
                "type": "user",
                "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTU2ODAxOTYwMiwwMDAwMDAwNjAwMDAwMTY5MmFmYzZkMWYwMDAwMDE2ZDE1NDA1Y2Jm",
            "tracks": {"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdJyxIBq7Xdy/tracks", "total": 33},
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXdJyxIBq7Xdy"
        }, {
            "collaborative": false,
            "description": "",
            "external_urls": {"spotify": "https://open.spotify.com/playlist/3W37tgVI81dvQqkLmunn8R"},
            "href": "https://api.spotify.com/v1/playlists/3W37tgVI81dvQqkLmunn8R",
            "id": "3W37tgVI81dvQqkLmunn8R",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b",
                "width": 640
            }],
            "name": "Queen - Live Aid",
            "owner": {
                "display_name": "Luis Lozada",
                "external_urls": {"spotify": "https://open.spotify.com/user/12129802622"},
                "href": "https://api.spotify.com/v1/users/12129802622",
                "id": "12129802622",
                "type": "user",
                "uri": "spotify:user:12129802622"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTQsNWEzYzA0MjU5ZTM2ODllOTMzMTJhMTczMWFhMjkwM2FlMmRjOTVhNQ==",
            "tracks": {"href": "https://api.spotify.com/v1/playlists/3W37tgVI81dvQqkLmunn8R/tracks", "total": 11},
            "type": "playlist",
            "uri": "spotify:playlist:3W37tgVI81dvQqkLmunn8R"
        }, {
            "collaborative": false,
            "description": "",
            "external_urls": {"spotify": "https://open.spotify.com/playlist/4wtr200vqdiEP0vsvdpSeI"},
            "href": "https://api.spotify.com/v1/playlists/4wtr200vqdiEP0vsvdpSeI",
            "id": "4wtr200vqdiEP0vsvdpSeI",
            "images": [{
                "height": 640,
                "url": "https://mosaic.scdn.co/640/ab67616d0000b273008b06ec71019afd70153889ab67616d0000b27359998815d706661e2c404d9fab67616d0000b273a1e05e1048e2cf2737adf742ab67616d0000b273ce4f1737bc8a646c8c4bd25a",
                "width": 640
            }, {
                "height": 300,
                "url": "https://mosaic.scdn.co/300/ab67616d0000b273008b06ec71019afd70153889ab67616d0000b27359998815d706661e2c404d9fab67616d0000b273a1e05e1048e2cf2737adf742ab67616d0000b273ce4f1737bc8a646c8c4bd25a",
                "width": 300
            }, {
                "height": 60,
                "url": "https://mosaic.scdn.co/60/ab67616d0000b273008b06ec71019afd70153889ab67616d0000b27359998815d706661e2c404d9fab67616d0000b273a1e05e1048e2cf2737adf742ab67616d0000b273ce4f1737bc8a646c8c4bd25a",
                "width": 60
            }],
            "name": "Queen/Elton john/ Billy Joel and such ",
            "owner": {
                "display_name": "Gabby Harmon",
                "external_urls": {"spotify": "https://open.spotify.com/user/1233835662"},
                "href": "https://api.spotify.com/v1/users/1233835662",
                "id": "1233835662",
                "type": "user",
                "uri": "spotify:user:1233835662"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "ODUsYjI1MmNhZTk0MmU5YmRjZDBlY2M5ZGI5MGU1YWNmMWMwNmQxZmNiMQ==",
            "tracks": {"href": "https://api.spotify.com/v1/playlists/4wtr200vqdiEP0vsvdpSeI/tracks", "total": 79},
            "type": "playlist",
            "uri": "spotify:playlist:4wtr200vqdiEP0vsvdpSeI"
        }, {
            "collaborative": false,
            "description": "The modern queens holding it down for black music culture. Cover: Ms Banks",
            "external_urls": {"spotify": "https://open.spotify.com/playlist/37i9dQZF1DXdyj2AzHZMLm"},
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdyj2AzHZMLm",
            "id": "37i9dQZF1DXdyj2AzHZMLm",
            "images": [{
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000371d8504f6557bf5cc1b2b111",
                "width": null
            }],
            "name": "Galdem - Queens",
            "owner": {
                "display_name": "Spotify",
                "external_urls": {"spotify": "https://open.spotify.com/user/spotify"},
                "href": "https://api.spotify.com/v1/users/spotify",
                "id": "spotify",
                "type": "user",
                "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYxMzczODQyMiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdyj2AzHZMLm/tracks", "total": 80},
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXdyj2AzHZMLm"
        }, {
            "collaborative": false,
            "description": "",
            "external_urls": {"spotify": "https://open.spotify.com/playlist/0GBAQQhC5nWrjBRwN1sgI2"},
            "href": "https://api.spotify.com/v1/playlists/0GBAQQhC5nWrjBRwN1sgI2",
            "id": "0GBAQQhC5nWrjBRwN1sgI2",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b",
                "width": 640
            }],
            "name": "Queen – Live AID (Wembly '85)",
            "owner": {
                "display_name": "Jan Ivy Provily",
                "external_urls": {"spotify": "https://open.spotify.com/user/11183391061"},
                "href": "https://api.spotify.com/v1/users/11183391061",
                "id": "11183391061",
                "type": "user",
                "uri": "spotify:user:11183391061"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTEsNWVkMWUyZDQ4MDUzNWUwNWUzOGM1OGNlODIyZDJiODE2NDE1MWM2NQ==",
            "tracks": {"href": "https://api.spotify.com/v1/playlists/0GBAQQhC5nWrjBRwN1sgI2/tracks", "total": 7},
            "type": "playlist",
            "uri": "spotify:playlist:0GBAQQhC5nWrjBRwN1sgI2"
        }, {
            "collaborative": false,
            "description": "Based on the drama starring Kim Jung Hyun and Shin Hye Sun",
            "external_urls": {"spotify": "https://open.spotify.com/playlist/0N1P10iXvWmS5THYpE84A5"},
            "href": "https://api.spotify.com/v1/playlists/0N1P10iXvWmS5THYpE84A5",
            "id": "0N1P10iXvWmS5THYpE84A5",
            "images": [{
                "height": null,
                "url": "https://i.scdn.co/image/ab67706c0000bebb814510791de5e3d4e43769c7",
                "width": null
            }],
            "name": "Mr Queen OST",
            "owner": {
                "display_name": "Tam Vu",
                "external_urls": {"spotify": "https://open.spotify.com/user/infiniteinspirit13"},
                "href": "https://api.spotify.com/v1/users/infiniteinspirit13",
                "id": "infiniteinspirit13",
                "type": "user",
                "uri": "spotify:user:infiniteinspirit13"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "NjYsMDVjNDViZWQwZjg0YzA2MGNiNTgxZGE2OWM1YzM2NzExZTU5YjQ1NA==",
            "tracks": {"href": "https://api.spotify.com/v1/playlists/0N1P10iXvWmS5THYpE84A5/tracks", "total": 8},
            "type": "playlist",
            "uri": "spotify:playlist:0N1P10iXvWmS5THYpE84A5"
        }, {
            "collaborative": false,
            "description": "my favorite hits from movie and added some others i feel that are related.. please enjoy , contact: louteayeashay@gmail.com",
            "external_urls": {"spotify": "https://open.spotify.com/playlist/0MsvTLo2gTz6RrSxOmzhOx"},
            "href": "https://api.spotify.com/v1/playlists/0MsvTLo2gTz6RrSxOmzhOx",
            "id": "0MsvTLo2gTz6RrSxOmzhOx",
            "images": [{
                "height": null,
                "url": "https://i.scdn.co/image/ab67706c0000bebbeda0f9e48925bed391712293",
                "width": null
            }],
            "name": "Queen & Slim Soundtrack 2021",
            "owner": {
                "display_name": "catherine",
                "external_urls": {"spotify": "https://open.spotify.com/user/yyzaiievt8ftr9eq1yhdp9jh3"},
                "href": "https://api.spotify.com/v1/users/yyzaiievt8ftr9eq1yhdp9jh3",
                "id": "yyzaiievt8ftr9eq1yhdp9jh3",
                "type": "user",
                "uri": "spotify:user:yyzaiievt8ftr9eq1yhdp9jh3"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTU0LGZiODQwNjFhZjM0ZDlhNDU0NDdkZWNkMDU3ZmFlZTJlNDMyYjhiYjI=",
            "tracks": {"href": "https://api.spotify.com/v1/playlists/0MsvTLo2gTz6RrSxOmzhOx/tracks", "total": 25},
            "type": "playlist",
            "uri": "spotify:playlist:0MsvTLo2gTz6RrSxOmzhOx"
        }, {
            "collaborative": false,
            "description": "Toutes les chançons du nouvel album FEED d&#x27;Eva Queen !",
            "external_urls": {"spotify": "https://open.spotify.com/playlist/0FFTHHD1XMag3s0JVpY7pz"},
            "href": "https://api.spotify.com/v1/playlists/0FFTHHD1XMag3s0JVpY7pz",
            "id": "0FFTHHD1XMag3s0JVpY7pz",
            "images": [{
                "height": null,
                "url": "https://i.scdn.co/image/ab67706c0000bebb9234c1f409fb0e27416180d4",
                "width": null
            }],
            "name": "Eva Queen",
            "owner": {
                "display_name": "sanlin",
                "external_urls": {"spotify": "https://open.spotify.com/user/60pevphvr6mw0cms0hc43evq5"},
                "href": "https://api.spotify.com/v1/users/60pevphvr6mw0cms0hc43evq5",
                "id": "60pevphvr6mw0cms0hc43evq5",
                "type": "user",
                "uri": "spotify:user:60pevphvr6mw0cms0hc43evq5"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MzQsMzQ4MmJkMTU3YzQ1NzQ5MWU4YWI5MzJlMTYwMTQzY2ZhMmRiNTU1NA==",
            "tracks": {"href": "https://api.spotify.com/v1/playlists/0FFTHHD1XMag3s0JVpY7pz/tracks", "total": 16},
            "type": "playlist",
            "uri": "spotify:playlist:0FFTHHD1XMag3s0JVpY7pz"
        }, {
            "collaborative": false,
            "description": "Bringing the best female artists to you",
            "external_urls": {"spotify": "https://open.spotify.com/playlist/6oyfCZJW4sU2SXIUfHPRFB"},
            "href": "https://api.spotify.com/v1/playlists/6oyfCZJW4sU2SXIUfHPRFB",
            "id": "6oyfCZJW4sU2SXIUfHPRFB",
            "images": [{
                "height": null,
                "url": "https://i.scdn.co/image/ab67706c0000bebb6c7c64261b4124f8bc6a31df",
                "width": null
            }],
            "name": "Queens and Castles",
            "owner": {
                "display_name": "FAM BASE",
                "external_urls": {"spotify": "https://open.spotify.com/user/22mgm63um4i74u2kwvndipdra"},
                "href": "https://api.spotify.com/v1/users/22mgm63um4i74u2kwvndipdra",
                "id": "22mgm63um4i74u2kwvndipdra",
                "type": "user",
                "uri": "spotify:user:22mgm63um4i74u2kwvndipdra"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "NTksMjVjODQyNjliNjI2NTMzZGEyZmQ4NGZjMzdiY2NmNjAwZDc1Njc0Nw==",
            "tracks": {"href": "https://api.spotify.com/v1/playlists/6oyfCZJW4sU2SXIUfHPRFB/tracks", "total": 37},
            "type": "playlist",
            "uri": "spotify:playlist:6oyfCZJW4sU2SXIUfHPRFB"
        }, {
            "collaborative": false,
            "description": "",
            "external_urls": {"spotify": "https://open.spotify.com/playlist/75iLKufbVBEyDHvcUwVT3X"},
            "href": "https://api.spotify.com/v1/playlists/75iLKufbVBEyDHvcUwVT3X",
            "id": "75iLKufbVBEyDHvcUwVT3X",
            "images": [{
                "height": 640,
                "url": "https://mosaic.scdn.co/640/ab67616d0000b2732e6d2fc239d8d63112c323f1ab67616d0000b27331201e115bc96e22de15248bab67616d0000b27375bd5b279542acc2b3c14ccaab67616d0000b2737da91c49472dc9ecd24bb9e2",
                "width": 640
            }, {
                "height": 300,
                "url": "https://mosaic.scdn.co/300/ab67616d0000b2732e6d2fc239d8d63112c323f1ab67616d0000b27331201e115bc96e22de15248bab67616d0000b27375bd5b279542acc2b3c14ccaab67616d0000b2737da91c49472dc9ecd24bb9e2",
                "width": 300
            }, {
                "height": 60,
                "url": "https://mosaic.scdn.co/60/ab67616d0000b2732e6d2fc239d8d63112c323f1ab67616d0000b27331201e115bc96e22de15248bab67616d0000b27375bd5b279542acc2b3c14ccaab67616d0000b2737da91c49472dc9ecd24bb9e2",
                "width": 60
            }],
            "name": "Mr. Queen (철인왕후) OST",
            "owner": {
                "display_name": "sabadomica",
                "external_urls": {"spotify": "https://open.spotify.com/user/sabadomica"},
                "href": "https://api.spotify.com/v1/users/sabadomica",
                "id": "sabadomica",
                "type": "user",
                "uri": "spotify:user:sabadomica"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MjEsZmVhYmZmYjgwYTY3ZDQ3ZDg3OTc3YmQzMTJlMjU2OTEzMWQ1NThiNQ==",
            "tracks": {"href": "https://api.spotify.com/v1/playlists/75iLKufbVBEyDHvcUwVT3X/tracks", "total": 11},
            "type": "playlist",
            "uri": "spotify:playlist:75iLKufbVBEyDHvcUwVT3X"
        }, {
            "collaborative": false,
            "description": "Music featured in the series, as well as songs from the era, and modern music with a sound similar to the time period.",
            "external_urls": {"spotify": "https://open.spotify.com/playlist/4NOind9oIIUxaLR8uiWnnd"},
            "href": "https://api.spotify.com/v1/playlists/4NOind9oIIUxaLR8uiWnnd",
            "id": "4NOind9oIIUxaLR8uiWnnd",
            "images": [{
                "height": null,
                "url": "https://i.scdn.co/image/ab67706c0000bebb3b9adf48b4a32ff33b6b9db0",
                "width": null
            }],
            "name": "The Queen's Gambit Soundtrack • Netflix 2020",
            "owner": {
                "display_name": "Retro Tones",
                "external_urls": {"spotify": "https://open.spotify.com/user/o16a7ny37b9026pxfoqc4rhe1"},
                "href": "https://api.spotify.com/v1/users/o16a7ny37b9026pxfoqc4rhe1",
                "id": "o16a7ny37b9026pxfoqc4rhe1",
                "type": "user",
                "uri": "spotify:user:o16a7ny37b9026pxfoqc4rhe1"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "NDc4LDg5OWE1ZTg4MTJlZjBiN2E3YjNiMTZkMWI3MDc4YzUzNWRmYThlMTc=",
            "tracks": {"href": "https://api.spotify.com/v1/playlists/4NOind9oIIUxaLR8uiWnnd/tracks", "total": 95},
            "type": "playlist",
            "uri": "spotify:playlist:4NOind9oIIUxaLR8uiWnnd"
        }, {
            "collaborative": false,
            "description": "Listen to the special edition playlist of Queen Naija&#x27;s &quot;missunderstood&quot; album featuring 17 diary entries!",
            "external_urls": {"spotify": "https://open.spotify.com/playlist/7EYGvhQiYKOchnr2grJb73"},
            "href": "https://api.spotify.com/v1/playlists/7EYGvhQiYKOchnr2grJb73",
            "id": "7EYGvhQiYKOchnr2grJb73",
            "images": [{
                "height": null,
                "url": "https://i.scdn.co/image/ab67706c0000bebb9c69c5a89bf0fcce671bfd05",
                "width": null
            }],
            "name": "Queen Naija - missunderstood: The Diaries Edition",
            "owner": {
                "display_name": "Queen Naija",
                "external_urls": {"spotify": "https://open.spotify.com/user/2z2l9phxgzogzk6vdmzygstic"},
                "href": "https://api.spotify.com/v1/users/2z2l9phxgzogzk6vdmzygstic",
                "id": "2z2l9phxgzogzk6vdmzygstic",
                "type": "user",
                "uri": "spotify:user:2z2l9phxgzogzk6vdmzygstic"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTg2LDY5NTFmYTJiZDIxOTRhNWJlNjljYWZmY2ZjYTlkNTcyMzhjY2NkYzY=",
            "tracks": {"href": "https://api.spotify.com/v1/playlists/7EYGvhQiYKOchnr2grJb73/tracks", "total": 66},
            "type": "playlist",
            "uri": "spotify:playlist:7EYGvhQiYKOchnr2grJb73"
        }],
        "limit": 20,
        "next": "https://api.spotify.com/v1/search?query=queen&type=playlist&offset=20&limit=20",
        "offset": 0,
        "previous": null,
        "total": 197331
    }
};

test('Displays Results Correctly', () => {


    const component = renderer.create(
        <Results results={results}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
