/*
  /posts/[slug]/index.js
*/

import Link from "next/link";
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();

  return (
    <div>
      SLUG do post atual: {router.query.slug}
      <ul>
        <li>
          <Link href="/">
            <a>Ir para a home</a>
          </Link>
        </li>
        <li>
          <Link href={`${router.query.slug}/comentarios`}>
            <a>Ir para comentarios</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
