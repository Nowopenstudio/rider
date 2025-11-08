export default {
    name: 'creators',
    type: 'document',
    title: 'Creators',
    groups: [
        {
            name: 'meta',
            title: 'Meta',
        },
    ],
    fields: [
        {
            name: 'header', title: "header", type: 'object', fields: [
                { name: 'title', title: "Site Descriptor", type: "string" },
                {
                    name: 'video', title: 'video', type: 'object', fields: [
                        { name: 'image', title: 'thumb', type: 'image' },
                        { name: 'video', title: 'Video', type: 'mux.video' },
                        { name: 'credits', title: 'Credits', type: "array", of: [{ type: 'block' }] }
                    ]
                },

            ]
        },
        {
            name: 'intro', title: 'Intro', type: 'object', fields: [
                { name: 'title', type: 'array', of: [{ type: 'block' }] },
                { name: 'subhead', type: 'array', of: [{ type: 'block' }] },
                { name: 'copy', type: 'array', of: [{ type: 'block' }] },
                { name: 'outro', type: 'array', of: [{ type: 'block' }] },
                {
                    name: 'media', title: "single", type: 'object', fields: [
                        { name: 'image', title: 'Image', type: 'image' },
                        { name: 'video', title: 'video', type: 'mux.video' },
                        { name: 'captions', title: 'Captions', type: 'array', of: [{ type: 'block' }] },
                        { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                    ]
                },
                {
                    name: 'cta', title: "CTA", type: 'object', fields: [
                        { type: 'string', title: 'Label', name: 'label' },
                        { type: 'string', title: 'URL', name: 'url' },
                    ]
                },



            ]
        },
        {
            name: 'legends', title: 'Legends', type: 'object', fields: [
                { name: 'headline', title: 'Headline', type: 'array', of: [{ type: 'block' }] },

            ]
        },
        {
            name: 'artists', title: "Artists", type: 'array', of: [
                {
                    name: 'artist', title: 'Artist', type: 'object', preview: {
                        select: {
                            title: 'profile.name'
                        },

                    }, fields: [
                        {
                            name: 'profile', type: 'object', title: 'Profile', fields: [
                                { name: 'name', type: 'string', title: 'Name' },
                                { name: 'title', type: 'string', title: 'Title' },
                                { name: 'image', type: 'image', title: "Image" },
                                {
                                    name: 'icon', title: "Icon", type: 'object', fields: [
                                        { name: 'image', title: 'Image', type: 'image' },
                                        { name: 'video', title: 'video', type: 'mux.video' },
                                        { name: 'title', title: 'Title', type: 'array', of: [{ type: 'block' }] },
                                        { name: 'copy', title: 'Copy', type: 'array', of: [{ type: 'block' }] },
                                        { name: 'captions', title: 'Captions', type: 'array', of: [{ type: 'block' }] },
                                        { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                                    ]
                                },
                                { name: 'intro', title: 'Intro Bio', type: "array", of: [{ type: 'block' }] },

                                { name: 'bio', title: 'Bio', type: "array", of: [{ type: 'block' }] },
                                {
                                    name: 'gallery', type: 'array', title: "Gallery", of: [
                                        {
                                            name: 'single', title: "single", type: 'object', fields: [
                                                { name: 'image', title: 'Image', type: 'image' },
                                                { name: 'video', title: 'video', type: 'mux.video' },
                                                { name: 'title', title: 'Title', type: 'array', of: [{ type: 'block' }] },
                                                { name: 'copy', title: 'Copy', type: 'array', of: [{ type: 'block' }] },
                                                { name: 'captions', title: 'Captions', type: 'array', of: [{ type: 'block' }] },
                                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: 'feat', title: "Feat", type: 'object', fields: [
                                        { name: 'image', title: 'Image', type: 'image' },
                                        { name: 'video', title: 'video', type: 'mux.video' },
                                        { name: 'headline', title: 'Headline', type: 'array', of: [{ type: 'block' }] },
                                        { name: 'captions', title: 'Captions', type: 'array', of: [{ type: 'block' }] },
                                        { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                                    ]
                                },
                                {
                                    name: 'media', title: "Bottom Feat", type: 'object', fields: [
                                        { name: 'image', title: 'Image', type: 'image' },
                                        { name: 'video', title: 'video', type: 'mux.video' },
                                        { name: 'title', title: 'Title', type: 'array', of: [{ type: 'block' }] },
                                        { name: 'subtitle', title: 'Subtitle', type: 'array', of: [{ type: 'block' }] },

                                        { name: 'captions', title: 'Captions', type: 'array', of: [{ type: 'block' }] },
                                        { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                                    ]
                                }
                            ]
                        },
                    ]
                }
            ]
        },

        {
            name: 'cta', title: 'Page CTA', type: 'object', fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'title', title: 'Title', type: "array", of: [{ type: 'block' }] },
                { name: 'copy', title: "Copy", type: "array", of: [{ type: 'block' }] },
                {
                    name: 'cta', title: "CTA", type: 'object', fields: [
                        { type: 'string', title: 'Label', name: 'label' },
                        { type: 'string', title: 'URL', name: 'url' },
                    ]
                },
                { name: 'image', title: 'Image', type: 'image' },

            ]
        },
        {
            name: 'next', title: 'Next Page', type: 'object', fields: [
                { type: 'string', title: 'Label', name: 'label' },
                { type: 'string', title: 'URL', name: 'url' },

            ]
        },


        {
            name: "meta",
            title: 'Metadata',
            type: "object",
            group: "meta",
            fields: [
                {
                    type: 'string',
                    title: 'Title',
                    name: 'title',
                },
                {
                    type: 'text',
                    title: 'Description',
                    name: 'description',
                },
                {
                    type: 'string',
                    title: 'Keywords',
                    name: 'keywords',
                },
                {
                    type: 'image',
                    name: 'image',
                    title: 'image'

                }
            ]
        }
    ],
    preview: {
        select: {
            title: '_type'
        },

    }
}