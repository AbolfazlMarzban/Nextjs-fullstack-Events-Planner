import Link from "next/link"
import Image from "next/image"

export const Header = () => {
    return(
        <header>
          <div className='topNav'>
            <Image alt={'logo'} src={'/images/logoabol.jpg'} width={150} height={80} />
          <nav>
            <ul>
              <li>
              <Link href='/' passHref={ true }>Home</Link>
              </li>
              <li>
              <Link href='/events' passHref={ true }>events</Link>
              </li>
              <li>
              <Link href='/about-us' passHref={ true }>About us</Link>

              </li>
            </ul>
        </nav>
          </div>
          <h1>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</h1>
      </header>
    )
}