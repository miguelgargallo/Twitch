import Head from "next/head";
import { Menu } from "ui";

export default function Home() {
  return (
    <div className="flex items-center justify-center py-2">
      <Head>
        <title>Twitch - Mi pagina web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <Menu />
      </main>
    </div>
  );
}
