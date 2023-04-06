import React from 'react';
import Link from 'next/link';
function index({data, pageName}) {
    return (
        <div>
            {/* <h1>Events in {data[0].city}</h1> */}
            <h1>Events in {pageName}</h1>

            <div>
                {data.map (ev =>(
                    <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref={ true }>
                        <img src={ev.image} alt={ev.title}></img>
                        <h2>{ev.title}</h2>
                        <p>{ev.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default index;

export async function getStaticPaths(){
const { events_categories } = await import('/data/data.json')
const allPaths = events_categories.map(ev =>{
    return{
        params:{
            cat: ev.id.toString()
        }
    }
})
console.log('allPaths', allPaths)
return{
    paths: allPaths,
    fallback: false
}
}

export async function getStaticProps(context){
    console.log('context', context)
    const id = context?.params.cat
    const { allEvents } = await import('/data/data.json')
    console.log('id', id)
    const data = allEvents.filter(ev => ev.city === id)
    console.log('data', data)
    
    return{
        props: {
            data, 
            pageName: id
        }
    }
}