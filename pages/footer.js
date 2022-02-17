import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <nav className="border-t">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  target="_blank"
                  className="cursor-pointer ml-2 font-bold py-2 px-4 rounded-full border-2 border-black transform hover:scale-110 motion-reduce:transform-none"
                  href="https://github.com/Hop-Labs"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} /> Github{" "}
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
                <a
                  target="_blank"
                  className="cursor-pointer ml-2 font-bold py-2 px-4 rounded-full text-white bg-blue-500 hover:bg-blue-600 transform hover:scale-110 motion-reduce:transform-none"
                  href=""
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn{" "}
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            target="_blank"
            className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            href="https://github.com/Hop-Labs"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> Github{" "}
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
          <a
            target="_blank"
            className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            href=""
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn{" "}
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>
      </div>
    </nav>
  );
}
