export default {
    title: "Search",
    type: "object",
    required: [
        "released",
        "type",
        "query"
    ],
    properties: {
        query: {
            type: "string",
            title: "Search",
            minLength: 3
        },
        genre: {
            type: "string",
            title: "Genre",
            examples: [
                "Rock",
                "Techno",
                "Blues",
                "Pop"
            ]
        },
        type: {
            type: "array",
            title: "Type",
            default: ["track"],
            items: {
                type: "string",
                enum: [
                    "album",
                    "artist",
                    "track",
                    "playlist"
                ],
                enumNames: [
                    "Album",
                    "Artist",
                    "Song",
                    "Playlist"
                ]
            },
            minItems: 1,
            uniqueItems: true
        },
        released: {
            type: "string",
            title: "When released",
            enum: [
                "any_time",
                "new_release",
                "year_range"
            ],
            enumNames: [
                "Any Time",
                "Recently",
                "Between years"
            ],
            default: "any_time"
        },
    },
    dependencies: {
        released: {
            oneOf: [
                {
                    properties: {
                        released: {
                            enum: [
                                "any_time",
                                "new_release",
                            ]
                        }
                    }
                },
                {
                    properties: {
                        released: {
                            enum: [
                                "year_range"
                            ]
                        },
                        year: {
                            type: "object",
                            title: "Which years?",
                            properties: {
                                from: {
                                    title: "Between",
                                    type: "integer",
                                    minimum: 1900,
                                    maximum: 2021
                                },
                                to: {
                                    title: "And",
                                    type: "integer",
                                    minimum: 1900,
                                    maximum: 2021
                                },
                            },
                            required: [
                                "from",
                                "to",
                            ]
                        }
                    },
                    required: [
                        "year"
                    ]
                },
            ]
        }
    }
};