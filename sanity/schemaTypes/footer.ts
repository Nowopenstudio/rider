export default {
    name: 'footer',
    type: 'document',
    title: 'Footer',
    fields: [
        {
            name:"contact",title:"Contact",type:'object',fields:[
                {name:'phone',title:'Phone',type:'string'},
                {
                    name: 'cta', title: "CTA", type: 'object', fields: [
                        { type: 'string', title: 'Label', name: 'label' },
                        { type: 'string', title: 'URL', name: 'url' },
                    ]
                },
            ]
        },
        {
            name: 'form', title: "Form", type: 'object', fields: [
                { name: 'headline', type: 'string', title: "Headline" },
                { name: 'copy', type: 'array', title: 'Copy',of:[{type:'block'}] },
                {
                    name: 'input', type: 'array', title: "Inputs", of: [
                        {
                            name: 'type', type: 'object', title: 'Type', fields: [
                                { name: 'label', type: 'string', title: 'Label' },
                                { name: 'value', type: 'string', title: "Value" }
                            ]
                        }
                    ]
                },
                {
                    name: 'rooms', type: 'object', title: "Room", fields: [
                        {name:'label',title:'label',type:'string'},
                        {name:'options',type:'array',title:'Options',of:[
                              {
                            name: 'type', type: 'object', title: 'Type', fields: [
                                { name: 'label', type: 'string', title: 'Label' },
                                { name: 'value', type: 'string', title: "Value" }
                            ]
                        }
                        ]}
                      
                    ]
                },
                      {
                    name: 'broker', type: 'object', title: "Broker", fields: [
                        {name:'label',title:'label',type:'string'},
                        {name:'options',type:'array',title:'Options',of:[
                              {
                            name: 'type', type: 'object', title: 'Type', fields: [
                                { name: 'label', type: 'string', title: 'Label' },
                                { name: 'value', type: 'string', title: "Value" }
                            ]
                        }
                        ]}
                      
                    ]
                },

                {
                    name: 'cta', title: "CTA", type: 'object', fields: [
                        { type: 'string', title: 'Label', name: 'label' },
                        { type: 'string', title: 'URL', name: 'url' },
                    ]
                },
                { name: 'disclaimers', type: 'array', title: "Disclaimers", of: [{ type: 'block' }] }

            ]
        },

        {
            name: 'disclaim', title: "Disclaimers", type: 'object', fields: [
                { name: 'logo', type: 'image', title: 'Logo' },
                { name: 'disclaimers', type: 'array', title: "Disclaimers", of: [
                   {
                     name: 'disclaim', title: "Disclaimers", type: 'object', fields: [  {
                    name: 'copy', type: 'array', title: "Copy", of: [
                        { type: 'block' }
                    ]
                },]
                     
                }

            ]
        },
                {
                    name: 'privacy', type: 'array', title: "Privacy Policy", of: [
                        { type: 'block' }
                    ]
                },
                {
                    name: 'terms', type: 'array', title: "Terms of Use", of: [
                        { type: 'block' }
                    ]
                },
                {
                    name: 'faqs', type: "array", title: 'FAQs', of: [
                        {
                            name: 'single', type: 'object', title: 'Single', fields: [
                                { name: 'question', type: 'array', title: "Question", of: [{ type: 'block' }] },
                                { name: 'answers', type: 'array', title: "Answers", of: [{ type: 'block' }] }
                            ]
                        },

                    ]
                },
                { name: 'copyright', type: 'array', title: "Copyrite", of: [{ type: 'block' }] }
            ]
        },

        {
            name: 'contacts', type: 'array', title: 'Contacts', of: [
                {
                    name: 'contact', type: 'object', title: "Contact", fields: [
                        { name: "title", type: 'string', title: "Title" },
                        { name: 'copy', type: 'array', title: "Copy", of: [{ type: 'block' }] }
                    ]
                }
            ]
        },
        {
            name: 'footerVid', type: "object", title: 'Footer Video', fields: [
                { name: 'image', type: 'image', title: 'Image' },
                { name: 'video', type: 'mux.video', title: 'Video' }
            ]
        },
   
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
            name: 'sucessVid', type: "object", title: 'Success Video', fields: [
                { name: 'image', type: 'image', title: 'Image' },
                { name: 'video', type: 'mux.video', title: 'Video' },
                 { name: 'top', type: 'array', title: "Top", of: [{ type: 'block' }] },
                  { name: 'bottom', type: 'array', title: "Bottom", of: [{ type: 'block' }] }
            ]
        },






    ],
     preview: {
            select: {
              title: '_type'
            },
            
          }
}