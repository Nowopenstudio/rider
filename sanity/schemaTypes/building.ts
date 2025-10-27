export default {
    name: 'building',
    type: 'document',
    title: 'Building',
    groups: [
        {
            name: 'meta',
            title: 'Meta',
        },
    ],
    fields: [
       
        {
            name: 'build', title: 'Building', type: 'object', fields: [
                { name: 'title', type: 'array', title:'Title', of: [{ type: 'block' }] },
                { name: 'subhead', type: 'array',title:'Subhead', of: [{ type: 'block' }] },
                { name: 'copy', type: 'array',title:'COpy', of: [{ type: 'block' }] },
                {
                    name: 'hero', title: "Hero Image", type: 'object', fields: [
                        { name: 'image', title: 'Image', type: 'image' },
                        { name: 'video', title: 'video', type: 'mux.video' },
                        { name: 'captions', title: 'Captions', type: 'array', of: [{ type: 'block' }] },
                        { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                    ]
                },
                    {
                            name: 'building', title: "single", type: 'object', fields: [
                                { name: 'image', title: 'Image', type: 'image' },
                                { name: 'video', title: 'video', type: 'mux.video' },
                                { name: 'array', title: 'credits', type: 'mux.video' }
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
                    name: 'outro', type: 'array', title: 'Outro', of: [{ type: 'block' }]
                }


            ]
        },
        {
            name: 'landmark', type: 'object', title: 'Landmark', fields: [
                 { name: 'title', type: 'array', title:'Title', of: [{ type: 'block' }] },
                
                {
                    name: 'services', title: 'Services', type: 'array', of: [
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
                }


            ]
        },
        {
            name: 'specs', title: 'Specifics', type: 'object', fields: [
                {
                    name: 'spec', type: 'array', title: "Specific", of: [{
                        name: 'single', type: 'object', title: "Single", fields: [
                            { name: 'title', type: 'string', title: 'Title' },
                            { name: 'metric', type: 'string', title: "Metric" }
                        ]
                    }]
                },
                {
                    name: 'media', title: 'Media', type: 'object', fields: [
                        { name: 'image', title: 'thumb', type: 'image' },
                        { name: 'video', title: 'Video', type: 'mux.video' },
                        { name: 'credits', title: 'Credits', type: "array", of: [{ type: 'block' }] }
                    ]
                },

            ]
        },
          {
            name:'devStory', title:"Developer Story",type:'object',fields:[
                {name:'label',title:'Label',type:'string'},
                {name:'title',title:'Title',type:'array',of:[{type:'block'}]},
                {name:'quote',type:'array',title:'Quote',of:[{type:'block'}]},
                {name:'profile',type:'object',title:'Profile',fields:[
                    {name:'name',type:'string',title:'Name'},
                    {name:'title',type:'array',of:[{type:'block'}]},
                    {name:'image',type:'image',title:"Image"}
                ]},
                {name:'copy',type:'array',title:"Copy",of:[{type:'block'}]},
                {
            name: 'footerLogos', type: 'array', title: 'Footer Logos', of: [
                {
                    name: 'logo', title: "Logo", type: 'object', fields: [
                        { name: 'image', title: 'Image', type: "image" },
                        { name: 'url', type: 'string', title: "URL" }
                    ]
                }
            ]
        }
            ]
        },
          {
            name:'rise', title:"Rider Rises",type:'object',fields:[
              
                {name:'title',title:'Title',type:'array',of:[{type:'block'}]},
                {name:'copy',type:'array',title:'Copy',of:[{type:'block'}]},
                { name: 'image', title: 'thumb', type: 'image' },
         
            ]
        },
        
        {
            name: 'retail', title: 'Retail', type: 'object', fields: [
                { name: 'label', type: 'string', title: "Label" },
                  { name: 'title', type: 'array', title: 'Title', of: [{ type: 'block' }] },
                { name: 'copy', type: 'array', title: 'Copy', of: [{ type: 'block' }] },
                 
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
                 {
                    name: 'intro', title: 'Gallery Intro', type: 'object', fields: [
                        { name: 'image', title: 'thumb', type: 'image' },
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
                                        { name: 'caption', title: 'Caption', type: 'array', of: [{ type: 'block' }] },
                                        { name: 'credits', title: 'Credits', type: 'array', of: [{ type: 'block' }] },
                                    ]
                                }
                            ]
                        },
                  {
                    name: 'outro', title: 'Gallery Outro', type: 'object', fields: [
                        { name: 'image', title: 'thumb', type: 'image' },
                        { name: 'video', title: 'Video', type: 'mux.video' },
                        { name: 'credits', title: 'Credits', type: "array", of: [{ type: 'block' }] }
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