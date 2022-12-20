/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Menu } from "ui";
import { TitlePylar } from "ui";
import { Footer } from "ui";
import { motion } from "framer-motion";

export default function Home() {
  console.log("✅ Subject by Pylar AI, a Miguel Gargallo Startup");
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="flex flex-col items-center justify-center">
              <button className="m-2 justify-center rounded-2xl bg-blue-600 py-3 px-4 text-xs font-bold text-white shadow-md hover:shadow-xl md:block">
                <a className="text-center" href="/">
                  Back to Home
                </a>
              </button>
              <p className="py-8 text-center text-2xl font-bold text-white">
                A trip from the first Pylar&trade; AI Prompt, to the final
                result.
              </p>
              <div className="pylarDiv">
                <motion.p
                  className="px-2 text-center text-2xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                >
                  From this
                </motion.p>
                <motion.p
                  className="px-2 text-center text-2xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  To this
                </motion.p>
              </div>
              <div className="pylarDiv">
                <motion.img
                  className="pylarDimension"
                  src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/date/subject/01.png"
                  alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                />
                <motion.img
                  className="pylarDimension"
                  src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/date/subject/14.png"
                  alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center"></div>
          </motion.div>
        </div>
        <div className="pylarDiv py-6">
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/date/subject/01.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/date/subject/02.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/date/subject/03.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/date/subject/04.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/date/subject/05.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/date/subject/06.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/date/subject/07.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/date/subject/08.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/date/subject/09.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.0 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/date/subject/10.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/date/subject/11.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.4 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/date/subject/12.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.6 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/date/subject/13.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.8 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/date/subject/14.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.0 }}
          />
          <p className="py-8 text-center text-2xl font-bold text-white">
            2022 © Pylar&trade; AI by Superdatas, All Rights Reserved
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
