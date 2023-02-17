import Head from "next/head";
import HomePage from "../components/templates/HomePage/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabriel França</title>
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  );
}
