import Image from "next/image";
import MainNav from "./nav";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div>
      <MainNav />
      <h1 className="text-3xl font-serif flex justify-center pt-5">
        How It Started
      </h1>
      <div>
        <p className="text-xl pt-5 md:px-52 py-5">
          We have identified a need for students to take project-based Computer
          Science courses like Full Stack JavaScript and Object-Oriented
          Software Engineering (OOSE) to solve real-world problems. At the same
          time, many faculty and students come up with great ideas but are
          unable to build and share them due to the lack of expertise. This
          could range from building a website to increase exposure for research
          to developing a niche backend software like SSO login with the Johns
          Hopkins platform. Many of these students or faculty currently rely on
          reaching out to their limited contacts, and this has served as an
          obstacle to many potential ventures. Therefore, we would like to
          address this supply and demand of student talent with technical
          expertise by setting up a hub where students and faculty can come and
          find the talent they need. We believe that our proposed solution will
          help to improve project-based learning courses in the CS Department
          while fostering more multi-disciplinary collaboration within the JHU
          community.
        </p>
        <p className="text-xl pt-5 md:px-52 py-5 text-center font-mono">
          More Information can be found{" "}
          <a
            target="_blank"
            href="https://cutt.ly/Hoplabs"
            className="font-medium text-blue-400"
            rel="noreferrer"
          >
            here
          </a>
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-serif flex justify-center py-5">
          Meet the Team
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-4 px-52 pb-5">
        <div className="flex flex-col justify-center items-center">
          <Image
            className="rounded-full"
            src="/profiles/chinatyu.jpeg"
            alt="1"
            width={150}
            height={150}
          />
          <h1 className="text-xl font-semibold">Chinat Yu</h1>
          <h1 className="text-base">Founder & Lead</h1>
          <h1 className="text-3xl font-semibold">
            <a
              className="px-2"
              target="_blank"
              href="https://www.linkedin.com/in/chinat-yu/"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            className="rounded-full"
            src="/profiles/placeholder-profile.png"
            alt="1"
            width={150}
            height={150}
          />
          <h1 className="text-xl font-semibold">Dr. Ali Madooei</h1>
          <h1 className="text-base">Advisor</h1>
          <h1 className="text-3xl font-semibold">
            <a
              className="px-2"
              target="_blank"
              href="https://www.linkedin.com/in/alimadooei/"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            className="rounded-full"
            src="/profiles/SC.jpg"
            alt="1"
            width={150}
            height={150}
          />
          <h1 className="text-xl font-semibold">Sebastian Cabrejos</h1>
          <h1 className="text-base">Founding Member</h1>
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
        <div className="flex flex-col justify-center items-center">
          <Image
            className="rounded-full"
            src="/profiles/mattliu.jpeg"
            alt="1"
            width={150}
            height={150}
          />
          <h1 className="text-xl font-semibold">Matthew Liu</h1>
          <h1 className="text-base">Founding Member</h1>
          <h1 className="text-3xl font-semibold">
            <a
              target="_blank"
              href="https://github.com/MattLiu-mygit"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="px-2"
              target="_blank"
              href="https://www.linkedin.com/in/matthew-liu-75a09b137/"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            className="rounded-full"
            src="/profiles/placeholder-profile.png"
            alt="1"
            width={150}
            height={150}
          />
          <h1 className="text-xl font-semibold">Dr. Anton Dahbura</h1>
          <h1 className="text-base">Advisor</h1>
          <h1 className="text-3xl font-semibold">
            <a
              className="px-2"
              target="_blank"
              href="https://engineering.jhu.edu/faculty/anton-dahbura/"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLink} />
            </a>
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
