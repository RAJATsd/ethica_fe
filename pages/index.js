import HomeContainer from "@/containers/home";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sentiment Analysis</title>
        <meta name="description" content="Movie review sentiment analysis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer />
    </>
  );
}
