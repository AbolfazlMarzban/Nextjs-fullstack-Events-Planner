import React from 'react';

function page(props) {
    return (
        <div>
            <h1>Our Single Event</h1>
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

}