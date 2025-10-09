export default {
    name: 'residences',
    type: 'document',
    title: 'Residences',
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



            ]
        },
        {name:'specs',title:'Specs',type:'array',of:[
            {name:'spec',title:'Spec',type:'object',fields:[
                {name:'title',type:'string',title:'Title'},
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

            ]},
            
        ]},
        
      {name:'details',title:'Details',type:'array',of:[
            {name:'detail',title:'Detial',type:'object',fields:[
                {name:'title',type:'string',title:'Title'},
                {name:'copy',type:'array',title:'Copy',of:[{type:'block'}]},
                {
            name: 'footerLogos', type: 'array', title: 'Footer Logos', of: [
                {
                    name: 'logo', title: "Logo", type: 'object', fields: [
                        { name: 'image', title: 'Image', type: "image" },
                        { name: 'url', type: 'string', title: "URL" }
                    ]
                }
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

            ]},
        ]},
        {
            name: 'feats', type: 'object', title: 'Features', fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'subhead', type: 'string', title: 'Subhead' },

                {
                    name: 'feat', title: 'Feature', type: 'array', of: [
                        {
                            name: 'categories', type: 'object', title: 'Categories', fields: [
                                { name: 'title', type: 'string', title: 'Title' },
                                {
                                    name: 'points', type: 'array', title: "Points", of: [{
                                        name: 'point', title: 'Point', type: "object", fields: [
                                            { name: 'title', title: 'Title', type: 'string' },

                                        ]
                                    }]
                                }

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
                        }
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
                  {
                            name: 'outro', type: 'array', title: "Outro", of: [
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
        {
         name:'floorplan',type:'object',title:'Floorplan',fields:[
            {name:'title',type:'string',title:'Title'},
            {name:'subhead',type:'array', title:'Subhead',of:[{type:'block'}]},
            {name:'rooms',type:'array',title:"Rooms",of:[{
                name:'roomType',type:'object',title:'Rooom Type',fields:[
                    {name:'title',type:'string',title:"Title"},
                    {name:'rooms',type:'array',title:"Rooms",of:[{
                        name:'room',type:'object',title:"Room",fields:[
                            {name:"name",type:'string',title:'Title'},
                            {name:'copy',type:"array",title:"Copy",of:[{type:'block'}]},
                            {name:'image',type:'image',title:"Image"},
                            {name: 'cta', type: 'object', title: 'CTA', fields: [
                                { name: 'label', title: "Label", type: 'string' },
                                { name: 'url', title: 'url', type: 'string' },
                                {
                                    name: 'file',
                                    type: 'file',
                                    title: "File",
                                    options: {
                                        storeOriginalFilename: true
                                    }
                                }
                    ]
                },


                        ]
                    },
                    
                ]},
                {name:'copy',type:"array",title:"Copy",of:[{type:'block'}]},
                    {name: 'cta', type: 'object', title: 'CTA', fields: [
                                { name: 'label', title: "Label", type: 'string' },
                                { name: 'url', title: 'url', type: 'string' },
                                {
                                    name: 'file',
                                    type: 'file',
                                    title: "File",
                                    options: {
                                        storeOriginalFilename: true
                                    }
                                }
                    ]
                }
                ]
            }]},


         ]   
        },
        {
             name:'smart',type:'object',title:'Smart Technology',fields:[
                  {name:'title',type:'string',title:'Title'},
                 {name:'subhead',type:'array', title:'Subhead',of:[{type:'block'}]},
                 {name:'copy',type:'array', title:'Copy',of:[{type:'block'}]},
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