import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default function Home() {
  return (
    <div>
      Sobre!
    </div>
  )
}
