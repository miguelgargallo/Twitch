/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Menu } from "ui";
import { TitlePylar } from "ui";
import { Footer } from "ui";
import { motion } from "framer-motion";

export default function Home() {
  console.log("✅ Pagina de Que es Pylar de Pylar AI, una Startup de Miguel Gargallo");
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-black">
      <Head>
        <title>Pylar AI by Pencil</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Menu />
      <main>
        <TitlePylar />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="text-l m-2 px-4 text-white"
        >
          Pylar podría significar Prompt Yielding Lean and Agile Rapidness
          cuando se utiliza para definir la ingeniería rápida. Esto podría
          referirse al uso de métodos de ingeniería rápida para producir
          resultados rápidamente y eficientemente que generen beneficios o
          ventajas, y que se basen en principios lean y ágiles que se centran en
          entregar valor rápidamente e iterativamente. Al combinar estas
          capacidades, los métodos de ingeniería rápida de Pylar pueden ayudar a
          las organizaciones a responder rápidamente y eficazmente a cambios en
          las necesidades o oportunidades, y producir resultados valiosos y
          beneficiosos.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
          className="text-l m-2 px-4 text-white"
        >
          En el mundo de hoy, que avanza a un ritmo acelerado, las
          organizaciones están bajo constante presión para innovar y mantenerse
          por delante de la competencia. Una forma en que muchas organizaciones
          están enfrentando este desafío es abrazando el poder de la
          inteligencia artificial (IA) y el aprendizaje automático (ML). Estas
          tecnologías tienen el potencial de revolucionar muchos campos
          diferentes, desde la atención médica y el transporte hasta las
          finanzas y el marketing.{" "}
        </motion.p>{" "}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="text-l m-2 px-4 text-white"
        >
          Uno de los proyectos más emocionantes e innovadores de IA y ML en
          curso es Pylar. Este proyecto, que significa &quot;Prompt Yielding Lean and
          Agile Rapidness&quot;, se centra en el uso de tecnologías de IA y ML para
          producir resultados rápidamente y eficientemente que generen
          beneficios o ventajas.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4 }}
          className="text-l m-2 px-4 text-white"
        >
          Una de las características clave del proyecto Pylar es su enfoque en
          los principios lean y ágiles. Estos principios, que se utilizan
          comúnmente en el desarrollo de software, están diseñados para ayudar a
          las organizaciones a entregar valor rápidamente e iterativamente. Al
          aplicar estos principios a las tecnologías de IA y ML, el proyecto
          Pylar puede ayudar a las organizaciones a responder rápidamente y
          eficazmente a cambios en las necesidades o oportunidades, y producir
          resultados valiosos y beneficiosos.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
          className="text-l m-2 px-4 text-white"
        >
          Además de su enfoque en los principios lean y ágiles, el proyecto
          Pylar también es conocido por su investigación y innovación de
          vanguardia. El equipo del proyecto está constantemente explorando
          nuevas técnicas y tecnologías, y siempre busca formas de ampliar los
          límites de lo que es posible con IA y ML.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
          className="text-l m-2 px-4 text-white"
        >
          Un ejemplo del trabajo innovador del proyecto Pylar es su uso de
          algoritmos de aprendizaje profundo. Estos algoritmos, que se basan en
          la estructura y función del cerebro humano, son capaces de aprender y
          adaptarse a nuevos datos y entornos de maneras que los algoritmos
          tradicionales no pueden. Al utilizar algoritmos de aprendizaje
          profundo, el proyecto Pylar puede producir resultados que son más
          precisos, más eficientes y más flexibles que los producidos por otras
          tecnologías de IA y ML.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.0 }}
          className="text-l m-2 px-4 text-white"
        >
          En general, el proyecto Pylar es un proyecto de IA y ML de vanguardia
          e innovador que ayuda a las organizaciones a producir resultados
          rápida y eficientemente que son valiosos y beneficiosos. Ya seas un
          líder empresarial, un investigador o simplemente alguien interesado en
          el futuro de la IA y el ML, el proyecto Pylar vale la pena seguir de
          cerca. Así que, unámonos y formemos parte de este proyecto
          revolucionario y presenciemos juntos el futuro de la IA y el ML.{" "}
        </motion.p>
      </main>
      <Footer />
    </div>
  );
}
