import type { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
    revalidate: 60
  };
};

export default function Home() {
  return (
    <div>
      Nada por aqui
    </div>
  )
}
