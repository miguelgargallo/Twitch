import Head from "next/head";
import { Menu } from "ui";

export default function Home() {
  return (
    <div className="flex items-center justify-center py-2">
      <Head>
        <title>Miguel Gargallo - Desarrollo web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-2">
        <div
          className="hidden sm:block m-2 py-8 px-8"
        >
          <Menu />
          <div className="flex flex-auto m-2">
            <p className="px-1 m-1 box-decoration-slice bg-gradient-to-r from-blue-500 to-blue-500 text-white">
                Home
            </p>
        </div>
        </div>
        <div className="m-2 py-8 px-8">
          <h2 className="text-white text-xl">
            Hola mundo, soy Miguel Gargallo, desarrollador de software.
          </h2>
        </div>
        <div className="flex columns-2 text-white">
          <div className="k m-2 py-8 px-8">
            <h3 className="text-xl">
              Educación y experiencia
            </h3>
            <p
              className="text-sm py-2"
            >
              Soy un desarrollador de software con más de 10 años de experiencia
              en el sector.
            </p>
          </div>
          <div className="p-2">
            <h3 className="text-xl">
              Educación y experiencia
            </h3>
            <p
              className="text-sm py-2"
            >
              Soy un desarrollador de software con más de 10 años de experiencia
              en el sector.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
