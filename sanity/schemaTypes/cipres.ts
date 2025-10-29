export default {
    name: 'cipres',
    type: 'document',
    title: 'Cipres',
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
                { name: 'subtitle', type: 'array', of: [{ type: 'block' }] },
                { name: 'subhead', type: 'array', of: [{ type: 'block' }] },
                 { name: 'copy', type: 'array', of: [{ type: 'block' }] },
                 {name:'left',type:'object',fields:[
                     {
                            name: 'top',  type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                
                                { name: 'captions', title: 'Captions', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        },
                         {
                            name: 'bottom',  type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'captions', title: 'Captions', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        },
                 ]},
                 {name:'right',type:'object',fields:[
                     {
                            name: 'benefits',  type: 'array', of: [
                                {name:'single',type:'object',fields:[
                                    {name:'title',type:'string',title:"Title"}
                                ]}
                            ]
                        },
                         {
                            name: 'media',  type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'captions', title: 'Captions', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        },
                 ]},


            ]
        },
       {name:'edge',type:'object',title:'Edge',fields:[
         {name:'title',type:'array',title:'Title',of:[{type:'block'}]},
         {name:'copy',type:'array',title:'Copy',of:[{type:'block'}]},
          {
                            name: 'benefits',  type: 'array', of: [
                                {name:'single',type:'object',fields:[
                                    {name:'title',type:'string',title:"Title"}
                                ]}
                            ]
                        },
         {name:'profile',type:'object',title:'Profile',fields:[
            { name: 'name', type: 'string',title:"Name"},
                { name: 'title', type: 'array', title:"Title", of: [{ type: 'block' }] },
             {
                            name: 'media',  type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'captions', title: 'Captions', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        },
        ]}
       ]},
         {
            name: 'residences', title: 'Residences', type: 'object', fields: [
                { name: 'title', type: 'array', of: [{ type: 'block' }] },
                { name: 'subtitle', type: 'array', of: [{ type: 'block' }] },
                
                 { name: 'copy', type: 'array', of: [{ type: 'block' }] },
                
                 {
                            name: 'media',  type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'captions', title: 'Captions', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        },
                 {
                    name: 'gallery', type: 'array', title: "Gallery", of: [
                        {
                            name: 'single', title: "single", type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'caption', title: 'Caption', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        }
                    ]
                },


            ]
        },
         {
            name: 'services', title: 'Services', type: 'object', fields: [
                { name: 'title', type: 'array', of: [{ type: 'block' }] },
                { name: 'subtitle', type: 'array', of: [{ type: 'block' }] },
                 {
                            name: 'media',  type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'captions', title: 'Captions', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        },
                    {
                            name: 'benefits',  type: 'array', of: [
                                {name:'single',type:'object',fields:[
                                    {name:'title',type:'string',title:"Title"},
                                    {name:'subhead',type:'array',title:"Subhead",of:[{type:'block'}]}
                                ]}
                            ]
                        },


            ]
        },
         {
            name: 'tech', title: 'Tech', type: 'object', fields: [
                { name: 'title', type: 'array', of: [{ type: 'block' }] },
                { name: 'subtitle', type: 'array', of: [{ type: 'block' }] },
                {name: 'copy', type: 'array', of: [{ type: 'block' }] },
                 {
                            name: 'media',  type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'captions', title: 'Captions', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        },
                    {
                            name: 'screen',  type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'captions', title: 'Captions', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        },

            ]
        },
        {
            name: 'setup', title: 'Set Up', type: 'object', fields: [
                { name: 'title', type: 'array', of: [{ type: 'block' }] },
                 {
                            name: 'media',  type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'captions', title: 'Captions', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        },
                        {
                            name: 'benefits',  type: 'array', of: [
                                {name:'single',type:'object',fields:[
                                    {name:'title',type:'array',title:"Title",of:[{type:'block'}]}
                                ]}
                            ]
                        },
                 {
                    name: 'gallery', type: 'array', title: "Gallery", of: [
                        {
                            name: 'single', title: "single", type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'caption', title: 'Caption', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        }
                    ]
                },
                


            ]
        },
         {
            name: 'guest', title: 'Guest', type: 'object', fields: [
                { name: 'title', type: 'array', of: [{ type: 'block' }] },
                { name: 'subtitle', type: 'array', of: [{ type: 'block' }] },
                
                 { name: 'copy', type: 'array', of: [{ type: 'block' }] },
                 {
                    name: 'gallery', type: 'array', title: "Gallery", of: [
                        {
                            name: 'single', title: "single", type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'caption', title: 'Caption', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        }
                    ]
                },


            ]
        },

         {
            name: 'potential', title: 'potential', type: 'object', fields: [
                { name: 'title', type: 'array', of: [{ type: 'block' }] },
                { name: 'subtitle', type: 'array', of: [{ type: 'block' }] },
                
                 { name: 'copy', type: 'array', of: [{ type: 'block' }] },
                
                 {
                            name: 'media',  type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'captions', title: 'Captions', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        },
                 


            ]
        },
         {
            name: 'schedule', title: 'Schedule', type: 'object', fields: [
                
                 { name: 'title', type: 'array', of: [{ type: 'block' }] },
                 { name: 'copy', type: 'array', of: [{ type: 'block' }] },
                 { name: 'contact', type: 'array', of: [{ type: 'block' }] },
                
                 {
                            name: 'media',  type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'captions', title: 'Captions', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        },

            ]
        },


        {
            name: 'cta', title: 'Page CTA', type: 'object', fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'title', title: 'Title',  type: "array", of: [{ type: 'block' }]  },
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