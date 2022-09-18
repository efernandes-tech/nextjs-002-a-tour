import { useRouter } from 'next/router';
import Link from 'next/link'

export default function Post() {
  const router = useRouter();

  console.log(router);

  return (
    <div>
      SLUG do Post: {router.query.slug}

      <ul>
        <li>
          <Link href="/">
            <a>Ir para Home</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
