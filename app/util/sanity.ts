
import {createClient} from 'next-sanity'
import {apiVersion, dataset, projectId, token} from "../../env"
import imageUrlBuilder from '@sanity/image-url'


// export async function getWeather() {
//   const apiKey = weather; // Get from environment variables
//   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New%20York,US&appid=${apiKey}&&units=imperial`;

//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     return data
//   } catch (error) {
//     console.error(error);
//   }
// }

export const getRange = ((num:any, in_min:any, in_max:any, out_min:any, out_max:any) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
})

export const getRangeC = ((num:any, in_min:any, in_max:any, out_min:any, out_max:any) => {
const curr = (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
return Math.ceil(Math.min(Math.max(curr, out_min), out_max))
})


export const filterKey =((array:any,sec:any,term:any)=>{
      const results = array.filter(function (entry:any) { return entry[sec] === term; });
     
      return results
    })

export const filterIndex =((array:any,term:any)=>{
   
      const results = array.findIndex(function (x:any) { return x.slug == term });
  
      return results
    })


    
  

export const getDate=((date:any)=>{
  const newdate = new Date(date)
  const options: Intl.DateTimeFormatOptions = {
    timeZone: "America/New_York",
    weekday: "short",
    month: "2-digit",
    day: "2-digit",
   
  };
  const dateTimeFormat = new Intl.DateTimeFormat("en-US", options);
  
  const parts = dateTimeFormat.formatToParts(newdate);
  const partValues = parts.map((p) => p.value);
  console.log(partValues)
  return(`${partValues[0]} ${partValues[2]}.${partValues[4]}`);
})

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: false,
    perspective:'published'
})

export const isEvening=()=>{

const hours = new Date().getHours()

const isDayTime = hours > 9 && hours < 17
const today = new Date();
if(today.getDay() == 6 || today.getDay() == 0){return true}
else{return !isDayTime}

}

const builder = imageUrlBuilder(client)

export function urlFor(source: any){
    return builder.image(source)
}

export const getData = (async (query:any) =>{
   
  const initQuery = query
  const data = await client.fetch(initQuery,{},
      { next : { revalidate : 50 }});
  return {data}

})


 export const getRandom =(min:any, max:any)=>{
    return Math.floor(Math.random() * (max - min) + min);
}

export const getRandomA =(min:any, max:any)=>{
    return (Math.random() * (max - min) + min);
}

export const scrolltoHash = (element_id: string)=>{
    const element = document.getElementById(element_id)
    setTimeout(function () {
      element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    },100)
   
  }

  export const scrollToPos = (posY: number)=>{
    window.scrollTo({
      top: posY,
      left: 100,
      behavior: "smooth",
    });
  }

export default async function addDoc(doc:any) {

const postDoc = await client.create(doc).then(res => {return res})

}

export const delData = (async (query:any) =>{

    const initQuery = query
    const delContent = await client.delete({
        query: `*[_type == "${query}"]`
        })
    })



export const sendEmail= (async (profile:any,form:any,contact:any)=>{
    console.log("step1",profile)
    try{
        const response = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: profile.email,
            name: profile.firstName,
            subject:form.emailSub,
            message:form.emailer,
            sender:'ro@nowopen.studio'
          }),
        });
  
        // handle success
        if (response.ok) {
        console.log('great')
        } else {
         console.log(response)
        }
    }
     catch (error) {
      console.log("Error sending email:", error);
      
    }
      
})

export const sendContact= (async (message:any)=>{
  try{
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: message.email,
          name: message.name,
          subject:message.subject,
          message:message.message,
          sender:message.contact
        }),
      });

      // handle success
      if (response.ok) {
      console.log('great')
      } else {
       console.log(response)
      }
  }
   catch (error) {
    console.log("Error sending email:", error);
    
  }
    
})
