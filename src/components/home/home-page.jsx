import Link from "next/link"
import Image from "next/image"


export const HomePage = ({ data })=>{
    return(
    <div className="home-body">
    {data.map(ev => 
    <Link className="card" href={`/events/${ev.id}`} key={ev.id} passHref={ true }>
      {/* <Image src={ev.image} alt={ev.title} width={200} height={200}/> */}
      <img src={ev.image} alt={ev.title} ></img>
      <div className="content">
      <h2>{ev.title}</h2>
      <p>{ev.description}</p>
      </div>
    
    </Link>
    )}
    </div>
    )
}

