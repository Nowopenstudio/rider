export default {
    name: 'map',
    type: 'document',
    title: 'Map',
    fields: [
        {name:'map', title:'Map', type:'image'},
        {name:'locations',title:'Locations',type:'array',of:[
            {name:'categories',type:'object',title:'Categories',fields:[
                {name:'title',type:'string',title:'Title'},
                {name:'points',type:'array',title:"Points",of:[{
                    name:'point',title:'Point',type:"object",fields:[
                        {name:'title',title:'Title',type:'string'},
                        {name:'lat', type:'number',title:'Lat'},
                        {name:'long', type:'number',title:'Long'},
                        {name:'area',type:'string',title:'Area',initialValue:"wynwood",list: [
                                    { title: 'Wynwood', value: 'wynwood' },
                                    { title: 'Design District', value: 'design-district' },
                                    { title: 'Midtown Miami', value: 'midtown-miami' },
                                    { title: 'Edgewater', value: 'Edgewater' },
                                ]}
                    ]
                }]}
            
            ]}
        ]}


        
    ],
     preview: {
            select: {
              title: '_type'
            },
            
          }
}