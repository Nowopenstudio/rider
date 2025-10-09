export default {
    name: 'home',
    type: 'document',
    title: 'Homepage',
    groups: [
        {
            name: 'meta',
            title: 'Meta',
        },
    ],
    fields: [
        {
            name: 'header', title: "header", type: 'object', fields: [
                {
                    name: 'headlines', type: 'array', title: "headlines", of: [{
                        type: 'object', title: "headline", name: 'headline', fields: [
                            { name: 'title', title: 'title', type: 'array',of:[{type:'block'}] },
                            {
                                name: "lang", title: 'Langauge', initialValue: 'en', type: "string", list: [
                                    { title: 'EN', value: 'en' },
                                    { title: 'ES', value: 'es' },
                                    { title: 'PT', value: 'pt' }
                                ]

                            }
                        ]
                    }]
                },
                {
                    name: 'cta', title: "CTA", type: 'object', fields: [
                        { type: 'string', title: 'Label', name: 'label' },
                        { type: 'string', title: 'URL', name: 'url' },
                    ]
                },
              {
                    name: 'video', title: 'video', type: 'object', fields: [
                        {name:'image',title:'thumb',type:'image'},
                        { name: 'video', title: 'Video', type: 'mux.video' },
                        { name: 'credits', title: 'Credits', type: "array", of: [{ type: 'block' }] }
                    ]
                },
                {
                    name: 'gallery', type: 'array', title: "Gallery", of: [
                        {
                            name: 'single', title: "single", type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'video', title: 'video', type: 'mux.video' },
                                { name: 'array', title: 'credits', type: 'mux.video' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'welcome', title: "Welcome", type: 'object', fields: [
                { name: 'title', title: "Title", type: 'array', of: [{ type: 'block' }] },
                { name: 'copy', title: 'Descriptor', type: 'array', of: [{ type: 'block' }] },

            ]

        },
        {
            name: 'build', title: 'Building', type: 'object', fields: [
                { name: 'title', type: 'array', of: [{ type: 'block' }] },
                { name: 'copy', type: 'array', of: [{ type: 'block' }] },
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
                }

            ]
        },
        {
            name: 'menu', title: 'Menu', type: 'array', of: [
                {
                    name: 'single', title: "Menu Item", type: 'object', fields: [
                        { name: 'title', title: "Title", type: 'string' },
                        { name: 'copy', title: 'Descriptor', type: "array", of: [{ type: 'block' }] },
                        { name: 'url', title: 'URL', type: 'string' },
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

                    ]
                }
            ]

        },
        {
            name: 'location', title: 'Location', type: 'object', fields: [
                { name: 'title', title: "Title", type: 'string' },
                { name: 'copy', title: 'Copy', type: 'array', of: [{ type: 'block' }] },
                {
                    name: 'video', title: 'video', type: 'object', fields: [
                        { name: 'image', title: 'Thumbnail', type: 'image' },
                        { name: 'video', title: 'Video', type: 'mux.video' },
                        { name: 'credits', title: 'Credits', type: "array", of: [{ type: 'block' }] }
                    ]
                },
            ]
        },
        {
            name: 'residency', title: 'Residency', type: 'object', fields: [
                { name: 'title', title: "Title", type: 'string' },
                { name: 'copy', title: 'Copy', type: 'array', of: [{ type: 'block' }] },
                {
                    name: 'gallery', type: 'array', title: "Gallery", of: [
                        {
                            name: 'single', title: "single", type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'video', title: 'video', type: 'mux.video' },
                                { name: 'caption', title: "Caption", type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        }
                    ]
                },
                {
                    name: 'video', title: 'video', type: 'object', fields: [
                        { name: 'image', title: 'Thumbnail', type: 'image' },
                        { name: 'video', title: 'Video', type: 'mux.video' },
                        { name: 'credits', title: 'Credits', type: "array", of: [{ type: 'block' }] }
                    ]
                },
            ]
        },
        {
            name: 'interiors', title: 'Interiors', type: 'object', fields: [
                { name: 'title', title: 'Title', type: 'string' },
                {
                    name: "headline", type: 'object', title: 'headline', fields: [
                        { name: 'copy', title: "Copy", type: "array", of: [{ type: 'block' }] },
                        {
                            name: 'cta', title: "CTA", type: 'object', fields: [
                                { type: 'string', title: 'Label', name: 'label' },
                                { type: 'string', title: 'URL', name: 'url' },
                            ]
                        },
                    ]
                },
                { name: 'subhead', type: 'array', of: [{ type: 'block' }] },
                {
                    name: 'features', title: 'Features', type: 'array', of: [
                        {
                            name: 'feature', title: "Feautre", type: 'object', fields: [
                                { name: 'title', title: "Title", type: 'string' },
                                { name: 'copy', title: 'Descriptor', type: "array", of: [{ type: 'block' }] },
                                { name: 'url', title: 'URL', type: 'string' },
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

                            ]
                        }
                    ]

                },
                {
                    name: 'qoute', title: "quote", type: 'object', fields: [
                        { name: 'copy', title: "copy", type: "array", of: [{ type: "block" }] },
                        { name: 'author', title: "Author", type: "string" },
                        { name: 'title', title: "title", type: "string" },
                    ]
                },


            ]
        },
          {
            name: 'rooms', title: 'Rooms', type: 'object', fields: [
                { name: 'headline', title: "Headline", type: "array", of: [{ type: 'block' }] },
                { name: 'copy', title: "Copy", type: "array", of: [{ type: 'block' }] },
                 {
                    name: 'cta', title: "CTA", type: 'object', fields: [
                        { type: 'string', title: 'Label', name: 'label' },
                        { type: 'string', title: 'URL', name: 'url' },
                    ]
                },
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
                
            ]
        },
        {
            name: 'amenities', title: 'Amenities', type: 'object', fields: [
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'headline', title: "Headline", type: "array", of: [{ type: 'block' }] },
                { name: 'copy', title: "Copy", type: "array", of: [{ type: 'block' }] },
                 {
                    name: 'cta', title: "CTA", type: 'object', fields: [
                        { type: 'string', title: 'Label', name: 'label' },
                        { type: 'string', title: 'URL', name: 'url' },
                    ]
                },
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
                
            ]
        },

         {
            name: 'cta', title: 'Page CTA', type: 'object', fields: [
                {name:'label',title:'Label',type:'string'},
                {name:'title',title:'Title',type:'string'},
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