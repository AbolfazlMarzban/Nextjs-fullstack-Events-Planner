import React from 'react';

function index({data}) {
    return (
        <div>
            {data.map(ev =>(
                <a href={`/events/${ev.id}`} key={ev.id}>
                    <img src={ev.image} alt={ev.title}></img>
                    <h2>{ev.title}</h2>
                </a>
            ))}
        </div>
    );
}

export default index;

export async function getStaticProps(){
    const { events_categories } = await import('/data/data.json')
    console.log(events_categories)
    return{
        props:{
            data: events_categories,
        }
    }
}

