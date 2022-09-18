import Link from "next/link"

function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>

      <img src="/assets/images/avatar.png" alt="" />

      <ul>
        <li>
          <Link href="/sobre">
            <a>Ir para Sobre</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
