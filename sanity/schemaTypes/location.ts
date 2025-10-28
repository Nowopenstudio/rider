export default {
    name: 'location',
    type: 'document',
    title: 'Location',
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
                {
                    name: 'cta', title: "CTA", type: 'object', fields: [
                        { type: 'string', title: 'Label', name: 'label' },
                        { type: 'string', title: 'URL', name: 'url' },
                    ]
                },



            ]
        },
        { name: 'locations', title: 'Locations', type: 'array', of: [
            {name:'location',type:"object",title:"Location",fields:[
                 { name: 'label', title: 'Label', type: 'string' },
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'copy', title: "Copy", type: "array", of: [{ type: 'block' }] },
                {
                            name: 'media', title: "media", type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'video', title: 'video', type: 'mux.video' },
                                { name: 'captions', title: 'Captions', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        },
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
                

            ]}
        ]},
               
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