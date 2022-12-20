/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Menu } from "ui";
import { TitlePylar } from "ui";
import { Footer } from "ui";
import { Letter } from "ui";
const ELEMENTS = 12;

export default function Home() {
  console.log("✅ Pagina de Inversores de Pylar AI, una Startup de Miguel Gargallo");
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-black">
      <Head>
        <title>Pylar AI by Pencil</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Menu />
      <main>
        <TitlePylar />
        <div>
          <Letter />
        </div>
      </main>
      <Footer />
    </div>
  );
}
