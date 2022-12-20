import Head from "next/head";
import { Menu } from "ui";
import { Footer } from "ui";

export default function Home() {
  return (
    <div className="flex items-center justify-center py-2">
      <Head>
        <title>Miguel Gargallo - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-2">
        <div
          className="hidden sm:block m-2 py-8 px-8"
        >
          <Menu />
          <div className="flex flex-auto m-2">
            <p className="px-1 m-1 rounded-tl-lg rounded-bl-lg box-decoration-slice bg-gradient-to-r from-blue-500 to-blue-500 text-white">
              Home
            </p>
            <p className="px-1 m-1 rounded-tr-lg rounded-br-lg box-decoration-slice bg-gradient-to-r from-green-500 to-green-500 text-white">
              About me
            </p>
          </div>
        </div>
        <div className="m-2 py-8 px-8">
          <h2 className="text-white text-xl">
            Hola mundo, soy Miguel Gargallo, desarrollador de software.
          </h2>
        </div>

        <div className="flex columns-2 text-white">
          <div className="m-2 py-8 px-8">
            <h3 className="text-xl">
              Educación y experiencia
            </h3>
            <p
              className="text-sm py-2"
            >
              Soy un desarrollador de software con más de 10 años de experiencia
              en el sector. He trabajado en empresas de diferentes sectores como
              la banca, la educación, la salud, la logística, la industria y la
              administración pública.
            </p>
            <p
              className="text-sm py-2"
            >
              He trabajado en proyectos de desarrollo de software desde el
              análisis de requisitos hasta la puesta en producción, pasando por
              el diseño, la implementación y la documentación.
            </p>
          </div>
          <div className="m-2 py-8 px-8">
            <h3 className="text-xl">
              Tecnologías
            </h3>
            <p
              className="text-sm py-2"
            >
              Soy un desarrollador de software con más de 10 años de experiencia
              en el sector. He trabajado en empresas de diferentes sectores como
              la banca, la educación, la salud, la logística, la industria y la
              administración pública.
            </p>
            <p
              className="text-sm py-2"
            >
              He trabajado en proyectos de desarrollo de software desde el
              análisis de requisitos hasta la puesta en producción, pasando por
              el diseño, la implementación y la documentación.
            </p>
          </div>
        </div>
        <div
          className="m-2 py-8 px-8"
        >
          <button
            className="pylarButtonEmailStyle"
          >
            <a href="mailto:it@pylar.org" target={"_blank"} rel="noreferrer">
              Mail now
            </a>
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

