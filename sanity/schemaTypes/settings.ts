export default {
    name: 'settings',
    type: 'document',
    title: 'Settings',
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
                    name: 'headlines', type: 'array', title: "headlines", of: [
                  { name: 'title', title: 'title', type: 'string' }]
                },







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