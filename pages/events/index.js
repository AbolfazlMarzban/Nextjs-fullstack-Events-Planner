import React from 'react';

function index({data}) {
    return (
        <div>
                   <h1>Events</h1>
                   <a href=''>
          <img />
          <h2>Events in London</h2>
          </a>
          <a href=''>
          <img />
          <h2>Events in Vancouver</h2>
          </a>
          <a href=''>
          <img />
          <h2>Events in Toronto</h2>
          </a>
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

