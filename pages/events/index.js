import React from 'react';
import Link from 'next/link';

function index({data}) {
    return (
        <div>
            {data.map(ev =>(
                <Link href={`/events/${ev.id}`} key={ev.id} passHref={true}>
             
                    <img src={ev.image} alt={ev.title}></img>
                    <h2>{ev.title}</h2>
                
                </Link>
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

