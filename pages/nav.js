import Head from "next/head";
import Link from "next/link";
// import styles from "../styles/global.css";
// import useDarkMode from "./useDarkMode";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function MainNav() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="border-b">
      <Head>
        <title>HopLabs: Mentorship and Resources</title>
        <meta name="description" content="HopLabs" />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/" passHref>
                  <span className="text-4xl font-serif cursor-pointer hover:scale-110 motion-reduce:transform-none">
                    <FontAwesomeIcon icon={faHome} />
                  </span>
                </Link>
                <Link href="/about" passHref>
                  <span className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-full transform hover:scale-110 motion-reduce:transform-none">
                    About
                  </span>
                </Link>
                <Link href="/join" passHref>
                  <span className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transform hover:scale-110 motion-reduce:transform-none">
                    Join
                  </span>
                </Link>
                <button
                  aria-label="Toggle Dark Mode"
                  type="button"
                  className="p-3 h-12 w-12 order-2 md:order-3 absolute left-2/4 transform -translate-x-2/4 lg:transform-none md:relative md:left-0"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      className="h-6 w-6 text-gray-800 dark:text-gray-200"
                    >
                      {theme === "dark" ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      )}
                    </svg>
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 text-center">
          <Link href="/" passHref>
            <span className="cursor-pointer text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              <FontAwesomeIcon icon={faHome} />
            </span>
          </Link>

          <Link href="/about" passHref>
            <span className="cursor-pointer text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              About
            </span>
          </Link>
          <Link href="/about" passHref>
            <span className="cursor-pointer text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Join
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
