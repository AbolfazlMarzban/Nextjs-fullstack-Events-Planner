import Link from 'next/link';
import Image from 'next/image';

export const HomePage = ({ data }) => (
  <div className="home_body">
    {data?.map((ev) => (
      <Link key={ev.id} href={`/events/${ev.id}`} passHref className="card">
          <div className="image">
            {/* <Image width={400} height={400} alt={ev.title} src={ev.image} /> */}
            <img src={ev.image} alt={ev.title} style={{width: '100%'}} />
          </div>
          <div className="content">
            <h2 style={{'textAlign': 'left'}}> {ev.title} </h2>
            <p style={{'textAlign': 'left'}}> {ev.description} </p>
          </div>   
      </Link>
    ))}
  </div>
);
