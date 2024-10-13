import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <div>
        <strong>Login</strong>
      </div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/portfolio">Портфоліо</Link>
        <Link href="/consultation">Консультації</Link>
        <Link href="/manipulation">Манізуляції</Link>
        <Link href="/operation">Оперції</Link>
      </nav>
    </header>
  )
}

export default Header
