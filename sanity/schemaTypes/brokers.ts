export default {
    name: 'brokers',
    type: 'document',
    title: 'Brokers',
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

                { name: 'title', type: 'array', title: 'Title', of: [{ type: 'block' }] },

            ]
        },
        {
            name: 'sales', title: 'Sales Sheet', type: 'object', fields: [
                { name: 'title', type: 'array', title: 'Title', of: [{ type: 'block' }] },
                { name: 'subhead', type: 'array', title: 'Subhead', of: [{ type: 'block' }] },
                {
                    name: 'categories', title: "Categories", type: 'array', of: [
                        {
                            name: 'category', title: 'Category', type: 'object', fields: [
                                { name: 'title', type: 'string', title: 'Title' },
                                { name: 'bio', title: 'Bio', type: "array", of: [{ type: 'block' }] },
                            ]
                        }
                    ]
                },

            ]
        },

        {
            name: 'toolkit', title: "Toolkit", type: 'object', fields: [
                { name: 'title', title: "Title", type: "string" },
                { name: 'subhead', type: 'array', title: 'Subhead', of: [{ type: 'block' }] },
                { name: 'copy', type: 'array', title: 'Copy', of: [{ type: 'block' }] },
                {
                    name: 'gallery', type: 'array', title: "Gallery", of: [
                        {
                            name: 'single', title: "single", type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'video', title: 'video', type: 'mux.video' },
                                { name: 'captions', title: 'Captions', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        }
                    ]
                },

            ]
        },
        {
            name: 'renders', title: 'Renders', type: 'array', of: [
                {
                    name: 'single', title: "Menu Item", type: 'object', fields: [
                        { name: 'title', title: "Title", type: 'string' },
                        { name: 'copy', title: 'Descriptor', type: "array", of: [{ type: 'block' }] },
                        {
                            name: 'gallery', type: 'array', title: "Gallery", of: [
                                {
                                    name: 'single', title: "single", type: 'object', fields: [
                                        { name: 'image', title: 'Image', type: 'image' },
                                        { name: 'video', title: 'video', type: 'mux.video' },
                                        { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                                    ]
                                }
                            ]
                        },
                        {
                            name: 'cta', type: 'object', title: 'CTA', fields: [
                                { name: 'label', title: "Label", type: 'string' },
                                { name: 'url', title: 'url', type: 'string' },
                                {
                                    name: 'file',
                                    type: 'file',
                                    title: "File",
                                    options: {
                                        storeOriginalFilename: true
                                    }
                                },

                            ]
                        },

                    ]
                }
            ]

        },

        {
            name: 'cta', title: 'Page CTA', type: 'object', fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'title', title: 'Title', type: 'string' },
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