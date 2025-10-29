export default {
    name: 'amenities',
    type: 'document',
    title: 'Amenities',
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
                    name: 'feat', title: 'Features', type: 'object', fields: [
                        {

                            name: 'title', type: 'string', title: 'Title'
                        },
                         {

                            name: 'subhead', type: 'string', title: 'Subhead'
                        },
                        {
                            name: 'points', type: 'array', title: "Points", of: [{
                                name: 'point', title: 'Point', type: "object", fields: [
                                    { name: 'title', title: 'Title', type: 'string' },

                                ]

                            }

                            ]
                        },
                         {
                            name: 'media', title: "Media", type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'video', title: 'video', type: 'mux.video' },
                                { name: 'caption', title: 'Caption', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        },
                        {
                    name: 'gallery', type: 'array', title: "Gallery", of: [
                        {
                            name: 'single', title: "single", type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'video', title: 'video', type: 'mux.video' },
                                { name: 'caption', title: 'Caption', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        }
                    ]
                },
                    ]
                },
                {name:'outro',title:'Outro',type:'object',fields:[
                      {
                            name: 'media', title: "Media", type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'video', title: 'video', type: 'mux.video' },
                                { name: 'caption', title: 'Caption', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        },
                        {
                    name: 'gallery', type: 'array', title: "Gallery", of: [
                        {
                            name: 'single', title: "single", type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'video', title: 'video', type: 'mux.video' },
                                { name: 'caption', title: 'Caption', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        }
                    ]
                },
                ]},
       
       
       

        {
            name: 'box', title: 'Box', type: 'object', fields: [
                { name: 'label', type: 'string', title: "Label" },
                { name: 'title', type: 'array', title: 'Title', of: [{ type: 'block' }] },
                { name: 'copy', type: 'array', title: 'Copy', of: [{ type: 'block' }] },

                {
                            name: 'feat', title: "Feat", type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'video', title: 'video', type: 'mux.video' },
                                { name: 'caption', title: 'Caption', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        },
                {
                            name: 'outro', title: "Outro", type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'video', title: 'video', type: 'mux.video' },
                                { name: 'caption', title: 'Caption', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        },








            ]
        },
         {
            name: 'swing', title: 'Swing', type: 'object', fields: [
                { name: 'label', type: 'string', title: "Label" },
                { name: 'title', type: 'array', title: 'Title', of: [{ type: 'block' }] },
                { name: 'copy', type: 'array', title: 'Copy', of: [{ type: 'block' }] },

                {
                            name: 'feat', title: "Feat", type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'video', title: 'video', type: 'mux.video' },
                                { name: 'caption', title: 'Caption', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        },


            ]
        },
         {
            name: 'beach', title: 'Swing', type: 'object', fields: [
                { name: 'label', type: 'string', title: "Label" },
                { name: 'title', type: 'array', title: 'Title', of: [{ type: 'block' }] },
                { name: 'copy', type: 'array', title: 'Copy', of: [{ type: 'block' }] },
                {
                            name: 'feat', title: "Feat", type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'video', title: 'video', type: 'mux.video' },
                                { name: 'caption', title: 'Caption', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        },


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