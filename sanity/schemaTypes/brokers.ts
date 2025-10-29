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
            name:'sales', title:"Sales",type:'object',fields:[
                {name:'title',title:"Title",type:'array',of:[{type:'block'}]},
                {name:'subhead',title:'Subhead',type:'array',of:[{type:'block'}]},
                {name:'sheets',type:"array",title:'Sheets',of:[
                    {name:'single',type:'object',title:'Single',fields:[
                        {name:'title',title:'Title',type:"string"}
                    ]},

                ]}
            ]
        },

          {
            name:'toolkit', title:"toolkit",type:'object',fields:[
                {name:'title',title:"Title",type:'array',of:[{type:'block'}]},
                {name:'subhead',title:'Subhead',type:'array',of:[{type:'block'}]},
                {name:'copy',title:"Copy",type:'array',of:[{type:'block'}]},
                 {
                    name: 'cta', title: "CTA", type: 'object', fields: [
                        { type: 'string', title: 'Label', name: 'label' },
                        { type: 'string', title: 'URL', name: 'url' },
                    ]
                },
                 {
                            name: 'media', title: "single", type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'video', title: 'video', type: 'mux.video' },
                                { name: 'captions', title: 'Captions', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        },
                
            ]
        },
        {
            name:'resources',type:'array',title:"Resources",of:[
               {name:'single',type:'object',title:'Single',fields:[
                        {name:'title',title:'Title',type:"string"},
                        {name:'copy',title:'Copy',type:'array',of:[{type:'block'}]},
                          {
                    name: 'cta', title: "CTA", type: 'object', fields: [
                        { type: 'string', title: 'Label', name: 'label' },
                        { type: 'string', title: 'URL', name: 'url' },
                    ]
                },
                {
                            name: 'media', title: "single", type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'video', title: 'video', type: 'mux.video' },
                                { name: 'captions', title: 'Captions', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        },

                    ]},
            ]
        },
        {
            name:'brokers', title:"Broker",type:'object',fields:[
                {name:'title',title:"Title",type:'array',of:[{type:'block'}]},
                {name:'copy',title:'Copy',type:'array',of:[{type:'block'}]},
                {name:'profiles',type:"array",title:'Profiles',of:[
                    {name:'single',type:'object',title:'Single',fields:[
                        {name:'name',title:'name',type:"string"},
                        {name:'contact',title:'Contact',type:"array",of:[{type:'block'}]},
                        {
                            name: 'media', title: "single", type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'video', title: 'video', type: 'mux.video' },
                                { name: 'captions', title: 'Captions', type: 'array', of: [{ type: 'block' }] },
                                { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                            ]
                        },
                    ]},

                ]},
                  {
                            name: 'media', title: "single", type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'video', title: 'video', type: 'mux.video' },
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