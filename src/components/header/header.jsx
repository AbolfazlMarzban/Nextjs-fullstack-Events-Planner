import Link from "next/link"

export const Header = () => {
    return(
        <header>
        <nav>
          <img />
          <Link href='/' passHref={ true }>Home</Link>
          <Link href='/events' passHref={ true }>events</Link>
          <Link href='/about-us' passHref={ true }>About us</Link>
        </nav>
      </header>
    )
}