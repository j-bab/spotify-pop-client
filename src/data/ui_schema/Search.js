export default  {
    'ui:field': 'layout',
    'ui:layout': [
        {
            query: {md: 6},
            type: {md: 6},
        },
        {
            genre: {md: 6},
        },
        {
            released: {md: 12},
        },
        {
            year: {md: 12},
        },
    ],
    type: {
        'ui:widget': "checkboxes",
        'ui:options': {
            inline: true
        }
    },
    released: {
        'ui:widget': "radio",
        'ui:options': {
            inline: true
        }
    },
    year: {
        'ui:field': 'layout',
        'ui:layout': [
            {
                from: {md: 6},
                to: {md: 6},
            }
        ]
    }
};