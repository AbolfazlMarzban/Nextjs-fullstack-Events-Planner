import Link from "next/link"
import Image from "next/image"
// import styles from "@styles/Home.module.css"


export const HomePage = ({ data })=>{
    return(
    <main>
    {data.map(ev => 
    <Link href={`/events/${ev.id}`} key={ev.id} passHref={ true }>
      {/* <Image src={ev.image} alt={ev.title} width={200} height={200}/> */}
      <img src={ev.image} alt={ev.title} ></img>
      <h2>{ev.title}</h2>
      <p>{ev.description}</p>
    </Link>
    )}
    </main>
    )
}

