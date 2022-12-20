/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Menu } from "ui";
import { TitlePylar } from "ui";
import { Footer } from "ui";
import { motion } from "framer-motion";
import { generateJSXMeshGradient } from "meshgrad";
const ELEMENTS = 12;

export default function Home() {
  console.log("✅ Pagina de principal en spanish de Pylar AI, una Startup de Miguel Gargallo");
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
            <div className="m-3 flex flex-col items-center justify-center">
              <h2 className="py-4 text-center text-2xl font-bold text-white">
                Discover Black Holes through Pylar&trade; AI prompts on
                StableDiffusion
              </h2>
              <button
                className="m-2 rounded-full py-3 px-4 text-xs font-bold text-black shadow-md hover:shadow-xl md:block"
                style={generateJSXMeshGradient(ELEMENTS)}
              >
                <a href="/black-holes">Discover Black Holes</a>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center py-8">
              <p className="text-center text-2xl font-bold text-white">
                Results from version 1.4, vs 1.5 vs 2.0 + Pylar&trade; AI prompts
              </p>
            </div>
          </motion.div>
        </div>
        <div className="pylarDiv">
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/miguelgargallo/Next13-Gallery-Image-Turbo/main/Data.pylar/Images/Pylar-v1.0/A_photography_of_the_earth__from_the_moon_on_a_fis_AAAGOLpA_RealESRGAN_x4plus.jpeg"
            alt="Earth by Stable Diffusion 1.4 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/miguelgargallo/Next13-Gallery-Image-Turbo/main/Data.pylar/Images/Pylar-v1.1/A_photography_of_the_earth__from_the_moon_on_a_fis_AAAGOLjw_RealESRGAN_x4plus.jpeg"
            alt="Earth by Stable Diffusion 1.5 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120422/00005-1833717168-Earth%20seen%20fr.png"
            alt="Earth by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
