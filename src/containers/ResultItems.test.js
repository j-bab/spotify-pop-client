import React from 'react';
import renderer from 'react-test-renderer';
import ResultItems from './ResultItems';

const items = [{
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
    }];

test('Displays ResultItems Correctly', () => {


    const component = renderer.create(
        <ResultItems items={items}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
