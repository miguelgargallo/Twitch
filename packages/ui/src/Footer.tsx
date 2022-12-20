import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black py-8 text-center text-white">
     <div className="flex columns-2 text-white">
          <div className="m-2 py-8 px-8">
            <a href="https://www.linkedin.com/in/miguelgargallo/" target={"_blank"} rel="noreferrer">
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={50}
                height={50}
              />
            </a>
          </div>
          <div className="m-2 py-8 px-8">
            <a href="https://www.twitter.com/miguelgargallo/" target={"_blank"} rel="noreferrer">
              <Image
                src="/twitter.png"
                alt="Twitter"
                width={50}
                height={50}
              />
            </a>
          </div>
          <div className="m-2 py-8 px-8">
            <a href="https://www.instagram.com/miguelgargallo.es/" target={"_blank"} rel="noreferrer">
              <Image
                src="/linkedin.png"
                alt="Instagram"
                width={50}
                height={50}
              />
            </a>
          </div>
          <div className="m-2 py-8 px-8">
            <a href="https://www.twitch.tv/miguelgargallo/" target={"_blank"} rel="noreferrer">
              <Image
                src="/linkedin.png"
                alt="Twitch"
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
    </footer>
  );
};