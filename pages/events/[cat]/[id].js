import React from 'react';

function page({data}) {
    console.log('data', data)
    return (
        <div>
            <img src={data.image} alt={data.title}></img>
            <h1>{data.title}</h1>
            <p>{data.description }</p>
        </div>
    );
}

export default page;

export async function getStaticPaths(){

    const { allEvents } = await import('/data/data.json')
    const allPaths = allEvents.map(path =>{
        return{
            params:{
                cat: path.city,
                id: path.id
            }
        }
    })
    return {
        paths: allPaths,
        fallback: false
    }
}

export async function getStaticProps(context){
console.log(context)
const id = context.params.id
const { allEvents } = await import('/data/data.json')
const eventData = allEvents.find(ev => ev.id === id)
return{
    props:{
        data: eventData
    }
}
}