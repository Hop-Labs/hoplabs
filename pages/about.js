import Image from "next/image";
import MainNav from "./nav";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div>
      <MainNav />
      <div>
        <h1 className="text-3xl font-serif flex justify-center pt-2">
          About Me
        </h1>
      </div>
      <div className="grid grid-cols-3 pt-10 justify-items-center">
        <Image
          className="rounded-full object-scale-down h-60 w-60"
          src="/SC.jpg"
          alt="1"
          width={72}
          height={16}
        />
        <h1 className="text-xl font-semibold">Placeholder</h1>
        <h1 className="text-3xl font-semibold">
          <a
            target="_blank"
            href="https://github.com/Boccca2014"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="px-2"
            target="_blank"
            href="https://sebastiancabrejos.com/"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLink} />
          </a>
          <a
            className="px-2"
            target="_blank"
            href="https://www.linkedin.com/in/sebastian-c2022/"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </h1>
       
      </div>
      <Footer />
    </div>
  );
}
