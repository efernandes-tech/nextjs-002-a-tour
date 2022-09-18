import { useRouter } from 'next/router';
import Link from 'next/link'

export default function ProdutoPage() {
  const router = useRouter();

  return (
    <div>
      ID do Produto: {router.query.id}

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
