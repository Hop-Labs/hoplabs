// import styles from "../styles/global.css";
import MainNav from "./nav";
import Footer from "./footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <MainNav />
      <main className="text-center items-center py-5">
        <h1 className="text-3xl font-bold font-serif"> Hop Labs </h1>
        <p className="text-xl pt-5 md:px-96">
          Hop Labs is a Computer Science - Oriented hub. We provide specific
          technical support such as software expertise to more creative support,
          such as 3D modeling and animations. Our hope is that this hub will
          promote multidisciplinary collaborations between students and schools
          in line with Johns Hopkins University&rsquo;s goals.
        </p>

        <h1 className="text-3xl font-bold font-serif py-5">Current Projects</h1>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 px-10">
          <a target="_blank" href="https://semester.ly/" rel="noreferrer">
            <div className="col-span-1 rounded-xl border-2 border-black dark:border-white text-center transform hover:scale-105 motion-reduce:transform-none">
              <h1 className="text-3xl font-semibold flex justify-center pb-4 text-gray-700 dark:text-white">
                Semester.ly
              </h1>
              <Image
                src="/files/semly-final.png"
                alt="Semester.ly"
                width={400}
                height={240}
              />
            </div>
          </a>
          <a target="_blank" href="https://ucredit.me/" rel="noreferrer">
            <div className="col-span-1 rounded-xl border-2 border-black dark:border-white text-center transform hover:scale-105 motion-reduce:transform-none">
              <h1 className="text-3xl font-semibold flex justify-center pb-4 text-gray-700 dark:text-white">
                uCredit
              </h1>
              <Image
                src="/files/ucredit-logo.png"
                alt="uCredit"
                width={250}
                height={240}
              />
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.notion.so/Quest2Learn-eb16a5657d9d41ff93c974c241db6ff8"
            rel="noreferrer"
          >
            <div className="col-span-1 rounded-xl border-2 border-black dark:border-white text-center transform hover:scale-105 motion-reduce:transform-none">
              <h1 className="text-3xl font-semibold flex justify-center pb-4 text-gray-700 dark:text-white">
                Quest2Learn
              </h1>
              <Image
                src="/files/Q2L_profile.jpeg"
                alt="Quest2Learn"
                width={250}
                height={240}
              />
            </div>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
